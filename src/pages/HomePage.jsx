import { Fragment } from "react"
// import Hero from "../sections/Home/Hero"
import Services from "../sections/Home/Services"
import Projects from "../sections/Home/Projects"
import Contact from "../sections/Home/Contact"
import HeroSection from "../sections/Home/HeroSection"
import Testimonials from "../sections/Home/Testimonials"
import Footer from "../components/Footer"
import Message from "../sections/Home/Message"

const HomePage = () => {
  return (
    <Fragment>
        {/* <Hero/> */}
        <HeroSection/>
        <Services/>
        <Projects/>
        <Contact/>
        <Testimonials/>
        <Message/>
        <Footer/>
    </Fragment>
  )
}

export default HomePage