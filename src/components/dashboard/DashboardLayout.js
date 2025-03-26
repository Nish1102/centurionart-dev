import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';


function DashboardLayout() { 

  return (
    <div style={{background: '#f8f8f8cc'}}>
        <Sidebar />
    </div>
  )
}

export default DashboardLayout;