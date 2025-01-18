import { useRef, useEffect, useState } from "react";
import ProductService from "../../data/services/productService";
import { logout } from "../../data/services/authService";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState({
    visible: false,
    message: '',
    success: false,
  });

  const productService = new ProductService();

  const nameRef = useRef();
  const priceRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();


  const handleLogout = async () => {
    logout(navigate)
  }

  const handleAddProduct = async () => {
    const formData = new FormData();
    if (!nameRef.current.value || !priceRef.current.value || !amountRef.current.value || !descriptionRef.current.value || !imageRef.current.files[0]) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    formData.append("name", nameRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("amount", amountRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    try {
      const response = await productService.addProduct(formData);
      if (response.success) {
        setNotification({
          visible: true,
          message: 'Producto agregado exitosamente.',
          success: true,
        });
        // Refresh product list after adding a product
        fetchProducts();
        resetForm();
      } else {
        setNotification({
          visible: true,
          message: 'Hubo un error al agregar el producto.',
          success: false,
        });
      }
    } catch (error) {
      setNotification({
        visible: true,
        message: 'Hubo un problema al agregar el producto.',
        success: false,
      });
    }
  };

  const resetForm = () => {
    nameRef.current.value = "";
    priceRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = null;
  };

  const handleCloseNotification = () => {
    setNotification((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };

  return (
    <div className="admin-panel">
      <h1>Configuración</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <div className="product-management">
        <h2>Agregar Producto</h2>
        <input type="text" placeholder="Nombre del producto" ref={nameRef} />
        <input type="number" placeholder="Precio" ref={priceRef} />
        <input type="number" placeholder="Cantidad" ref={amountRef} />
        <textarea placeholder="Descripción" ref={descriptionRef}></textarea>
        <input type="file" ref={imageRef} />
        <button onClick={handleAddProduct}>Agregar</button>
      </div>

      {/* Notificación */}
      {notification.visible && (
        <div className={`notification ${notification.success ? 'success' : 'error'}`}>
          <p>{notification.message}</p>
          <button className="close-btn" onClick={handleCloseNotification}>X</button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
