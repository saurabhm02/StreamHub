import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { video_recommendations_api } from '../../utils/constant';
import RecommendationVideo from './RecommendationVideo';
import { ShimmerRecommemdedVideo } from '../../utils/Shimmer';
import { Link } from 'react-router-dom';

const Recommendations = () => {

    const channelId=useSelector((store)=> store.channelId.channelId);
    const [recVideoList,setRecVideoList]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])
  
    const fetchData=async ()=>{
        const data=await fetch(video_recommendations_api+channelId);
        const jsondata=await data.json();
        setRecVideoList(jsondata?.items);
    }
  
    return recVideoList==null?<div>
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
      {
        // Recommended Video Lists
        recVideoList.map((recvideo,index)=> <Link to={"/watch?v="+recvideo?.contentDetails?.upload?.videoId} key={index}><RecommendationVideo data={recvideo}/></Link> )
      }
    </div>
  )
}

export default Recommendations