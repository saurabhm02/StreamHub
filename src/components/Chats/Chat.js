import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
const Chat = ({name, text}) => {
  return (
    <div className='p-2 flex items-center bg-gray-50 mb-2 text-lg'>
      <BiUserCircle className="text-2xl" alt="user-Icon" />
      <p className='font-bold px-2'>{name}</p>
      <p>{text}</p>
</div>
  )
}

export default Chat