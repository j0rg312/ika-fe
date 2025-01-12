
import './AdminModal.css'
import { useState } from 'react';
import VerifyCredentials from '../../../data/services/VerifyCredentials';

const AdminModal = ({ onClose }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const verifyLogin = async () => {
      const isValid = await VerifyCredentials(username, password);
      if(isValid) {
        setIsAuthenticated(true);
        console.log('Login exitoso!');
      } else {
        setIsAuthenticated(false);
        console.log('Usuario o contraseña incorrectos.');
      }
    };

    const handleChange = () => {
      setError('');
      verifyLogin();
    };
  
  return (
    <div className="login-container ">
      <h2>Iniciar Sesión</h2>
      <div className="input-group">
     
      <input id="user" className='modal-input' placeholder=' ' value={username} onChange={(e) => {setUsername(e.target.value); handleChange();}}></input>
      <label htmlFor='user' className='floating-label'>Usuario:</label>
      </div>
     <div className="input-group">
    
     <input id="password" type="password" className='modal-input' placeholder=' ' value={password} onChange={(e) => {setPassword(e.target.value); handleChange();}}></input>
     <label htmlFor='password' className='floating-label'>Contraseña:</label>
     </div>
  
    
      <button className="close-button" onClick={onClose}>Cerrar</button>
         {/* Mostrar mensaje de éxito si es autenticado */}
      {isAuthenticated && <div className="success-message">¡Bienvenido!</div>}

      {/* Mostrar mensaje de error si las credenciales no son correctas */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default AdminModal;