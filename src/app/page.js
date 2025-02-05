import Link from "next/link";
import mainLogo from "../../public/svg/reshot-icon-to-do-list-and-calendar.svg";
import Image from "next/image";
import styles from "../styles/SplashScreen.module.css";

export default function Start() {
	return (
		<div className={`${styles.splashBg}`}>
			<div className={`bg-zinc-800 rounded-2xl text-neutral-50 w-4/6 h-5/6 flex flex-col justify-around items-center px-9 py-8 text-wrap text-center`}>
				<Image
					className="w-20 h-20 md:h-24 md:w-24 rounded-3xl fill-white"
					src={mainLogo}
					alt={mainLogo}></Image>
				<h1 className="font-Nosifer text-lg md:text-2xl">MAKE SUCCESSFUL YOUR DAY</h1>
				<h5 className="font-RubikWetPaint md:text-lg text-amber-400">
					Make small somethings to get big gift in your life
				</h5>
				<Link href="/todos">
					<button
						className={`${styles.startBtn} bg-sky-400 cursor-pointer rounded-2xl w-32 md:w-35 py-1.5 md:py-2 font-playSans-bold text-lg md:text-xl"
						type="button`}>
						Start
					</button>
				</Link>
			</div>
		</div>
	);
}
