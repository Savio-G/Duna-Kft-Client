import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Login = () => {
  const { existingUser, approvalStatus } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'
  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    existingUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Login</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <p className='label-text-alt'>New here? <Link className=' link link-hover' to="/Registration">Sign Up</Link> </p>
              </label>
            </div>
            <input type="submit" className='btn mt-4' value="Login" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;