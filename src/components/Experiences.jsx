
const experiences = [
    {
      id: 1,
      role: "Data Analyst",
      company: "PT Bank Syariah Indonesia (Persero) Tbk",
      location: "Central Jakarta, Indonesia",
      type: "MagangHub",
      period: "November 2026 – Present",
      description:
        "Contributing to data analysis and visualization initiatives to support business insights and data-driven decision-making.",
      responsibilities: [],
      tools: ["Python"],
    },
    {
      id: 2,
      role: "Data & Statistics Intern",
      company: "Yogyakarta City Health Office",
      location: "Yogyakarta, Indonesia",
      type: "Internship",
      period: "November 2025 – January 2026",
      description:
        "Contributed to the design and development of data visualization dashboards to support internal monitoring and reporting activities.",
      responsibilities: [
        "Designed interactive dashboards to present data in a more structured, informative, and accessible format.",
        "Organized and transformed Excel datasets to prepare them for dashboard visualization.",
        "Developed visual representations of key indicators to help users monitor activities and track progress.",
        "Improved dashboard layouts and visual elements to enhance data readability and usability.",
      ],
      tools: ["Microsoft Excel", "Power BI", "Data Visualization"],
    },
  ];
  
  function Experience() {
    return (
      <section
        id="experience"
        className="px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
  
          {/* HEADER */}
  
          <div className="reveal mb-16 max-w-2xl">
            <h2 className="mb-3 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
              Experience
            </h2>
  
            <p className="text-base leading-relaxed text-[#243027]/80 sm:text-lg">
              My professional journey, where I turn knowledge into
              practical experience and contribute to meaningful solutions.
            </p>
          </div>
  
          {/* TIMELINE */}
  
          <div className="relative">
  
            {/* Vertical Line */}
  
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#C2AA71]/70" />
  
            <div className="space-y-14">
  
              {experiences.map((experience, index) => (
                <article
                  key={experience.id}
                  className="reveal relative pl-10 sm:pl-12"
                >
  
                  {/* Timeline Dot */}
  
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] border-[#FAF8F3] bg-[#4F6B52] ring-1 ring-[#4F6B52]/40" />
  
                  {/* Top Information */}
  
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
  
                    <div className="max-w-3xl">
  
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4F6B52]">
                        {experience.type}
                      </p>
  
                      <h3 className="font-display text-2xl font-bold text-[#243027] transition-colors duration-300 hover:text-[#4F6B52] sm:text-3xl">
                        {experience.role}
                      </h3>
  
                      <p className="mt-2 text-base font-semibold text-[#4F6B52] sm:text-lg">
                        {experience.company}
                      </p>
  
                      <p className="mt-1 text-sm text-[#243027]/55">
                        {experience.location}
                      </p>
  
                    </div>
  
                    {/* Period Highlight */}
  
                    <div className="inline-flex w-fit shrink-0 items-center border-l-[3px] border-[#B77E23] py-1 pl-4">
                      <span className="text-sm font-bold text-[#B77E23] sm:text-base">
                        {experience.period}
                      </span>
                    </div>
  
                  </div>
  
                  {/* Description */}
  
                  <p className="mt-6 max-w-4xl text-sm leading-7 text-[#243027]/75 sm:text-base">
                    {experience.description}
                  </p>
  
                  {/* Responsibilities */}
  
                  {experience.responsibilities.length > 0 && (
                    <div className="mt-6">
  
                      <h4 className="mb-4 font-display text-base font-bold text-[#243027]">
                        Key Responsibilities
                      </h4>
  
                      <ul className="max-w-4xl space-y-3">
                        {experience.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[#243027]/75 sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6B52]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
  
                    </div>
                  )}
  
                  {/* Tools */}
  
                  {experience.tools.length > 0 && (
                    <div className="mt-7">
                      <span className="mr-3 text-xs font-bold uppercase tracking-wider text-[#4F6B52]">
                        Tools:
                      </span>
  
                      <span className="text-sm font-medium text-[#243027]/65">
                        {experience.tools.join(" · ")}
                      </span>
                    </div>
                  )}
  
                  {/* Divider */}
  
                  {index !== experiences.length - 1 && (
                    <div className="mt-12 h-px w-full bg-[#243027]/10" />
                  )}
  
                </article>
              ))}
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Experience;
  