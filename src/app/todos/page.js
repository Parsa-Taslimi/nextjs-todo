import Image from "next/image";
import Link from "next/link";
import mainLogo from "../../../public/svg/reshot-icon-to-do-list-and-calendar.svg";
import styles from "../../styles/Todos.module.css";
import Todolist from "@/components/Todolist";



function HomeScreen() {
	return (
		<>
			<div className={`${styles.todosWrapper} w-full`}>
				<div className="relative h-16 md:h-20 bg-gray-800 text-white flex items-center justify-between px-4">
					<Image
						priority={true}
						className="absolute inset-x-[45%] md:inset-x-[48%] bottom-0 w-16 h-16 md:w-20 md:h-20 rounded-full transform translate-y-1/2"
						src={mainLogo}
						alt="Logo"
					/>
				</div>
						<Todolist />	
				<div className={`${styles.todosFooter} bg-gray-200 mt-3 h-[75px] relative flex items-center justify-between px-4`}>
					<Link
						className={`${styles.addBtn} absolute flex justify-center items-center inset-x-[45%] md:inset-x-[48.6%] top-0 rounded-full cursor-pointer h-14 w-14 z-20`}
						href={"/add"}>
						<button type="button"></button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default HomeScreen;
