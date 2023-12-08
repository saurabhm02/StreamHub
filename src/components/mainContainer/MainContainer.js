import React from 'react'
import TagList from '../tagList/TagList'
import VideoContainer from '../videos/VideoContainer'

const MainContainer = () => {
  return (
    <div className="px-3 col-span-11">
        <TagList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer