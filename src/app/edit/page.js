import Image from "next/image";
import mainLogo from "../../../public/svg/reshot-icon-to-do-list-and-calendar.svg";
import styles from "../../styles/AddEdit.module.css";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
function EditScreen() {
	return (
		<div className="w-full">
			<div className="h-16 md:h-20 text-sky-500 flex items-center justify-between px-4 font-PlaypenSans font-bold">
				<h4 className="cursor-default">EDIT TASK</h4>
				<Link href={"/todos"}>
					<CloseIcon className={styles.closeIcon} fontSize="large" />
				</Link>
			</div>
			<div className="px-4">
				<div className="flex justify-center items-center h-36">
					<Image className="w-20 h20 rounded-2xl" src={mainLogo} alt="logo" />
				</div>
				<div className={`${styles.inputContainer} flex flex-col justify-center items-center px-3 gap-5 py-5`}>
					<form>
						<label htmlFor="title">Title</label>
						<input placeholder="Learn Next Js" id="title" type="text" />
					</form>
					<form>
						<label htmlFor="description">Description</label>
						<input placeholder="Learn Next Js Completely" id="description" type="text" />
					</form>
					<form>
						<label htmlFor="date">Date end</label>
						<input placeholder="9 sep 2025" id="date" type="text" />
					</form>
				</div>
				<div className={`${styles.BtnWrapper} flex justify-around items-center font-PlaypenSans mt-8`}>
					<Link href={"/todos"}>
						<button className="bg-sky-500">Done !</button>
					</Link>
					<Link href={"/todos"}>
						<button className="bg-red-600">Delete</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default EditScreen;
