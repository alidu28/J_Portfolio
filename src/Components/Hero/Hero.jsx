/* eslint-disable no-unused-vars */
import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I`m Mohammed Alidu,</span> software developer based in Ghana.</h1>
        <p>I am a software developer from Ho, Ghana with a passion for coding.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
export default Hero