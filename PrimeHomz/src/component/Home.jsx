import React from 'react'
import {Star} from 'lucide-react'
const Home = () => {
  return (
   <div className=' pt-23'>
    <div className='h-[95vh] w-[95vw] mx-[2vw] rounded-2xl bg-[url(/home.png)] bg-cover bg-no-repeat bg-[right_center] pl-14 pt-25 '>
      <div className='h-[50vh] w-[48vw] space-y-4 ' >
              <p className='uppercase px-3 py-1 bg-white/20 backdrop-blur-xs w-[13vw] rounded-3xl border border-white text-white ' >award-winning firm</p>
              <h1 className='text-white font-[montserrat] text-6xl font-medium tracking-tight '> <span className='font-[windsong] '>Creating</span> Spaces That </h1>
              <h1 className='text-white font-[montserrat] text-6xl font-medium tracking-tight '>Inspire Modern World </h1>
              <p className='text-white/90 text-xl tracking-tight font-[montserrat] '>Award-winning architectural design firm specializing in creating innovative and sustainable spaces that transform how people live, work, and play.</p>
              <button className='px-3 py-3 bg-white rounded-xl mt-3 text-sm font-[montserrat] font-medium '>Explore Projects</button>
              <button className='px-3 py-3 bg-black/50 text-white text-sm font-[montserrat] ml-4 rounded-xl mt-3 font-medium'>Get In Touch</button>

              <div className='flex'>
                 <div className='flex leading-tight items-center '>
                <Star strokeWidth={0.5} className='text-white fill-white text-xs ' />
                <Star strokeWidth={0.5} className='text-white fill-white text-xs ' />
                <Star strokeWidth={0.5} className='text-white fill-white text-xs ' />
                <Star strokeWidth={0.5} className='text-white fill-white text-xs ' />
                <Star strokeWidth={0.5} className='text-white fill-white text-xs ' />
              </div>

              <div>

              </div>
                  |
              </div>
             



      </div>
    </div>
   </div>
  )
}

export default Home