import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CardPizza = ({ pizza }) => {
    const { addCart } = useContext(CartContext)
    const handleAddToCart = () => {
        addCart({ ...pizza, count: 1 });
    };

    return (
        <div className="card mb-4">
            <img 
                src={pizza.img} 
                alt={pizza.name} 
                className="card-img-top rounded mx-auto d-block" 
            />
            <div className="card-body">
                <h2 className="card-title">{pizza.name}</h2>
                <p className="card-text"><strong>Ingredientes:</strong></p>
                <ul className="card-text list-inline">
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item"> 🍕{ingredient}</li>
                    ))}
                </ul>
                <h4 className="card-text text-center p-1">
                    <strong>Precio: ${pizza.price.toLocaleString()}</strong>
                </h4>
                <div className="d-flex justify-content-evenly">
                    <Link className="btn btn-secondary" to="/pizza"><strong>👀 Ver más</strong> </Link>
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        🛒<strong>Añadir</strong>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;

