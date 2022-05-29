import React from 'react'
import {search,plus,left,right,leftOn,rightOn} from '../assets'
import { Card } from './Card'

export const Content = ({temp,prev,next,status,long}) => {
  return (
    <div className='flex bg-base w-screen p-5 flex-col mb-10 h-fit'>

        <div className='bg-white h-auto md:h-48 w-100 m-5 py-5 flex-col md:flex-row flex justify-between px-10'>
            <div className='flex-col'>
              <h1 className='text-blue font-bold text-5xl'>Personnel List</h1>
              <h1 className='text-second font-semibold text-3xl mt-2'>List of all personnels</h1>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='bg-white h-12 border-solid border border-second m-2 p-2 flex'>
              <img className='h-8 mr-2' src={search} alt="home" />
              <input className="input" placeholder="Find Personnels" type="text">
              </input>
              </div>
              <div className='bg-blue h-12 m-2 p-2 flex justify-center items-center'>
              <h1 className='text-white font-semibold text-xl'>ADD PERSONNEL</h1>
              <img className='h-8' src={plus} alt="plus" />
              </div>
            </div>
        </div>

        <div className='bg-base h-fit w-100 m-5 flex-col md:flex-row flex md:justify-between '>
        
        {temp?.length !== 0 ?  
        temp.map((item,index) => (
         <Card item={item} index={index} key={index+1} />
        )) : null
        }

        </div>

          <div className='flex flex-row self-center mt-5'>
            <div className={`flex flex-row p-4 ${status !== 1 && `hover:cursor-pointer hover:bg-white `}`} onClick={prev}>
              <img className='h-8' src={status !== 1 ? leftOn : left} alt="left" />
              <h6 className={status !== 1 ? `text-prime font-semibold text-lg` : `text-second font-semibold text-lg`}>Previus Page </h6>
            </div>
            <div className={`flex flex-row p-4 ${status !== long && `hover:cursor-pointer hover:bg-white `}`} onClick={next}>
              <h6 className={status !== long ? `text-prime font-semibold text-lg` : `text-second font-semibold text-lg`}>Next Page </h6>
              <img className='h-8' src={status !== long ? rightOn : right}  alt="right" />
            </div>
          </div>
    </div>
  )
}
