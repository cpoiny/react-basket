import { useCartContext } from "contexts/Cart.context";
import { NavLink } from "react-router-dom";

const Header = () => {
const {products} = useCartContext();
// const {quantity} =products;


    return(
<nav>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/products">Products</NavLink></li>
    <li><NavLink to="/cart">Panier </NavLink></li>
</nav>
    )
}

export default Header;

/* <NavLink to={navItem.link} className= {({isActive}) => isActive ? style.activeLink: undefined }>{navItem.title} <NavLink /> */