"use server"

import connectDB from "@/lib/db";
import { User } from "@/models/user";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const queryform = async (formData:FormData) =>{
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

try{

    if (!name || !email || !subject || !message ) {
        throw new Error("All fields are required.", { cause: "ValidationError" });
	}
    if (!isValidEmail(email)) {
        throw new Error("Invalid email format.", { cause: "InvalidEmail" });
    }

	await connectDB();
    
    await User.create({ name, email, subject, message });
    return { success: true, message: "Your Message has been submitted successfully" };
    
    console.log("user created successfully ");
}catch(error: any){

    return { success: false, message: error.message, cause: error.cause || "UnknownError" };

}
}

export { queryform};