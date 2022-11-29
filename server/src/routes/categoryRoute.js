import { Router } from "express";
import CategoryTable from "../database/CategoryTable.js";
import { MyResponse } from "../utils/MyResponse.js";


const categoryRoute = Router()

/** 400 Error code
 * 0 -> unknown
 */

categoryRoute.get("/", async (req, res)=>{
    try{
        const categories = await CategoryTable.getCategories()

        MyResponse.send200(res, categories)

    } catch(error){
        MyResponse.send400(res, "Unknown error occured", 0)
    }
})

export default categoryRoute