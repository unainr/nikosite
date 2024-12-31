import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const mongoUri = process.env.MONGO_URI;
		if (!mongoUri) {
			throw new Error("MONGO_URI is not defined in environment variables.");
		}
		await mongoose.connect(process.env.MONGO_URI!);


		console.log(`successfully connected to mongoDb `);
	} catch (error: any) {
		console.error(`Error:${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
