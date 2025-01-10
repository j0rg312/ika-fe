import { useState } from 'react';
import './E-commers.css'
import TypingTitle from '../typingTitle/TypingTitle';

// Datos de ejemplo de productos
const products = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    price: 1200,
    image: 'path-to-image1.jpg',
    description: 'Laptop ultra ligera con procesador Intel i7 y pantalla 4K.',
  },
  {
    id: 2,
    name: 'HP Pavilion Gaming',
    price: 900,
    image: 'path-to-image2.jpg',
    description: 'Equipo de computo ideal para juegos, con tarjeta gráfica GTX 1650.',
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    price: 2200,
    image: 'path-to-image3.jpg',
    description: 'MacBook con pantalla Retina y procesador M1.',
  },
];

const ECommers = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {

    alert('Proceso de compra');
  };

  return (
    <section className="ecommers section-animation">
      <div className="ecommers-header">
<TypingTitle text='Nuestra Tienda' className='typing-title' speed={100}/>
        <p>Compra los mejores equipos de cómputo a precios competitivos.</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Carrito de Compras</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout} className="checkout-btn">
          Proceder al Pago
        </button>
      </div>
    </section>
  );
};

export default ECommers;
