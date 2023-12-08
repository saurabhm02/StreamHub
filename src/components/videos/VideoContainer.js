import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

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
  return (
    <div className="flex flex-wrap justify-start">
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
  )
}

export default VideoContainer;