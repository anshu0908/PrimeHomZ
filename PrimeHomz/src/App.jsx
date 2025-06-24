import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Listing from './component/Listing'
import Articles from './component/Articles'
import Footer from './component/Footer'
import Remarkable from './component/remarkable'
import { Contact } from 'lucide-react'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Remarkable/>
      <Listing/>
      <Articles/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App