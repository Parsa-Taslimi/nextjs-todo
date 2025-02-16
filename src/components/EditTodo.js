"use client";
import styles from "../styles/AddEdit.module.css";
import Swal from "sweetalert2";
import { useTodos } from "@/context/TodoContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toastHandler } from "../app/lib/notifSwal";

function EditTodo({ id }) {
	const { todos, editTodo, deleteTodo } = useTodos();
	const todo = todos.find((todo) => todo._id === id);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (todo) {
			setTitle(todo.title);
			setDescription(todo.description);
			setEndDate(todo.endDate.split("T")[0]);
		}
	}, [todo])

	const editHandler = async (e) => {
		e.preventDefault();
		if (title.trim() !== "" || description.trim() !== "" || endDate !== "") {
			const editedTodo = {
				title,
				description,
				endDate,
			};

			Swal.fire({
				title: "Are you sure?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, apply changes!",
			})
				.then(async (result) => {
					if (result.isConfirmed) {
						await editTodo(editedTodo, id);

						const Toast = toastHandler(5000, true);
						Toast.fire({
							icon: "success",
							title: "Todo edited successfully !",
						});
						router.push("/todos");
					}
				});
				
		}
	};

	const deleteHandler = async (e) => {
		e.preventDefault();

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		})
			.then(async (result) => {
				if (result.isConfirmed) {
					await deleteTodo(id);

					const Toast = toastHandler(5000, true);
					Toast.fire({
						icon: "success",
						title: "Todo deleted successfully !",
					});
					router.push("/todos");
				}
			});
	}

	return (
		<div className={`${styles.inputContainer} flex justify-center items-center px-3`}>
			<form>
				<div>
					<label htmlFor="title">Title</label>
					<input
						placeholder={title}
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<input
						placeholder={description}
						id="description"
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="date">End date</label>
					<input
						type="date"
						id="date"
						placeholder={endDate}
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
					/>
				</div>

				<div
					className={`${styles.BtnWrapper} flex justify-around 
                        md:justify-center md:gap-x-20 items-center font-PlaypenSans mt-8`}>
					<button onClick={editHandler} type="submit" className="bg-sky-500">
						Done !
					</button>

					<button onClick={deleteHandler} className="bg-red-600">Delete</button>
				</div>
			</form>
		</div>
	);
}

export default EditTodo;
