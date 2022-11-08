import React from "react";
import { FaMedium,FaTwitter,FaFacebookF,FaYoutube ,FaTelegram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-5">
          <div className="row pb-5">
            <div className="col-lg-6">
            <h1 class="footer-heading">YOUR STEPS COUNT <br/> WITH Marathon!</h1>
            <div>
              <span>
                <img src="https://farms.marathoncash.com/assets/mobileapp1.svg" alt="no" />
              </span>
              <span>
                <img className="footer-img ms-3" src="https://farms.marathoncash.com/assets/mobileapp.svg" alt="no" />
              </span>
            </div>
            </div>
            <div className="col-lg-6 text-end">
              <h1 className="fw-bold mb-3">Join Our Community</h1>
              <ul className="list-unstyled d-flex justify-content-end">
                <li className="me-2">  <FaMedium size={30}/> </li>
                <li className="me-2"> <FaTwitter size={30}/> </li>
                <li className="me-2">  <FaFacebookF size={30}/> </li>
                <li className="me-2">  <FaYoutube size={30}/> </li>
                <li className="me-2">  <FaTelegram size={30}/> </li>
              </ul>
             
            </div>
            
           
          </div>
        
         
        </div>
      </div>
      <div className="footer-below bg-dark">
        <div className="container">
        <div className="row text-white">
          <div className="col-lg-6 mt-1">
            <img className="w-25 img-fluid d-block m-auto" src="https://farms.marathoncash.com/assets/logo.png" alt="no" />
          </div>
          <div className="col-lg-6 ">
             <p className="text-center text-muted mt-3 ">Copyright © 2022 MarathonCash.Com Company All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
