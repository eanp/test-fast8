import React from 'react'
import {home,users,calendar} from '../assets'


export const Sidebar = () => {
  return (
    <div className='md:flex bg-white w-full md:w-1/5 flex-col hidden sm:hidden w-100'>
        <div className='flex flex-row items-center px-5 py-4 hover:bg-blue hover:text-white'>
            <img className='h-8' src={home} alt="home" />
            <h1 className='text-prime font-semibold ml-2'>Beranda</h1>
        </div>
        <div className='flex flex-row items-center px-5 py-4 hover:bg-prime'>
            <img className='h-8' src={users} alt="users" />
            <h1 className='text-blue font-semibold ml-2'>Personnel List</h1>
        </div>
        <div className='flex flex-row items-center px-5 py-4 hover:bg-blue '>
            <img className='h-8' src={calendar} alt="calendar" />
            <h1 className='text-prime font-semibold ml-2'>Daily Atten</h1>
        </div>
    </div>
  )
}
