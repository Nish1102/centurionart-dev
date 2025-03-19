import React, { useState } from 'react'
import Sidebar from './sidebar/SideBar';
// import './dashboardstyle.css';
import AdminHeader from './AdminHeader';



function DashboardLayout() {

  return (
    <div>
       <AdminHeader />
        <Sidebar />
       
    </div>
  )
}

export default DashboardLayout;