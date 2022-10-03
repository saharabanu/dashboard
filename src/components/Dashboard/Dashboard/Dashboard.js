import React from 'react';
import '../Dashboard/Dashboard.css'
import DashNavbar from '../DashNavbar';
import DashBodyHead from './DashBodyHead';
import DashBodyRight from './DashBodyRight';
import DashSidebar from './DashSidebar';

const Dashboard = () => {
  return (
    <>
      <DashNavbar/>
      <main>
        <DashSidebar/>
        <DashBodyHead/>
        <DashBodyRight/>
       
      </main>
      
    </>
  )
}

export default Dashboard