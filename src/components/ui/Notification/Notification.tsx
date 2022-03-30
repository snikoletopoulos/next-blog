import { createPortal } from "react-dom";
import styles from "./Notification.module.css";
import type { NotificationObject } from "components/ContactForm/ContactForm";

const Notification: React.FC<NotificationObject> = props => {
	const { title, message, status } = props;

	let statusClasses = "";

	if (status === "success") {
		statusClasses = styles.success;
	}

	if (status === "error") {
		statusClasses = styles.error;
	}

	const cssClasses = `${styles.notification} ${statusClasses}`;

	return createPortal(
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>,
		document.querySelector("#notifications")!
	);
};

export default Notification;
