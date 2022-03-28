import { NextApiRequest, NextApiResponse } from "next";

interface Message {
	email: string;
	name: string;
	message: string;
}

interface Response {
	message: string;
	data?: Message;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Response>) => {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	const { name, email, message } = req.body;

	if (
		!name ||
		!name.trim() ||
		!email ||
		!email.includes("@") ||
		!message ||
		!message.trim()
	) {
		res.status(400).json({ message: "Please enter all fields" });
		return;
	}

	// Store db
	const newMessage = {
		email,
		name,
		message,
	};

	res.status(200).json({ message: "Message sent", data: newMessage });
};

export default handler;
