import React from 'react'
import Navbar from './Components/Navbar/Navbar'; // Import Navbar component
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';

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
     
    </div>

  )
}

export default App
