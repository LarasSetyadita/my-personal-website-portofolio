import { useState } from "react";

/* =========================================================
   LANGUAGES
========================================================= */

const languages = [
  {
    name: "Indonesian",
    level: "Native",
  },
  {
    name: "English",
    level: "Professional Working Proficiency",
  },
  {
    name: "Arabic",
    level: "Basic",
  },
];

/* =========================================================
   HARD SKILLS
========================================================= */

const hardSkills = [
  {
    name: "Data Analysis",
    description:
      "Data cleaning, data visualization, and exploratory data analysis.",
    tools: "Python · Pandas · NumPy · Matplotlib · SQL",

    certificates: [
      {
        name: "Certificate 1",
        issuer: "Dicoding",
        link: "#",
      },
      {
        name: "Certificate 2",
        issuer: "Coursera",
        link: "#",
      },
    ],
  },

  {
    name: "Machine Learning",
    description:
      "Building, training, evaluating, and improving machine learning models.",
    tools: "Python · Scikit-learn · TensorFlow · NLP",

    certificates: [
      {
        name: "Certificate 1",
        issuer: "Dicoding",
        link: "#",
      },
      {
        name: "Certificate 2",
        issuer: "Google",
        link: "#",
      },
    ],
  },

  {
    name: "Database",
    description:
      "Designing, querying, and managing relational databases.",
    tools: "SQL · MySQL · PostgreSQL",

    certificates: [
      {
        name: "Certificate 1",
        issuer: "Dicoding",
        link: "#",
      },
    ],
  },
];

/* =========================================================
   TOOLS & TECHNOLOGIES
========================================================= */

const tools = [
  {
    name: "Python",
    image: "/images/tools/python.png",
  },
  {
    name: "Pandas",
    image: "/images/tools/pandas.png",
  },
  {
    name: "NumPy",
    image: "/images/tools/numpy.png",
  },
  {
    name: "Matplotlib",
    image: "/images/tools/matplotlib.png",
  },
  {
    name: "SQL",
    image: "/images/tools/sql.png",
  },
  {
    name: "PowerBI",
    image: "/images/tools/powerbi.png",
  },
  {
    name: "TensorFlow",
    image: "/images/tools/tensorflow.png",
  },
  {
    name: "React",
    image: "/images/tools/react.png",
  },
  {
    name: "Google Collaboratory",
    image: "/images/tools/googlecolab.png",
  },
  {
    name: "Git",
    image: "/images/tools/github.png",
  },
];

/* =========================================================
   SKILLS COMPONENT
========================================================= */

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="reveal mb-12 max-w-2xl">
          <h2 className="mb-3 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
            Skills
          </h2>

          <p className="text-base leading-relaxed text-[#243027]/80 sm:text-lg">
            The languages I communicate with and the technical skills I use
            to turn ideas into meaningful solutions.
          </p>
        </div>

        {/* =================================================
            LANGUAGES
        ================================================= */}

        <div className="reveal mb-20">

          <h3 className="mb-6 font-display text-2xl font-bold text-[#243027] sm:text-3xl">
            Languages
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {languages.map((language) => (
              <div
                key={language.name}
                className="
                  rounded-2xl
                  bg-[#EDF1E7]
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <h4 className="font-display text-xl font-bold text-[#243027]">
                  {language.name}
                </h4>

                <p className="mt-2 text-sm text-[#243027]/70">
                  {language.level}
                </p>

                {language.score && (
                  <p className="mt-2 text-xs font-semibold text-[#4F6B52]">
                    {language.score}
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* =================================================
            HARD SKILLS
        ================================================= */}

        <div>

          <div className="reveal mb-6">
            <h3 className="font-display text-2xl font-bold text-[#243027] sm:text-3xl">
              Hard Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {hardSkills.map((skill) => (
              <article
                key={skill.name}
                className="
                  reveal
                  card-hover
                  flex
                  flex-col
                  rounded-3xl
                  bg-[#EDF1E7]
                  p-6
                "
              >

                {/* Skill Name */}

                <h4 className="font-display text-xl font-bold text-[#243027]">
                  {skill.name}
                </h4>

                {/* Description */}

                <p className="mt-3 text-sm leading-relaxed text-[#243027]/75">
                  {skill.description}
                </p>

                {/* Tools */}

                <p className="mt-4 text-xs font-semibold leading-relaxed text-[#4F6B52]">
                  {skill.tools}
                </p>

                {/* Certificate Button */}

                <button
                  type="button"
                  onClick={() => setSelectedSkill(skill)}
                  className="mt-auto pt-6 text-left"
                >
                  <span
                    className="
                      inline-block
                      rounded-xl
                      bg-[#4F6B52]
                      px-4
                      py-2
                      text-sm
                      font-bold
                      text-[#FAF8F3]
                      transition-colors
                      hover:bg-[#243027]
                    "
                  >
                    View Certificates
                  </span>
                </button>

              </article>
            ))}

          </div>
        </div>

        {/* =================================================
            TOOLS & TECHNOLOGIES
        ================================================= */}

        <div className="reveal mt-24">

          <h3 className="mb-8 text-center font-display text-2xl font-bold text-[#243027] sm:text-3xl">
            Tools & Technologies
          </h3>

          {/* Marquee Container */}

          <div
            className="
              relative
              overflow-hidden
              py-4
            "
          >

            {/* Left Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-20
                bg-gradient-to-r
                from-[#FAF8F3]
                to-transparent
              "
            />

            {/* Right Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-20
                bg-gradient-to-l
                from-[#FAF8F3]
                to-transparent
              "
            />

            {/* Moving Track */}

            <div className="tools-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused]">

              {/* First Set */}

              {tools.map((tool) => (
                <div
                  key={`first-${tool.name}`}
                  className="
                    group
                    flex
                    h-24
                    w-24
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EDF1E7]
                    p-4
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    title={tool.name}
                    className="
                      h-12
                      w-12
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="mt-2 text-[10px] font-semibold text-[#243027]/70">
                    {tool.name}
                  </span>
                </div>
              ))}

              {/* Second Set */}

              {tools.map((tool) => (
                <div
                  key={`second-${tool.name}`}
                  className="
                    group
                    flex
                    h-24
                    w-24
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EDF1E7]
                    p-4
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                  aria-hidden="true"
                >
                  <img
                    src={tool.image}
                    alt=""
                    className="
                      h-12
                      w-12
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="mt-2 text-[10px] font-semibold text-[#243027]/70">
                    {tool.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =================================================
            CERTIFICATE MODAL
        ================================================= */}

        {selectedSkill && (
          <div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#243027]/60
              px-5
              backdrop-blur-sm
            "
            onClick={() => setSelectedSkill(null)}
          >

            <div
              className="
                relative
                max-h-[85vh]
                w-full
                max-w-lg
                overflow-y-auto
                rounded-3xl
                bg-[#FAF8F3]
                p-6
                shadow-2xl
                sm:p-8
              "
              onClick={(event) => event.stopPropagation()}
            >

              {/* Close Button */}

              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EDF1E7]
                  text-lg
                  font-bold
                  text-[#243027]
                  transition-colors
                  hover:bg-[#243027]
                  hover:text-[#FAF8F3]
                "
                aria-label="Close"
              >
                ×
              </button>

              {/* Modal Title */}

              <h3 className="pr-10 font-display text-2xl font-bold text-[#243027]">
                {selectedSkill.name}
              </h3>

              <p className="mt-1 text-sm text-[#243027]/60">
                Certificates & Credentials
              </p>

              {/* Certificate List */}

              <div className="mt-6 space-y-4">

                {selectedSkill.certificates.map(
                  (certificate, index) => (
                    <div
                      key={`${certificate.name}-${index}`}
                      className="
                        rounded-2xl
                        bg-[#EDF1E7]
                        p-4
                      "
                    >

                      <h4 className="font-semibold text-[#243027]">
                        {certificate.name}
                      </h4>

                      <p className="mt-1 text-sm text-[#243027]/70">
                        {certificate.issuer}
                      </p>

                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-3
                          inline-block
                          text-sm
                          font-bold
                          text-[#4F6B52]
                          transition-colors
                          hover:text-[#243027]
                        "
                      >
                        View Certificate ↗
                      </a>

                    </div>
                  )
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;

