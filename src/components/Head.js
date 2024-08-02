import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch= useDispatch();
  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
       <div className='flex col-span-1' >
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer' alt='menu' src='https://t3.ftcdn.net/jpg/06/03/56/12/360_F_603561270_GZglHCD6MSitdjmheO1Mw15g2c6N6WO9.png' />
       <a href='/'>
       <img className='h-10 mx-2' alt='youtube-logo' src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png' />
       </a>
       </div>
       <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
       </div>
       <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/552/552721.png'/>
       </div>

    </div>
  )
}

export default Head