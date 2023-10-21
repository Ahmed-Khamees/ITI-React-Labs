import React from 'react'
import { NavigationBar } from './components/labSecond/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/labSecond/Home';
import { About } from './components/labSecond/About';
import { Shop } from './components/labSecond/Shop';
import { ProductDetails } from './components/labSecond/ProductDetails';
import { LabOne } from './components/LabFirst/LabOne';
import { Counter } from './components/LabThird/Counter';

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;