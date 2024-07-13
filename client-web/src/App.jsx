import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';
import Login from './Components/Login';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const [vendor, setVendor] = useState(false);
  const [customer, setCustomer] = useState(true);
  const [login, setLogin] = useState(false);

  function handleVendor() {
    setVendor(true);
    setCustomer(false);
    setLogin(false);
  }

  function handleCustomer() {
    setCustomer(true);
    setVendor(false);
    setLogin(false);
  }

  function handleLogin() {
    setLogin(true);
    setVendor(false);
    setCustomer(false);
  }

  return (
    <>
      <div className='relative'>
        <div className='p-5 flex gap-10 justify-center absolute z-10 md:right-36 top-24'>
          <Button name={"Vendor"} handleClick={handleVendor} />
          <Button name={"Customer"} handleClick={handleCustomer} />
          <Button name={"Login"} handleClick={handleLogin} />
        </div>
      </div>
      <div>
        {vendor && !customer && !login ? <Vendor /> : ""}
        {customer && !vendor && !login ? <Customer /> : ""}
        {login && !vendor && !customer ? <Login /> : ""}
      </div>
    </>
  );
}

export default App;
