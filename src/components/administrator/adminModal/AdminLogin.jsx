import './AdminModal.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../data/services/authService';

const AdminModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (username && password) {
      const verifyLogin = async () => {
        console.log("Datos que se enviarán al backend:", username, password);
        const isValid = await loginUser(username, password);
        if (isValid && isValid.success) {
          setIsAuthenticated(true);
          setError('Bienvenido!');
          console.log('Login exitoso!');
          navigate('/adminPanel')
        } else {
          setIsAuthenticated(false);
          setError('Usuario o contraseña incorrectos');
          console.log('Usuario o contraseña incorrectos.', isValid.error);
        }
      };

      verifyLogin();
    }
  }, [username, password, navigate]);

  const borderColor = isAuthenticated ? '#3e9453' : error ? '#e74c3c' : '#3e4194';

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <div className="input-group">
        <input
          id="user"
          className="modal-input"
          placeholder=" "
          style={{ borderBottomColor: borderColor }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Directamente actualizamos el username
        />
        <label htmlFor="user" className="floating-label">Usuario:</label>
      </div>

      <div className="input-group">
        <input
          id="password"
          type="password"
          className="modal-input"
          placeholder=" "  // Lo mismo para el password
          style={{ borderBottomColor: borderColor }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Directamente actualizamos el password
        />
        <label htmlFor="password" className="floating-label">Contraseña:</label>
      </div>

      <button className="close-button" onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default AdminModal;
