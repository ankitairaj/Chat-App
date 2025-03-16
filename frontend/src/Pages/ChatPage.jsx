import axios from 'axios';
import React, { useState } from 'react';

const ChatPage = () => {
    const [data, setData] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/chats');
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = () => fetchChats();

    return (
        <div>
            <button onClick={handleChange}>
                Chat
            </button>
            <div>
                {data.length > 0 ? (
                    data.map((chat, index) => (
                        <div key={index} style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
                            <p><strong>ID:</strong> {chat._id}</p>
                            <p>
                                <strong>Users:</strong>{" "}
                                {chat.users.map((user, i) => (
                                    <span key={i}>
                                        {user.name}
                                        {user.email}
                                        {i < chat.users.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </p>
                            <p><strong>ChatName:</strong> {chat.chatName}</p>
                            <p><strong>Message:</strong> {chat.message}</p>
                        </div>
                    ))
                ) : (
                    <p>No chats available</p>
                )}
            </div>
        </div>
    );
};

export default ChatPage;
