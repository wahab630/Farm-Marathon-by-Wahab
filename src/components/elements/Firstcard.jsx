import React from 'react'


const Firstcard = () => {
    
  return (
    <>
    <div className="firstcard">
        
    <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center top">
                    
                    <img src="https://farms.marathoncash.com/assets/logo-cr.png" alt="no"
                    className='cardpage-img' />                  
                     <h1>MRACE</h1>
                    <p>Deposit MRACE Tokens and Earn MRACE</p>
                </div>
            </div>
            <div className="row below my-3 ">
                <div className="col-lg-6 cardp-left">
                <div className="card px-5">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <div >
                    <img src="https://farms.marathoncash.com/assets/coin/GMT94.png" alt="no"
                     className='img-fluid ' />
                  </div>
                  <div className='d-flex align-items-center text-center'>
                    <h4 className='fw-bold text-center '>GMT</h4>
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

export default Firstcard