
const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    company: "PT Bank Syariah Indonesia (Persero) Tbk",
    location: "Central Jakarta, Indonesia",
    type: "MagangHub",
    period: "November 2026 – Present",
    description:
      "Contribute to data collection, processing, and visualization initiatives to support business analysis and management decision-making, with a focus on customer feedback analysis and project performance monitoring.",
    responsibilities: [
      "Collect and scrape customer app reviews from Google Play Store and Apple App Store to compile user feedback data for further analysis.",
      "Develop an automated data transformation workflow using Excel and Power Query to process and consolidate weekly project tracking data, including Plan and Actual progress across activities.",
      "Integrate transformed Excel data into Power BI to develop interactive dashboards that provide management with insights into project progress, performance metrics, and Plan vs. Actual comparisons."
    ],
    tools: ["Python", "PowerBI", "Excel"],
  },
  {
    id: 2,
    role: "Data & Statistics Intern",
    company: "Yogyakarta City Health Office",
    location: "Yogyakarta, Indonesia",
    type: "Internship",
    period: "November 2025 – January 2026",
    description:
      "Supported data analysis and visualization initiatives to improve healthcare data management and provide insights for more effective public service planning and decision-making.",
    responsibilities: [
      "Cleaned and analyzed BPJS PBI (Contribution Assistance Recipient) patient data using PostgreSQL to identify approximately 60,000 active patients from a dataset of over 80,000 records.",

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

          <div className="absolute left-[116px] top-2 bottom-2 w-px bg-[#C2AA71]/70 sm:left-[180px]" />

          <div className="space-y-14">

            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                className="reveal relative grid grid-cols-[100px_minmax(0,1fr)] gap-8 sm:grid-cols-[164px_minmax(0,1fr)] sm:gap-10"
              >

                {/* DATE - CENTER ALIGNED WITH TIMELINE DOT */}

                <div className="relative self-start">
                  <span className="absolute right-0 top-[11px] -translate-y-1/2
                    max-w-[100px] text-right
                    text-[10px] font-bold leading-relaxed text-[#B77E23]
                    sm:max-w-[164px] sm:text-sm">
                    {experience.period}
                  </span>
                </div>

                {/* TIMELINE DOT */}

                <div className="absolute left-[110px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-[#FAF8F3] bg-[#4F6B52] ring-1 ring-[#4F6B52]/40 sm:left-[174px]" />

                {/* EXPERIENCE CONTENT */}

                <div className="min-w-0">

                  {/* TOP INFORMATION */}

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

                  {/* DESCRIPTION */}

                  <p className="mt-6 max-w-4xl text-sm leading-7 text-[#243027]/75 sm:text-base">
                    {experience.description}
                  </p>

                  {/* RESPONSIBILITIES */}

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

                  {/* TOOLS */}

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

                  {/* DIVIDER */}

                  {index !== experiences.length - 1 && (
                    <div className="mt-12 h-px w-full bg-[#243027]/10" />
                  )}

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
