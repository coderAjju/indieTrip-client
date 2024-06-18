import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom'
import Form from './components/Form/Form.jsx'
import Home from './components/Home/Home.jsx'
import Visa from './components/Visa/Visa.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Destinations from './components/TopDestinations/Destinations.jsx'
import SpecialPackages from './components/SpecialPackages/SpecialPackages.jsx'
import { GroupTour } from './components/GroupTour/GroupTour.jsx'
import OutletofSpecialPackage from './components/SpecialPackages/OutletofSpecialPackage.jsx'
import OutletOfDestinations from './components/TopDestinations/OutletOfDestinations.jsx'
import AyodhyaDestinaitons from './components/Destinations/AyodhyaDestinaitons.jsx'
import VaranasiDestinations from './components/Destinations/VaranasiDestinations.jsx'
import GoaDestinations from './components/Destinations/GoaDestinations.jsx'
import PrayagrajDestinations from './components/Destinations/PrayagrajDestinations.jsx'
import HimachalPradeshDestinations from './components/Destinations/HimachalPradeshDestinations.jsx'
import TermsCondition from './components/TermsCondition.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import AkbarFortPrayagrajPackage from './components/Packages/AkbarFortPrayagrajPackage.jsx'
import ShimlaHimachalPradeshPackages from './components/Packages/ShimlaHimachalPradeshPackage.jsx'
import AssiGhatVaranasiPackage from './components/Packages/AssiGhatVaranasiPackage.jsx'
import BagaBeachGoaPackages from './components/Packages/BagaBeachGoaPackages.jsx'
import RamMandirPackage from './components/Packages/RamMandirPackage.jsx'
import QueryPage from './components/QueryPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'visa', element: <Visa /> },
      { path: 'blog', element: <Blogs /> },
      { path: 'grouptour', element: <GroupTour /> },
      { path: 'termsCondition', element: <TermsCondition /> },
      { path: 'privacyPolicy', element: <PrivacyPolicy /> },
      { path: 'destinations', element: <Destinations /> },
      { path: 'queryPage', element: <QueryPage /> },
      {
        path: 'destination', element: <OutletOfDestinations />, children: [
          { path: "ayodhya", element: <AyodhyaDestinaitons /> },
          { path: "varanasi", element: <VaranasiDestinations /> },
          { path: "goa", element: <GoaDestinations /> },
          { path: "prayagraj", element: <PrayagrajDestinations /> },
          { path: "himachal Pradesh", element: <HimachalPradeshDestinations /> }
        ]
      },
      { path: 'specialPackages', element: <SpecialPackages /> },
      {
        path: 'package',
        element: <OutletofSpecialPackage />,
        children: [
          { path: 'bagaBeach', element: <BagaBeachGoaPackages /> },
          { path: 'ramMandir', element: <RamMandirPackage /> },
          { path: 'shimla', element: <ShimlaHimachalPradeshPackages /> },
          { path: 'assiGhat', element: <AssiGhatVaranasiPackage /> },
          { path: "akbarFort", element: <AkbarFortPrayagrajPackage /> }
        ] 
      },
      { path: 'form', element: <Form /> }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
