import React from 'react'
import { IoOpenOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
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
      <div className="inner mx-auto">
        <h2 className="text-4xl text-center mb-10 font-bold">My Links</h2>
        <div className="card-row ">
          <div className="card bg-[#C7E9F1]">
            
            <a href="https://www.facebook.com/profile.php?id=61553238343927">
              <span className="mr-4"><FaFacebookF className="text-4xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
            
          </div>
          <div className="card bg-[#FEF9C8]">
            <a href="https://www.instagram.com/magicalmombossaffiliate/">
              <span className="mr-4"><FaInstagram className="text-4xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
            
          </div>
          <div className="card bg-[#F0CDFD]">
            <a href="https://www.tiktok.com/@magicalmombossaffiliate">
              <span className="mr-4"><FaTiktok className="text-4xl"/></span>
              {/* <IoOpenOutline  className="text-2xl"/>   */}
            </a>
            
          </div>
          <div className="card bg-[#7C93D4]">
            <a href="#">
              <span className="mr-4">Card 4</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#F9C8DD]">
            <a href="#">
              <span className="mr-4">Card 5</span>
              <IoOpenOutline  className="text-2xl"/>  
            </a>
            
          </div>
          <div className="card bg-[#C7E9F1]">
            <a href="#">
              <span className="mr-4">Card 6</span>
              <IoOpenOutline className="text-2xl"/>  
            </a>
            
          </div>
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
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards