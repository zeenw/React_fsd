
import React from 'react'
import { Link } from "react-router-dom";

import './Accountstyle.css'

function Register() {
  return (
  		<div id="content">
			<div className ="container">
				<div className ="row">
					<div className ="col-sm-5 auth-box">
						<div className ="account-box-shadow">
							<h3 className ="account-title">Sign Up</h3>
							<form>
								<div className ="form-group row">
									<div className ="col-sm-12">
										<input type="email" placeholder="Email" name="email" className ="form-control" required="" />
									</div>
								</div>
								
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
								
								<div className ="form-group row">
									<div className ="col-sm-12">
										<input type="password" placeholder="Confirm Password" name="pass_confirmation" className ="form-control" />
									</div>
								</div>

                        <div className ="form-group row">
									<div className ="col-sm-12">
                              <select name="cars" id="cars" className ="form-control">
                                 <option value="" disabled selected>Select Role ...</option>
                                 <option value="patient">Patient</option>
                                 <option value="doctor">Doctor</option>                                 
                              </select>
									</div>
								</div>
																
								<div className ="button-btn-block">
									<button type="button" className ="btn btn-primary btn-lg btn-block">Sign Up</button>
								</div>							
								
								<div className ="auth-footer-text">
									<small>Already Sign Up,&nbsp;
                           <Link to="/login" className="nav-link">
                      Login</Link> Here</small>
								</div>
								
							</form>
							
						</div>
					</div>
				</div>
			</div>
		</div>	
	
  )
}

export default Register