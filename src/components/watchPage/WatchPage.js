import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../Redux/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from '../Comments/CommentContainer';
import ChatContainer from '../Chats/ChatContainer';
import WatchPageVideoDetails from './WatchPageVideoDetails';
import { videoDetailsApi } from '../../utils/constant';
import Recommendations from '../Recommendations/Recommendations';

const WatchPage = () => {
  const [showChat, setShowChat] = useState(false); 
  const [searchParams] = useSearchParams();
  const VideoId = searchParams.get("v");
  console.log(searchParams.get("v"));

  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    // <div className='p-2 w-full pl-10 grid grid-cols-12 text-lg'>
    //   <div className='flex flex-col col-span-12 md:col-span-8 overflow-x-hidden mr-2'>

    //     <iframe
    //       data-testid="iframe"
    //       width="100%"
    //       height="450"
    //       src={"https://www.youtube.com/embed/" + VideoId + "?autoplay=1&mute=0"}
    //       title="YouTube video player"
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowFullScreen
    //       className='rounded-xl '
    //     >
    //     </iframe>
    //     <WatchPageVideoDetails VideoId={VideoId}
    //     />
    //   </div>


      // <div className='col-span-4 p-1'>
      //   <div className='w-full'>
      //     {showChat && <ChatContainer/>}
      //     <div className='w-full flex justify-center rounded-3xl '>
      //       <button
      //         data-testid="show-chat"
      //         onClick={() => setShowChat(!showChat)}
      //         className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200'
      //       >
      //         {showChat ? "Hide chat" : "Show chat"}
      //       </button>
      //     </div>
      //   </div>
      //   <Recommendations/>
      // </div>






    //   {/* <div
    //     className={`min-h-[calc(100vh-4.62rem)] dark:bg-zinc-900 dark:text-white grid grid-cols-12 md:gap-x-8 px-4 md:px-12 2xl:px-24 gap-y-4 pt-4 ${
    //       isSideBarOpen && "h-[calc(100vh-4.62rem)] overflow-x-hidden"
    //     }`}
    //   >
    //     <div className="col1 col-span-12 lg:col-span-8  ">
    //       <div className="video mb-4 ">
    //         <div className="player mb-4 h-[32vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[70vh]">
    //           <iframe
    //             width="100%"
    //             height="100%"
    //             src={`https://www.youtube.com/embed/${VideoId}?autoplay=1&modestbranding=1&rel=0`}
    //             title={"YouTube video player"}
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
    //             allowFullScreen
    //           ></iframe>
    //         </div>
    //         <WatchPageVideoDetails videoDetails={videoDetails}
    //             channelId={videoDetails?.snippet?.channelId}/>
    //       </div>
    //       <div>
    //         <button
    //           className="bg-zinc-900 text-white rounded-3xl py-1 px-3 mb-4"
    //         >
    //             Summarize
    //         </button>
    //       </div>
    //       <CommentContainer videoId={VideoId} commentCount={videoDetails?.statistics?.commentCount || 0} />

    //     </div>
    //   </div> */}


    // </div>





 <div className="">
      {/* <SideBarExpanded /> */}
      <div
        className={`min-h-[calc(100vh-4.62rem)] grid grid-cols-12 md:gap-x-8 px-4 md:px-12 2xl:px-24 gap-y-4 pt-4 ${
          isSideBarOpen && "h-[calc(100vh-4.62rem)] overflow-x-hidden"
        }`}
      >
        <div className="col1 col-span-12 lg:col-span-8  ">
          <div className="video mb-4 ">
            <div className="player mb-4 h-[32vh] md:h-[50vh] lg:h-[50vh] 2xl:h-[70vh]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VideoId}?autoplay=1&modestbranding=1&rel=0`}
                title={"YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                allowFullScreen
              ></iframe>
            </div>
            <WatchPageVideoDetails VideoId={VideoId}/>
          </div>
        </div>

        <div className='col2 col-span-12 lg:col-span-4 p-1 text-lg'>
          <div className='w-full'>
            {showChat && <ChatContainer/>}
            <div className='w-full flex justify-center rounded-3xl '>
              <button
                data-testid="show-chat"
                onClick={() => setShowChat(!showChat)}
                className='w-full py-2 border rounded-3xl my-2 hover:bg-gray-200'
              >
                {showChat ? "Hide chat" : "Show chat"}
              </button>
            </div>
          </div>
          <Recommendations/>
      </div>

      </div>
    </div>
  );
}

export default WatchPage;
