"use client";
import styles from "../styles/Todos.module.css";
import Image from "next/image";
import noTodo from "../../public/images/no-task.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Suspense, useEffect, useState } from "react";
import { useTodos } from "@/context/TodoContext";
import fetchTodos from "@/app/lib/fetchTodos";
import Todo from "./Todo";
import Loading from "@/app/todos/loading";

const Todolist = () => {
	const { todos } = useTodos();
	const [isEditing, setIsEditing] = useState(false);
	const [visibleCount, setVisibleCount] = useState(7);
	const [allTodos, setAllTodos] = useState([]);
	useEffect(() => {
		const fetchdata = async () => {
			const refreshTodos = await fetchTodos();
			setAllTodos(refreshTodos);
		};
		fetchdata();
	}, [todos]);

	const toggleEdit = () => {
		setIsEditing(!isEditing);
	};

	const loadMoreTodos = () => {
		setVisibleCount((prev) => prev + 5);
	};
	return (
		<>
			{allTodos.length > 0 ? (
				<>
					<div className="flex flex-col justify-between px-6 py-10 z-0">
						<div className="flex justify-between items-center border-dotted border-gray-800 border-b-2 py-1.5 px-2 md:gap-40">
							<h3 className="text-lg font-PlaypenSans z-10">{allTodos.length} Todos</h3>
							<button
								onClick={toggleEdit}
								className={`${styles.editBtn} font-PlaypenSans font-semibold text-sky-600 cursor-pointer`}>
								Edit
							</button>
						</div>
						<div className={`font-PlaypenSans flex flex-col py-2`}>
							<div className="flex justify-between items-center gap-3 md:gap-0 py-2 px-1.5 md:px-2  bg-gray-300 rounded-sm">
								<div className="flex gap-2.5 items-center">
									<div className={`${styles.emptyCheckBox} flex-none`}></div>
									<h3 className="flex-initial w-72">Task</h3>
								</div>
								<h3 className="flex-initial w-16 md:w-[60px] xs:w-[120px]">Date</h3>
							</div>

							<Suspense fallback={<Loading />}>
								<ul className={`flex flex-col gap-1 py-2 mb-16 overflow-y-auto`}>
									{allTodos.slice(0, visibleCount).map((todo, index) => (
										<Todo key={`${todo._id}+${index}`} todo={todo} isEditing={isEditing} />
									))}
								</ul>
							</Suspense>
						</div>
					</div>

					{/* Load more button */}
					
						<div
							className={`${styles.loadMoreBtnContainer} flex justify-center items-center fixed right-0 left-0 bottom-[74px] h-11 z-40 bg-slate-100`}>
							<button
							type="button"
							onClick={loadMoreTodos}
								className={`${styles.loadMoreBtn} font-PlaypenSans font-semibold w-32 h-11 py-1.5 ml-3 rounded-3xl cursor-pointer hover:text-gray-50 mb-28
								${visibleCount < allTodos.length ? styles.visibleLoad : ""}
								`}>
								Load more...
							</button>
						</div>
					
				</>
			) : (
				<div className={`flex flex-col justify-center items-center mt-32 gap-5`}>
					<Image className="w-16 h-16 ml-6" src={noTodo} alt="noTodo-icon"></Image>
					<h1 className="font-Nosifer text-2xl text-sky-800">No todos yet</h1>
					<h5 className="font-IndieFlower text-2xl text-sky-600">
						Lets click on {<AddCircleOutlineIcon fontSize="medium" />} and write a new task !
					</h5>
				</div>
			)}
		</>
	);
};

export default Todolist;
