import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div className='mt-2'>
      <button onClick={onClick} className='rounded-md text-center w-full bg-zinc-950 text-white py-[10px]'>{text}</button>
    </div>
  )
}

export default Button