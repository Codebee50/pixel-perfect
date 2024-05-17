import { motion } from "framer-motion";

const StrokeBtn = (props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className={`flex flex-row items-center gap-3 px-7 py-[0.7rem] w-max rounded-lg font-steradian bg-transparent border hover:border-green100 border-green100 text-sm text-green100 ${props.className}`}
    >
      {props.label}

      {props.icon && <props.icon size={"1.3em"} />}
    </motion.button>
  );
};

export default StrokeBtn;
