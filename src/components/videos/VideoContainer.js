import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../../utils/constant';
import VideoCard, { AdViedoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from '../../utils/Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  let date = new Date();
  date = encodeURIComponent(date.toJSON());
  let publishedAfter = new Date(Date.now() - 150 * 24 * 60 * 60 * 1000);
  publishedAfter = encodeURIComponent(publishedAfter.toJSON());




  useEffect(()=>{
    getVideos();
  }, []);
  const getVideos = async() =>{
    try{
      const data = await fetch(YOUTUBE_VIDEO_API);
      const response = await data.json();
      // console.log(response.items);
      setVideos(response.items);
    }
    catch(error){
      console.error("Error data:", error);
    }
  }
  return videos?.length === 0 ? (
      <Shimmer />
  ) : (
      <div
        className=" grid justify-center justify-items-center grid-cols-[repeat(auto-fill,minmax(310px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
          pt-6 px-8 overflow-x-hidden"
      >
        {
        videos.map(video => {
          return(
              <Link key={video.id} to={`/watch?v=${video.id}`}>
                <VideoCard video={video}/>
              </Link>
          )
        })
      }
              
      </div>
  );
};

export default VideoContainer;