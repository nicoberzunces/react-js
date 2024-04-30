import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const { data } = useContext(DataContext);
    return data.map((product)=> {
    return (
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"></img>
            <h3>{product.nombre}</h3>
            <h4>{product.precio}$</h4>
            <button>Comprar</button>
        </div>
    )
    })
}

export default Products