import { useRef, useEffect, useState } from "react";
import ProductService from "../../data/services/productService";
import { logout } from "../../data/services/authService";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  const nameRef = useRef();
  const priceRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();

  // Fetch all products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await productService.getProducts();
    if (response.success) {
      setProducts(response.products);
    } else {
      console.error(response.message);
    }
  };

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

    const response = await productService.addProduct(formData);
    if (response.success) {
      fetchProducts(); // Refresh product list
      resetForm();
    } else {
      console.error(response.error);
    }
    console.log('Datos que se envian al back', formData);
    console.log('Nombre de la imagen', imageRef.current.files[0]?.name);
  };

  const resetForm = () => {
    nameRef.current.value = "";
    priceRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = null;
  };

  return (
    <div className="admin-panel">
      <h1>Configuración</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <div className="product-management">
        <h2>Lista de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => handleDeleteProduct(product.name)}>Eliminar</button>
            </li>
          ))}
        </ul>

        <h2>Agregar Producto</h2>
        <input type="text" placeholder="Nombre del producto" ref={nameRef} />
        <input type="number" placeholder="Precio" ref={priceRef} />
        <input type="number" placeholder="Cantidad" ref={amountRef} />
        <textarea placeholder="Descripción" ref={descriptionRef}></textarea>
        <input type="file" ref={imageRef} />
        <button onClick={handleAddProduct}>Agregar</button>
      </div>
    </div>
  );
};

export default AdminPanel;
