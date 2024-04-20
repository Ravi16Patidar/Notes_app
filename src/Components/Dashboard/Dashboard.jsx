import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideNav/SideNav'

function Dashboard() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'50px'}}>
      <div>
      {/* <Navbar/> */}
      </div>
     
      <div>
      <SideBar/>
      </div>
    </div>
  )
}

export default Dashboard