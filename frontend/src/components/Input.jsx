import React from 'react'

const Input = ({inputFor, placeholder, type}) => {
  return (
    <div className='flex flex-col gap-2 mb-3'>
      <span className='text-[16px] font-medium'>{inputFor}</span>
      <input className='outline-none border px-4 py-[11px] rounded-md' type={type || "text"} placeholder={placeholder || ""}/>
    </div>
  )
}

export default Input