import { useState, useEffect } from 'react';
import './E-commers.css';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import ProductService from '../../data/services/productService';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
import { FaPlus } from "react-icons/fa";
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const ECommers = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200, amount: 10, description: 'Laptop de alto rendimiento', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 2, name: 'Smartphone', price: 600, amount: 5, description: 'Smartphone de última generación', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 3, name: 'Tablet', price: 300, amount: 8, description: 'Tablet con gran rendimiento', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 4, name: 'Monitor', price: 250, amount: 12, description: 'Monitor de alta resolución', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 5, name: 'Teclado', price: 50, amount: 15, description: 'Teclado mecánico', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 6, name: 'Mouse', price: 30, amount: 20, description: 'Mouse ergonómico', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' },
    { id: 7, name: 'Auriculares', price: 80, amount: 6, description: 'Auriculares con cancelación de ruido', image: 'https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg' }
    ]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductService();
      const result = await productService.getProducts();

      if (result.success) {
        setProducts(result.products.products);
      } else {
        console.error(result.message);
      }
    };

    fetchProducts();
  }, []);

  const openDialog = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setVisible(true);
  };

  const confirmAddToCart = () => {
    if (!selectedProduct) return;

    if (quantity <= 0 || quantity > selectedProduct.amount) {
      alert(`Por favor ingresa una cantidad válida. Stock disponible: ${selectedProduct.amount}`);
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === selectedProduct.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === selectedProduct.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...selectedProduct, quantity }];
      }
    });

    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === selectedProduct.id ? { ...item, amount: item.amount - quantity } : item
      )
    );

    alert(`${quantity} unidades de "${selectedProduct.name}" añadidas al carrito.`);
    setVisible(false);
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
                  alt={product.name || 'Producto'}
                  className="product-image"
                  src='https://www.itsitio.com/wp-content/uploads/2020/07/G531-1-scaled.jpg'
                />
                <button className="add-to-cart-btn" style={{ textAlign: "center", padding: "1px" }} onClick={() => openDialog(product)}>
                  <FaPlus size={15} />
                </button>
              </div>
              <h3 className='product-header text-center'>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              {product.amount ? <p className="product-quantity">Cantidad disponible: {product.amount}</p> 
              : <p className='none'>Agotado</p>}
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
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout} className="checkout-btn">
          Proceder al Pago
        </button>
      </div>

      {/* Dialog para seleccionar cantidad */}
      <Dialog className="modal-content" header="Añadir al carrito" visible={visible} onHide={() => setVisible(false)} closedby="any">
        {selectedProduct && (
          <>
            <p>¿Cuántas unidades de <strong>{selectedProduct.name}</strong> deseas agregar?</p>
            <InputNumber
              value={quantity}
              onValueChange={(e) => setQuantity(e.value)}
              min={1}
              max={selectedProduct.amount}
              showButtons
            />
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
              <Button label="Agregar" icon="pi pi-check" onClick={confirmAddToCart} autoFocus />
            </div>
          </>
        )}
      </Dialog>
    </Section>
  );
};

export default ECommers;
