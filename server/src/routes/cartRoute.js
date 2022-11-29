import { Router } from "express";
import ProductTable from "../database/ProductTable.js";
import { MyResponse } from "../utils/MyResponse.js";

const cartRoute = Router()

cartRoute.post("/", async (req, res)=>{
    try{
        const cartList = req.body
        const productList = []

        if(!cartList)
            return MyResponse.send402(res)

        for(const element of cartList){
            const product = await ProductTable.getProductByID(`${element.id}`)
            productList.push({
                id : product.id,
                title : product.title,
                image : product.image,
                price : product.price
            })
        }

        MyResponse.send200(res, productList)


    } catch(error){
        console.log(error)
        MyResponse.send400(res, "An unknown error occured", 0)
    }
})

export default cartRoute