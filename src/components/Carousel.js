import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const MyCarousel = () => {
  return (
    <>
      <div className='text-center mt-3'>
        <h1>Carousel</h1>
      </div>
      <div className='container mt-3'>
      <Carousel>
                <div>
                    <img src="./assets/1.png" alt=''/>
                </div>
                <div>
                    <img src="./assets/2.png" alt=''/>
                </div>
                <div>
                    <img src="./assets/3.png" alt=''/>
                </div>
        </Carousel>
      </div>
    </>
  )
}

export default MyCarousel
