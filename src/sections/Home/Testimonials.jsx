import { useState } from "react"
import { chatimgone } from "../../assets/images"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { testimonialList } from "../../constants"

const Testimonials = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)


    console.log('selected',selectedIndex)
    const decreaseTestimonialIndex = ()=> {
        setSelectedIndex((prev)=>{
            console.log(prev)
            return prev > 0? prev -1 : prev
        })
    }

    const increamentTestimonialIndex = ()=> {
        setSelectedIndex((prev)=>{
            const increament =  prev < testimonialList.length-1? prev + 1 : prev
            console.log(testimonialList.length, increament)
            return increament
        })
    }


  return (
    <section id="testimonials" className="w-full py-20 hero-padding flex flex-col pt-20 scroll-margin-top">

        <div className="flex flex-col w-full items-center">
            <h1 className="font-bold text-3xl font-steradian text-purple100">Testimonials</h1>
            <p className="font-steradian text-gray100">What our clients have to say about us.</p>
        </div>

        <div className="w-full flex flex-row items-center mt-16 gap-4">
            <div className="tab-500:w-10 tab-500:h-10 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer shrink-0" onClick={decreaseTestimonialIndex}>
                <IoIosArrowBack size={'1.3rem'}/>
            </div>
            <div className="w-full">
                <div className="w-full min-h-[40vh] bg-slate-100 rounded-md flex flex-col px-5 pb-5 text-center">

                    <div className="w-[120px] h-[120px] bg-green-300 rounded-full self-center -mt-7 overflow-hidden border-[10px] border-white">
                        <img src={chatimgone} alt="" className="w-full h-full object-cover object-center"/>
                    </div>

                    <div className="flex flex-col w-full items-center mt-5">
                        <h1 className="font-medium font-steradian">{testimonialList[selectedIndex].name}</h1>
                        <p className="font-steradian text-slate-500 text-sm">{testimonialList[selectedIndex].position}</p>

                        <p className="font-steradian text-slate-500 mt-5 text-center">{testimonialList[selectedIndex].comment}</p>
                    </div>
                </div>
            </div>

            <div className="tab-500:w-10 tab-500:h-10 w-7 h-7 shrink-0 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer" onClick={increamentTestimonialIndex}>
                <IoIosArrowForward size={'1.3rem'}/>
            </div>
        </div>
        
    </section>
  )
}

export default Testimonials