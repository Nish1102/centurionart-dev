import React, { useState } from 'react'
import Sidebar from './sidebar/SideBar';
// import './dashboardstyle.css';
import AdminHeader from './AdminHeader';
import AdminDashboard from './admindashboard/AdminDashboard';



function DashboardLayout() { 

  return (
    <div>
       {/* <AdminHeader /> */}
        <Sidebar />
        {/* <AdminDashboard/> */}
    </div>
  )
}

export default DashboardLayout;