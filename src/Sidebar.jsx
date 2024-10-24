import React from 'react'
import {  BsGrid1X2Fill,BsMenuButtonWideFill } from 'react-icons/bs'
     import { IoMdAnalytics } from "react-icons/io";
     
import { SiGoogleadsense } from "react-icons/si";
import { IoLogoEuro } from "react-icons/io"

function Sidebar(openSidebarToggle, OpenSidebar) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <IoLogoEuro className='icon_header'/>EzyMetrics
            </div>
        
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <SiGoogleadsense  className='icon'/>Leads
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdAnalytics className='icon'/>Analytics
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/>Report
                </a>
            </li>

        </ul>
        
    </aside>
  )
}

export default Sidebar