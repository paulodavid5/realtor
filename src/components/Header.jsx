import { useLocation, useNavigate } from 'react-router'

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
                 className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/') && 'text-black border-b-red-500'}`}
                 onClick={() => navigate('/')}
                 >Home</li>
                <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/Offers') && 'text-black border-b-red-500'}`}
                onClick={() => navigate('/Offers')}
                >Offers</li>
                <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/SignIn') && 'text-black border-b-red-500'}`}
                onClick={() => navigate('/SignIn')}
                >Sign in</li>
              </ul>
            </div>
        </header>
    </div>
  )
}
