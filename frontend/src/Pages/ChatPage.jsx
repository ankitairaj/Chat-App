import axios from 'axios';
import React, { useEffect } from 'react'

const ChatPage = () => {
    const fetchChats = async () => {
        const data = await axios.get('127.0.0.1:5000')
  .then(response => {
    console.log(response.data); // The HTML content
    console.log(response.status); // 200
    console.log(response.headers['content-type']); // 'text/html'
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    }
    useEffect(() => {
        fetchChats();
    }, []);
  return (
    <div>
      Chat
    </div>
  );
};

export default ChatPage
