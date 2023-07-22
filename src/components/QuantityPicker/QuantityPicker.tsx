import style from "./QuantityPicker.module.css";

interface QuantityPickerProps {
    quantity: number;
    add: () => void;
    remove: () => void
}


const QuantityPicker = (props: QuantityPickerProps) => {
    const { quantity, add, remove } = props;

    return (
        <div className={style.flex}>
            <button onClick={remove}> - </button>
            <p>{quantity}</p>
            <button onClick={add}> + </button>
        </div>
    )
}

export default QuantityPicker;