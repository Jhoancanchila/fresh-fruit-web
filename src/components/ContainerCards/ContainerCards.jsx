
import { useSearchParams, Link } from "react-router-dom";
import Card from "../Card/Card";
import InputSearch from "../InputSearch/InputSearch";
import { useContext } from "react";
import { CarContext } from "../../App";

/* import {fruits} from "../../json/fruitsMock"; */

const ContainerCards = () => {
  const contexCar = useContext(CarContext);

  const { productCar, error, loading } = contexCar;

  const [ searchParams ] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  
  if (error) {
    return <p>Ooops... Not Found!! <Link className="text-[#EF8043]" to="/fruits">Reloade</Link></p>;
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mt-[100px]">
          <InputSearch/>

          <p className="mt-4 max-w-md text-gray-500">
          Delicious freshness in every bite, flavor and health in every fruit, come and delight your palate with the richness of our fresh fruits, perfect to maintain your well-being and enjoy life!
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {
            productCar?.filter(fruit => fruit.name.toLowerCase().includes(search.toLowerCase()))
            .map(item => 
              <Card 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                picture={item.image} 
                idFruit={item.id} loading={loading} 
                quantityCar={item.car}
              />
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default ContainerCards