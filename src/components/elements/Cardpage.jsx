import React from 'react'
import { useLocation } from "react-router-dom";

const Cardpage = () => {

    const location = useLocation();
    // console.log(location.state)
    const value = location.state;

  return (
    <>
    <div className="cardpage">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center top">
                    
                    <img src={value.img} alt="no"
                    className='cardpage-img' />
                   
                   
                    <h1>{value.textfirst}</h1>
                    <p>Deposit BUSD Tokens and Earn MRACE</p>
                </div>
            </div>
            <div className="row below my-3 ">
                <div className="col-lg-6 cardp-left">
                <div className="card px-5">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <div >
                    <img src="https://farms.marathoncash.com/assets/logo-cr.png" alt="no"
                     className='img-fluid ' />
                  </div>
                  <div className='d-flex align-items-center text-center'>
                    <h4 className='fw-bold text-center '>MRACE</h4>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className='d-flex justify-content-between text-center'>
                  <div>
                    <p>
                   Earned
                    </p>
                    <p>0.00</p>
                  </div>
                  <div>
                    <button className='btn '>Harvest</button>
                  </div>
                </div>
              </div>
            </div>
                </div>
                <div className="col-lg-6 cardp-left">
                <div className="card px-5">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <div >
                    <img src={value.img} alt="no"
                     className='img-fluid ' />
                  </div>
                  <div className='d-flex align-items-center text-center'>
                    <h4 className='fw-bold text-center '>{value.textfirst}</h4>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className='d-flex justify-content-between text-center'>
                  <div>
                    <p>
                    Stcked
                    </p>
                    <p>0.00</p>
                  </div>
                  <div>
                    <button className='btn '>Approve</button>
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cardpage