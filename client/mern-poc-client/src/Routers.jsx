import React from 'react'
import {Route, Routes} from "react-router-dom"
import Products from './components/Products'
import User from './components/User'
import IndividualProduct from './components/IndividualProduct'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element={<h1>home</h1>}/>
            <Route path='/user' exact element={<User/>}/>
            <Route path='/product' exact element={<Products/>}/>
            <Route path='/product/:id' exact element={<IndividualProduct/>}/>
        </Routes>
    </div>
  )
}

export default Routers