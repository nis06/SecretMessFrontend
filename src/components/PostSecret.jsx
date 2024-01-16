


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostSecret = () => {
  const [name, setName] = useState('');
  const [message, setMess] = useState('');
  const [error, setError] = useState('');

  const handlemessage = async () => {
    try {
      const response = await fetch('https://secret-mess-backend.vercel.app/secretMessage/mess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to post message');
      }else{
        alert('post submitted successfully')
      }

      // Clear the form after successful submission
      setName('');
      setMess('');
      setError('');
    } catch (error) {
      console.error('Error while posting message', error);
      setError('Failed to post message. Please try again.');
    }
  };

  return (
    <div className='w-11/12 justify-center mx-auto mt-20'>
      <h2 className='text-center text-2xl font-bold mb-4 text-[#3e38e0]'>Post Secret Message</h2>
      <form className='max-w-md mx-auto'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-200'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='mt-1 p-2 border-gray-900 border-[2px] rounded w-full bg-zinc-800  text-gray-200'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-200'>
            Your secret message
          </label>
          <input
            type='text'
            id='message'
            className='mt-1 p-2 border-gray-900 border-[2px] rounded w-full bg-zinc-800 text-gray-200'
            value={message}
            onChange={(e) => setMess(e.target.value)}
          />
        </div>

        <button
          type='button'
          className='bg-blue-500 text-white px-4 py-2 rounded ml-0'
          onClick={handlemessage}
        >
          Post
        </button>

        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </form>

      <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
          
            <Link to="/allmess" className="font-medium text-indigo-600 hover:text-indigo-500">
              See all
            </Link>
          </p>
        </div>
    </div>
  );
};

export default PostSecret;
