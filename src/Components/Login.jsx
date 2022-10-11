import React from 'react';
import styledComponents from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {faCheck, faTimes, faInForCircle } from '@fortawesome/free-solid-svg-icons';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) =>( {
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  } 

  return (
    <>
      <div className="m-4">
        <header>
          <p className=" text-3xl mt-5 mb-5 font-bold flex align-center justify-center">Welcome back!</p>
        </header>
        
        <form className=' flex flex-col mr-auto ml-auto sm:max-w-xl '>
          <input
          className='rounded-full p-3 mb-5 w-full' 
          placeholder='Email' 
          type='email' 
          id='email' 
          value={email}
          onChange={onChange}
          />
          <div className='mr-auto ml-auto w-full sm:max-w-xl'>
            <input 
            className='rounded-full p-3  mb-5 w-full' 
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            id='password'
            onChange={onChange}
            />
             
          </div>
          <div className='flex justify-between'>
            <Link to='/SignUp' 
            className='text-blue-500 font-semibold text-left'>
              Sign Up
            </Link>
            <Link to='/forgot-password'
            className='text-right #fd1200 text-blue-500 font-normal mb-10'>
              Forgot Password
            </Link>
          </div>
          <div className=' flex mr-auto ml-auto w-full p-3 items-center justify-center bg-blue-500 text-white rounded-full'>
            <button>
              Sign in
            </button>
          </div>
        </form>
        
      </div>  
    </>
  )
}

export default Login