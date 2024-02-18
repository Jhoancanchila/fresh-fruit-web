import { Link } from 'react-router-dom'
import imageLogo from '../../../public/logo.jpeg'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] flex justify-between items-center bg-white border-b-[1px] '>
      <Link to="/fruits">
        <div className='w-auto h-[80px] flex justify-center items-center ml-[50px]'>
            <img className='object-contain w-[100px]' src={imageLogo} alt="logo" />
            <span className="text-xl font-bold text-[#EF8043] sm:text-3xl">Fresh fruits</span>
        </div>
      </Link>
      <div></div>
    </div>
  )
}

export default Navbar