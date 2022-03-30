import axios from "axios";
import type { Message } from "types/contact.types";

export const sendMessage = async (message: Message) => {
	try {
		const { data } = await axios.post("/api/contact", message);
	} catch (error) {
		if (!(error instanceof Error)) {
			throw new Error("Unknown error");
		}

		throw new Error(error.message || "Something went wrong");
	}
};
