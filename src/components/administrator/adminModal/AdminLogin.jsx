import './AdminModal.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../data/services/authService';

const AdminModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Datos que se enviarán al backend:", username, password);

    try {
      const response = await loginUser(username, password);
      console.log("Respuesta del backend:", response);

      if (response && response.success) { 
        setError('Bienvenido!');
        console.log('Login exitoso!');
        navigate('/adminPanel'); 
      } else {
        setIsAuthenticated(false);
        setError('Usuario o contraseña incorrectos');
        console.log('Usuario o contraseña incorrectos.', response?.error || "Error desconocido");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la conexión con el servidor.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <div className="input-group">
        <input
          id="user"
          className="modal-input"
          placeholder=" "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="user" className="floating-label">Usuario:</label>
      </div>

      <div className="input-group">
        <input
          id="password"
          type="password"
          className="modal-input"
          placeholder=" "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password" className="floating-label">Contraseña:</label>
      </div>

      <button onClick={handleLogin} className='login-button'>Iniciar Sesión</button>
      <button className="close-button" onClick={onClose}>Cerrar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminModal;
