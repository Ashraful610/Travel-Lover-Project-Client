import React, { useState } from 'react';
import './Banner.css'
import { FaQuoteLeft ,FaQuoteRight} from 'react-icons/fa';
import { TfiLocationPin ,TfiCalendar} from "react-icons/tfi";
import { FiUsers} from "react-icons/fi";
import { useForm } from "react-hook-form";
import video1 from '../../../Videos/video-1.mp4'
import video2 from '../../../Videos/video-2.mp4'
import video3 from '../../../Videos/video-3.mp4'
import video4 from '../../../Videos/video-4.mp4'

const Banner = () => {
    const [index , setIndex] = useState(0)
    const videos = [video1 , video2 , video3 ,video4]

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        reset()
        console.log(data)
    }

    return (
        <div className='main-banner mx-auto overflow-hidden'>
            {/* ---------------- all video ------------------ */}
            <video src={video1} className={(videos.indexOf(video1)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video2} className={(videos.indexOf(video2)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video3} className={(videos.indexOf(video3)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            <video src={video4} className={(videos.indexOf(video4)=== index) ? 'bg-video active': 'bg-video'} autoPlay loop muted type='video/mp4' />
            {/* -------------- content ----------------- */}
            <div className=" lg:w-[55%] sm:w-[60%] w-[65%]  absolute xl:left-[100px] lg:left-[80px] sm:left-[50px] left-[20px] top-[250px] z-[888] space-y-5">
                {/* ----------------- banner title ------------------ */}
                <h1 className='lg:text-4xl sm:text-3xl text-xl text-white font-semibold uppercase title'>
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
            <div className='space-y-5 absolute z-[800] md:right-12 right-5 top-[260px]'>
                {
                    videos.map((video, index) =>
                     <div key={index} className='w-[10px] h-[10px] hover:scale-150 duration-200 rounded-full  bg-green-600 cursor-pointer' onClick={()=>setIndex( index)}></div> ) 
                }
            </div>
            {/* ----------------- search field div --------------------- */}
            <form onSubmit={handleSubmit(onSubmit)} className='w-6/6 xl:h-16 lg:h-14 md:h-12 h-28 absolute xl:inset-x-24 lg:inset-x-20 md:inset-x-12 inset-x-4 md:bottom-[180px] bottom-[130px] md:bg-white grid grid-cols-11 md:grid-rows-1 grid-rows-2 md:gap-0 gap-2 z-[888]'>
                 {/* ------------ where input div --------------- */}
                <div className='flex items-center md:h-full lg:px-4 px-1 md:col-span-3 col-span-5 md:bg-none bg-white'>
                  <TfiLocationPin className='lg:text-2xl text-xl lg:mr-2 mr-1 text-slate-600'/>
                  <input type="text" {...register('location',{required:'this field is required'})} placeholder='Where will you go' className='lg:placeholder:text-base placeholder:text-sm placeholder:text-slate-600 w-4/5 outline-none ' />
                </div>
                 {/* ------------ check-in date and check-out date input div --------------- */}
                <div className='flex items-center md:h-full lg:px-4 px-2 md:col-span-3 col-span-6 md:border-x-2 md:bg-none bg-white'>
                  <TfiCalendar className='lg:text-2xl text-xl lg:mr-3 mr-2 text-slate-600'/>
                  <input type="text" {...register('date',{required:'this field is required'})} placeholder='Check-in - Check-out' className='lg:placeholder:text-base placeholder:text-sm placeholder:text-slate-600 w-4/5 outline-none ' />
                </div>
                {/* ------------ guests input div --------------- */}
                <div className=' flex items-center md:h-full lg:px-4 px-2 md:col-span-3 col-span-7 md:bg-none bg-white'>
                    <FiUsers className='lg:text-2xl text-xl text-slate-600 lg:mr-3 mr-2'/>
                    <input type="text" {...register('guests',{required:'this field is required'})} placeholder='Guests' className='lg:placeholder:text-base placeholder:text-sm placeholder:text-slate-600 w-4/5 outline-none ' />
                </div>
                {/* -------------- search button ------------------- */}
                <button type='submit' className='btn h-full  rounded-none hover:bg-green-700 bg-green-700 border-none md:col-span-2 col-span-4 lg:text-base text-xs'>
                    Search
                </button>
            </form>
            {/* <div className="wave-animation wave-1"></div>
            <div className="wave-animation wave-2"></div>
            <div className="wave-animation wave-3"></div>
            <div className="wave-animation wave-4"></div> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute left-0 bottom-0'><path fill="#ffffff" fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,202.7C320,192,400,160,480,176C560,192,640,256,720,277.3C800,299,880,277,960,245.3C1040,213,1120,171,1200,176C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    );
};

export default Banner;