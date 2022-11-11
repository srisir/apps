import mongoose from "mongoose";

export const DatabaseConnection = async () => { 
    try {
        const { connection } = await mongoose.connect(process.env.DB_URI);
        console.log(`Connection Established with ${connection.host}`);
    } catch (error) { console.log(error); process.exit(1); }
}
 