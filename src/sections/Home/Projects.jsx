import ProjectItem from "../../components/ProjectItem";
import { projectsList } from "../../constants";
import SectionHeaderOne from "../../components/SectionHeaderOne";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col hero-padding mt-10 scroll-margin-top"
    >
     
      <SectionHeaderOne
        bigText="Discover our previous works."
        smallText="We deliver meticulously crafted projects that achieve measurable results, expand audience reach, and address critical challenges."
      />

      <div className="w-full grid max-[800px]:grid-cols-1 grid-cols-2 gap-5 mt-10">
        {projectsList.map((projectItem) => (
          <ProjectItem {...projectItem} key={projectItem.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
