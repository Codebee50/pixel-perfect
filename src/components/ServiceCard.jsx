import { PiCaretDoubleRight } from "react-icons/pi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { configurationActions } from "../store";

const ServiceCard = (props) => {
  const dispatch = useDispatch()
  const onServiceCardClickedHandler = ()=>{
      console.log(props.index)
      dispatch(configurationActions.setService({service:props.index}))
      window.location.href = '#contact'
  }
  return (
    <motion.div
      className="flex flex-col items-start border border-[#e4dff7] p-5 rounded-md justify-between"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeIn",
        type: "spring",
        duration: 2,
        delay: 0.2 * props.index,
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col">
        <div className="bg-purple100 p-2 rounded-md w-max">
          <props.icon size={"1.2em"} className="fill-white" color="#ffffff" />
        </div>
        <p className="text-black100 font-steradian font-medium mt-2 text-xl">
          {props.name}
        </p>
        <p className="text-sm text-gray100">{props.description}</p>
      </div>

      <div className="cursor-pointer flex flex-row items-center mt-5 gap-2 text-black100 hover:text-green100" onClick={onServiceCardClickedHandler}>
        <p className="font-steradian">Get started </p>
        <PiCaretDoubleRight />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
