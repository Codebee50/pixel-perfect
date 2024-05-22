import { CgMenuRight } from "react-icons/cg"
import { baselogo } from "../assets/icons"
import { navLinks } from "../constants"
import { motion } from "framer-motion"

const Nav = () => {
  return (
    <div className="w-full hero-padding bg-white flex flex-row items-center justify-between py-5 fixed top-0 z-20">
        <div className="flex flex-row items-center gap-10">
            <div className="flex flex-row items-center">
                <img src={baselogo} className="w-[19px] sm:w-[25px]" alt="Pixel perfect web design agency"  />
                <p className="font-steradian ml-3 font-bold text-lg">Pixel Perfect</p>
            </div>

            <div className="max-tab-one:hidden">
                <nav aria-label="main">
                    <ul className="flex flex-row items-center gap-4">
                        {
                            navLinks.map((navItem)=>{
                                return <li key={navItem.label}><a className="font-steradian text-gray100 hover:text-purple100 " href={navItem.link}>{navItem.label}</a></li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>

        <div className="flex flex-row items-center gap-3 max-tab-one:hidden">
            <motion.button whileTap={{scale:0.85}} className="px-7 py-[0.65rem] rounded-lg font-steradian bg-transparent border hover:border-green100 border-green100 text-sm text-green100">Contact</motion.button>
            <motion.button whileTap={{scale:0.85}} className="px-7 py-[0.65rem] rounded-lg font-steradian bg-green100 text-white text-sm">Work with us</motion.button>
        </div>

        <div className="tab-one:hidden">
            <CgMenuRight size={'1.8em'}/>
        </div>
    </div>
  )
}

export default Nav