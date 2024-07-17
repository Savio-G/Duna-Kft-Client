import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import { saveUser } from '../../api/auth';
import { Bounce, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const { createUser, updateName } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'
  const handleRegistration = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value


    console.log(email, password, name)
    createUser(email, password)
      .then((result) => {
        const user = result.user
        // saving the user to the database from the client side
        saveUser(user)
        navigate(from, { replace: true })
        toast.info('Approval pending. Check back later for official procedings', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error.message)
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,

        });
      })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Sign Up</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">




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
                <p className='label-text-alt'>Already have an account? <Link className=' link link-hover' to="/Login">Login</Link> </p>
              </label>
            </div>
            <input type="submit" className='btn mt-4' value="Signup" />
          </form>
        </div>
      </div>



    </div>

  );
};

export default Registration;