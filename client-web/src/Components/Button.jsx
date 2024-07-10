import React from 'react'

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick} className='bg-[#3F51B5] px-4 py-2 font-mono text-white rounded-lg'>
        {name}
    </button>
  )
}

export default Button