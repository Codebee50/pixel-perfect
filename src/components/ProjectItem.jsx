import { IoArrowForward } from "react-icons/io5"

const ProjectItem = (props) => {
  return (
    <div className="w-full h-[500px] bg-green100 rounded-lg relative overflow-hidden">

        <div className="w-full h-full rounded-lg">
            <img src={props.image} alt={props.title} className="w-full h-full object-cover object-center" />
        </div>

        <div className="absolute w-full top-0 h-full bg-gradient-to-t from-black z-10 rounded-lg flex flex-col p-5 justify-end">
            <p className="text-white font-medium text-[1.4rem] sm:text-[1.7rem] leading-9 font-steradian">{props.title}</p>
            <p className="font-steradian text-gray100 font-light">{props.name}</p>

            <div className="w-full flex flex-row items-center gap-4 mt-5 flex-wrap">
                {
                    props.highlights.map((highlight)=>(
                        <div key={highlight} className="bg-white px-5 py-1 rounded-full"><p className="font-steradian text-[0.75rem] sm:text-sm">{highlight}</p></div>
                    ))
                }
            </div>

            <a className="mt-5 flex flex-row items-center gap-2" href={props.link} target="_blank" rel="noopener noreferrer">
                <p className="text-white font-steradian">View site</p>
                <IoArrowForward className="fill-white" color="#ffffff" size={'1.3rem'}/>
            </a>
        </div>
        
    </div>
  )
}

export default ProjectItem