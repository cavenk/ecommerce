import { Router } from "express";
import ProductTable from "../database/ProductTable.js";
import { MyResponse } from "../utils/MyResponse.js";

const productRoutes = Router()

/** 400 Error code
 * 0 -> unknown
 * 1 -> category is not a number
 */
productRoutes.get("/", async (req, res) =>{
    try{
        const category = parseInt(req.query.category)
        let products = null

        if(category == NaN)
            return MyResponse.send400(res, "Query category must be a number", 1)

        if(category)
            products = await ProductTable.getProductsByCategory(category) 
        else 
            products = await ProductTable.getProducts()
        
        MyResponse.send200(res, products)

    } catch(error){
        MyResponse.send400(res, "An unknown error occured", 0)
    }
})

productRoutes.get("/:id", async (req, res) => {
    try{
        const id = req.params.id
        const data = await ProductTable.getProductByID(id)

        MyResponse.send200(res, data)

    } catch(error){
        MyResponse.send400(res, "An unknown error occured", 0)
    }
})

export default productRoutes