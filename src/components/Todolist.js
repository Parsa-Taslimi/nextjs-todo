"use client"
import styles from "../styles/Todos.module.css";
import Image from "next/image";
import Todo from "./Todo";
import noTodo from "../../public/images/no-task.png";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";


const Todolist = () => {

	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => {  
		setIsEditing(!isEditing);  
	};
	return (
		<>
			{/* <div className={`flex flex-col justify-center items-center mt-32 gap-5`}>
				<Image className="w-16 h-16 ml-6" src={noTodo} alt="noTodo-icon"></Image>
				<h1 className="font-Nosifer text-2xl text-sky-800">No todos yet</h1>
				<h5 className="font-IndieFlower text-2xl text-sky-600">
					Lets click on {<AddCircleOutlineIcon fontSize="medium"/>} and write a new task !
				</h5>
			</div> */}
			<div className="flex flex-col justify-between px-6 py-10 z-0 overflow-hidden">
				<div className="flex justify-between items-center border-dotted border-gray-800 border-b-2 py-1.5 px-2  md:gap-40">
					<h3 className="text-xl font-IndieFlower z-10">8 Todos</h3>
					<button
						onClick={toggleEdit}
						className={`${styles.viewAllBtn} font-PlaypenSans font-semibold text-sky-600 cursor-pointer`}>
						Edit
					</button>
				</div>
				<div className="font-PlaypenSans flex flex-col py-2 h-auto">
					<div className="flex justify-between items-center gap-3 md:gap-0 py-2 px-1.5 md:px-2  bg-gray-300 rounded-sm">
						<div className="flex gap-2.5 items-center">
							<div className={`${styles.emptyCheckBox} flex-none`}></div>
							<h3 className="flex-initial w-72">Task</h3>
						</div>
						<h3 className="flex-initial w-16 md:w-[60px] xs:w-[120px]">Date</h3>
					</div>
					<ul className="flex flex-col gap-1 py-2">
					<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
						<Todo isEditing={isEditing}/>
					</ul>
				</div>
			</div>

			<div className={`${styles.loadMoreBtnContainer} flex justify-center items-center fixed right-0 left-0 bottom-[74px] h-40  z-0 bg-slate-100`}>
				<button
					className={`${styles.loadMoreBtn} font-PlaypenSans font-semibold  w-32 h-11 py-1.5 rounded-3xl cursor-pointer hover:text-gray-50`}>
					Load more...
				</button>
			</div>
		</>
	);
};

export default Todolist;
