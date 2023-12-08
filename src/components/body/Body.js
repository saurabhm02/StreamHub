import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from '../mainContainer/MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="grid grid-flow-col grid-cols-[225px_minmax(900px,_1fr)_100px]">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body