import React from 'react'
import { Switch } from 'react-router-dom'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'


function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
          
        </div>
    )
}

export default Home
