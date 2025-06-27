
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
      
     

  <div className="fixed top-2 left-[2vw] w-[95vw] h-20 z-50 bg-white/50 backdrop-blur-sm border border-white rounded-2xl flex items-center justify-between px-6">
       {/* Logo */}
      <div className="w-32 cursor-pointer">
        <img src="./logo-nav.png" alt="Logo" className="w-full" />
      </div>
       {/* Navigation Links (visible on md and above) */}
      <div className="hidden md:flex items-center gap-x-12 text-lg font-medium">
        <Link to="/properties">Properties</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blog">Blog</Link>
      </div>
       <div className="md:hidden text-4xl pr-2 cursor-pointer">
        <IoIosMenu />
      </div>
      
      </div>
)
}

export default Navbar;
