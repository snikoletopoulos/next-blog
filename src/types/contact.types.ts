import type { ObjectId } from "mongodb";

export interface Message {
	id?: ObjectId;
	email: string;
	name: string;
	message: string;
}
