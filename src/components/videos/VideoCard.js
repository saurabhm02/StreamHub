import React from 'react';

const VideoCard = ({ video }) => {
  const { snippet = {}, statistics = {} } = video ?? {};
  const { title, thumbnails = {}, channelTitle, publishedAt} = snippet;

  return (
    <div className="h-fit cursor-pointer p-2 m-2 shadow-lg w-[294px]">
      <img src={thumbnails.medium?.url} alt={title}
        className="w-full rounded-xl" 
       />
      <ul className='flex justify-start items-start'>
        <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={thumbnails?.default?.url} />
        <div>
          <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
         <div className="flex gap-1 text-sm">
            <li className='text-gray-500 text-[13px]'>{channelTitle}</li>
            {/* <li className='text-gray-500 text-[13px]'>{video?.statistics?.viewCount ? formatCompactNumber(info?.statistics?.viewCount) : 0} views  {(Math.abs(new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li> */}
            <span> • </span>
            <li className = "text-gray-500 text-[13px]">{video?.statistics?.viewCount}</li>
         </div>
        </div>
      </ul>
    </div>
  );
};


export const AdViedoCard = ({video})=>{
  return(
    <div className="p-1 m-1 border-2 border-red-300">
      <VideoCard video={video}/>
    </div>
  )
}

export default VideoCard;
