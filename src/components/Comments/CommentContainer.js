import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { video_comments_details_api } from '../../utils/constant';
import { MdOutlineSort } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";


const CommentContainer = ({VideoId,commentCount}) => {
  const [commentslist,setCommentslist]=useState(null);

  useEffect(()=>{
    fetchComments();
  },[VideoId])

  // Fetching Comments
  const fetchComments=async ()=>{
      const data=await fetch(video_comments_details_api+VideoId);
      const jsonData=await data.json();
      setCommentslist(jsonData.items);
  }

  return commentslist==null?<div>Loading</div>:(
    <div>
      <div className="flex gap-8 items-center mb-4 ">
        <div className="font-medium ">
          {parseInt(commentCount).toLocaleString()} Comments
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <MdOutlineSort size="1.5rem" />
          <span className="font-semibold text-sm">Sort by</span>
        </div>
      </div>
      <div className="text-sm flex items-center  gap-4 my-8">
        <div className="user_pic">
          <FaCircleUser size="2.5rem" />
        </div>
        <div className="w-full ">
          <input
            className="border-b dark:border-white/50 w-full h-8 focus:outline-none py-2 focus:border-black focus:border-b-2"
            type="text"
            placeholder="Add a comment..."
          />
          <div className="flex justify-end gap-4 pt-2 font-semibold">
            <button className="hover:bg-zinc-200  px-4 py-2 rounded-full">
              Cancel
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-3xl text-gray-500">
              Comment
            </button>
          </div>
        </div>
      </div>
      <div className="comments">
        {
          commentslist.map((comment,index)=> 
            <Comment key={index} data={comment}/>
          )
        }
      </div>
    </div>
  );
}

export default CommentContainer;
