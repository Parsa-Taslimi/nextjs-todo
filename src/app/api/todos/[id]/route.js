import dbConnect from "@/app/lib/dbConnect";
import todoModel from "@/app/models/Todo";
import mongoose from "mongoose";

export async function PATCH(req, { params }) {
	try {
		await dbConnect();
		const { id } = await params;
		const { isComplete } = await req.json();
		const isValid = mongoose.Types.ObjectId.isValid(id);
		if (!isValid) {
			return Response.json({ message: "Invalid objectId format !" }, { status: 409 });
		}
		const updatedTodo = await todoModel.findByIdAndUpdate(
			{ _id: id },
			{
				isComplete,
			},
			{ new: true, runValidators: true }
		);
		if (!updatedTodo) {
			return Response.json({ message: "Todo not found !" }, { status: 404 });
		}

		return Response.json(updatedTodo, { status: 200 });
	} catch (err) {
		return Response.json({ message: err.message }, { status: 500 });
	}
}

export async function PUT(req, { params }) {
	try {
		await dbConnect();
		const { id } = params;
		const body = await req.json();
		const { title, description, endDate } = body;
		const isValid = mongoose.Types.ObjectId.isValid(id);
		if (!isValid) {
			return Response.json({ message: "Invalid objectId format !" }, { status: 409 });
		}
		if (title === "" || description === "" || endDate === "") {
			return Response.json({ message: "Fields can not be empty !" }, { status: 400 });
		}
		const todo = await todoModel.findOne({ _id: id });
		if (!todo) {
			return Response.json({ message: "Todo not found !" }, { status: 404 });
		}
		const updatedTodo = await todoModel.findOneAndUpdate(
			{ _id: todo._id },
			{
				title,
				description,
				endDate,
			},
			{ new: true }
		);
		return Response.json(updatedTodo, { status: 200 });
	} catch (err) {
		return Response.json({ message: err.message }, { status: 500 });
	}
}

export async function DELETE(req, { params }) {
	try {
		await dbConnect();
		const { id } = params;
		const isValid = mongoose.Types.ObjectId.isValid(id);
		if (!isValid) {
			return Response.json({ message: "Invalid objectId format !" }, { status: 409 });
		}
		const todo = await todoModel.findOne({ _id: id });
		if (!todo) {
			return Response.json({ message: "Todo not found !" }, { status: 404 });
		}
		await todoModel.findOneAndDelete({ _id: todo._id });
		return Response.json({ message: "Todo deleted successfully !" }, { status: 200 });
	} catch (err) {
		return Response.json({ message: err.message }, { status: 500 });
	}
}
