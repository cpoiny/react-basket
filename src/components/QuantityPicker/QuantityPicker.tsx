import { useState } from "react";
import style from "./QuantityPicker.module.css";

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(0);
    const addOne = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeOne = () => {
        if (quantity <= 0) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    
    return (
        <div className={style.flex}>
            <button onClick={removeOne}> - </button>
            <p>{quantity}</p>
            <button onClick={addOne}>+</button>
        </div>


    )
}

export default QuantityPicker;