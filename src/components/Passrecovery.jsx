



import React, { useState,Link } from 'react';
import { useNavigate } from 'react-router-dom';

const Passrecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = async () => {
    try {
      const response = await fetch('https://secret-mess-backend.vercel.app/auth/recoverpass', {
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
    <div className='max-w-md justify-center mx-auto h-auto  flex flex-col items-center mt-20  bg-rgba(255,255,255,2) border rounded-md  py-12 px-4 sm:px-6 lg:px-8  '>
     <div
            className="rounded-full absolute w-[8em] h-[8em] md:w-[12em] md:h-[12em] -z-30   bg-gradient-to-tr from-green-400 to-blue-500  left-[5%] md:left-[22%] top-4 circle1 animate-[circle1Anim_10s_infinite]"
          ></div> 
      <h2 className="text-center text-2xl font-bold mb-4 text-[#3e38e0]">Change Password</h2>
      <form className='w-full'>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-sky-900">Email</label>
          <input type="email" id="email" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500  text-sky-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-sky-900">New Password</label>
          <input type="password" id="newPassword" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-sky-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-sky-900">Confirm Password</label>
          <input type="password" id="confirmPassword" 
         className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500  text-sky-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="button" 
       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handlePasswordChange}>Update</button>
      </form>

      <div
            class="rounded-full absolute w-[9em] h-[9em] md:w-[14em] md:h-[14em] bg-gradient-to-tl from-pink-700 to-purple-500 left-[60%] top-[25em] md:top-[19rem] circle2 -z-[20] animate-[circle2Anim_10s_infinite]"
          ></div>
    </div>
  );
};

export default Passrecovery;
