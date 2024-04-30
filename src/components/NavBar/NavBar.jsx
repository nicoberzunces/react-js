import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className= 'nav-container'>
            <nav className='navbar'> 
            <h1 className='navbar-logo'>Shop</h1>
            <Link className='historiaCabj' to={"/historia"}>Historia de Boca</Link> 
            <Link className='seeCarrito' to={"/cart"}>🛒</Link> 
            
            </nav>
        </div>
    )
}

export default NavBar