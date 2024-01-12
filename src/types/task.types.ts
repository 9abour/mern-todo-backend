import { Document } from "mongoose";

export interface ITask extends Document {
	name: string;
	description: string;
	xp: number;
	isCompleted: boolean;
	categories: string[];
}
