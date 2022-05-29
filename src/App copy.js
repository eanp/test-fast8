import React, { useState } from 'react'

export default function App() {
  const [data,setData] = useState('wiw')
  return (
    <div className="text-3xl font-bold underline text-red-500" onClick={()=>{setData('wow')}}>{data}</div>
  )
}
