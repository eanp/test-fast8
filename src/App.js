import React, { useEffect, useState } from 'react'
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

const API = "https://randomuser.me/api/?results=28"

export default function App() {
  const [data,setData] = useState([])
  const [temp,setTemp] = useState([])
  const [status,setStatus] = useState(1)
  const [long,setLong] = useState(1)

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    showData()
  },[data])

  const next = () => {
    status !== long && showData(status+1)
    }
  const prev = () => {
    status !== 1 &&  showData(status-1)
  }

  const showData = async(point = 1) => {
    let max = 4 * point
    setTemp(data.results.slice(max-4,max))
    setStatus(point)
  }

  const fetchData = async() => {
    const response = await fetch(API)
    const data = await response.json()
    setData(data)
    if(data?.info?.results){
       let dataLong = data?.info?.results 
       setLong(dataLong/4)
    }
  }

  return (
    <div>
    <Navbar />
      <div className='flex flex-col w-full h-full md:flex-row md:h-full'>
      
      <Sidebar />

      <Content temp={temp} prev={prev} next={next} status={status} long={long} />
      </div>
    </div>
  )
}
