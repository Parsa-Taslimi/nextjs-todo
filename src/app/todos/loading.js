import styles from "../../styles/Loading.module.css";
export default function Loading() {
	return (
		<div className={`relative w-full h-full`}>
			<div className={`${styles.loader}`}></div>
		</div>
	);
}