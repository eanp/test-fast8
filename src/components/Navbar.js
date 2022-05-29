import React from 'react'
import logo from '../logo.png';
import {menu} from '../assets'

export const Navbar = () => {
  return (
    <div>
        <div className='flex h-24 justify-between flex-row px-5'>

        <div className='flex flex-row items-center'>
          <img className='sm:h-24 visible sm:invisible flex items-center' src={menu} alt="menu" />
          <img src={logo} className="h-12 ml-5 md:ml-0" alt="logo" loading="lazy" />
        </div>

            <div className='flex flex-row '>
            <div className='flex flex-row items-center p-4 invisible sm:visible'>
              <h2 className='text-prime font-medium	px-1'>Hallo,{' '}</h2>
              <h2 className='text-blue font-medium'>Gadjian User</h2>
            </div>
              <img src="https://randomuser.me/api/portraits/thumb/men/1.jpg" className="rounded-full p-4 items-center" alt="logo" loading="lazy" />
            </div>
        </div>
    </div>
  )
}
