import dbConnect from "@/app/lib/dbConnect";
import TodoModel from "@/app/models/Todo";

export async function GET() {
	try {
		await dbConnect();
		const todos = await TodoModel.find({}).sort({ _id: -1 });
		return Response.json( todos, { status: 200 });
	} catch (err) {
		return Response.json({ message: err.message }, { status: 500 });
	}
	
};

export async function POST(req) {
	try {
		await dbConnect();
		const body = await req.json();
		const { title, description, endDate } = body;
		const todo = await TodoModel.create({
			title,
			description,
			endDate,
		});
		return Response.json({ message: "Todo created successfully", data: todo }, { status: 201 });
	} catch (err) {
		return Response.json({ message: err.message }, { status: 500 });
	}
};
