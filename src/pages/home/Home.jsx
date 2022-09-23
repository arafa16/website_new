import React from 'react'
import Sliders from '../sliders/Sliders';

const Home = () => {
  return (
    <div className="px-4 pt-6 min-h-[40rem] md:min-h-[42rem] lg:min-h-[52.2rem] bg-gray-100 mt-14 pb-4">
      <div className="left-0 w-full">
        <Sliders />
        <div className="h-72 bg-white mb-4">
          Why Coise Us
        </div>
        <div className="h-72 bg-white mb-4">
          Product
        </div>
        <div className="h-72 bg-white mb-4">
          Foto Kegiatan
        </div>
      </div>
    </div>
  )
}

export default Home;
