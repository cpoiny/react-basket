import style from "./QuantityPicker.module.css";

interface QuantityPickerProps {
    quantity: number;
    add: () => void;
    remove: () => void
}


const QuantityPicker = (props: QuantityPickerProps) => {
    const {quantity, add, remove } = props;


  //  const { products, addOne } = useCartContext();

    // const addOne = () => {
    //     const newQuantity = quantity + 1;
    //     setQuantity(newQuantity);
    // }

    // const removeOne = () => {
    //     if (quantity <= 0) return;
    //     const newQuantity = quantity - 1;
    //     setQuantity(newQuantity);
    // }


    return (
        <div className={style.flex}>
            <button onClick={remove}> - </button>
            <p>{quantity}</p>
            <button onClick={add}> + </button>
        </div>
    )
}

export default QuantityPicker;