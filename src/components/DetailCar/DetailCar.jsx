/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CarContext } from "../../App";
import ItemCar from "../ItemCar/ItemCar"

const DetailCar = ({ functionControlPanel }) => {

  const contexCar = useContext(CarContext);
  const { productCar } = contexCar;

  const totalProducts = productCar?.reduce((accumulator, currentValue) => accumulator + currentValue.car,0);
  
  const totalPay = productCar?.reduce((accumulator, currentValue) => {
    if(currentValue.car > 0){
      const cant = currentValue.car * Number(currentValue.price);
      return accumulator + cant
    }else{
      return accumulator
    }
  },0);

  const handleClseModal = (event) => {
    event.stopPropagation();
    functionControlPanel(false);
  };

  return (
    <div
      className="absolute sm:top-[60px] top-[80px] right-[10px] z-10 w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110" onClick={(e)=>handleClseModal(e)}>
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {
            productCar?.filter(fruit => fruit.car > 0)
            .map((item) => <ItemCar key={item.id} {...item}/>)
          }
        </ul>
        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <h3 className="inline text-sm text-gray-900">Total: </h3>
            <dd className="inline text-sm text-gray-900">{totalProducts}</dd>
          </div>

          <div>
            <h3 className="inline text-sm text-gray-900">Pay: </h3>
            <dd className="inline text-sm text-gray-900">{`USD ${totalPay}`}</dd>
          </div>
        </dl>
        <div className="space-y-4 text-center">

          <button
            onClick={handleClseModal}
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </button>

          <button
            onClick={handleClseModal}
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailCar