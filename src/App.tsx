import React from 'react';
import './App.css';
import Slider from 'react-slick';
 
import Modal from './components/Modal/Modal';
 
function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState<number>(0)
  const [nav1, setNav1] = React.useState<Slider | undefined>()
  const [nav2, setNav2] = React.useState<Slider | undefined>()
 
  const slider1 = React.useRef<Slider>(null)
  const slider2 = React.useRef<Slider>(null)  
  const sliderModalRef = React.useRef<Slider>(null)
 
  React.useEffect(() => {
    slider1.current && setNav1(slider1.current)
    slider2.current && setNav2(slider2.current)
    sliderModalRef.current && setNav2(sliderModalRef.current)
  }, [])
 
  React.useEffect(() => {
    slider1.current && slider1.current.slickGoTo(currentSlide)
    slider2.current && slider2.current.slickGoTo(currentSlide)
    sliderModalRef.current && sliderModalRef.current.slickGoTo(currentSlide)
  }, [currentSlide])
  console.log(isOpen)
 
  const openModalWindow = () => {
    setIsOpen(true)
  }
 
  const closeModalWindow = () => {
    setIsOpen(false)
  }
 
  const handleSliderAfterChange = (currentSlideAfterChange: number) => {
    setCurrentSlide(currentSlideAfterChange)
  }
 
  const sliderImages = [
    {
      "img": "https://www.alltime.ru/obj/catalog/watch/casio/img/big/DW-5600BB-1E__1.jpg"
    },
    {
      "img": "https://www.alltime.ru/obj/catalog/watch/casio/img/big/DW-5600BB-1E__2.jpg"
    },
    {
      "img": "https://www.alltime.ru/obj/catalog/watch/casio/img/big/DW-5600BB-1E__3.jpg"
    },
    {
      "img": "https://www.alltime.ru/obj/catalog/watch/casio/img/big/DW-5600BB-1E__4.jpg"
    }
  ]

  return (
    <div className="App">
      <div className="slider">
      <Modal isOpen={isOpen} closeModal={closeModalWindow}>
        <Slider
          infinite={true}
          afterChange={handleSliderAfterChange}
          swipeToSlide={true}
          initialSlide={currentSlide}
          asNavFor={nav2}
          focusOnSelect={true}
          ref={sliderModalRef}
          slidesToShow={1}
          slidesToScroll={1}
        >
        { sliderImages && sliderImages.map(sliderImg => <div className="slide-image__modal"><img src={sliderImg.img} alt="Image" /></div>) }
        </Slider>
      </Modal>
        <div className="slider-main">
          <Slider
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            swipeToSlide={true}
            focusOnSelect={true}
            asNavFor={nav2}
            ref={slider1}
            afterChange={handleSliderAfterChange}
            initialSlide={currentSlide}
          >
            { sliderImages && sliderImages.map(sliderImg => <div className="slide-image__top" onClick={openModalWindow}><img src={sliderImg.img} alt="Image" /></div>) }
          </Slider>
        </div>
        <div className="slider-nav">
          <Slider
            asNavFor={nav1}
            slidesToShow={4}
            slidesToScroll={1}
            initialSlide={currentSlide}
            ref={slider2}
            focusOnSelect={true}
            swipeToSlide={true}
            vertical={true}
          >  
          { sliderImages && sliderImages.map(sliderImg => <div className="slide-image__nav"><img src={sliderImg.img} alt="Image" /></div>) }
          </Slider>
        </div>
      </div>
    </div>
  );
}
 
export default App;