import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from '../mainContainer/MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body