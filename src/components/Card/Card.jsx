import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


/* eslint-disable react/prop-types */

const Card = ({
  picture,
  name,
  price,
  idFruit,
  loading,
  fruitsData
}) => {

  const handleCar = (id) => {
    const newDataFruits = fruitsData.map(fruit=>{
      if(fruit.id === id){
        return{
          ...fruit,
          car: fruit.car ? 0 : 1
        }
      }else{
        return fruit
      }
    })
  };

  return (
    <li>
      <div className="group block overflow-hidden">
        {
          loading ? 
          <Skeleton height={350} width='100%'/>
          :
          <Link to={`/fruits/${idFruit}/${name}`}>
            <img
              src={picture}
              alt={name}
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              loading="lazy"
            />
          </Link>
        }
        <div className="flex justify-between items-center mt-4">
          <div className="relative  pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {loading ? <Skeleton/> : name}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> {loading ? <Skeleton/> : price} </span>
            </p>
          </div>
          <button onClick={()=>handleCar(idFruit)} className="py-3 px-2 bg-[#EF8043] outline-none rounded">Add to cart</button>
        </div>
      </div>
    </li>
  )
}

export default Card