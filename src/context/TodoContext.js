"use client";
import React, { createContext, useState, useEffect } from "react";

//Create the context
export const todoContext = createContext();

//Create a provider component
const TodoProvider = ({ children, initialTodos = [] }) => {
	const [todos, setTodos] = useState(initialTodos);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Side effect for fetching todos
	useEffect(() => {
		if (initialTodos.length === 0) {
			//fetch function
			const fetchTodos = async () => {
				setLoading(true);
				try {
					const res = await fetch("/api/todos");
					if (res.status !== 200) {
						throw new Error("Network response was not ok");
					}
					const data = await res.json();
					setTodos(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setLoading(false);
				}
			};

			fetchTodos();
		} else {
			setTodos(initialTodos);
		}
	}, [initialTodos]);

	// Handle adding a new todo
	const addTodo = async (newTodo) => {
		const res = await fetch("/api/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTodo),
		});
		if (!res.ok) {
			const errData = await res.json();
			console.error("Failed to add todo:", errData.message || res.statusText);
			return;
		}

		const data = await res.json();
		if (data) {
			setTodos((prevTodos) => (Array.isArray(prevTodos) ? [...prevTodos, data] : [data]));
		}
	};

	// Handle editing a todo
	const editTodo = async (editedTodo, todoId) => {
		const res = await fetch(`/api/todos/${todoId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editedTodo),
		});

		if (!res.ok) {
			const errData = await res.json();
			console.error("Failed to edit todo:", errData.message || res.statusText);
			return;
		}
		const data = await res.json();
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo._id === todoId ? { ...todo, ...data } : todo))
		);
	};

   // Handle deleting a todo
   const deleteTodo = async (todoId) => {
      const res = await fetch(`/api/todos/${todoId}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      });

      if (!res.ok) {
         const errData = await res.json();
			console.error("Failed to delete todo:", errData.message || res.statusText);
			return;
      }

      const data = await res.json();

      setTodos((prevTodos) => prevTodos.filter((todo) => (todo._id !== todoId )));
   }

   // Handle done or undone a todo
   const doneTodo = async (isComplete ,todoId) => {
      const res = await fetch(`/api/todos/${todoId}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ isComplete: !isComplete })
      });

		if (!res.ok) {
         const errData = await res.json();
			console.error("Failed to change todo state:", errData.message || res.statusText);
			return;
      }

		const data = await res.json();
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo._id === todoId ? { ...todo, ...data } : todo))
		);
   }

	return (
		<todoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo, doneTodo, loading, error }}>
			{children}
		</todoContext.Provider>
	);
};

export const useTodos = () => React.useContext(todoContext);

export default TodoProvider;
