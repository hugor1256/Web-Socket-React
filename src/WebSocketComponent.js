import { useEffect, useState, useRef } from 'react';

const WebSocketComponent = () => {
  const [message, setMessage] = useState('');
  const socketRef = useRef(null);

  const handleMessage = (event) => {
    setMessage(event.data);
  };


  const connectWebSocket = () => {
    const newSocket = new WebSocket('ws://localhost:5000/');
    newSocket.onmessage = handleMessage;

    socketRef.current = newSocket;
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <div>
      <h1>WebSocket .Net</h1>
      <p>Mensagem do WebSocket: {message}</p>
    </div>
  );
};

export default WebSocketComponent;