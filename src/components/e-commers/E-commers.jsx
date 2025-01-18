import { useState, useEffect } from 'react';
import './E-commers.css';
import TypingTitle from '../typingTitle/TypingTitle';
import ProductService from '../../data/services/productService';

const ECommers = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Cargar los productos desde la API
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
    <section className="ecommers section-animation">
      <div className="ecommers-header">
        <TypingTitle text="Nuestra Tienda" className="typing-title" speed={100} />
        <p>Compra los mejores equipos de cómputo a precios competitivos.</p>
      </div>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image_path ? `/path/to/images/${product.image_path}` : 'default-image.jpg'}
                alt={product.name || 'Producto'}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">${product.price}</p>
              <p className="product-quantity">Cantidad disponible: {product.amount}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Agregar al Carrito
              </button>
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
    </section>
  );
};

export default ECommers;
