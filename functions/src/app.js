import express from "express";
import functions from "firebase-functions"
import cors from "cors"
import morgan from "morgan"
import productRoutes from "./routes/productRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import cartRoute from "./routes/cartRoute.js";
import { paymentRoute } from "./routes/paymentRoute.js";

const app = express()
const port = process.env.PORT || 4000


// Developpement middleware
app.use(morgan("dev"))

// Production middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// Routes
app.use("/product", productRoutes)
app.use("/category", categoryRoute)
app.use("/cart", cartRoute)
app.use("/payment", paymentRoute)

app.get("/", (req, res) => res.send("E-commerce app API"))

export default functions.https.onRequest(app)
