import Image from "next/image";
import mainLogo from "../../../public/svg/reshot-icon-to-do-list-and-calendar.svg";
import styles from "../../styles/AddEdit.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import AddTodo from "@/components/AddTodo";
function AddScreen() {
	
	return (
		<div className="w-full">
			<div className="h-16 md:h-20 text-sky-500 flex items-center justify-between px-4 font-PlaypenSans font-bold">
				<h4 className="cursor-default">ADD TASK</h4>
				<Link href={"/todos"}>
					<CloseIcon className={styles.closeIcon} fontSize="large" />
				</Link>
			</div>
			<div className="px-4">
				<div className="flex justify-center items-center h-36">
					<Image className="w-20 h20 rounded-2xl" src={mainLogo} alt="logo" />
				</div>
				<AddTodo />
			</div>
		</div>
	);
}

export default AddScreen;
