import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCategoryCard from './ProductCategoryCard';
// import Button from './Button';

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCustomerVendor, setShowCustomerVendor] = useState(false);
  const navigate = useNavigate();

  function handleShowLogin() {
    setShowLogin(!showLogin);
    console.log(showLogin)
  }

  function handleCustomerVendor() {
    setShowCustomerVendor(!showCustomerVendor);
    console.log(showCustomerVendor);
  }

  function handleClick() {
    navigate('/bidsearchform')
  }

  function hanldeLogin() {
    navigate('/login')
  }

  function handleCustomerSignup() {
    navigate('/customer')
  }

  function handleVendorSignup() {
    navigate('/vendor')
  }

  useEffect(() => {
    if (user) {
      console.log(user.name);
      setLoading(false);
    }
  }, [user]);

  async function logoutUser() {
    await axios.post('/logout');
    navigate('/');
    setUser('')
  }

  if (loading || user === '') {
    return <div className='p-5 px-8 md:p-10 md:px-20 w-screen text-sx md:text-lg'>
      <div className='flex flex-col md:flex-row gap-5 text-center justify-between '>
        <div>
          Logo of the company
        </div>
        <div>
          Search Box
        </div>
        <div className='flex gap-2 bg-gray-300 px-5 cursor-pointer rounded-3xl mx-auto md:mx-0 py-2 w-fit relative' onClick={handleShowLogin}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>
          |
          <div>
            {user ? user.name : 'Anonymous'}
          </div>
          |
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          {showLogin ? <div className='absolute mx-auto md:mx-0 right-5 bg-gray-300 mt-8 rounded-b-xl pb-2 w-28'>
            <div className='pt-2' onClick={hanldeLogin}>Login</div>
            <hr className='border border-gray-400 w-[80%] mx-auto my-2' />
            <div className='flex gap-1 justify-center ml-2 relative' onMouseEnter={handleCustomerVendor}>
              SignUp
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              {showCustomerVendor ? <div className='absolute -right-20 md:-right-24 bg-gray-300 p-3 top-2 rounded-xl rounded-tl-none'>
                <div onClick={handleCustomerSignup}>Customer</div>
                <hr className='border border-gray-400 w-[80%] mx-auto my-2' />
                <div onClick={handleVendorSignup}>Vendor</div>
              </div> : ''}
            </div>
          </div> : ''}
        </div>
      </div>
      <hr className='mt-10 border border-gray-100' />
      {/* <div className='flex justify-center mt-10'>
        <button className='bg-[#0085ff] ml-5 text-white px-4 py-2 rounded-3xl flex gap-1' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>Place Bid
        </button>
      </div> */}
      <div className='p-16'>
        <div className='text-center text-2xl text-black'>Popular Product categories</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
      </div>
    </div>;
  }

  return (
    <div className='p-10 px-20'>
      <div className='flex justify-between'>
        <div>
          Logo of the company
        </div>
        <div>
          Search Box
        </div>
        <div className='flex gap-2 bg-gray-300 px-5 cursor-pointer rounded-3xl py-2 relative'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>
          |
          <div>
            {user ? user.name : '...'}
          </div>
          |
          <div onClick={logoutUser} className='hover:underline'>
            Logout
          </div>
        </div>
      </div>
      <hr className='mt-10 border border-gray-100' />
      <div className='flex justify-center mt-10'>
        <button className='bg-[#0085ff] ml-5 text-white px-4 py-2 rounded-3xl flex gap-1' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>Place Bid
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
