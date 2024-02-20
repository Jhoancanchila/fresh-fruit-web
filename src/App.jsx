import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import Fruits from './pages/Fruits/Fruits'
import Detail from './pages/Detail/Detail';
import './App.css'
import { useFetch } from './customHooks/useFetch';

export const CarContext = React.createContext();

function App() {
  const { data, error, loading } = useFetch("http://localhost:3000/fruits");
  const [ productCar, setProductCar ] = React.useState([]);
  
  
  useEffect(() => {
    setProductCar(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  
  return (
    <>
      <CarContext.Provider value={{ productCar, setProductCar, loading, error }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/fruits' element={<Fruits/>}/>
            <Route  path='/fruits/:id/:name' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
      </CarContext.Provider>
    </>
  )
}

export default App
