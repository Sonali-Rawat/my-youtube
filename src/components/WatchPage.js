import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {
  const [searchParams]= useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <div className='px-5'>
      <iframe
      width="1200"
      height="600"
      src={'https://www.youtube.com/embed/'+searchParams.get("v")}
      title='YouTube video player'
      
      >
      </iframe>
    </div>
  )
};

export default WatchPage;