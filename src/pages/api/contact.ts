import { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";
import { Message } from "types/contact.types";

interface Response {
	message: string;
	data?: Message;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
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
	const newMessage: Message = {
		email,
		name,
		message,
	};

	let client: MongoClient;

	try {
		client = await MongoClient.connect(process.env.MONGO_URL ?? "", {});
	} catch (error) {
		res.status(500).json({ message: "Error connecting to database" });
		return;
	}

	const db = client.db("next-blog");
	try {
		const result = await db.collection("messages").insertOne(newMessage);
		newMessage.id = result.insertedId;
	} catch (error) {
		res.status(500).json({ message: "Error saving message" });
		client.close();
	}

	client.close();
	res.status(200).json({ message: "Message sent", data: newMessage });
};

export default handler;
