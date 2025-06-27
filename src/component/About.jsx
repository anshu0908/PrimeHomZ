import React from 'react'

const About = () => {
  return (
    <div className="w-[95vw] rounded-3xl mt-12 py-8 px-4 mx-auto bg-white/50">
      <div className="text-center space-y-5 px-4 sm:px-6 md:px-8">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">Find Your Perfect Place</h1>
        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl">
          Our portfolio of award-winning designs that have transformed skylines
        </h2>
      </div>

      {/* Image container */}
      <div className="w-full max-w-4xl xl:max-w-6xl mx-auto my-6 relative overflow-hidden rounded-3xl aspect-video">
        <img
          src="https://primehomz.com/wp-content/uploads/elementor/thumbs/ame2-qp76yjt99pkmemf8clctjmdpkubyyvig7jcioa8xts.jpg"
          alt=""
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110 rounded-3xl"
        />

        {/* Floating buttons */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-3">
          <button className="bg-[#0000003c] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 hover:scale-105">
            Gurgaon
          </button>
          <button className="backdrop-sepia-[20px] bg-[#0000003c] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 hover:scale-105">
            COMMERCIAL
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
