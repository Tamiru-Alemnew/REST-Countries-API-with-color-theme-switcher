import React from 'react'

function Header() {
  return (
    <div className='bg-white flex justify-between shadow-md p-4 text-lg px-12'>
        <h1 className='font-semibold'>
            Where in the world?
        </h1>
        <button >
            Dark Mode
        </button>
    </div>
  )
}

export default Header