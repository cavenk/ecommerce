 import "./sass/app.scss"
import HomePage from "./pages/home/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorBar from "./components/ErrorBar"
import MainLayout from "./layout/mainLayout/MainLayout"
import ProductPage from "./pages/product/ProductPage"
import CartPage from "./pages/cart/CartPage"
import PaymentPage from "./pages/payment/PaymentPage"

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:productID" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ErrorBar/>
        </>
    )
}