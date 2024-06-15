import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './components/Form/Form.jsx'
import Home from './components/Home/Home.jsx'
import Visa from './components/Visa/Visa.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Destinations from './components/TopDestinations/Destinations.jsx'
import SpecialPackages from './components/SpecialPackages/SpecialPackages.jsx'
import { GroupTour } from './components/GroupTour/GroupTour.jsx'
import GoaPackages from './components/Packages/GoaPackages.jsx'
import AyodhyaPackage from './components/Packages/AyodhyaPackage.jsx'
import TajMahalPackage from './components/Packages/TajMahalPackage.jsx'
import KashiPackage from './components/Packages/KashiPackage.jsx'
import OutletofSpecialPackage from './components/SpecialPackages/OutletofSpecialPackage.jsx'
import OutletOfDestinations from './components/TopDestinations/OutletOfDestinations.jsx'
import AyodhyaDestinaitons from './components/Destinations/AyodhyaDestinaitons.jsx'
import VaranasiDestinations from './components/Destinations/VaranasiDestinations.jsx'
import GoaDestinations from './components/Destinations/GoaDestinations.jsx'
import PrayagrajDestinations from './components/Destinations/PrayagrajDestinations.jsx'
import HimachalPradeshDestinations from './components/Destinations/HimachalPradeshDestinations.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'visa', element: <Visa /> },
      { path: 'blog', element: <Blogs /> },
      { path: 'grouptour', element: <GroupTour /> },
      { path: 'destinations', element: <Destinations /> },
      { path: 'destination', element: <OutletOfDestinations />, children:[
        {path:"ayodhya",element:<AyodhyaDestinaitons/>},
        {path:"varanasi",element:<VaranasiDestinations/>},
        {path:"goa",element:<GoaDestinations/>},
        {path:"prayagraj",element:<PrayagrajDestinations/>},
        {path:"himachal Pradesh",element:<HimachalPradeshDestinations/>}
      ]},
      {path:'specialPackages',element:<SpecialPackages/>},
      {
        path: 'package',
        element: <OutletofSpecialPackage />,
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
