import React, { useEffect, useState } from 'react';
import { videoDetailsApi } from '../../utils/constant';
import moment from 'moment';
import { abbreviateNumber } from 'js-abbreviation-number';
import { decode } from 'html-entities';


const RecommendationVideo = ({ video }) => {
    const [videoDetails,setVideoDetails]=useState(null);

    const {
        id: { videoId },
        snippet: {
          publishedAt,
          title,
          thumbnails: { medium },
          channelTitle,
        },
      } = video;

      const newTitle = decode(title);


    useEffect(()=>{
        fetchVideoDetails();
    },[])

    const fetchVideoDetails=async ()=>{
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=${videoId}&key=AIzaSyB8msfjO04lXVEyknHCWjbmelwdhb8cfGg`);
        const jsondata=await data.json();
        setVideoDetails(jsondata?.items[0]);
    }

    if(videoDetails==null) return <div></div>

    // const {channelId,channelTitle,publishedAt,title}=videoDetails?.snippet;
    // const {url}=videoDetails?.snippet?.thumbnails?.medium;
    // const {viewCount}=videoDetails?.statistics;
    // const {duration}=videoDetails?.contentDetails;

    const seconds = moment.duration(videoDetails.contentDetails.duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');


  return (
    <div className='flex  gap-2 md:gap-4  lg:gap-2 xl:gap-4 cursor-pointer mb-4 '>
        <div className='h-[80px] sm:h-[96px] relative top-0 left-0 lg:w-[150px] lg:flex-none xl:w-[200px] xl:h-[120px] '>
            <img
            src={medium.url}
            className='rounded-xl w-full h-full object-cover'
            alt='video thumbnail'
            />
            <div className='absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded-md text-xs text-white'>
            {_duration}
            </div>
        </div>
        <div>
            <div >
            <div className='font-semibold text-sm md:text-base lg:text-sm leading-tight md:leading-normal lg:leading-tight h-[50%]  '>
            {newTitle.length > 32 ? newTitle.slice(0, 32) + '...' : newTitle}
            </div>
            <div className='small h-[50%]  '>
                <div className='channel-name text-xs xl:text-sm pt-2'>{channelTitle}</div>
                <div className='text-xs '>
                <span>{Intl.NumberFormat('en', {notation: "compact"}).format(videoDetails.statistics.viewCount)} views</span>
                <span> • </span>
                <span>{moment(publishedAt).fromNow()}</span>
                </div>
            </div>
            </div>
        </div>
    </div>


  )
}

export default RecommendationVideo