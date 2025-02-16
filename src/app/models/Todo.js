import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title"],
		},
		description: {
			type: String,
			required: [true, "please describe what is neccessary to done"],
		},
		endDate: {
			type: Date,
			required: [true, "Please provide a date"],
		},
		isComplete: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default Todo;