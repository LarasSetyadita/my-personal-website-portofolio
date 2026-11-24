
/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
    {
      id: 1,
      role: "Data Analyst",
      company: "PT Bank Syariah Indonesia (Persero) Tbk",
      location: "Central Jakarta, Indonesia",
      type: "MagangHub",
      period: "November 2026 – Present",
      description:
        "Contributed to the design and development of data visualization dashboards to support internal monitoring and reporting activities.",
      responsibilities: [
        "-",
        
      ],
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
  
  /* =========================================================
     EXPERIENCE COMPONENT
  ========================================================= */
  
  function Experience() {
    return (
      <section
        id="experience"
        className="px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
  
          {/* =================================================
              SECTION HEADER
          ================================================= */}
  
          <div className="reveal mb-14 max-w-2xl">
            <h2 className="mb-3 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
              Experience
            </h2>
  
            <p className="text-base leading-relaxed text-[#243027]/80 sm:text-lg">
              My professional journey, where I turn knowledge into
              practical experience and contribute to meaningful projects.
            </p>
          </div>
  
          {/* =================================================
              EXPERIENCE TIMELINE
          ================================================= */}
  
          <div className="relative">
  
            {/* Timeline Line */}
  
            <div className="
              absolute
              left-[7px]
              top-3
              hidden
              h-[calc(100%-24px)]
              w-px
              bg-[#C2AA71]/60
              sm:block
            " />
  
            <div className="space-y-8">
  
              {experiences.map((experience) => (
                <article
                  key={experience.id}
                  className="reveal relative sm:pl-10"
                >
  
                  {/* Timeline Dot */}
  
                  <div className="
                    absolute
                    left-0
                    top-8
                    hidden
                    h-4
                    w-4
                    rounded-full
                    border-4
                    border-[#FAF8F3]
                    bg-[#4F6B52]
                    ring-2
                    ring-[#4F6B52]/30
                    sm:block
                  " />
  
                  {/* Experience Card */}
  
                  <div className="
                    card-hover
                    rounded-3xl
                    bg-[#EDF1E7]
                    p-6
                    sm:p-8
                  ">
  
                    {/* Top Information */}
  
                    <div className="
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    ">
  
                      <div>
  
                        <span className="
                          inline-block
                          rounded-lg
                          bg-[#4F6B52]/10
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-[#4F6B52]
                        ">
                          {experience.type}
                        </span>
  
                        <h3 className="
                          mt-4
                          font-display
                          text-2xl
                          font-bold
                          text-[#243027]
                          sm:text-3xl
                        ">
                          {experience.role}
                        </h3>
  
                        <p className="
                          mt-2
                          text-base
                          font-semibold
                          text-[#4F6B52]
                        ">
                          {experience.company}
                        </p>
  
                        <p className="
                          mt-1
                          text-sm
                          text-[#243027]/60
                        ">
                          {experience.location}
                        </p>
  
                      </div>
  
                      {/* Period */}
  
                      <div className="
                        shrink-0
                        rounded-xl
                        bg-[#FAF8F3]
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-[#243027]/75
                      ">
                        {experience.period}
                      </div>
  
                    </div>
  
                    {/* Divider */}
  
                    <div className="
                      my-6
                      h-px
                      bg-[#243027]/10
                    " />
  
                    {/* Description */}
  
                    <p className="
                      text-sm
                      leading-relaxed
                      text-[#243027]/80
                      sm:text-base
                    ">
                      {experience.description}
                    </p>
  
                    {/* Responsibilities */}
  
                    <div className="mt-6">
  
                      <h4 className="
                        mb-4
                        font-display
                        text-lg
                        font-bold
                        text-[#243027]
                      ">
                        Key Responsibilities
                      </h4>
  
                      <ul className="space-y-3">
  
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <li
                              key={index}
                              className="
                                flex
                                items-start
                                gap-3
                                text-sm
                                leading-relaxed
                                text-[#243027]/75
                              "
                            >
                              <span className="
                                mt-1.5
                                h-2
                                w-2
                                shrink-0
                                rounded-full
                                bg-[#4F6B52]
                              " />
  
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
  
                      </ul>
  
                    </div>
  
                    {/* Tools & Technologies */}
  
                    <div className="mt-7">
  
                      <h4 className="
                        mb-3
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#4F6B52]
                      ">
                        Tools & Technologies
                      </h4>
  
                      <div className="flex flex-wrap gap-2">
  
                        {experience.tools.map((tool) => (
                          <span
                            key={tool}
                            className="
                              rounded-lg
                              bg-[#FAF8F3]
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-[#243027]/75
                            "
                          >
                            {tool}
                          </span>
                        ))}
  
                      </div>
  
                    </div>
  
                  </div>
  
                </article>
              ))}
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Experience;
  