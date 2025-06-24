
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
// import Contact from './component/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop'
import Properties from './pages/Properties'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Services from './pages/Services'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      
      <Routes>     
      <Route path="/" element={<Home/>} />
      <Route path="/properties" element={<Properties/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/blogs" element={<Blogs/>} />
      

     
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App