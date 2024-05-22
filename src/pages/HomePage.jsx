import { Fragment } from "react"
import Hero from "../sections/Home/Hero"
import Services from "../sections/Home/Services"
import Projects from "../sections/Home/Projects"

const HomePage = () => {
  return (
    <Fragment>
        <Hero/>
        <Services/>
        <Projects/>
    </Fragment>
  )
}

export default HomePage