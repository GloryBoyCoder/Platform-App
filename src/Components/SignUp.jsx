import React from 'react'
import { useRef, useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {faCheck, faTimes, faInForCircle } from '@fortawesome/free-solid-svg-icons';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth';
import {app, db, analytics} from '../firebase.config'
import { initializeApp } from 'firebase/app';




function SignUp() {
  
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    //username: '',
    email: '',
    password: '',
  })
  const {name, email , password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
      {/*const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      */}
      
      try {
        console.log(db)
        console.log(initializeApp)

        const auth = getAuth()

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: name,
        })

        navigate('/')
      } catch(error) {
        console.log(error)
      }
  } 
  
    


  return (
    <>
      <div className="m-4">
        <header>
          <p 
          className=" text-3xl mt-5 mb-5 font-bold flex align-center justify-center">
            Welcome to Platform!
          </p>
        </header>
        
        <form onSubmit={onSubmit}
        className=' flex flex-col mr-auto ml-auto sm:max-w-xl '>
        <input
          className='rounded-full p-3 mb-5 w-full' 
          placeholder='Name' 
          type='text' 
          id='name' 
          value={name}
          onChange={onChange}
          />
        {/*<input
          className='rounded-full p-3 mb-5 w-full' 
          placeholder='Username' 
          type='text' 
          id='username' 
          value={username}
          onChange={onChange}
        />*/}
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
          <Link to='/Login' 
            className='text-blue-500 font-semibold text-left mt-5'>
              Sign In Instead
          </Link>
          </div>
          <div >
            <button className=' flex mr-auto ml-auto mt-5 mb-5 w-full p-3 items-center justify-center bg-blue-500 text-white rounded-full '>
              Sign Up
            </button>
          </div>
        </form>
       
      </div>  
    </>
  )
}

export default SignUp
