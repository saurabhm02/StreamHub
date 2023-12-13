import React, { useEffect, useState } from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";
import {PiShareFatThin} from "react-icons/pi";
import {FiMoreHorizontal} from "react-icons/fi";
import {TfiShare, TfiDownload, TfiMoreAlt} from "react-icons/tfi";
import moment from "moment";
import CommentContainer from '../Comments/CommentContainer';
import ChannelDetails from './ChannelDetails';
import { videoDetailsApi } from '../../utils/constant';

const WatchPageVideoDetails = ({ VideoId }) => {
    const [videoDetails,setvideoDetails]=useState(null);
    const [desc, setDesc] = useState("");
    const [showButton, setShowButton] = useState("Show More");




    const fetchData=async ()=>{
        const data=await fetch(videoDetailsApi+"&id="+VideoId);
        const json=await data.json();
        setvideoDetails(json?.items[0]);
    }
    useEffect(()=>{
        fetchData();
    },[VideoId])

    const {channelId,channelTitle,description,tags,title,publishedAt}=videoDetails?.snippet || {};
    const {commentCount,likeCount,viewCount}=videoDetails?.statistics || {};


    useEffect(() => {
        if (description) {
            if (description.length > 100) {
                setDesc(description.slice(0, 100) + "...");
            } else {
                setDesc(description);
            }
        }
    }, [videoDetails]);

    const toggleShowButton = () => {
        if (showButton === "Show More") {
            setDesc(description);
            setShowButton("Show Less");
        } else {
            setDesc(description.slice(0, 100) + " ...");
            setShowButton("Show More");
        }
    };


    return (
        <div className="">
            <div className="font-bold text-lg mb-2">
                {title}
            </div>
            <div className="flex justify-between flex-wrap gap-y-4 gap-2 items-center">
                <div className=" flex gap-2 items-center">
                    <ChannelDetails channelId={channelId} channelTitle={channelTitle} />
                    <div className=" ml-2">
                        <button className="bg-black  text-sm text-white rounded-2xl px-4 py-2 ">
                            {" "}
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex items-center flex-wrap gap-2 text-sm">
                    <div className=" flex bg-gray-200  rounded-2xl p-2">
                        <button className=" flex gap-1 items-center pr-2">
                            <div className="">
                                <BiLike size="1.2rem" className="text-gray-600 " />
                            </div>
                            <div className="">
                                {Intl.NumberFormat("en", { notation: "compact" }).format(
                                        likeCount
                                )}
                            </div>
                        </button>
                        <button className="cursor-pointer">
                            <div className="border-l-2 border-black/20  pl-2">
                                <BiDislike size="1.2rem" className="text-gray-600" />
                            </div>
                        </button>
                    </div>
                    <button className="flex items-center gap-2 bg-gray-200 rounded-2xl p-2">
                        <TfiShare />
                        <span>Share</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-200  rounded-2xl p-2">
                        <TfiDownload />
                        <span>Download</span>
                    </button>
                    <button className="flex items-center gap-2 bg-gray-200 rounded-2xl p-2 ">
                        <TfiMoreAlt />
                    </button>
                </div>
            </div>
            <div className=" mt-4 text-sm p-4 bg-gray-100 rounded-xl">
                <div className="flex gap-4 font-bold pb-1">
                    <div className=" ">
                        {Intl.NumberFormat("en", { notation: "compact" }).format(
                            viewCount
                        )}{" "}
                        views
                    </div>
                    <div>
                        {moment(publishedAt).fromNow()}
                    </div>
                </div>
                <div className="whitespace-pre-wrap break-words ">
                    {desc}
                    {description?.length > 100 && (
                        <button className="font-bold block" onClick={toggleShowButton}>
                            {showButton}
                        </button>
                    )}
                </div>
            </div>


            <div className='p-2'>
                <CommentContainer VideoId={VideoId} commentCount={commentCount}/>
            </div>
        </div>
    );
}

export default WatchPageVideoDetails;