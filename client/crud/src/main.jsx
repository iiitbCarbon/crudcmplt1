import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Add from './pages/Add.jsx'
import Update from './pages/Update.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path = '/' element={<App/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = '/add' element={<Add/>}/>
      <Route path = '/update/:id' element = {<Update/>}/>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
</React.StrictMode>,
)
