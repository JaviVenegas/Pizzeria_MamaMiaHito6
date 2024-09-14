
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Register from './pages/Register';
import Login from './pages/Login'; 
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Nav from '../src/components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import Pizza from './pages/Pizza';
import Notfound from './pages/Notfound';
import CartProvider from './contexts/CartContext.jsx'


const App = () => {
    return (
    <CartProvider>
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/notfound" element={<Notfound />} />
            </Routes>
            <Footer /> 
        </Router>
    </CartProvider> 
    );
};

export default App;
