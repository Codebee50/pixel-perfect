
import { motion } from "framer-motion"

const LongBar = (props) => {
  return (
    <motion.div className={`w-10   min-[444px]:w-14 bg-gradient-to-t from-purple100 to-green100 h-[${props.height}vh] ${props.className}`}
    initial={{opacity:0, height:0}}
    animate={{opacity:1, height:`${props.height}vh`}}
    transition={{ duration: 0.9, delay:props.index*0.3, type:"tween"}}></motion.div>
  )
}

export default LongBar