import { Bath, BedDouble, BookOpenText, Cat, ChefHat, ChevronRight, Dumbbell, House, HousePlus, PawPrint, ShieldCheck, TableCellsMerge, WavesLadder, Calendar, Ruler, Home } from 'lucide-react'
import React from 'react'
import { PiEggBold } from 'react-icons/pi'
import { WiNightRainWind } from 'react-icons/wi'

const PropertiesDetails = () => {
  return (
    <div className='bg-[#F5F6F1] relative'>
      <div className='px-4 md:px-20 py-6 md:py-10 w-full'>

        <div className='flex md:flex-row gap-3 md:gap-5 mb-6'>
          <h1 className='flex text-xl md:text-2xl text-gray-500 gap-2 '>Properties <ChevronRight className='mt-1' /></h1>
          <button className='text-xl md:text-2xl'>Cedar Grove</button>
        </div>

        <img className='rounded-2xl w-full object-cover' src="/images/img6.webp" alt="" />

        <div className='h-auto md:h-[25vh] w-full flex flex-wrap md:flex-nowrap gap-3 p-3'>
          {[1,2,3,4,5,].map((num) => (
            <img key={num} src={`/images/img${num}.webp`} alt={`house ${num}`} className="w-[48%] sm:w-[30%] md:w-auto rounded-xl object-cover" />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20'>
        <div className='col-span-2 space-y-6'>
          <h1 className='text-4xl md:text-7xl text-gray-700'>Cedar Grove</h1>
          <h2 className='text-xl md:text-2xl'>Cedar Lane 78, San Francisco</h2>
          <div>
            <h1 className='flex flex-wrap gap-3'><BedDouble />4 bd <Bath />4 ba <TableCellsMerge />1000 spft</h1>
            <hr className="border-t border-gray-600 w-full my-6" />
          </div>

          <div className='space-y-5 pt-6'>
            <h1 className='text-2xl md:text-3xl'>Project Information</h1>
            <div className="flex flex-col group cursor-pointer">
              <span className="text-lg text-gray-800 font-medium">Map</span>
              <div className="w-0 h-[1px] bg-gray-800 mt-1 transition-all duration-300 group-hover:w-16"></div>
            </div>
            <div className="flex my-8">
              <img className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg" src="/images/map.webp" alt="Map" />
            </div>
            <hr className="border-t border-gray-600 w-full my-6" />
          </div>

          <div className='space-y-5 pt-5'>
            <h1 className='text-2xl md:text-3xl'>Description</h1>
            <h2 className='text-md md:text-xl text-gray-600'>Experience the charm of this beautifully renovated 3-bedroom, 3-bathroom home in the lively Westwood area...</h2>
            <hr className="border-t border-gray-600 w-full my-6" />
          </div>

          <div>
            <h1 className='text-2xl md:text-3xl pb-8 pt-7'>Floor Plans</h1>
            <img className='w-full h-auto rounded-lg shadow-md' src="/images/map2.png" alt="" />
            <hr className="border-t border-gray-600 w-full my-6" />
          </div>

          <div>
            <h1 className='text-2xl md:text-3xl pb-8 pt-7'>Amenities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 text-lg text-gray-800">
              {[{icon: <WavesLadder />, text: "Swimming pool"}, {icon: <ShieldCheck />, text: "24/7 security"}, {icon: <PawPrint />, text: "Pet-friendly facilities"}, {icon: <ChefHat />, text: "BBQ and picnic area"}, {icon: <BookOpenText />, text: "Library and reading room"}, {icon: <Dumbbell />, text: "Gym/fitness center"}, {icon: <House />, text: "Community clubhouse"}, {icon: <Cat />, text: "Pet-friendly facilities"}, {icon: <HousePlus />, text: "Yoga and meditation room"}].map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  {item.icon}<span>{item.text}</span>
                </div>
              ))}
            </div>
            <hr className="border-t border-gray-600 w-full my-6" />
          </div>
        </div>

        {/* Right Sticky Column */}
        <div className='relative min-h-screen'>
          <div className='min-h-screen w-full sticky top-0 z-10 flex flex-col items-center justify-start md:justify-center gap-5 pt-10 md:pt-0'>
            <div className='w-full md:w-96 bg-white rounded-3xl p-4'>
              <div className="flex justify-center items-center w-full p-4">
                <img src="/images/photo.webp" alt="Profile" className="object-cover rounded-full border-4 border-blue-100" />
              </div>
              <h1 className='text-xl md:text-3xl text-center'>Alex Thompson.</h1>
              <h2 className='text-md md:text-xl text-center'>Property agent</h2>
              <button className='border h-12 w-full rounded-3xl hover:bg-white hover:text-blue-500 transition mt-4'>CONTACT ALEX</button>
            </div>

            <div className='bg-white rounded-3xl w-full md:w-96 p-4'>
              <h1 className='text-3xl md:text-5xl pt-5 px-5'>$300,000</h1>
              <h2 className='text-md md:text-xl pt-2 px-5 mb-7'>Est. Mortgage $2,5000/mo*</h2>
              <button className='border h-12 w-full rounded-3xl hover:bg-white hover:text-green-500 transition mb-6'>MAKE AN OFFER</button>

              <div className="space-y-4 text-sm md:text-base">
                {[
                  {icon: <Home className="w-5 h-5" />, label: 'Type', value: 'Apartment'},
                  {icon: <BedDouble className="w-5 h-5" />, label: 'Floor', value: '2'},
                  {icon: <Calendar className="w-5 h-5" />, label: 'Your built', value: '2020'},
                  {icon: <Ruler className="w-5 h-5" />, label: 'Living area', value: '450sqft'},
                  {icon: <Bath className="w-5 h-5" />, label: 'Bathrooms', value: '3'},
                  {icon: <BedDouble className="w-5 h-5" />, label: 'Bedrooms', value: '4'}
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">{item.icon}<span className="text-base font-semibold">{item.label}</span></div>
                    <span className="text-base font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesDetails


