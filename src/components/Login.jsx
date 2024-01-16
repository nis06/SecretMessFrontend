import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://secret-mess-backend.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        // Assuming the response contains some authentication token or user information
        const responseData = await response.json();
  
        // Set authentication state to true
        setLoggedIn(true);
  
        // Use the navigate function to go to the dashboard or home page
        navigate('/home');
      } else {
        // Handle other status codes if needed
        setError('Invalid credentials. Please try again.');
      }

    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="h-auto  flex items-center justify-center -z-20  mt-20 mx-auto bg-rbga(0,0,0,2) border rounded-md w-[50%] py-12 px-4 sm:px-6 lg:px-8">
     <div
            className="rounded-full absolute w-[8em] h-[8em] md:w-[12em] md:h-[12em] -z-30   bg-gradient-to-tr from-green-400 to-blue-500  shadow-md left-[5%] md:left-[22%] top-4 circle1 animate-[circle1Anim_10s_infinite]"
          ></div>  
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#3e38e0]">Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  text-sky-900   bg-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  text-sky-900   bg-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="mt-2 text-sm text-red-600" id="error">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              className="group z-60 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't remember your password?{' '}
            <Link to="/passrecover" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot Password
            </Link>
          </p>
        </div>
        <div
            class="rounded-full absolute w-[9em] h-[9em] md:w-[14em] md:h-[14em] bg-gradient-to-tl from-pink-700 to-purple-500 left-[61%] top-[25em] md:top-[19rem] circle2 -z-[5] animate-[circle2Anim_10s_infinite]"
          ></div>
      </div>
    </div>
  );
};

export default Login;
