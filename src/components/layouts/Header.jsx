import React from "react";



const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container ">
          <div className="row mt-2  ">
            <div className="col-lg-6">
              <img className="img-fluid w-25" src="https://farms.marathoncash.com/assets/logo-cr.png" alt="no" />
             <span className=""> MarathonCash.Com</span>
            </div>
            <div className="col-lg-6 ">
              <button className="header-btn ms-auto d-block mt-3">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
