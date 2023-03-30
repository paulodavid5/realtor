import { useEffect, useState } from 'react'
import { useLocation , useNavigate } from 'react-router'

import logo from '../assets/logo.svg'

import { getAuth, onAuthStateChanged } from 'firebase/auth'



export default function Header() {
  const [pageState, setPageState] = useState('Sign In')
  const location = useLocation()
  const navigate = useNavigate()
  
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        setPageState('Profile')
      }else{
        setPageState('Sign In')
      }
    })
  }, [auth])

  function pathMatchRoute(route) {
    if (route === location.pathname){
      return true
    }
  }



  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div>
                <img src={logo} alt="logo" className='h-5 cursor-pointer' onClick={() => navigate('/')} />
            </div>
            <div>
              <ul className='flex space-x-10'>
                <li
                 className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent' }`}
                 onClick={() => navigate('/')}
                 >Home</li>
                <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/offers') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent'}`}
                onClick={() => navigate('/offers')}
                >Offers</li>
                <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/sign-in') || pathMatchRoute('/profile') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent'}`}
                  onClick={() => navigate('/profile')}
                  >{pageState}</li>
                
              </ul>
            </div>
        </header>
    </div>
  )
}
