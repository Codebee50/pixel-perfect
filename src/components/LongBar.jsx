
import { motion } from "framer-motion"

const LongBar = (props) => {
  return (
    <motion.div layout className={`w-7 min-[337px]:w-10 min-[444px]:w-14 bg-gradient-to-t from-purple100 to-green100 ${props.className}`}
    initial={{opacity:0, height:0}}
    animate={{opacity:1, height:`auto`}}
    transition={{ duration: 0.9, delay:props.index*0.3, type:"tween"}}>

      <div className={`${props.innerDivClassName}`}>

      </div>
    </motion.div>
  )
}

export default LongBar