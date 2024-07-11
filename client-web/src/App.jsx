
import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  const [vendor, setVendor] = useState(false);
  const [customer, setCustomer] = useState(true);

  function handleVendor() {
      setVendor(true);
      setCustomer(false);
  }

  function handleCustomer() {
     setCustomer(true);
     setVendor(false);
  }

  return (
    <>
    <div className='relative'>
    <div className='p-5 flex gap-10 justify-center absolute z-10 md:right-36 top-24'>
        <Button name={"Vendor"} handleClick={() => handleVendor()} />
        <Button name={"Customer"} handleClick={() => handleCustomer()} />
      </div>
    </div>
      <div>
        {vendor && !customer ? <Vendor/> : ""}
        {customer && !vendor ? <Customer/> : ""}
      </div>
    </>
  )
}

export default App;