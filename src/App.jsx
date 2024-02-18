import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'
import Fruits from './pages/Fruits/Fruits'
import Detail from './pages/Detail/Detail';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/fruits' element={<Fruits/>}/>
          <Route  path='/fruits/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
