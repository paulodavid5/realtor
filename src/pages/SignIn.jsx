import { useState } from "react"
import  {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

export default function SignIn() {
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

  return (
    <section>
    <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
    <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto gap-6">
      <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
        <img className="w-full rounded-2xl" src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div className="w-full md:w-[67%] lg:w-[40%]" >
        <form action="" method="post" className="">
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
        </form>
      </div>
    </div>
    </section>
  )
}
