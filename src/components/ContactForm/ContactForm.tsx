import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

import { sendMessage } from "services/contact";

import Notification from "components/ui/Notification/Notification";

type RequestStatus = "pending" | "success" | "error";

export interface NotificationObject {
	status: RequestStatus;
	title: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const [requestStatus, setRequestStatus] = useState<RequestStatus | null>(
		null
	);
	const [requestError, setRequestError] = useState<string>("");

	const handleMessageSend: React.FormEventHandler<
		HTMLFormElement
	> = async event => {
		event.preventDefault();

		setRequestStatus("pending");

		try {
			await sendMessage({
				email,
				name,
				message,
			});

			setRequestStatus("success");
		} catch (error) {
			if (error instanceof Error) {
				setRequestError(
					error.message ?? "Your message failed to send. Please try again."
				);
			} else {
				setRequestError("An unexpected error occurred.");
			}

			setRequestStatus("error");
		}
	};

	let notification: NotificationObject | null = null;

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way!",
		};
	}

	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Message sent!",
			message: "Your message was sent successfully!",
		};
	}

	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Message failed!",
			message: requestError,
		};
	}

	return (
		<section className={styles.contact}>
			<h1>How can I help you?</h1>
			<form className={styles.form} onSubmit={handleMessageSend}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>

					<div className={styles.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							required
							value={name}
							onChange={event => setName(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows={5}
						value={message}
						onChange={event => setMessage(event.target.value)}
					/>
				</div>

				<div className={styles.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
};

export default ContactForm;
