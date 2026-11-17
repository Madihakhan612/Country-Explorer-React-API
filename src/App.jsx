import React from 'react'
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './Pages/CountryDetails.jsx';
import NotFound from './Pages/NotFound.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
       <Routes>
          <Route path= "/" element= {<Home />} />
          <Route path= "/country/:name" element= {<CountryDetails />} />
          <Route path= "*" element= {<NotFound />} />
           
          
       </Routes>
    
    </>
  )
}

export default App