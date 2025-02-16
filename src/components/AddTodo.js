"use client";
import Link from "next/link";
import styles from "../styles/AddEdit.module.css";
import { useTodos } from "@/context/TodoContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toastHandler } from "../app/lib/notifSwal";

function AddTodo() {
	const { addTodo, loading } = useTodos();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [endDate, setEndDate] = useState("");
	const router = useRouter();
	const handleAddTodo = async (e) => {
		e.preventDefault();

		if (title.trim() !== "" && description.trim() !== "" && endDate.trim() !== "") {
			const newTodo = {
				title,
				description,
				endDate,
			};

			await addTodo(newTodo);

			setTitle("");
			setDescription("");
			setEndDate("");

			const Toast = toastHandler(2000, true);

			Toast.fire({
				icon: "success",
				title: "Greate! todo added successfully !",
			}).then((resolve) => {
				if (resolve) {
					router.push("/todos");
				}
			});
		}
	};
	return (
		<div className={`${styles.inputContainer} flex justify-center items-center px-3`}>
			<form onSubmit={handleAddTodo}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						placeholder="Enter task title..."
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<input
						placeholder="Enter task description..."
						id="description"
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>

				<div>
					<label htmlFor="date">End date</label>
					<input
						type="date"
						id="date"
						placeholder="Select a date"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
						required
					/>
				</div>

				<div
					className={`${styles.BtnWrapper} flex justify-around 
         md:justify-center md:gap-x-20 items-center font-PlaypenSans mt-8`}>
					<button type="submit" className="bg-sky-500">
						Add
					</button>

					<Link href={"/todos"}>
						<button type="button" className="bg-red-600">Cancel</button>
					</Link>
				</div>
			</form>
		</div>
	);
}

export default AddTodo;
