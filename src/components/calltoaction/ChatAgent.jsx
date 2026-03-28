"use client";
// AgenteChat.jsx
import { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';

// Socket.io deshabilitado temporalmente - habilitar cuando el backend tenga WebSocket server
// const socket = io('http://localhost:3000');

const AgenteChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // socket.on('mensaje', (msg) => {
    //   setMessages((prev) => [...prev, { sender: 'cliente', text: msg }]);
    // });

    // return () => {
    //   socket.off('mensaje');
    // };
  }, []);

  const sendMessage = () => {
    if (input.trim() === '') return;
    // socket.emit('mensaje', input);
    setMessages((prev) => [...prev, { sender: 'agente', text: input }]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h3>Chat Agente</h3>
      <div style={{ height: 200, overflowY: 'auto', background: '#eee', padding: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'agente' ? 'right' : 'left' }}>
            <span style={{
              background: msg.sender === 'agente' ? '#f8d7da' : '#d1e7dd',
              padding: '5px 10px',
              borderRadius: 8,
              margin: 5,
              display: 'inline-block'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Responder..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        style={{ width: '80%' }}
      />
      <button onClick={sendMessage} style={{ width: '18%' }}>Enviar</button>
    </div>
  );
};

export default AgenteChat;
