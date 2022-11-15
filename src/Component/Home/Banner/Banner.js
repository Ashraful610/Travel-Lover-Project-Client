import React, { useState } from 'react';
import './Banner.css'
import { FaQuoteLeft } from 'react-icons/fa';
import video1 from '../../../Videos/video-1.mp4'
import video2 from '../../../Videos/video-2.mp4'
import video3 from '../../../Videos/video-3.mp4'
import video4 from '../../../Videos/video-4.mp4'

const Banner = () => {
    // const [active , setActive] = useState(false)
    const [index , setIndex] = useState(0)
    const videos = [video1 , video2 , video3 ,video4]

    return (
        <div className='main-banner'>
            <video src={video1} className={(videos.indexOf(video1)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video2} className={(videos.indexOf(video2)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video3} className={(videos.indexOf(video3)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video4} className={(videos.indexOf(video4)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <div className="content space-y-5">
                <h1 className='text-4xl text-white font-semibold uppercase title'>
                <FaQuoteLeft/>   The world is a book and those who do not travel read only one page
                </h1>
                <p className='text-lg text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum est aut possimus necessitatibus consectetur amet repudiandae quod similique, voluptate libero, debitis iste eos pariatur labore odio corrupti. Facilis, voluptate?</p>
                <button className='btn bg-green-700 hover:bg-transparent hover:border-2 border-green-800 hover:border-green-800  font-bold' onClick={()=> console.log('hello')}>
                   Travel Now
                </button>
            </div>
            <div className='space-y-5 absolute z-[800] right-12 top-1/2'>
                {
                    videos.map((video, index) =>
                     <div key={index} className='w-[10px] h-[10px] hover:scale-150 duration-200 rounded-full bg-white hover:bg-green-500 cursor-pointer' onClick={()=>setIndex( index)}></div> ) 
                }
            </div>
        </div>
    );
};

export default Banner;