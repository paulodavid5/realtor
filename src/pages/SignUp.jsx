import { useState } from "react"
import OAuth from "../components/OAuth"

//react-router
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router";

//library
import  {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
//toast
import { toast } from "react-toastify"

//firebase

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {db} from '../firebase'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";



export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const {name,email,password} = formData;
  const navigate = useNavigate()
  function onChange(e){
   setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value
   }))
  }

  async function onSubmit(e){
    e.preventDefault()

    try {
      const auth = getAuth()
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      updateProfile(auth.currentUser, {
        displayName: name
      })
      const user = userCredentials.user
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      toast.success('Sign-up was successful!')
      navigate('/')
    } catch (error) {
      // eslint-disable-next-line no-undef
      toast.error('Something went wrong with the registration.')
    }
  }

  return (
    <section>
    <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
    <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-6">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%]" >
        <form onSubmit={onSubmit}>
          <div>
          <input 
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6" 
          type="text" 
          id="name" 
          value={name} 
          onChange={onChange} 
          placeholder="Full name" 
          />
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
            <p className="mb-6">Have a account?
              <Link to='/sign-in' className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">Sign In</Link>
            </p>
            <p>
              <Link to='/forgot-password' className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1">Forgot password?</Link>
            </p>
          </div>
          <button 
        className="w-full bg-blue-600 text-white text-sm font-medium uppercase rounded shadow-md px-7 py-3 hover:bg-blue-700 transition duration-150  ease-in-out hover:shadow-lg active:bg-blue-800"
        type="submit">Sign Up</button>
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
