const projects = [
  {
    title: "MyPortofolio",
    role: "Full-stack Engineer",
    description:
      "A personal portfolio site built to present my projects, skills, and experience in a clean, responsive layout.",
    date: "October 2025 – Present",
    image: "/images/my-portofolio.png",
    link: "#",
  },
  {
    title: "MindGarden",
    role: "Machine Learning Engineer",
    description:
      "A mobile app that supports users' self-healing with personalized generative-AI responses and calming visuals.",
    date: "October 2025 – Present",
    image: "/images/Pekan IT - TryHard - Mind Garden - Slide Deck.png",
    link: "#",
  },
  {
    title: "Foodinary",
    role: "Project Manager . Machine Learning Engineer",
    description:
      "A food-tracking application that helps users log meals and understand their nutrition at a glance.",
    date: "October 2025 – Present",
    image: "/images/foodinary.png",
    link: "#",
  },
];

function Projects() {
  return (
    <section
      id="project"
      className="relative px-5 py-24 sm:px-8 lg:px-12"
    >


      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="reveal mb-12 max-w-2xl">
          <h2 className="mb-3 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
            Project
          </h2>

          <p className="text-base text-[#243027]/80 sm:text-lg">
            Little creations that started as ideas and ended up as
            something I'm proud of.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal card-hover overflow-hidden rounded-3xl bg-white/40"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={`Screenshot of the ${project.title} project`}
                className="aspect-[16/8] w-full object-cover"
              />

              {/* Project Information */}
              <div className="space-y-2 p-5">

                <h3 className="font-display text-xl font-bold text-[#243027]">
                  {project.title}
                </h3>

                <p className="text-sm font-semibold text-[#4F6B52]">
                  {project.role}
                </p>

                <p className="text-sm text-[#243027]/80">
                  {project.description}
                </p>

                <p className="pt-1 text-xs font-semibold text-[#243027]/60">
                  {project.date}
                </p>

                <a
                  href={project.link}
                  className="mt-2 inline-block rounded-xl bg-[#4F6B52] px-4 py-2 text-sm font-bold text-[#FAF8F3] transition-colors hover:bg-[#243027]"
                >
                  Source Code
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;

