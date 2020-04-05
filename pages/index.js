import { useRef, useState } from 'react'
import AppSlider from '../components/Layout/Slider/Slider'
import H1 from '../components/Styled/H1'
import Video from '../components/Layout/Video/Video'
import styled from 'styled-components'

const Index = () => {
  const [iconShow, setIconShow] = useState(true)
  const gameVideo = useRef(null)
  return (
    <IndexWrapper>
      <H1>Welcome Pokemon Power 🐈 </H1>
      <AppSlider />
      <hr />
      <div className='section has-background-success'>
        <div className='container column video-holder'>
          <H1 white>Best Game of the Year 2@2@</H1>
          <Video controls poster='/images/videoscreen.jpg' ref={gameVideo}>
            <source src='/videos/videogame.mp4' type='video/mp4' />
          Your browser does not support the video tag.
          </Video>
          <div
            className={`icon-play ${iconShow ? '' : 'hide'}`} onClick={() => {
              setIconShow((showicon) => {
                return !showicon
              })
              gameVideo.current.play()
              setTimeout(() => {
                setIconShow((showicon) => {
                  return !showicon
                })
              }, 27000)
            }}
          >
            <i class='far fa-play-circle fa-6x' />
          </div>
        </div>
      </div>

    </IndexWrapper>
  )
}

const IndexWrapper = styled.div`
.video-holder{
  position:relative;
}

.icon-play{
  display:block;
  position:absolute;
  z-index:5;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  transition: all 1s ease-out; 
  cursor: pointer;
  :hover{
    color: lightseagreen;
  }
}

.hide{
  display: none;
}
`

export default Index
