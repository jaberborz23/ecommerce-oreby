import React from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Route/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Header from './components/Header'
import Banner from './components/Banner'








let rou = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>


  </Route>

  ) )

const App = () => {
  
  return (
    <>
   <RouterProvider router={rou}>
   </RouterProvider>
  
  
    </>
  )
}

export default App