
export const handleUpdateDataFruits = async (id, data, valueCar, functionUpdateDate) => {
    
    try {
      const newProductsCar = data.map(item => {
        if(item.id === id ){
          return {
            ...item,
            car: Number(valueCar)
          }
        }else{
          return item;
        }
      });

      const frutaForUpdate = newProductsCar.find(fruit => fruit.id === id);
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(frutaForUpdate)
      };
      
      const response = await fetch(`http://localhost:3000/fruits/${id}`, requestOptions);
      await response.json();
      if(response.ok){
        functionUpdateDate(newProductsCar);
      }else{
        functionUpdateDate(data);
      }
      
    } catch (error) {
      console.log(error)
    }
  };