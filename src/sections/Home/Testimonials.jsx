import { chatimgone } from "../../assets/images"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full min-h-screen hero-padding flex flex-col pt-20 scroll-margin-top">

        <div className="flex flex-col w-full items-center">
            <h1 className="font-bold text-3xl font-steradian text-purple100">Testimonials</h1>
            <p className="font-steradian text-gray100">What our clients have to say about us.</p>
        </div>

        <div className="w-full flex flex-row items-center mt-16 gap-4">
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
                <IoIosArrowBack size={'1.3rem'}/>
            </div>
            <div className="w-full">
                <div className="w-full min-h-[40vh] bg-slate-100 rounded-md flex flex-col px-5 pb-5 text-center">

                    <div className="w-[120px] h-[120px] bg-green-300 rounded-full self-center -mt-7 overflow-hidden border-[10px] border-white">
                        <img src={chatimgone} alt="" className="w-full h-full object-cover object-center"/>
                    </div>

                    <div className="flex flex-col w-full items-center mt-5">
                        <h1 className="font-medium font-steradian">Mr. Lumana Bayero</h1>
                        <p className="font-steradian text-slate-500 text-sm">CEO, Hannatu Halan Foundation</p>

                        <p className="font-steradian text-slate-500 mt-5 text-center">As I scrolled through the website delivered by Pixel Perfect, I was really Impressed</p>
                    </div>
                </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
                <IoIosArrowForward size={'1.3rem'}/>
            </div>
        </div>
        
    </section>
  )
}

export default Testimonials