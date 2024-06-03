import { Fragment } from "react"
import Hero from "../sections/Home/Hero"
import Services from "../sections/Home/Services"
import Projects from "../sections/Home/Projects"
import Contact from "../sections/Home/Contact"

const HomePage = () => {
  return (
    <Fragment>
        <Hero/>
        <Services/>
        <Projects/>
        <Contact/>
    </Fragment>
  )
}

export default HomePage