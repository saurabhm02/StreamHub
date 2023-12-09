import React from 'react'
import TagList from '../tagList/TagList'
import VideoContainer from '../videos/VideoContainer'

const MainContainer = () => {
  return (
    <div className="flex-1 bg-white transition-all duration-500">
        <TagList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer