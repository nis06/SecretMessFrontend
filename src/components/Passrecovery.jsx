



import React, { useState,Link } from 'react';
import { useNavigate } from 'react-router-dom';

const Passrecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/recoverpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newpassword: newPassword, confirmPassword: confirmPassword }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        // Password updated successfully
        alert('Password updated successfully');
  
        // Navigate to the home page or any other desired destination
        navigate('/');
      } else {
        // Handle password update failure with more specific error messages
        console.error('Unable to change password', responseData.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error while updating password:', error.message || 'Unknown error');
    }
  };
  

  return (
    <div className='max-w-md justify-center mx-auto h-auto  flex flex-col items-center mt-20  bg-zinc-950 border rounded-md  py-12 px-4 sm:px-6 lg:px-8  '>
      <h2 className="text-center text-2xl font-bold mb-4 text-[#3e38e0]">Change Password</h2>
      <form className='w-full'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input type="email" id="email" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-zinc-800 border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-200">New Password</label>
          <input type="password" id="newPassword" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-zinc-800 border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">Confirm Password</label>
          <input type="password" id="confirmPassword" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-zinc-800 border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="button" 
       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handlePasswordChange}>Update</button>
      </form>

      
    </div>
  );
};

export default Passrecovery;
