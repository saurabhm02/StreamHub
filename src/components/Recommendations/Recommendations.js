import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { video_recommendations_api } from '../../utils/constant';
import RecommendationVideo from './RecommendationVideo';
import { ShimmerRecommemdedVideo } from '../../utils/Shimmer';
import { Link } from 'react-router-dom';

const Recommendations = ({ videoId, videoTitle }) => {
    const [suggestedVideos, setSuggestedVideos] = useState(null); 
    const channelId=useSelector((store)=> store.channelId.channelId);
    

    useEffect(()=>{
      searchVideoByKeyword();
    },[])
    const searchVideoByKeyword = async (searchText) => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=${searchText}&order=viewCount&videoDuration=medium&key=AIzaSyB8msfjO04lXVEyknHCWjbmelwdhb8cfGg`);
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error);
        throw new Error(data.error.message);
      }
      return data.items;
    };

    useEffect(()=>{
      getSuggestedVideos();
    },[])
    const getSuggestedVideos = async () => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=25&type=video&key=AIzaSyB8msfjO04lXVEyknHCWjbmelwdhb8cfGg`);
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error);
        return searchVideoByKeyword(videoTitle);
      }
      setSuggestedVideos(data.items);
    };


  
    return suggestedVideos === null?<div>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
        <ShimmerRecommemdedVideo/>
    </div>:(
    <div>
      {/* {
        recVideoList.map((recvideo,index)=> <Link to={"/watch?v="+recvideo?.contentDetails?.upload?.videoId} key={index}><RecommendationVideo data={recvideo}/></Link> )
      } */}

      {suggestedVideos.length > 0 &&
        suggestedVideos.map((suggestedVideo) => {
          return (
            <Link
              to={`/watch?v=${suggestedVideo?.id?.videoId}`}
              key={suggestedVideo?.id?.videoId}
            >
              <RecommendationVideo video={suggestedVideo}/>
            </Link>
          );
        } )
      }
    </div>
  )
}

export default Recommendations;


