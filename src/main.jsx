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
import { GroupTour } from './components/GroupTour/GroupTour.jsx'
import GoaPackages from './components/Packages/GoaPackages.jsx'
import AyodhyaPackage from './components/Packages/AyodhyaPackage.jsx'
import TajMahalPackage from './components/Packages/TajMahalPackage.jsx'
import KashiPackage from './components/Packages/KashiPackage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'visa', element: <Visa /> },
      { path: 'blog', element: <Blogs /> },
      { path: 'service', element: <Service /> },
      { path: 'grouptour', element: <GroupTour /> },
      { path: 'destinations', element: <Destinations /> },
      {
        path: 'specialPackages',
        element: <SpecialPackages />,
        children: [
          { path: 'goaPackage', element: <GoaPackages /> },
          { path: 'ayodhyaPackage', element: <AyodhyaPackage /> },
          { path: 'tajmahalPackage', element: <TajMahalPackage /> },
          { path: 'kashiPackage', element:<KashiPackage/>}
        ]
      },
      { path: 'form', element: <Form /> }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
