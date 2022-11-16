import React, { useState } from 'react';
import './Banner.css'
import { FaQuoteLeft ,FaQuoteRight} from 'react-icons/fa';
import { TfiLocationPin ,TfiCalendar} from "react-icons/tfi";
import { FiUsers} from "react-icons/fi";
import { AiOutlineDollar} from "react-icons/ai";
import video1 from '../../../Videos/video-1.mp4'
import video2 from '../../../Videos/video-2.mp4'
import video3 from '../../../Videos/video-3.mp4'
import video4 from '../../../Videos/video-4.mp4'

const Banner = () => {
    // const [active , setActive] = useState(false)
    const [index , setIndex] = useState(0)
    const videos = [video1 , video2 , video3 ,video4]

    return (
        <div className='main-banner mx-auto'>
            {/* ---------------- all video ------------------ */}
            <video src={video1} className={(videos.indexOf(video1)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video2} className={(videos.indexOf(video2)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video3} className={(videos.indexOf(video3)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video4} className={(videos.indexOf(video4)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            {/* -------------- content ----------------- */}
            <div className=" lg:w-[55%] sm:w-[60%] w-[65%]  absolute lg:left-[100px] sm:left-[80px] left-[30px] top-[250px] z-[888] space-y-5">
                {/* ----------------- banner title ------------------ */}
                <h1 className='lg:text-4xl sm:text-3xl text-2xl text-white font-semibold uppercase title'>
                    {/* --------------- react icons qoute left ---------- */}
                 <FaQuoteLeft className='inline-block  text-green-700 mx-2'/>   
                 The world is a book and those who do not travel read only one page
                 {/* --------------- react icons qoute right ---------- */}
                  <FaQuoteRight className='inline-block text-green-700 mx-2'/>
                </h1>
                {/* --------------- button  ------------------- */}
                <button className='btn bg-green-700 hover:bg-transparent hover:border-2 border-green-800 hover:border-green-800  font-bold' onClick={()=> console.log('hello')}>
                   Travel Now
                </button>
            </div>
            {/* ------------- change background video button div -------------  */}
            <div className='space-y-5 absolute z-[800] md:right-12 right-8 top-[260px]'>
                {
                    videos.map((video, index) =>
                     <div key={index} className='w-[10px] h-[10px] hover:scale-150 duration-200 rounded-full  bg-green-600 cursor-pointer' onClick={()=>setIndex( index)}></div> ) 
                }
            </div>
            {/* ----------------- search field div --------------------- */}
            <form className='w-5/6 h-16 bg-white absolute xl:inset-x-24 lg:inset-x-32 md:inset-x-24 inset-x-14 bottom-[100px] grid grid-cols-11 z-[888]'>
                 {/* ------------ where input div --------------- */}
                <div className='flex items-center px-2 col-span-3'>
                  <TfiLocationPin className='text-2xl mr-1 text-slate-600'/>
                  <input type="text" placeholder='Where are you going' className='placeholder:text-base placeholder:text-slate-600 w-4/5 outline-none' />
                </div>
                 {/* ------------ check-in date and check-out date input div --------------- */}
                <div className='flex items-center px-2 border-x-2 col-span-3'>
                  <TfiCalendar className='text-2xl text-slate-600 mr-2'/>
                  <input type="text" placeholder='Check-in - Check-out' className='placeholder:text-base placeholder:text-slate-600 w-4/5 outline-none' />
                </div>
                {/* ------------ guests input div --------------- */}
                <div className=' flex items-center px-2 col-span-3'>
                    <FiUsers className='text-2xl text-slate-600 mr-2'/>
                    <input type="text" placeholder='Guests' className='placeholder:text-base placeholder:text-slate-600 w-4/5 outline-none' />
                </div>
                {/* -------------- search button ------------------- */}
                <button className='btn h-full rounded-none hover:bg-green-700 bg-green-700 border-none col-span-2'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Banner;