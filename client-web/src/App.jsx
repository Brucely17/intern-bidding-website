import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import axios from 'axios';
import { AuthProvider } from './AuthContext';
import BidSearchForm from './Components/BidSearch/BidSearchForm';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  function handleVendor() {
    navigate('/vendor');
  }

  function handleCustomer() {
    navigate('/customer');
  }

  function handleLogin() {
    navigate('/login');
  }

  return (
    <>
      {/* {location.pathname === '/vendor' || location.pathname === '/customer' || location.pathname === '/login' || location.pathname === '/' &&   (
        <div className='relative'>
          <div className='p-5 flex gap-10 justify-center absolute z-10 md:right-36 top-24'>
            <Button name={"Vendor"} handleClick={handleVendor} />
            <Button name={"Customer"} handleClick={handleCustomer} />
            <Button name={"Login"} handleClick={handleLogin} />
          </div>
        </div>
      )} */}
      <div>
        <Routes>
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/bidsearchform' element={<BidSearchForm/>}/>
        </Routes>
      </div>
    </>
  );
}

function MainApp() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default MainApp;
