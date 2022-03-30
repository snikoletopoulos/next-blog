import styles from "./Notification.module.css";
import type { Notification } from "components/ContactForm/ContactForm";

const Notification: React.FC<Notification> = props => {
	const { title, message, status } = props;

	let statusClasses = "";

	if (status === "success") {
		statusClasses = styles.success;
	}

	if (status === "error") {
		statusClasses = styles.error;
	}

	const cssClasses = `${styles.notification} ${statusClasses}`;

	return (
		<div className={cssClasses}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
};

export default Notification;
