import React from 'react'

const Sliders = () => {
    let Slider = [
        "../../assets/images/slide_1.jpg",
        "../../assets/images/slide_2.jpg",
    ];

  return (
    <div className="lg:h-[40rem] h-auto bg-white mb-4">
        <img className="lg:w-full w-auto lg:h-full h-auto z-[-1]" src={require('../../assets/images/slide_1.jpg')} alt=""/>
    </div>
  )
}

export default Sliders;
