import { useCartContext } from "contexts/Cart.context";
import { NavLink } from "react-router-dom";

const Header = () => {
const {getTotalProduct} = useCartContext();
//console.log("totalProducts", getTotalProduct)}


    return(
<nav>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/products">Products</NavLink></li>
    <li><NavLink to="/cart">Panier </NavLink></li>
</nav>
    )
}

export default Header;