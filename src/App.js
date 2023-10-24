import React from 'react'
import { NavigationBar } from './components/labSecond/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/labSecond/Home';
import { About } from './components/labSecond/About';
import { Shop } from './components/labSecond/Shop';
import { ProductDetails } from './components/labSecond/ProductDetails';
import { LabOne } from './components/LabFirst/LabOne';
import { Counter } from './components/LabThird/Counter';
import { Login } from './components/LabSixth/Login';
import { Register } from './components/LabSixth/Register';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetails />}></Route>
        <Route path='/labone' element={<LabOne />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;