import SectionHeaderOne from "../../components/SectionHeaderOne";
import ServiceCard from "../../components/ServiceCard";
import { servicesList } from "../../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="w-full mt-16 tab-956:mt-10 hero-padding min-h-screen scroll-margin-top"
      id="services"
    >
      <SectionHeaderOne
        bigText="From concept to creation, We bring your digital ideas to life."
        smallText="Across all our services, meticulous attention to detail is
            paramount. This ensures we consistently meet and surpass your
            expectations."
      />

      <motion.div className="w-full min-h-screen grid max-sm:grid-cols-1 sm:grid-auto-290 gap-4 items-stretch mt-5">
        {servicesList.map((service, index) => (
          <ServiceCard key={service.name} {...service} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
