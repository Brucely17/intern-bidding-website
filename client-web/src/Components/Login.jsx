import React, { useContext, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaValue) {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          username,
          password,
        });
        console.log(response);
        if (response.status === 200) {
          alert('Login successful');
          setUser(response.data)
          navigate('/')
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('There was an error logging in:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please complete the CAPTCHA');
    }
  };

  return (
    <div className='md:flex h-screen'>
      <div className='relative md:w-2/3'>
        <img src='/images/lap.jpg' className='w-full brightness-50 h-full object-cover' alt='Background' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-[#cccccc]'>
          <h1 className='md:text-5xl text-2xl font-bold font-sans'>Bidding Website</h1>
          <p className='mt-4 md:text-lg text-sm font-light'>
            This is some text on the left side. This is some text on the left side.
            This is some text on the left side. This is some text on the left side.
          </p>
        </div>
      </div>
      <div className='flex flex-col w-full md:w-1/3 bg-[#3F51B5] relative pt-64 px-10 py-12'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <h2 className='text-3xl font-bold mb-8 text-[#cccccc]'>Login</h2>
          <div className='flex flex-col mb-6'>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='p-2 border-none bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300'
              required
            />
          </div>
          <div className='flex flex-col mb-6'>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 border-none bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300'
              required
            />
          </div>
          <div className='flex flex-col mb-6 mx-auto'>
            <ReCAPTCHA
              sitekey="6LdS-A4qAAAAADwFY-7X0vWGIVdqEcCZcnb2vL2o"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
          <center>
            <button
              type="submit"
              className='bg-indigo-500 text-[#cccccc] border border-indigo-700 p-2 rounded-xl text-xl w-32 mt-8 transition duration-300 hover:bg-indigo-600'
            >
              Login
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
