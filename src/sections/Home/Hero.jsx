import Nav from "../../components/Nav";
import LongBar from "../../components/LongBar";
// import { arrowtwostep, curlarrow, straightarrow } from "../../assets/icons";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";


const Hero = () => {
  return (
    <main className="w-full">
      <Nav />

      <section className="w-full min-h-screen flex flex-col-reverse max-tab-956:pt-[15vh] tab-956:flex-row items-center justify-between hero-padding ">
        {/* <img
          className="w-[200px] absolute top-[300px] right-[200px] -rotate-12"
          src={curlarrow}
          alt=""
        /> */}

        <motion.div className="flex flex-col bg-white max-tab-956:mt-7">
          <motion.p
            className="font-steradian text-green100 font-medium"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
          >
            BRINGING YOUR IDEAS TO LIFE
          </motion.p>
          <motion.h1
            className="font-steradian max-xl:text-4xl text-6xl font-bold w-full sm:w-[90%] max-w-[700px] mt-2 leading-[1.3]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Design, Build, Scale your ideas and businesses
          </motion.h1>
          <motion.p
            className="sm:w-[90%] max-w-[720px] font-steradian text-gray100 max-sm:text-sm"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.4 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos harum
            placeat dolor voluptas labore. Similique deleniti, nemo omnis iure
            impedit quasi quam accusantium quas ipsum molestias id voluptas? Ad,
            ut?
          </motion.p>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="flex flex-row items-center gap-3 px-7 py-[0.7rem] w-max mt-7 rounded-lg font-steradian bg-transparent border hover:border-green100 border-gray100 text-sm text-green100"
          >
            Get started

            <IoMdArrowForward size={'1.3em'}/>
            
          </motion.button>
        </motion.div>

        <div className="flex flex-row items-end gap-3 min-h-0 ">
          <LongBar height="1" className="h-[1vh]" index={1}  />
          <LongBar height="5" className="h-[5vh]" index={2}/>
          <LongBar height="10" className="h-[10vh]" index={3}/>
          <LongBar height="20" className="h-[20vh]" index={4}/>
          <LongBar height="30" className="h-[30vh]" index={5}/>
          <LongBar height="40" className="h-[40vh]" index={6}/>
        </div>


        {/* <motion.div className="flex flex-row gap-3 items-end relative min-h-screen bg-[#f4f7f1]">
          <LongBar height="2" index={1} />
          <LongBar height="5" index={1} />
          <LongBar height="10" index={2} />
          <LongBar height="20" index={3} />
          <LongBar height="40" index={4} />
          <LongBar height="60" index={5} />
          <LongBar height="80" index={6} />
        </motion.div> */}
      </section>
    </main>
  );
};

export default Hero;
