"use client";
import { useTodos } from "@/context/TodoContext";
import styles from "../styles/Todos.module.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useEffect } from "react";

function ShowModal() {
	const { isShowing, setIsShowing, showedTodo, setShowedTodo } = useTodos();

   const closeModal = () => {
      setIsShowing(false);
      setShowedTodo(null);
   }

   const closeHandler = () => {
      closeModal();
   }

   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "Escape") {
            closeModal();
         }
      }

      if (isShowing) {
         window.addEventListener('keydown', handleKeyDown);
      }

      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      }

   }, [isShowing])

   if (!isShowing) {
      return null;
   }

   

	return (
		<>
			{isShowing && showedTodo !== null && (
				<div className={`${styles.todosShadowLayer} ${isShowing ? styles.active : ""}`}>
					<div className={`${styles.todoModal} ${isShowing ? "" : styles.closing}`}>
						<div className={`${styles.todoModalContent} font-PlaypenSans`}>
							<div className="header flex justify-between items-center px-2 pb-2 mb-5 border-blue-900 border-b-[3px]">
								<div className="text-gray-700">{new Date(showedTodo.endDate).toDateString()}</div>
								<button onClick={closeHandler} type="button" className="border-none outline-none">
									<CancelPresentationIcon
										className="text-red-400 cursor-pointer transition-transform hover:translate-y-0.5"
										fontSize="large"
									/>
								</button>
							</div>
							<div className="text-gray-800 px-2 mb-3">
								<h2 className="text-lg font-semibold">Title:</h2>
								<p className="text-gray-700">{showedTodo.title}</p>
							</div>
                     <div className="text-gray-800 px-2">
								<h2 className="text-lg font-semibold">Description:</h2>
								<p className="text-gray-700">{showedTodo.description}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ShowModal;
