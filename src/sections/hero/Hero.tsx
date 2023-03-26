import React from 'react'
import { bgCurvyMobile, illustrationIntro } from '../../assets'
import './Hero.scss'

export const Hero = () => {
  return (
    <section className='hero'>
      <img src={illustrationIntro} alt="illustrationIntro" className='illustration'/>
      <img src={bgCurvyMobile} alt="bgCurvyMobile" className="hero__bg" />
    </section>
  )
}
