import React, { useState } from 'react';
import './Banner.css'
import video1 from '../../../Videos/video-1.mp4'
import video2 from '../../../Videos/video-2.mp4'
import video3 from '../../../Videos/video-3.mp4'
import video4 from '../../../Videos/video-4.mp4'

const Banner = () => {
    const [video , setVideo] = useState(video1)
    const videos = [video1 , video2 , video3 ,video4]

    return (
        <div className='main-banner'>
            <video src={video} className='bg-video' autoPlay loop muted type='video/mp4' />
            <div className='space-y-5 absolute right-12 top-1/2'>
                {
                    videos.map((video , index) =>
                     <div key={index} className='w-[15px] h-[15px] hover:scale-150 duration-200 rounded-full bg-sky-300' onClick={()=> setVideo(video)}></div> ) 
                }
            </div>
        </div>
    );
};

export default Banner;