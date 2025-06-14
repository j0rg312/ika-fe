import { useState, useEffect } from 'react';
import './CallToAction.css';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Ajusta el puerto si es necesario

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const sendMessage = () => {
    if (input.trim() === '') return;

    socket.emit('mensaje', input); 
    setMessages((prev) => [...prev, { sender: 'yo', text: input }]);
    setInput('');
  };

  useEffect(() => {
    socket.on('mensaje', (msg) => {
      setMessages((prev) => [...prev, { sender: 'agente', text: msg }]);
    });

    return () => {
      socket.off('mensaje');
    };
  }, []);

  return (
    <div className="cta-container">
      <button className="cta-button" onClick={handleOpenModal}>
        <div className="cta-icon" style={{ fontSize: '2.5rem' }}>
          <IoChatbubbleSharp />
        </div>
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Chat de Consulta</h2>

            <div style={{ height: 200, overflowY: 'auto', background: '#f9f9f9', padding: '10px', marginBottom: 10 }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ textAlign: msg.sender === 'yo' ? 'right' : 'left' }}>
                  <span style={{
                    background: msg.sender === 'yo' ? '#d1e7dd' : '#cfe2ff',
                    padding: '5px 10px',
                    borderRadius: 8,
                    display: 'inline-block',
                    marginBottom: '5px'
                  }}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              style={{ width: '80%', padding: '6px' }}
            />
            <button onClick={sendMessage} style={{ width: '18%', marginLeft: '2%' }}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToAction;
