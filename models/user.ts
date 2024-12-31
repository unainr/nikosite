import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String },
	subject: { type: String },
	message: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);