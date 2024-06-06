import { workTogether } from "../../assets/images"

const Contact = () => {
  return (
    <section className="w-full min-h-screen hero-padding pt-5">
        
        <div className="w-full h-[200px] bg-slate-300 relative rounded-lg overflow-hidden">
            <img src={workTogether} className="w-full h-full object-cover object-center" alt="" />
            <div className="w-full h-full absolute bg-bg-overlay top-0 p-6 flex items-end">
                <p className="text-white font-bold font-steradian text-4xl">Work With Us</p>
            </div>
        </div>
    </section>
  )
}

export default Contact