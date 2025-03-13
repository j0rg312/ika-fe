import { useState, useEffect } from "react";
import axios from "axios";
import API_PRODUCT from "../api-routes/api-product.routes";

class ProductService {
  async getProducts(){
    try {
      const response = await axios.get(API_PRODUCT.getAll);
      console.log("Respuesta", response);
      if (response.data) {
        return {
          success: true,
          products: response.data,
        };
      } else {
        return {
          success: false,
          message: "No se encontraron productos",
        };
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      return {
        success: false,
        message: "Hubo un error al intentar obtener los productos.",
        error,
      };
    }
  };

async getByName(name: string) {
  try {
    const response = await axios.get(API_PRODUCT.getByName(name));
    if (response.status){
      return {success: true, data: response}
    };
  }catch (err) {
    console.error("Error al obtener el producto por nombre:", err);
    return {success: false, error: err}
   };
 };

 async addProduct(product) {
  console.log("Product", product);
  try {
    const response = await axios.post(API_PRODUCT.create, product, {
      headers: {
        "Content-Type": "multipart/form-data", // Específicamente para FormData
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    console.error("Error al agregar el producto:", err);
    return {
      success: false,
      error: err,
    };
  }
}

async updateProduct(id: string, product) {
  try {
    const response = await axios.put(API_PRODUCT.update(id), product);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    console.error("Error al actualizar el producto:", err);
    return {
      success: false,
      error: err,
    };
  }
}

 async deleteByName(name: string) {
  try {
    const response = await axios.delete(API_PRODUCT.deleteByName(name));
    return {
      sucess: true,
      data: response.data,
    };
  } catch (err) {
    console.error("Error al eliminar el producto:", err);
    return {
      success: false,
      error: err,
    };
  };
 };
};


export default ProductService;


