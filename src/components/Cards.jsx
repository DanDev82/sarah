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
      <div className="inner mx-auto m-0 px-5 lg:px-5 pb-20">
        <h2 className="text-4xl text-center mb-10 md:mb-20 font-bold h2">My Links</h2>
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
          {/* <div className="card bg-[#7C93D4]">
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
            
          </div> */}
        </div>
        
      </div>
    </section>
  )
}

export default Cards