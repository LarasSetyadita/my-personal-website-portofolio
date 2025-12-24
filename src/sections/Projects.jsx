import ProjectCard from "../components/ProjectCard";
import portfolioImg from "../assets/images/my-portofolio.png";

function Projects() {
  return (
    <section id="projects" className="bg-primary h-screen flex items-center">
        <div className="mx-20 w-full">
            <h1 className="text-7xl font-extrabold text-secondary mb-4">
                Project
            </h1>

            <div className="grid grid-cols-3 gap-16">
                <ProjectCard
                    image={portfolioImg}
                    title="MyPortfolio"
                    role="Full-stack Engineer"
                    desc="Personal portfolio website."
                    date="October 2025 - Present"
                />
                <ProjectCard
                    image={portfolioImg}
                    title="MyPortfolio"
                    role="Full-stack Engineer"
                    desc="Personal portfolio website."
                    date="October 2025 - Present"
                />
                <ProjectCard
                    image={portfolioImg}
                    title="MyPortfolio"
                    role="Full-stack Engineer"
                    desc="Personal portfolio website."
                    date="October 2025 - Present"
                />
            </div>
        </div>
    </section>
  );
}

export default Projects
