import React from 'react'

const ProductCategoryCard = () => {
  return (
    <>
      <div className='flex gap-10 p-5 border-4 cursor-pointer border-blue-500 hover:scale-[1.05] duration-300 rounded-lg'>
        <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold text-black uppercase'>Computer Hardwares</h1>
            <p className='text-gray-500 text-sm'>Desktop PC</p>
            <p className='text-gray-500 text-sm'>Monitor</p>
            <p className='text-gray-500 text-sm'>PC Software</p>
            <p className='text-gray-500 text-sm'>Printers & MFDs</p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default ProductCategoryCard
