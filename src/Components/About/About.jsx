/* eslint-disable no-unused-vars */
import React from "react"
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"


const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Software Developer with over a year of professional expertise in the field. Throughout my career, I have had the priviledge of collaborating with clients on a variety of projects for success and growth</p>
                    <p>My passion for software development is not only reflected in my ability to quickly learn new technologies, but also in my ability to work with others to bring ideas to life.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>Git</p><hr style={{width: "60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>40+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
export default About