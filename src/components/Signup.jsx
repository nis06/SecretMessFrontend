import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = ({setLoggedIn}) => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('https://secret-mess-backend.vercel.app/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful');
        setLoggedIn(true)

        // Use the navigate function to go to the dashboard
        navigate('/home');
      } else {
        // Handle signup failure
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='w-[50%] justify-center mx-auto h-auto  flex flex-col items-center mt-20 bg-rgba(255,255,255,2) border rounded-md  py-24 px-4 sm:px-6 lg:px-8 '>
    <div
            className="rounded-full absolute w-[8em] h-[8em] md:w-[12em] md:h-[12em] -z-30   bg-gradient-to-tr from-green-400 to-blue-500  left-[5%]  md:left-[22%] top-4 circle1 animate-[circle1Anim_10s_infinite]"
          ></div> 
      <h2 className=" text-center text-2xl font-bold mb-4 text-[#3e38e0]">Register</h2>
      <form className='w-full'>
        <div className=" mb-4 w-full">
         
          <input type="text" id="name"
           className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder='Name'
            />
        </div>
        <div className="mb-4">
          
          <input type="email" id="email" 
           className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           value={email} 
           onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email'

           />
        </div>
        <div className="mb-4">
          
          <input type="password" id="password" 
          className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
           value={password} onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password'
           />
        </div>
        <button type="button" 
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={handleSignup}>Signup</button>
      </form>
      <div
            class="rounded-full absolute w-[9em] h-[9em] md:w-[14em] md:h-[14em] bg-gradient-to-tl from-pink-700 to-purple-500 left-[68%] top-[25em] md:top-[19rem] circle2 -z-[20] animate-[circle2Anim_10s_infinite]"
          ></div>
    </div>
  );
};

export default Signup;