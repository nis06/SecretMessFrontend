
import React, { useEffect, useState } from 'react';

const Allmess = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:4000/secretMessage/allmess');

        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }

        const data = await response.json();
        console.log('API response:', data);

        // Assuming the messages array is under the "message" property
        setMessages(data.message);
        setError('');
      } catch (error) {
        console.error('Error while fetching messages', error);
        setError('Failed to fetch messages. Please try again.');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className='w-11/12 justify-center mx-auto mt-20'>
      <h2 className='text-center text-2xl font-bold mb-4 text-[#3e38e0] '>All Messages</h2>

      {error && <p className='text-red-500 mt-2'>{error}</p>}

      <div className='flex flex-col '>
        {messages.map((message, index) => (
          <div key={message._id} className='bg-zinc-800 text-gray-200 font-semibold text-lg rounded-md p-3 m-2'>
            <span className='mr-2'>{index + 1}.</span> {message.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allmess;
