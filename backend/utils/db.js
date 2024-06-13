import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbCon = async()=>{
    try {
      await  mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

export default dbCon