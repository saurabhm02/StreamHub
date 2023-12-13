// import React from 'react'
// import { abbreviateNumber } from 'js-abbreviation-number';
// import {AiOutlineDislike} from "react-icons/ai"
// import {AiOutlineLike} from "react-icons/ai"
// import {FiMoreVertical} from "react-icons/fi"

// const Comment = ({data}) => {
//   data=data?.snippet?.topLevelComment?.snippet;

//   // Destructing the Data
//   const {authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textDisplay}=data;
 
//   return (
//     <div className='flex mb-2'>
//         {/* user Image */}
//         <img className="w-10 h-12 mr-4 py-1 rounded-full" alt='user' src={authorProfileImageUrl}/>

//         {/* Comment , user name, likes */}
//         <div className=' w-full'>
//           <div className='flex'>
//             <p className='mr-2 text-base font-semibold'>@{authorDisplayName.split(" ").join("")}</p>
//             <p className=''>{publishedAt.split("T")[0]}</p>
//           </div>
//           {/* Comment Text */}
//           <p className=''>{textDisplay}</p>

//           {/* Like Bar */}
//           <div className='flex my-1 items-center'>
//             <AiOutlineLike className='text-xl'/>
//             <p className='text-center mx-2'>{abbreviateNumber(likeCount)}</p>
//             <AiOutlineDislike className='text-xl'/>
//           </div>
//         </div>

//         {/* More */}
//         <div className='mr-3 mt-3 text-xl flex justify-end w-full'>
//           <FiMoreVertical/>
//         </div>
        
//     </div>
//   )
// }

// export default Comment

import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import moment from 'moment';

const Comment = ({ data }) => {

  if (!data?.snippet?.topLevelComment?.snippet) {
    return <div>Error: Invalid comment data</div>;
  }

  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
  } = data.snippet.topLevelComment.snippet;

  return (
    // <div className='flex mb-2'>
    //   {/* user Image */}
    //   <img className="w-10 h-12 mr-4 py-1 rounded-full" alt='user' src={authorProfileImageUrl} />

    //   {/* Comment , user name, likes */}
    //   <div className=' w-full'>
    //     <div className='flex'>
    //       <p className='mr-2 text-base font-semibold'>@{authorDisplayName.split(' ').join('')}</p>
    //       <p className=''>{publishedAt.split('T')[0]}</p>
    //     </div>
    //     {/* Comment Text */}
    //     <p className=''>{textDisplay}</p>

    //     {/* Like Bar */}
    //     <div className='flex my-1 items-center'>
    //       <AiOutlineLike className='text-xl' />
    //       <p className='text-center mx-2'>{abbreviateNumber(likeCount)}</p>
    //       <AiOutlineDislike className='text-xl' />
    //     </div>
    //   </div>

    //   {/* More */}
    //   <div className='mr-3 mt-3 text-xl flex justify-end w-full'>
    //     <FiMoreVertical />
    //   </div>
    // </div>






     <div className='mb-6'>
      <div
        className={`flex gap-4 items-center text-sm `}
      >
        <img
          className='w-10 flex-none  object-contain rounded-full'
          src={
            authorProfileImageUrl
          }
          onError={(e) => {
            e.target.src =
              'https://yt3.ggpht.com/ytc/AL5GRJXYMUyYVz1EPxe9KqJYg2Ga5rYfgnSPdzGKfw=s48-c-k-c0x00ffffff-no-rj';
          }}
          alt='user'
        />
        <div>
          <div className='flex gap-4 pb-1'>
            <div className='font-bold text-xs '>
              {authorDisplayName}
            </div>
            <div>
              {moment(
                publishedAt
              ).fromNow()}
            </div>
          </div>
          <div>
            {textDisplay}
          </div>
          <div className=' flex gap-4 pt-2'>
            <button className='cursor-pointer flex gap-1 items-center  '>
              <div className=' hover:bg-zinc-200 p-2 rounded-full'>
                <BiLike size='1.2rem' className='text-gray-600' />
              </div>
              <div>
                {Intl.NumberFormat('en', { notation: 'compact' }).format(
                  likeCount
                )}
              </div>
            </button>
            <button className='cursor-pointer flex gap-1 items-center hover:bg-zinc-200 p-2 rounded-full'>
              <div className=''>
                <BiDislike size='1.2rem' className='text-gray-600' />
              </div>
            </button>
            <span className='font-semibold cursor-pointer text-xs hover:bg-zinc-200 py-2 px-4 rounded-2xl'>
              Reply
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
