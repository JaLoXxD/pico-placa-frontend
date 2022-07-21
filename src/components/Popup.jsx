import { useEffect, useRef } from "react";
import ApproveGif from "../assets/images/approve.gif";
import ErrorGif from "../assets/images/error.gif";
export const Popup = ({ title, description, allowed, visible, onClosePopup }) => {
	const popupContainer = useRef();

	useEffect(() => {
		const closePopup = ({ path }) => {
			if (!path.includes(popupContainer.current)) {
				onClosePopup();
			}
		};
		document.body.addEventListener("click", closePopup);
		return () => {
			document.body.removeEventListener("click", closePopup);
		};
	}, [visible]);

	return (
		<div id="popupContainer" role="popupContainer" className={`${visible && "showPopup"}`}>
			<div className="popupContent" ref={popupContainer}>
				<img role="iconImg" src={allowed ? ApproveGif : ErrorGif} alt="" />
				<h2>{title}</h2>
				<div role="descCont">{description}</div>
			</div>
		</div>
	);
};
