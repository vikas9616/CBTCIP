import React from 'react'
import HeroSlider, { Slide } from 'hero-slider'

// images
const first = 'https://img.freepik.com/free-photo/people-festival_1160-736.jpg?t=st=1722488354~exp=1722491954~hmac=3e2335595e93043ab0ce990d6d563dd7da4a44e178164dcdf063cfa738ab5db2&w=996'
const sec = "https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891257.jpg?ga=GA1.1.1055777266.1715681308&semt=ais_hybrid"
const third = 'https://img.freepik.com/free-photo/warm-welcoming-atmosphere-as-guests-arrive-party-venue_1268-30713.jpg?ga=GA1.1.1055777266.1715681308&semt=ais_hybrid'
const fourth = 'https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?ga=GA1.1.1055777266.1715681308&semt=ais_hybrid'

const BasicSlider = () => {
  return (
    <HeroSlider 
      slidingAnimation='left_to_right'
      orientation='horizontal'
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.33)' }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '100vh'
      }}
    >
      <Slide background={{ backgroundImage: first, backgroundAttachment: "fixed" }} />
      <Slide background={{ backgroundImage: sec, backgroundAttachment: "fixed" }} />
      <Slide background={{ backgroundImage: third, backgroundAttachment: "fixed" }} />
      <Slide background={{ backgroundImage: fourth, backgroundAttachment: "fixed" }} />
    </HeroSlider>
  )
}

export default BasicSlider
