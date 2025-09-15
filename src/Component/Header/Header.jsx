import React from 'react'

const Header = (props) => {
  return (
    <section className='flex justify-center mt-8'>
      <div className='w-fit'>
      <span className='text-5xl font-bold w-fit text-orange-500'>{props.HFText}</span><span className=' text-5xl font-bold text-zinc-700  pb-1 '> {props.HBText}</span>
       <div className='w-[150px] h-1 bg-orange-300 ml-auto mt-4'></div>
      </div>
    </section>
  )
}

export default Header
