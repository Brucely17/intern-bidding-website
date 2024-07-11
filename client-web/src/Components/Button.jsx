import React from 'react'

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick} className='bg-[#757de8] transform translate hover:scale-[1.05] duration-300 px-4 py-2 font-mono text-white rounded-lg'>
        {name}
    </button>
  )
}

export default Button