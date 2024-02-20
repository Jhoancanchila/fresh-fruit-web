import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import imageLogo from '../../../public/logo.jpeg'
import { CarContext } from '../../App';
import DetailCar from '../DetailCar/DetailCar';


const Navbar = () => {
  const [ openDetailCar, setOpenDetailCar] = useState(false);
  const contexCar = useContext(CarContext);
  const { productCar } = contexCar;
  const totalCar = productCar?.filter(prod => prod.car > 0).length;

  const handleShowDetail = (e) => {
    e.stopPropagation()
    if(totalCar > 0){
      setOpenDetailCar(!openDetailCar)
    }
    else null
  };

  return (
    <div className='fixed z-10 w-full h-[90px] flex justify-between items-center bg-white border-b-[1px] '>
      <Link to="/fruits">
        <div className='w-auto h-[80px] flex justify-center items-center ml-[50px]'>
            <img className='object-contain w-[100px]' src={imageLogo} alt="logo" />
            <span className="text-xl font-bold text-[#EF8043] sm:text-3xl">Fresh fruits</span>
        </div>
      </Link>
      <div className='sm:mr-16 mr-6 cursor-pointer relative' onClick={(e) => handleShowDetail(e)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
        {
          totalCar > 0 &&
          <span className='rounded-full p-2 absolute bg-[#EF8043] top-[-17px] right-[-10px] text-xs h-5 w-5 text-center flex items-center justify-center'>
          {totalCar}
          </span>
        }
      </div>
        {
          (openDetailCar && totalCar > 0) ?
          <DetailCar functionControlPanel={setOpenDetailCar}/>
          :
          null
        }
    </div>
  )
}

export default Navbar