import type { NextPage } from "next";
import Head from "next/head";

import ContactForm from "components/ContactForm/ContactForm";

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact me</title>
				<meta name="description" content="Sent me your message" />
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
