import React from 'react'
import {more} from '../assets'

export const Card = ({item,index}) => {
  return (
    <div key={index+1} className='flex-col flex bg-white w-100 md:w-1/5 p-2 h-max rounded-lg md:rounded-none mb-5 md:mb-0'>
      <div className='flex-row flex bg-white p-2 justify-between'>
      <div className='flex-row flex'>
          <h6 className='text-second font-medium text-lg mr-2 ml-3'>Personnel ID:</h6>
          <h6 className='text-blue font-medium text-lg'>{item?.login?.uuid && item?.login?.uuid.slice(0,6)}</h6>
      </div>
          <img className='h-8' src={more} alt="more" />
      </div>
      <div style={{width:'100%',height:'1px',backgroundColor:'#B7B7B7'}} />
      <div className='flex flex-row md:flex-col p-5'>

      <img  
      src={item?.picture?.medium && item?.picture?.medium} 
      className="rounded-full p-4 items-center h-24 w-24 md:h-48 md:w-48 md:self-center" alt="logo" loading="lazy" />

      <div className='flex flex-col'>
      <h6 className='text-Prime font-medium text-sm'>Name</h6>
      <h6 className='text-second font-normal text-md'>{item?.name?.first && item?.name?.first}{' '}{item?.name?.last && item?.name?.last}</h6>
      <h6 className='text-Prime font-medium text-sm'>Telephone</h6>
      <h6 className='text-second font-normal text-md'>{item?.cell && item?.cell}</h6>
      </div>

      <div className='md:flex flex-col hidden'>
      <h6 className='text-Prime font-medium text-sm'>Birthday</h6>
      <h6 className='text-second font-normal text-md'>{item?.dob?.date && item?.dob?.date.slice(0,10)}</h6>
      <h6 className='text-Prime font-medium text-sm'>Email</h6>
      <h6 className='text-second font-normal text-md'>{item?.email && item?.email}</h6>
      </div>

      </div>
  </div>
  )
}
