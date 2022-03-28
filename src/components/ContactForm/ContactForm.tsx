import { useState } from "react";
import styles from "./ContactForm.module.css";

import axios from "axios";

const ContactForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleMessageSend: React.FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();

		axios.post("/api/contact", {
			name,
			email,
			message,
		});
	};

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
		</section>
	);
};

export default ContactForm;
