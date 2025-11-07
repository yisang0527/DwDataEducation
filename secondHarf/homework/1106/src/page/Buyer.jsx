import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductForm from "./ProductForm";
import CartList from "./CartList";

export default function Buyer() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cart, setCart] = useState([]);
    const addCart = () => {
        if (!name.trim() || !price) return;
        const newCart = { id: Date.now(), name: name.trim(), price: parseInt(price), };
        setCart((prev) => [...prev, newCart]);
        setName("");
        setPrice("");
    };

    const deleteCartItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };


    return (
        <>
            <Link to="/Buyer/ProductForm" style={{ marginRight: 50 }}> 상품 입력 </Link>
            <Link to="/Buyer/CartList"> 장바구니 </Link> <br />

            <Routes>
                <Route path="ProductForm" element={<ProductForm name={name} price={price} setName={setName} setPrice={setPrice} addCart={addCart} />} />
                <Route path="CartList" element={<CartList cart={cart} deleteCartItem={deleteCartItem} />} />
            </Routes>
        </>
    );
}
