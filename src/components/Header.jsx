import { useLocation , useNavigate } from 'react-router'

import logo from '../assets/logo.svg'



export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  function pathMatchRoute(route) {
    if (route === location.pathname){
      return true
    }
  }



  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
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
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/sign-in') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent'}`}
                  onClick={() => navigate('/sign-in')}
                  >Sign in</li>
                
                {/* {
                  loggedIn ? <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/sign-in') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent'}`}
                  onClick={() => navigate('/profile')}
                  >Profile</li>  : <li
                  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute('/sign-in') ? 'text-gray-700 border-b-red-600' : 'border-b-transparent'}`}
                  onClick={() => navigate('/sign-in')}
                  >Sign in</li>
                } */}
              </ul>
            </div>
        </header>
    </div>
  )
}
