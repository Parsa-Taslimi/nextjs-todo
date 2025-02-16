"use client";
import styles from "../styles/Todos.module.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useTodos } from "@/context/TodoContext";

const Todo = ({ todo, isEditing }) => {
	
	const [isComplete, setIsComplete] = useState(todo.isComplete);
	const router = useRouter();
	const { doneTodo } = useTodos();

	useEffect(() => {  
		// Update local state to match the todo prop when it changes  
		setIsComplete(todo.isComplete);  
	}, [todo.isComplete]);
	

	const editHandler = () => {
		Swal.fire({
			title: `Are you sure for editing ${todo.title} ?`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, i wanna edit todo!",
		}).then((result) => {
			if (result.isConfirmed) {
				router.push(`/todos/${todo._id}`)
			}
		});
	};

	const handleCheckboxChange = () => {  
		setIsComplete(!isComplete);
		doneTodo(isComplete, todo._id);
	};
	
	return (
		<li className="flex justify-between items-center bg-gray-200 rounded-sm px-0.5 overflow-hidden relative">
			<div className={`${styles.checkBoxWrapper}`}>
				<input id={todo._id} type="checkbox" checked={isComplete} onChange={handleCheckboxChange} name="r" value="2" />
				<label className="" htmlFor={todo._id}>
					{todo.title}
				</label>
			</div>
			<div className={`${styles.dateAndEdit} ${isEditing ? styles.visible : styles.hidden}`}>
				<span className={`${styles.date}`}>{new Date(todo.endDate).toDateString()}</span>
				<button
					type="button"
					onClick={editHandler}
					className={`${styles.editWrapper}${isEditing ? styles.visible : styles.hidden} px-1`}>
					<EditNoteIcon className="text-sky-600 cursor-pointer" fontSize="medium" />
				</button>
			</div>
		</li>
	);
};

export default Todo;
