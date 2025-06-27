import React from 'react'

const Remarkable = () => {
  return (
    <div className='w-[95vw] mx-auto mt-24 bg-[#3B3E2D] pt-20 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 rounded-2xl flex flex-col gap-16'>
      {/* Upper Section */}
      <div className="w-full mb-6 sm:mb-5 md:mb-4 lg:mb-12">
        <h1 className='text-white font-[geist] text-[6.2vw] leading-[7vw] tracking-tight font-medium'>
          <span className='font-[windsong] mr-10'>We</span>
          create remarkable neighbourhoods that encourage exploration and discovery.
        </h1>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[57%_38%] gap-10 lg:gap-[5%] items-start lg:items-start">
        {/* Image */}
        <img
          className='w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[60vh] object-cover rounded-3xl'
          src="https://cdn.prod.website-files.com/6814fd6e7e1d7b88832c570c/6822f34fb301a0079eed1ae6_property03.webp"
          alt=""
        />

        {/* Right Content */}
        <div className="self-start lg:self-start space-y-6 text-white lg:pr-0">
          <p className='text-xl font-normal tracking-tight leading-tight'>
            Prime Homz provides safe and healthy accommodations for urban millennials. We’ve stringent cleanliness measures in place to get you the highest hygiene standards.
          </p>
          <p className='text-xl font-normal tracking-tight leading-tight'>
            Our smartly designed interiors to enable work-play balance will ensure that you absolutely love each moment spent at The Beehive.
          </p>
          <button className='uppercase mt-6 py-3 px-6 bg-transparent text-white border rounded-3xl border-white hover:bg-white hover:text-black transition'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Remarkable;

