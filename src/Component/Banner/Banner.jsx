import React from 'react'


const Banner = ({title, bgimage}) => {

  return (
    <div className='bg-zinc-400 h-[50vh] mt-20 flex justify-center items-center  bg-cover relative bg-center' style={{backgroundImage: `url(${bgimage})`}}>
      <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10' 
      
      >{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
} 

export default Banner
