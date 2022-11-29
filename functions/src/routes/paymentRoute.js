import { Router } from "express";
import { MyResponse } from "../utils/MyResponse.js";

export const paymentRoute = Router()

paymentRoute.post("/", (req, res)=>{
    const data = {
        isPaid : true
    }


    MyResponse.send200(res, data)
})