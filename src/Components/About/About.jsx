import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Embark on Education journey with our university comprehensive education programs . 
                our cutting edge curriculum is designed to empower students to excel in the dynamic field
                of education
            </p>

    <p> with a focus on innovation  , hands on learning and personalized mentorship , our program prepares 
        aspiring educators to make a powerful impact in classrooms , schools and administration  . 
    </p>

  <p>whether you aspire to become a teacher , administrator , counselor or educational leader our diverse range of 
    programs offers the perfect pathway to achieve your goal and unlock your full potential 
  </p>


        </div>
      
    </div>
  )
}

export default About
