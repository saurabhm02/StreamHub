import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from '../mainContainer/MainContainer'

const Body = () => {
  return (
    <div className="grid grid-flow-col">
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body