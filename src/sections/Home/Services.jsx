import ServiceCard from "../../components/ServiceCard";
import StrokeBtn from "../../components/StrokeBtn";
import { servicesList } from "../../constants";

const Services = () => {
  return (
    <section
      className="w-full max-tab-956:mt-16 hero-padding min-h-screen scroll-mt-[15vh]"
      id="services"
    >
      <div className="w-full flex flex-col justify-end items-end">
        <div className="w-[90%] max-w-[700px]">
          <h1 className="text-black100 font-medium font-steradian text-2xl sm:text-4xl">
            From concept to creation, <br className="max-sm:hidden" /> We bring your digital ideas to life.
          </h1>
          <p className="font-steradian text-gray100 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptatem id sequi fugit minus recusandae nulla ducimus.
          </p>
          <StrokeBtn label="Lets talk" className="mt-4" />
        </div>
      </div>

      <div className="w-full min-h-screen grid max-sm:grid-cols-1 sm:grid-auto-290 gap-4 items-stretch mt-20">
        {
          servicesList.map((service)=>(
            <ServiceCard key={service.name} {...service}/>
          ))
        }
      </div>
    </section>
  );
};

export default Services;
