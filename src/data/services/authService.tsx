import axios from "axios";
import API_AUTH from "../api-routes/api-auth.routes";



export const logout = (navigate) => {
    localStorage.removeItem('token');

    navigate('/home');
    console.log('Hasta luego');
}
export const loginUser = async (username, password) => {
    try {
      const response = await axios.post(API_AUTH.login, { username, password });
  
      console.log("Respuesta del servidor:", response.data); // <-- Debugging
  
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        return { success: true, data: response.data };
      } else {
        return { success: false, message: "Token no recibido" }; // <-- Nueva validación
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      return {
        success: false,
        message: error.response?.data?.error || "Error al iniciar sesión",
      };
    }
  };
  

export const registerUser = async (username, password) => {
    try{
        const response = await axios.post(API_AUTH.register, {username, password});
        return { seccess: true, data: response.data};
    } catch (error) {
        console.log("Error al registrar ususario",error);
        return { seccess: false, message: error.response?.data?.error || 'Error al registrar usuario'};
    }
}

