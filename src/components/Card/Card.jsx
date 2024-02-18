import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


/* eslint-disable react/prop-types */

const Card = ({
  picture,
  name,
  price,
  id,
  loading
}) => {
  return (
    <li>
      <Link to={`/fruits/${id}`} className="group block overflow-hidden">
        {
          loading ? 
          <Skeleton height={350} width='100%'/>
          :
          <img
            src={picture}
            alt={name}
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            loading="lazy"
          />
        }
        <div className="relative bg-white pt-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {loading ? <Skeleton/> : name}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900"> {loading ? <Skeleton/> : price} </span>
          </p>
        </div>
      </Link>
    </li>
  )
}

export default Card