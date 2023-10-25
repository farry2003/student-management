import React, { useState } from "react"
import { Link } from "react-router-dom";
import Modal from 'react-modal'
const Login = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [name, setName] = useState("")
	const [isStudent, handleRoles] = useState("")

	return (
		<>
			<div className="limiter">
				<div className="container-login100" >
					{/* <div className="container-login100" style={{float : 'left', paddingRight : '5px'}}> */}
					<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
						<form className="login100-form validate-form flex-sb flex-w">
							<span className="login100-form-title p-b-53">
								Sign In As
							</span>

							<a href="/students" className="btn-face m-b-20">
								<i className="fas fa-users-cog"></i>
								Admin
							</a>
							{/* to="/my-details/Isaac%20Bowen" */}
							<a href="/faculty" className="btn-face m-b-20">
								<i className="fas fa-users-cog"></i>
								<div>Faculty</div>
								
							</a>
							<a href="http://127.0.0.1:5500" className="btn-face m-b-20">
								<i className="fas fa-users-cog"></i>
								<div>dashboard</div>
								
							</a>
							<div className=" btn-google m-b-20 cursor" onClick={() => { setModalIsOpen(true) }}>
								<i className="fas fa-user-graduate"></i>
								<div>Student</div>
							</div>
							{/* <div >
								<div className="p-t-31 p-b-9" >
									<span className="txt1"  >
										Student Name
						</span>
								</div>
								<div className="wrap-input100 validate-input" data-validate="Username is required">
									<input className="input100" type="text" name="username" />
									<span className="focus-input100"></span>
								</div> */}
							{/* </div> */}

							<div className="p-t-13 p-b-9">
								{/* <span className="txt1">
							Password
						</span> */}

								{/* <a href="#" className="txt2 bo1 m-l-5">
							Forgot?
						</a> */}
							</div>
							{/* <div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass"/ >
						<span className="focus-input100"></span>
					</div> 

							 {/* <div className="container-login100-form-btn m-t-17">
                        <Link to="/students">
						<button className="login100-form-btn">
							Register
						</button>
                        </Link>
					</div>  */}

							<div className="w-full text-center p-t-55">
						<span className="txt2">
							<h3>Not a member?</h3>
						</span>

						<a href="/add-student" className="txt2 bo1">
							<h3>Sign up now</h3>
						</a>
					</div>
						</form>

						<Modal className="shadow bd-example-modal-lg m-5" tabindex="-1" role="dialog" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
							<div className="modal-dialog bg-body-secondary  " role="document">
								<div className="modal-content  ">
									<div className="modal-header">
										<h5 className="modal-title">Login as a student</h5>
										<button type="button" onClick={() => setModalIsOpen(false)} className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="wrap-input100 validate-input" data-validate="Username is required">
											<input className="input100" type="text" name="username" placeholder="enter student name" value={name} onChange={(e) => setName(e.target.value)} />
											<span className="focus-input100"></span>
										</div>
										<small>*Name should be exactly same as per records</small>
									</div>
									<div className="modal-footer">
										{/* <button type="button" className="btn btn-primary">Save changes</button> */}
										<Link to={`/my-detailsStu/${name}`}>
											<button type="button" className="btn " data-dismiss="modal">Student login</button>
										</Link>
									</div>
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</>
	)


}

export default Login;
