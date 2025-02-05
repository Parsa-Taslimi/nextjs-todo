import Link from "next/link";
import styles from "../styles/Todos.module.css";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Todo = ({ isEditing }) => {
	return (
		<li className="flex justify-between items-center bg-gray-200 rounded-sm px-0.5 overflow-hidden relative">
			<div className={`${styles.checkBoxWrapper}`}>
				<input id="02-11" type="checkbox" name="r" value="2" />
				<label className="" htmlFor="02-11">
					To-do something
				</label>
			</div>
			<div className={`${styles.dateAndEdit} ${isEditing ? styles.visible : styles.hidden}`}>
				<span className={`${styles.date}`}>9 sep 2025</span>
				<Link href={"/edit"} className={`${styles.editWrapper}${isEditing ? styles.visible : styles.hidden} px-1`}>
					<EditNoteIcon className="text-sky-600 cursor-pointer" fontSize="medium" />
				</Link>
			</div>
		</li>
	);
};

export default Todo;
