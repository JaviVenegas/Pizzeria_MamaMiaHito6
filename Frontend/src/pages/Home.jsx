import React, { useState, useEffect, useContext} from 'react';
import Header from '../components/Header';
import CardPizza from '../components/Cardpizza';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const urlBase = "http://localhost:5000/api/pizzas";

const Home = () => {
    
    const [pizza, setPizza] = useState([]);

    const getDatos = async () => {
        try {
            const response = await fetch(urlBase);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPizza(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);

    return (
        <>
        <div className="container-fluid p-0">
            <Header />
            <div className="row">
                {pizza.map((pizza) => (
                    <div key={pizza.id} className="col-12 col-md-4">
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Home;

