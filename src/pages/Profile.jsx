import { useState } from "react"
import { useNavigate } from "react-router"

//firebase
import {getAuth, updateProfile} from 'firebase/auth'

import { toast } from "react-toastify"
import { db } from "../firebase"
import { doc, updateDoc } from "firebase/firestore"



export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false)

const [formData, setFormData] = useState({
  name: auth.currentUser.displayName,
  email: auth.currentUser.email,
})

const {name, email} = formData

function onLogout() {
  auth.signOut()
  navigate('/')
}

function onChange(e) {
  setFormData((prevState) =>({
    ...prevState,
    [e.target.id]: e.target.value,
  }))
}

async function onSubmit(){
try {
  if(auth.currentUser.displayName !== name){
    //update display name
    await updateProfile(auth.currentUser, {
      displayName: name,
    })

    //update name in firestore
    const docRef = doc(db, 'users', auth.currentUser.uid)
    await updateDoc(docRef, {
      name,
    })
  }
  toast.success('Profile updated successfully!')
} catch (error) {
  toast.error('Could not update the profile details.')
}
}

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
          <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
          <div className="w-full md:w-[50%] mt-6 px-3">
            <form>
              <input type="text" id='name' value={name} disabled={!changeDetail} onChange={onChange} 
              className={`
              w-full 
              px-4 
              py-2
              mb-6 
              text-xl 
              text-gray-700 
              bg-white border 
              border-gray-300 
              rounded 
              transition 
              ease-in-out ${changeDetail && 'bg-red-200 focus:bg-red-200'}`}
              />
              <input type="email" name="" id="email" value={email} disabled={!changeDetail}  onChange={onChange}
              className="
              w-full
              px-4 
              py-2
              mb-6 
              text-xl 
              text-gray-700
              bg-white border 
              border-gray-300 
              rounded 
              transition 
              ease-in-out"
              />

              <div className="
              flex 
              justify-between 
              whitespace-nowrap
              text-sm
              sm:text-lg
              ">
                <p
                className="
                flex
                items-center
                "
                >Do you want to change your name?
                  <span
                  onClick={() => { 
                    changeDetail && onSubmit()
                    setChangeDetail((prevState)=>!prevState)
                  }} 
                  className="
                  text-red-600 
                  hover:text-red-700 
                  transition 
                  ease-in-out
                  duration-200
                  ml-1
                  cursor-pointer
                  ">{changeDetail ? 'Apply Change' : 'Edit'}</span>
                </p>
                <p
                onClick={onLogout}
                className="
                text-blue-600
                hover:text-blue-800
                transition
                ease-in-out
                duration-200
                cursor-pointer
                "
                >Sign out</p>
              </div>

            </form>
          </div>
      </section>

    </>
  )
}
