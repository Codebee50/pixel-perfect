import Nav from "../../components/Nav";
// import { arrowtwostep, curlarrow, straightarrow } from "../../assets/icons";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import { chatimgtwo, manOnPhone } from "../../assets/images";
import WhatsappChat from "../../components/WhatsappChat";
import { chatimgone } from "../../assets/images";
import { IoLogoWhatsapp } from "react-icons/io5";

const HeroSection = () => {
  return (
    <main className="w-full flex flex-col relative bg-[#dee7ff]">
      <Nav />

      {/* <div className="w-[90%] sm:w-[70%] absolute h-[50vh]  sm:h-screen bg-[#f0f9f5] -z-10 top-0 right-0 rounded-bl-full"></div> */}

      <section className="w-full sm:min-h-screen flex flex-col-reverse max-md:pt-[12vh] md:flex-row gap-4 tab-956:items-center items-center tab-956:justify-between hero-padding max-md:pb-10">
        <motion.div className="flex flex-col max-tab-956:mt-7 w-full md:w-[50%]">
          <motion.p
            className="font-steradian text-purple100 font-medium max-sm:text-sm"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
          >
            BRINGING YOUR IDEAS TO LIFE
          </motion.p>
          <motion.h1
            className="font-steradian max-xl:text-4xl text-6xl font-bold mt-2 leading-[1.3] text-black100"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          >
            Design, Build, Scale your ideas and businesses
          </motion.h1>
          <motion.p
            className="sm:w-[90%] max-w-[720px] font-steradian text-gray100 max-[858px]:text-sm mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: [0, 0, 0, 1], y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.4 }}
          >
            At Pixel perfect, we are dedicated to transforming ideas into
            reality through innovative design and development solutions. Our
            diverse team of experts specializes in delivering high-quality
            services across multiple domains to help your business thrive in the
            digital landscape.
          </motion.p>

          <div className="flex flex-row items-center gap-4 mt-7 flex-wrap">
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="flex flex-row items-center justify-center tab-350px:justify-between gap-3 px-5 py-[0.8rem] w-full tab-350px:w-max rounded-lg font-steradian border border-purple100 text-sm text-white bg-purple100"
            >
              Get started
              <IoMdArrowForward size={"1.3em"} />

            </motion.button>

            
            <a className="flex flex-row items-center justify-center gap-3 border border-whatsappgreen px-5 py-[0.8rem] rounded-lg cursor-pointer max-tab-350px:w-full">
                <IoLogoWhatsapp size={'1.3rem'} className="fill-whatsappgreen"/>
                <p className="font-steradian text-whatsappgreen text-sm">Lets chat</p>
             </a>
          </div>
        </motion.div>

        <div className="w-full md:w-[50%]">
          <div className="w-full h-[30vh] tab-450:h-[50vh] md:h-[70vh] relative">
            <div className="absolute bottom-0 right-0 m-3 flex flex-col gap-2">
              <WhatsappChat
                image={chatimgone}
                name="Kyrian Pixel Perfect"
                message="Website is now live"
                time="8:00 AM"
                numberOfMessages={2}
                index={1}
              />
              <WhatsappChat
                image={chatimgtwo}
                name="Japh Pixel Perfect"
                message="Your logo is ready sir"
                time="8:00 AM"
                numberOfMessages={1}
                index={2}
              />
            </div>
            <img
              src={manOnPhone}
              alt=""
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* <div className="w-full flex flex-row items-center justify-between">
            <div>
              <p>+2349128168542, email@example.com</p>
            </div>
          </div> */}
    </main>
  );
};

export default HeroSection;
