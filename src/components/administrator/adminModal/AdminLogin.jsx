import './AdminModal.css';
import { useState, useEffect } from 'react';
import VerifyCredentials from '../../../data/services/VerifyCredentials';

const AdminModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Usamos useEffect para verificar la autenticación solo cuando los valores cambian
  useEffect(() => {
    if (username && password) {
      const verifyLogin = async () => {
        console.log("Datos que se enviarán al backend:", username, password);
        const isValid = await VerifyCredentials(username, password);
        if (isValid && isValid.success) {
          setIsAuthenticated(true);
          setError('');
          console.log('Login exitoso!', isValid.data);
        } else {
          setIsAuthenticated(false);
          setError('Usuario o contraseña incorrectos');
          console.log('Usuario o contraseña incorrectos.', isValid.error);
        }
      };

      verifyLogin();
    }
  }, [username, password]); // Se ejecuta solo cuando username o password cambian

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

      <p className="message">
        {isAuthenticated ? <div className="success-message">¡Bienvenido!</div> : <div className="error-message">{error}</div>}
      </p>

      <button className="close-button" onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default AdminModal;
