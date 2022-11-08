import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  return (
    <>
    <div className="loginpage">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 l-left">
                    <div className="img-box">
                    <img className='img-fluid' src="assets/login.png" alt="no" />
                    </div>
                    
                </div>
                <div className="col-md-6 col-lg-6 l-right">
                    <div className="content-box">
                        <div className="body">
                            <h2>Login Page</h2>
                            <form action="">
                            <div className='mb-4 mt-4'>
                            <label htmlFor="">Username</label>
                            <input type="text" />
                            </div>
                            <div>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" />

                            </div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span>Remember me</span>
                            </div>
                            <div>
                                <input type="submit" value="Sign in" />
                            </div>
                            <div>
                                <p>Don't have an account?  <a href="no">Sign up</a> </p>
                            </div>
                            </form>
                            <h4 className='text-center'>Login with social media</h4>
                            <div className='d-flex justify-content-center'>
                                <span><FaFacebook size={30}/> </span><span className='ms-2 me-2'><FaInstagram size={30}/> </span><span><FaTwitter size={30}/></span>
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

export default LoginPage