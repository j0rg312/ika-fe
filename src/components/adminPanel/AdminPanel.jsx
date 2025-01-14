import { useState, useEffect } from "react";
import ProductService from "../../data/services/productService";
import { logout } from "../../data/services/authService";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productService = new ProductService();

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

  const handleAddProduct = async () => {
    const response = await productService.addProduct(newProduct);
    if (response.success) {
      fetchProducts(); // Refresh product list
    } else {
      console.error(response.error);
    }
  };

  const handleUpdateProduct = async (name) => {
    const response = await productService.updateByName(name, selectedProduct);
    if (response.success) {
      fetchProducts(); // Refresh product list
    } else {
      console.error(response.error);
    }
  };

  const handleDeleteProduct = async (name) => {
    const response = await productService.deleteByName(name);
    if (response.success) {
      fetchProducts(); // Refresh product list
    } else {
      console.error(response.error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Configuración</h1>
      <button onClick={logout}>Cerrar Sesión</button>
      <div className="product-management">
        <h2>Lista de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}{" "}
              <button onClick={() => handleDeleteProduct(product.name)}>Eliminar</button>
              <button onClick={() => setSelectedProduct(product)}>Editar</button>
            </li>
          ))}
        </ul>

        <h2>Agregar Producto</h2>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
        <button onClick={handleAddProduct}>Agregar</button>

        {selectedProduct && (
          <div>
            <h2>Editar Producto</h2>
            <input
              type="text"
              value={selectedProduct.name}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            />
            <input
              type="number"
              value={selectedProduct.price}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })}
            />
            <button onClick={() => handleUpdateProduct(selectedProduct.name)}>Guardar Cambios</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
