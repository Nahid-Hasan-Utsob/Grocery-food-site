import React from 'react'

const Button = (props) => {



  return (
    <div>
      <button className='text-xl rounded-xl text-white bg-orange-400 px-7 py-4 hover:bg-orange-500 hover:scale-105 transition-all transform-300'>{props.btnContant}</button>
    </div>
  )
}

export default Button
