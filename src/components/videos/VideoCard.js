import React, { useEffect, useState } from 'react';
import { GiAerialSignal } from "react-icons/gi";
import moment from "moment";
import { channelImage_api } from '../../utils/constant';
import { abbreviateNumber } from 'js-abbreviation-number';
import { useSelector } from 'react-redux';

const VideoCard = ({ video }) => {
   const [channelImage,setChannelImage]=useState("");
    const {snippet,statistics}=video;
    const {publishedAt, channelTitle,channelId,title,thumbnails}=snippet;

    const isMenuOpen=useSelector((store)=> store.app.isMenuOpen)


    useEffect(()=>{
      getChannelImage();
    },[]);


    const getChannelImage=async ()=>{
      const data=await fetch(channelImage_api+"&id="+channelId);
      const json=await data.json();
      const url=json?.items[0]?.snippet?.thumbnails?.high?.url;
      setChannelImage(url)
    }

  return (
    <div className="w-full cursor-pointer h-fit">
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          className="rounded-xl w-full"
          alt="video thumbnail"
        />
      </div>
      <div className=" pt-4 dark:text-white">
        <div className="flex gap-2">
          <div className="flex flex-shrink-0 ">
            <img
              src={channelImage}
              className="rounded-[50%]  w-10 h-10  object-cover"
              alt="channel logo"
            />
          </div>
          <div className="video-detail">
            <div className="text-black font-semibold text-base leading-snug ">
              {title.length > 60 ? title.slice(0, 60) + "..." : title}
            </div>
            <div className=" text-black text-xs pt-2">{channelTitle}</div>
            <div className=" text-black text-xs pt-1">
              <span>
                {abbreviateNumber(statistics?.viewCount)}
                views
              </span>
              <span> • </span>
              <span className="text-black">{moment(publishedAt).fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// export const AdViedoCard = ({video})=>{
//   return(
//     <div className="p-1 m-1 border-2 border-red-300">
//       <VideoCard video={video}/>
//     </div>
//   )
// }

export default VideoCard;
