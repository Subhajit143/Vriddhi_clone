import React from 'react'
import Home from './Pages/Home'
import Header from './Component/Header'
import Services from './Pages/Services'
import Data from './Pages/Data'
import Review from './Pages/Review'
import Footer from './Component/Footer'

const App = () => {
  return (
   <>
   <Header/>
   <div>
    <Home />
    <Services />
    <Data />
    <Review />
    <Footer />
   </div>
   </>
  )
}

export default App