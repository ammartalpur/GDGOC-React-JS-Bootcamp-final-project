import React from 'react'
import Client1 from '../assets/client-1.svg'
import Client2 from '../assets/client-2.svg'
import Client3 from '../assets/client-3.svg'
import Client4 from '../assets/client-4.svg'
import rightPic from '../assets/image-hero-desktop.png'
import '../index.css';


const Body = () => {
  return (
    <div className='flex justify-between'>
    <div className='w-1/2'>
      <div className="heading mx-20 my-10 text-6xl font-bold">
        <h1>Make</h1>
        <h1>Remote Work</h1>
      </div>
      <div className="para mx-20 w-1/2 text-gray-500">
        <p>Get your tean in sync, no matter your location. Streamline processes, create a team rituals, and watch productivity soar.</p>
      </div>
      <div className="btn mx-20 my-9 ">
      <button className='bg-black  text-white py-2 px-6 rounded-xl font-semibold hover:bg-white hover:font-bold hover:text-black hover:border-2 hover:border-black'>Learn More</button>
      </div>
      <div className="clients flex gap-4 mx-10 my-10 w-[133px] h-[33px] ">
<img src={Client2} alt="" />
<img src={Client1} alt="" />
<img src={Client4} alt="" />
<img src={Client3} alt="" />
      </div>
    </div>
    <div className='mr-14'>
        <img className='w-96 h-[450px]' src={rightPic} alt="" />
    </div>
    </div>
  )
}

export default Body;
