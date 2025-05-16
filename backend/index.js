
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors';



dotenv.config()

const app = express()
app.use(cors());

app.get("/api", (req, res) => {
    res.status(200).json("api is working");
});

app.listen(process.env.PORT, () => {
    console.log("The server is running on port ", process.env.PORT)
})
