import React, { useEffect, useState } from 'react';
import { videoDetailsApi } from '../../utils/constant';
import moment from 'moment';
import { abbreviateNumber } from 'js-abbreviation-number';


const RecommendationVideo = ({data}) => {

    const videoId=data?.contentDetails?.upload?.videoId;
    const [videoDetails,setVideoDetails]=useState(null);

    useEffect(()=>{
        fetchVideoDetails();
    },[])

    const fetchVideoDetails=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+videoId);
        const jsondata=await data.json();
        setVideoDetails(jsondata?.items[0]);
    }

    if(videoDetails==null) return <div></div>

    const {channelId,channelTitle,publishedAt,title}=videoDetails?.snippet;
    const {url}=videoDetails?.snippet?.thumbnails?.medium;
    const {viewCount}=videoDetails?.statistics;
    const {duration}=videoDetails?.contentDetails;

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');


  return (
    // <div className='flex  gap-2 md:gap-4  lg:gap-2 xl:gap-4 cursor-pointer mb-4 '>
    //     <div className='h-[80px] sm:h-[96px] relative top-0 left-0 lg:w-[150px] lg:flex-none xl:w-[200px] xl:h-[120px] '>
    //         <img
    //         src={url}
    //         className='rounded-xl w-full h-full object-cover'
    //         alt='video thumbnail'
    //         />
    //         <div className='absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded-md text-xs text-white'>
    //         {_duration}
    //         </div>
    //     </div>
    //     <div>
    //         <div >
    //         <div className='font-semibold text-sm md:text-base lg:text-sm leading-tight md:leading-normal lg:leading-tight h-[50%]  '>
    //             {title.length > 32 ? title.slice(0, 32) + '...' : title}
    //         </div>
    //         <div className='small h-[50%]  '>
    //             <div className='channel-name text-xs xl:text-sm pt-2'>{channelTitle}</div>
    //             <div className='text-xs '>
    //             <span>{Intl.NumberFormat('en', {notation: "compact"}).format(viewCount)} views</span>
    //             <span> • </span>
    //             <span>{moment(publishedAt).fromNow()}</span>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    // </div>

    <div className='grid grid-cols-12 flex mb-3 ml-1'>
        {/* Thumbnail */}
        <div className='mr-2 col-span-5'>
            <img className='h-24 w-80 rounded-lg ' alt="thumbnail" src={url}/>
        </div>
        {/* Video Details */}
        <div className='col-span-7'>
            <p className='line-clamp-2 mt-1 font-semibold text-sm'>{title}</p>
            <p className='line-clamp-1 text-sm text-gray-700 dark:text-slate-300'>{channelTitle}</p>
            <div className='flex line-clamp-1 text-sm text-gray-500 items-center'>
                <p className='mr-1 dark:text-slate-200 '>{abbreviateNumber(viewCount)} views</p>
                <span className='mx-1 dark:text-slate-200 '>.</span>
                {/* <p className='dark:text-slate-200 '>{PublishedTimeOfVideo(publishedAt)}</p> */}
            </div>
        </div>
    </div>
  )
}

export default RecommendationVideo