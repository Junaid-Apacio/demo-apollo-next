
import Slider from 'react-slick'
import SliderImg from '../SliderImg/SliderImg'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false
}
const AppSlider = () => {
  return (
    <Slider {...settings} className='hero has-full-screen'>
      <div>
        <SliderImg src='/images/pokemon-home-switch-hero.jpg' alt='pokemon' />
      </div>
      <div>
        <SliderImg src='/images/pokemonthree.jpg' alt='pokemon' />
      </div>
      <div>
        <SliderImg src='/images/pokemonfour.jpg' alt='pokemon' />
      </div>
      <div>
        <SliderImg src='/images/pokemontwo.jpg' alt='pokemon' />
      </div>
      <div>
        <SliderImg src='/images/pokemonfive.jpg' alt='pokemon' />
      </div>
    </Slider>
  )
}

export default AppSlider
