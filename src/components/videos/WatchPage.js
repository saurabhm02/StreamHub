import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../../Redux/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from '../Comments/CommentContainer';

const WatchPage = () => {
  
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
       <div className="flex flex-col">
            <div className="flex w-[900px]">
                <iframe
                    width="900"
                    height="600"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <CommentContainer/>  
       </div>
    )
}

export default WatchPage