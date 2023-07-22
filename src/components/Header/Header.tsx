import { useCartContext } from "contexts/Cart.context";
import { NavLink } from "react-router-dom";

const Header = () => {
    const { getTotalProduct } = useCartContext();
    const totalQuantity = getTotalProduct();

    return (
        <nav>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/product-details">Product details</NavLink></li>
            <li><NavLink to="/cart">Panier({totalQuantity})</NavLink></li>
        </nav>
    )
}

export default Header;