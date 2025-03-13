import { useState, useEffect } from 'react';
import './E-commers.css';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import ProductService from '../../data/services/productService';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
import { FaPlus } from "react-icons/fa";

const ECommers = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductService();
      const result = await productService.getProducts();

      console.log(JSON.stringify(result.products.products));

      if (result.success) {
        setProducts(result.products.products);
        console.log(result.products);
      } else {
        console.error(result.message);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    alert('Proceso de compra');
  };

  return (
    <Section className="ecommers">
            <Helmet>
                <title>IKA - Tienda</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
      <div className="ecommers-header">
        <TypingTitle text="Nuestra Tienda" className="typing-title" speed={100} />
        <p>Compra los mejores equipos de cómputo a precios competitivos.</p>
      </div>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
             
            <div className="img-container">
              <div className="border-left"></div>
              <div className="border-right"></div>
            <img
                /* src={product.image_path ? `/uploads/${product.image_path}` : ''} */
                alt={product.name || 'Producto'}
                className="product-image"
                src='https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg'
                              />
              <button className="add-to-cart-btn">
                <FaPlus/>
              </button>
            </div>
            <h3 className='product-header'>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-quantity">Cantidad disponible: {product.amount}</p>
                            <p className='product-description'>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
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
    </Section>
  );
};

export default ECommers;
