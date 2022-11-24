import React from 'react'
import { Link } from "react-router-dom";
import './Accountstyle.css'

function Login() {
  return (
   <div id="content">
      <div className ="container">
         <div className ="row">
            <div className ="col-sm-5 auth-box">
               <div className ="account-box-shadow">
                  <h3 className ="account-title">Login</h3>
                  <form>
                     <div className ="form-group row">
                        <div className ="col-sm-12">
                           <input name="user" placeholder="Username" className ="form-control" required="" />
                        </div>
                     </div>
                     
                     <div className ="form-group row">
                        <div className ="col-sm-12">
                           <input type="password" placeholder="Password" name="password" className ="form-control" />
                        </div>
                     </div>                                          
                     <div className ="button-btn-block">
                        <button type="button" className ="btn btn-primary btn-lg btn-block">Login</button>
                     </div>							
                     
                     <div className ="auth-footer-text">
                        <small>New User,&nbsp; 
                        <Link to="/register" className="nav-link">Sign Up</Link> Here</small>
                     </div>
                     
                  </form>
                  
               </div>
            </div>
         </div>
      </div>
   </div>	
  )
}

export default Login