import React from 'react'
import TagList from '../tagList/TagList'
import VideoContainer from '../videoContainer/VideoContainer'

const MainContainer = () => {
  return (
    <div className="col-span-11">
        <TagList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer