/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import { useFetch } from '../../customHooks/useFetch';


const Detail = () => {
  
  const param = useParams();
  const { data } = useFetch(`http://localhost:3000/fruits/${param.id}`);

  return (
    <section>
      <Link to="/fruits" className='border rounded py-2 px-2 ml-6 mt-6 bg-[#EF8043] text-white'>Go back</Link>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {data?.name|| <Skeleton/>}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            {
              data?.image ?
              <img
                alt=""
                src={data?.image}
                className="absolute inset-0 h-full w-full object-cover"
              />
              :
              <Skeleton height = "100%" width="100%"/>
            }
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                {data?.description|| <Skeleton/>}
              </p>

              <p>
              Delicious freshness in every bite, flavor and health in every fruit, come and delight your palate with the richness of our fresh fruits, perfect to maintain your well-being and enjoy life!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail