import { useNavigate } from 'react-router-dom';
//library
import {FcGoogle} from 'react-icons/fc'

//google
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

//toastify
import { toast } from 'react-toastify'

//firebase
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';


export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try{
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      const results = await signInWithPopup(auth, provider)
      const user = results.user
      
      //check if user is already subscribed
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }

      navigate('/')
    } catch(e){
      toast.error('Couldn\'t connect to Google')
      console.log(e)
    }
  }
  
  return (
    <button
    type='button'
    onClick={onGoogleClick}
    className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 rounded shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out' 
    >
        <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
Continue with google
    </button>
  )
}
