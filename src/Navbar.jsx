import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=' bg-purple-700 text-white font-bold flex justify-between h-10 items-center'>
        <div className='md:ml-3 '>Your Personal Task Manager</div>
        <div className='flex gap-3 md:gap-10 '><span className='hover:text-black transition-all duration-500'>Home</span>
        <span className='md:mr-10 mr-2 hover:text-black transition-all duration-1000'>Your Tasks</span></div>
        </div>
    </div>
  )
}

export default Navbar