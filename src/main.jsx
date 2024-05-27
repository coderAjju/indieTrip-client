import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './components/Form/Form.jsx'
import Home from './components/Home/Home.jsx'
import Visa from './components/Visa/Visa.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Service from './components/Services/Service.jsx'
import Destinations from './components/Destinations/Destinations.jsx'
import SpecialPackages from './components/SpecialPackages/SpecialPackages.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"visa",
        element:<Visa/>
      },
      {
        path:"Blog",
        element:<Blogs/>
      },
      {
        path:"Serivce",
        element:<Service/>
      },
      {
        path:"form",
        element:<Form/>
      },
      {
        path:"destinations",
        element:<Destinations/>
      },
      {
        path:"specialPackages",
        element:<SpecialPackages/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
