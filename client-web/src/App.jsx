
import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Customer from './Components/Customer';
import Vendor from './Components/Vendor';

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
      <div className='p-5 flex gap-10 justify-center'>
        <Button name={"Vendor"} handleClick={() => handleVendor()} />
        <Button name={"Customer"} handleClick={() => handleCustomer()} />
      </div>
      <div>
        {vendor && !customer ? <Vendor/> : ""}
        {customer && !vendor ? <Customer/> : ""}
      </div>
    </>
  )
}

export default App;