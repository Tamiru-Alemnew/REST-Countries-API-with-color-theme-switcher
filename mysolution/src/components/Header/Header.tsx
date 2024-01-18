import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Header() {
  return (
    <div className="bg-white flex justify-between shadow-md p-4 text-lg px-12">
      <h1 className="font-semibold">Where in the world?</h1>
      <button className='flex items-center gap-2 font-semibold'>
        <FontAwesomeIcon icon={faMoon} className='w-5 h-5'/>
        Dark Mode
      </button>
    </div>
  );
}

export default Header