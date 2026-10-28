import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js"
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(postRoutes);
app.use(userRoutes)
const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://krishnasinghyadav24_db_user:NVu5kCU6iJPcXy4l@carrergrid.flopf06.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("DB connection error:", error);
    }
};

app.listen(9090, () => {
    console.log("app is listening on port 9090");
});

start();