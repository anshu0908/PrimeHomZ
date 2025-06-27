import React from 'react'
import { Star } from 'lucide-react'
import Listing from './Listing'
import WhyChoose from './WhyChoose'
import Articles from './Articles'
import Blog from './Blog'
import About from './About'
import Remarkable from './remarkable'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="mt-17 pt-6">
      {/* Background Section */}
      <div className="h-[95vh] w-[95vw] mx-[2vw] bg-gray-600 rounded-2xl bg-[url(https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/681f30291cb42df385279ff2_property02.webp)] bg-cover bg-no-repeat bg-[center_42%] pt-35"> 
        
        {/* Content Block */}
        <div className="w-full sm:w-[80vw] customMd:w-[60vw] lg:w-[48vw] space-y-4 px-6 sm:px-12 customMd:ml-14">
          
          {/* Badge */}
          <p className="uppercase p-2 tracking-wide bg-white/20 backdrop-blur-xs w-fit rounded-3xl border border-white text-white text-xs sm:text-sm">
            Verified Experts
          </p>

          {/* Headings */}
          <h1 className="text-white font-[montserrat] text-4xl sm:text-5xl customMd:text-6xl font-medium tracking-tight leading-tight">
            <span className="font-[windsong]">Connecting</span> People With Homes That
          </h1>
          <h1 className="text-white font-[montserrat] text-4xl sm:text-5xl customMd:text-6xl font-medium tracking-tight leading-tight">
            Match Their <span className="font-[windsong]">Modern</span> Lifestyle
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base sm:text-lg customMd:text-xl tracking-tight font-[montserrat]">
            Top-rated real estate brokerage firm dedicated to helping clients find, buy, or invest
            in properties that truly reflect their goals, lifestyle, and vision for the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-3 bg-white rounded-xl mt-3 text-sm font-[montserrat] font-medium">
              Browse Listings
            </button>
            <button className="px-4 py-3 bg-black/50 text-white text-sm font-[montserrat] rounded-xl mt-3 font-medium">
              Connect With an Agent
            </button>
          </div>

          {/* Rating Section */}
          <div className="flex flex-wrap items-center font-[montserrat]">
            {/* Stars */}
            <div className="flex items-center gap-1">
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
              <Star strokeWidth={0.5} className="text-white fill-white text-xs" />
            </div>

            {/* Divider & Text */}
            <h1 className="text-white text-2xl sm:text-3xl ml-3 font-thin">|</h1>
            <h1 className="text-white/90 text-base sm:text-lg customMd:text-xl ml-3 font-normal pt-0.5">
              Rated by loving Clients
            </h1>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Listing />
      <WhyChoose />
      <Articles />
      <Contact />
      <About />
      <Remarkable />
    </div>
  )
}

export default Home
