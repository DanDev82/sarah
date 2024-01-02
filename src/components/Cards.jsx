import React from 'react'
import { IoOpenOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaBagShopping } from 'react-icons/fa6'
/***** 
 * Light Blue #C7E9F1
 * Lemon Chiffon #FEF9C8
 * Thistle #F0CDFD
 * Vista Blue #7C93D4
 * Fairy Tale #F9C8DD
*/


function Cards() {
  return (
    <section>
      <div className="inner mx-auto m-0 px-5 lg:px-5 pb-20">
        <h2 className="text-4xl text-center mb-10 md:mb-20 font-bold h2">My <span className="text-[#7c93d4]">Links</span></h2>
        <div className="card-row  mb-40">
          <div className="card bg-[#C7E9F1] facebook">
            <a href="https://www.facebook.com/profile.php?id=61553238343927">
              <span className="mr-4"><FaFacebookF className="text-5xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
          </div>
          <div className="card bg-[#FEF9C8] instagram">
            <a href="https://www.instagram.com/magicalmombossaffiliate/">
              <span className="mr-4"><FaInstagram className="text-5xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
          </div>
          <div className="card bg-[#F0CDFD] tiktok">
            <a href="https://www.tiktok.com/@magicalmombossaffiliate">
              <span className="mr-4"><FaTiktok className="text-5xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
          </div>
          <div className="card bg-[#7C93D4] shop">
            <a href="https://magicalmomboss.gumroad.com/">
              <span className="mr-4">My Shop</span>
              <IoOpenOutline className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#F9C8DD] systeme">
            <a href="https://magicalmomboss.systeme.io/">
              <span className="mr-4">Get Started</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#C7E9F1] facebook">
            <a href="https://www.canva.com/design/DAF4fSgJIPs/X-wxe4LV05zYO8euIDLjHw/view?utm_content=DAF4fSgJIPs&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <span className="mr-4">Disney Pack List</span>
              <IoOpenOutline className="text-2xl"/>  
            </a>
            
          </div>
          {/* 
          <div className="card bg-[#FEF9C8]">
            <a href="#">
              <span className="mr-4">Card 7</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#F0CDFD]">
            <a href="#">
              <span className="mr-4">Card 8</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#7C93D4]">
            <a href="#">
              <span className="mr-4">Card 9</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div> */}
        </div>
        
      </div>
    </section>
  )
}

export default Cards