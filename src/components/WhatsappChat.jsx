import { motion } from "framer-motion"

const WhatsappChat = (props) => {
  return (
    <motion.div className="flex flex-row items-start sm:items-center bg-white rounded-lg p-2 gap-2 sm:gap-4 shadow-lg"
    initial={{opacity:0, y:40}}
    animate={{opacity:1, y:0}}
    transition={{ duration: 0.7, delay: props.index *0.4, ease: "easeInOut", type:"tween" }}
    >
        <img src={props.image} alt="" className="w-[40px] sm:w-[55px] h-[40px] sm:h-[55px] rounded-full object-center object-cover" />
        <div className="flex flex-col">
            <p className="text-[0.8rem] sm:text-[0.95rem] font-steradian font-medium">{props.name}</p>
            <p className="font-steradian text-[0.75rem] sm:text-[0.85rem] text-gray100">{props.message}</p>
        </div>

        <div className="flex flex-col items-center">
            <p className="text-[0.7rem] sm:text-[0.8rem] text-green100">{props.time}</p>
            <div className="bg-green100 flex items-center justify-center w-[15px] sm:w-[20px] h-[15px] sm:h-[20px] rounded-full p-2">
                <p className="text-[0.7rem] sm:text-[0.75rem] text-white">{props.numberOfMessages}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default WhatsappChat