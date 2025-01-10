
import './AdminModal.css'

const AdminModal = ({ onClose }) => {
  return (
    <div className="login-container ">
      <h2>Iniciar Sesión</h2>
      <div className="input-group">
     
      <input id="user" className='modal-input' placeholder=' '></input>
      <label htmlFor='user' className='floating-label'>Usuario:</label>
      </div>
     <div className="input-group">
    
     <input id="password" type="password" className='modal-input' placeholder=' '></input>
     <label htmlFor='password' className='floating-label'>Contraseña:</label>
     </div>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default AdminModal;