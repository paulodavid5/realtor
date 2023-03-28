import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import  {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import OAuth from "../components/OAuth"

import { signInWithEmailAndPassword,getAuth } from "firebase/auth"
import {toast} from 'react-toastify'

export default function SignIn() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email,password} = formData;
  function onChange(e){
   setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value
   }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      if (userCredentials.user){
        navigate('/')
      }
    } catch (error) {
      toast.error('Wrong email or password.')
    }
  }

  return (
    <section>
    <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
    <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-6">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%]" >
        <form onSubmit={onSubmit}>
          <div>
          <input 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6" 
          type="email" 
          id="email" 
          value={email} 
          onChange={onChange} 
          placeholder="Email Address"
          />
          </div>
          <div className="relative mb-6">
          <input 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" 
          type={showPassword ? 'text' : 'password'} 
          id="password" 
          value={password} 
          onChange={onChange} 
          placeholder="Password"
          />
          {
            showPassword ? (
              <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} />
            ): (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)}/>)
          }
          </div>
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="mb-6">Don't have a account?
              <Link to='/sign-up' className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">Register</Link>
            </p>
            <p>
              <Link to='/forgot-password' className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1">Forgot password?</Link>
            </p>
          </div>
          <button 
        className="w-full bg-blue-600 text-white text-sm font-medium uppercase rounded shadow-md px-7 py-3 hover:bg-blue-700 transition duration-150  ease-in-out hover:shadow-lg active:bg-blue-800"
        type="submit">Sign In</button>
        <div className="flex my-4 items-center before:border-t before:flex-1  before:border-gray-300
        after:border-t after:flex-1  after:border-gray-300">
          <p 
          className="text-center font-semibold mx-4"
          >OR</p>
        </div>
        <OAuth />
        </form>
        
        
      </div>
    </div>
    </section>
  )
}
