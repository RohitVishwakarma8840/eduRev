import React from 'react'
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (

    <div>

<Navbar/>
<Hero/>
<div className="container">
  <Title subTitle='Our PROGRAM' Title='What We Offer'/>
<Programs/>

</div>
<About/>
<Title subTitle='Gallery ' Title='Campus Photos'/> 
<Campus/>

<Title subTitle='Testimonials  ' Title='What Students say'/> 
<Testimonials/>
<Title subTitle='Contact US  ' Title='Get in Touch'/> 
<Contact/>
<Footer/>

    </div>

  )
}

export default App
