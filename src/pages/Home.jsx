import React from 'react'
import Chat from '../comp/Chat'
import Sidebar from '../comp/Sidebar'

const Home = () => {
  return (
    <div className="home"> 
    <div className="container">
        <Sidebar/>
        <Chat/>
    </div>
    </div>
    )
}

export default Home

