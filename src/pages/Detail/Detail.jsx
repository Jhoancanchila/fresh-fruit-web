/* eslint-disable react/prop-types */
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Detail = ({
  name,
  description,
  picture
}) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {name || <Skeleton/>}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            {
              picture ?
              <img
                alt=""
                src={picture}
                className="absolute inset-0 h-full w-full object-cover"
              />
              :
              <Skeleton height = "100%" width="100%"/>
            }
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                {description || <Skeleton/>}
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail