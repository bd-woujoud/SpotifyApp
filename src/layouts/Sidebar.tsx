import React from 'react'
import iconsidebar from '../assets/images/iconside.png'
import { NavLink } from 'react-router-dom'


import coeur from "../assets/images/coeur.png"
import library from "../assets/images/library.png"
function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse"   >

      <img className="img-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Logo" />

      <div className=" pt-5 sidebar-sticky">
        <ul className="nav nav-pills flex-column mb-auto">

          <li className="nav-item ">
            <a href="/" className="nav-link align-middle px-2 text-white">
              <span className="fa fa-home text-white" />
              <span className="ms-2  d-none text-white d-sm-inline">Home</span>
            </a>
          </li>
          <li>
            <a href="/search" className="nav-link align-middle px-2 text-white">
              <span className="fa fa-search text-white" />
              <span className="ms-2 d-none text-white d-sm-inline">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link pt-3 align-middle px-2 text-white">
              <img src={library} alt="" className='frame3 m-0 ' />
              <span className="ms-2 d-none d-sm-inline p-3">Your Library</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link pt-3 align-middle px-2 text-white">
              <span className="fa fas fa-plus-square" />
              <span className="ms-2 d-none d-sm-inline">Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link pt-3 align-middle px-2 text-white">
              <img src={coeur} alt="" className='frame2 m-0' />
              <span className="ms-2 d-none d-sm-inline p-3">  Liked Songs</span>
            </a>
          </li>








        </ul>

        <hr />


        <div className="sidefooter  " >
          <div className="d-inline-block me-md-3  p-1">Legal</div>
          <div className="d-inline-block me-md-3 p-1">Privacy Center</div>
          <div className="d-inline-block me-md-3 p-1">Privacy Policy</div>
          <div className="d-inline-block me-md-3 p-1">Cookies</div>
          <div className="d-inline-block me-md-3 p-1">About Ads</div>
          <div className="d-inline-block me-md-3 p-1"><img className="iconsidebar" src={iconsidebar} alt="" /></div>
          <div className="d-inline-block me-md-3 p-1">Cookies</div>
        </div>
        {/* For more settings use the AutoHTML plugin tab ... */}
        <div className="auto-world mt-2">
          <div className="formlanguage">
            <svg className="imgword" width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.15217 16.7188H8.00017C5.88512 16.6987 3.8641 15.8418 2.37916 14.3355C0.894214 12.8293 0.0662152 10.7962 0.0762623 8.68112C0.0863093 6.56599 0.933585 4.54092 2.43277 3.04884C3.93195 1.55676 5.96102 0.719116 8.07617 0.719116C10.1913 0.719116 12.2204 1.55676 13.7196 3.04884C15.2188 4.54092 16.066 6.56599 16.0761 8.68112C16.0861 10.7962 15.2581 12.8293 13.7732 14.3355C12.2882 15.8418 10.2672 16.6987 8.15217 16.7188ZM7.74217 2.51676C7.51617 2.78976 7.27917 3.22976 7.06517 3.83976C6.69617 4.89476 6.43917 6.33576 6.37817 7.96876H9.92517C9.86517 6.33576 9.60717 4.89476 9.23817 3.83976C9.02517 3.22976 8.78817 2.78976 8.56217 2.51676C8.36817 2.28176 8.23617 2.23176 8.17717 2.22076H8.13317C8.07817 2.22776 7.94317 2.27276 7.74217 2.51676ZM4.87717 7.96876C4.93917 6.19776 5.21717 4.58276 5.65017 3.34476C5.74917 3.06076 5.85817 2.79076 5.97917 2.53876C4.7985 2.92586 3.75334 3.64292 2.96724 4.60516C2.18115 5.5674 1.68699 6.73459 1.54317 7.96876H4.87717ZM1.54317 9.46875C1.68699 10.7029 2.18115 11.8701 2.96724 12.8324C3.75334 13.7946 4.7985 14.5116 5.97917 14.8988C5.85457 14.6363 5.74441 14.3672 5.64917 14.0928C5.21617 12.8548 4.93917 11.2398 4.87717 9.46875H1.54317ZM6.37817 9.46875C6.43917 11.1018 6.69617 12.5428 7.06517 13.5978C7.27917 14.2078 7.51617 14.6478 7.74217 14.9208C7.94417 15.1648 8.07817 15.2108 8.13317 15.2178L8.17717 15.2168C8.23717 15.2068 8.36717 15.1558 8.56217 14.9208C8.78817 14.6478 9.02517 14.2078 9.23817 13.5978C9.60817 12.5428 9.86417 11.1018 9.92517 9.46875H6.37817ZM11.4262 9.46875C11.3652 11.2398 11.0872 12.8548 10.6542 14.0928C10.5722 14.3278 10.4832 14.5528 10.3862 14.7668C11.4804 14.3343 12.4368 13.6132 13.1537 12.6803C13.8706 11.7473 14.3211 10.6374 14.4572 9.46875H11.4272H11.4262ZM14.4572 7.96876C14.321 6.80012 13.8705 5.69028 13.1536 4.75735C12.4367 3.82442 11.4803 3.1033 10.3862 2.67076C10.4832 2.88476 10.5722 3.11076 10.6542 3.34476C11.0872 4.58276 11.3652 6.19776 11.4262 7.96876H14.4572Z" fill="white" />
            </svg>
          </div>
          <div className="english">
            English </div>
        </div>

      </div>
    </nav>
  )
}

export default Sidebar