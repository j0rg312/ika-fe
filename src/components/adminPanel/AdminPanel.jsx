import { useRef, useEffect, useState } from "react";
import ProductService from "../../data/services/productService";
import { logout } from "../../data/services/authService";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Estado para edición
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

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🚀 Obtener todos los productos
  const fetchProducts = async () => {
    const response = await productService.getProducts();
    if (response.success) {
      // Ajusta la estructura según lo que devuelva tu servicio
      setProducts(response.products.products);
    } else {
      console.error("Error al obtener los productos");
    }
  };

  // 🔄 Agregar o actualizar producto (por id)
  const handleSaveProduct = async () => {
    const formData = new FormData();
    if (
      !nameRef.current.value ||
      !priceRef.current.value ||
      !amountRef.current.value ||
      !descriptionRef.current.value
    ) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    formData.append("name", nameRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("amount", amountRef.current.value);
    formData.append("description", descriptionRef.current.value);

    if (imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    }

    try {
      let response;
      if (editingProduct) {
        // Actualiza usando el id del producto
        response = await productService.update(editingProduct.id, formData);
      } else {
        response = await productService.addProduct(formData);
      }

      if (response.success) {
        setNotification({
          visible: true,
          message: editingProduct
            ? "Producto actualizado exitosamente."
            : "Producto agregado exitosamente.",
          success: true,
        });
        fetchProducts();
        resetForm();
      } else {
        setNotification({
          visible: true,
          message: "Hubo un error al procesar el producto.",
          success: false,
        });
      }
    } catch (error) {
      setNotification({
        visible: true,
        message: "Hubo un problema al procesar el producto.",
        success: false,
      });
    }
  };

  // ✏️ Editar producto
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    nameRef.current.value = product.name;
    priceRef.current.value = product.price;
    amountRef.current.value = product.amount;
    descriptionRef.current.value = product.description;
  };

  // 🗑️ Eliminar producto usando el id
  const handleDeleteProduct = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      const response = await productService.deleteProduct(id);
      if (response.success) {
        setNotification({
          visible: true,
          message: "Producto eliminado exitosamente.",
          success: true,
        });
        fetchProducts();
      } else {
        setNotification({
          visible: true,
          message: "Hubo un error al eliminar el producto.",
          success: false,
        });
      }
    }
  };

  // 🔄 Resetear formulario
  const resetForm = () => {
    nameRef.current.value = "";
    priceRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = null;
    setEditingProduct(null);
  };

  // ❌ Cerrar notificación
  const handleCloseNotification = () => {
    setNotification((prevState) => ({ ...prevState, visible: false }));
  };

  return (
    <div className="admin-panel">
      <h1>Configuración</h1>
      <button onClick={() => logout(navigate)}>Cerrar Sesión</button>

      {/* Formulario para agregar/editar producto */}
      <div className="product-management">
        <h2>{editingProduct ? "Editar Producto" : "Agregar Producto"}</h2>
        <input type="text" placeholder="Nombre del producto" ref={nameRef} />
        <input type="number" placeholder="Precio" ref={priceRef} />
        <input type="number" placeholder="Cantidad" ref={amountRef} />
        <textarea placeholder="Descripción" ref={descriptionRef}></textarea>
        <input type="file" ref={imageRef} />
        <button onClick={handleSaveProduct}>
          {editingProduct ? "Actualizar" : "Agregar"}
        </button>
        {editingProduct && <button onClick={resetForm}>Cancelar Edición</button>}
      </div>

      {/* Tabla de productos */}
      <div className="product-list">
        <h2>Lista de Productos</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.amount}</td>
                  <td>{product.description}</td>
                  <td>
                    <button onClick={() => handleEditProduct(product)}>
                      Editar
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay productos disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Notificación */}
      {notification.visible && (
        <div className={`notification ${notification.success ? 'success' : 'error'}`}>
          <p>{notification.message}</p>
          <button className="close-btn" onClick={handleCloseNotification}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
