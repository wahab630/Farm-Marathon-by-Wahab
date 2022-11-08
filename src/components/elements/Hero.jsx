import React from 'react'


const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className='hero-h1'>FARM</h1>
            <p className='hero-p'>Stake your tokens to earn more $MRACE.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 hero-left">
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <img src="https://farms.marathoncash.com/assets/logo-cr.png" alt="no"
                     className='img-fluid w-50' />
                  </div>
                  <div className=''>
                    <h4 className='fw-bold'>Your MRACE Balance</h4>
                    <h4 className='fw-bold text-center hero-h4'>0.00</h4>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p>
                    Pending Harvest
                    </p>
                    <p>Daily Output of MRACE</p>
                  </div>
                  <div>
                    <p>
                    0.00 MRACE
                    </p>
                    <p>0.00 MRACE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className="col-lg-6 hero-left">
            <div className="card">
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <img src="https://farms.marathoncash.com/assets/logo-cr.png" alt="no"
                     className='img-fluid w-50' />
                  </div>
                  <div className=''>
                    <h4 className='fw-bold'>Your MRACE Balance</h4>
                    <h4 className='fw-bold text-center hero-h4'>0.00</h4>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p>
                    Pending Harvest
                    </p>
                    <p>Daily Output of MRACE</p>
                  </div>
                  <div>
                    <p>
                    0.00 MRACE
                    </p>
                    <p>0.00 MRACE</p>
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

export default Hero