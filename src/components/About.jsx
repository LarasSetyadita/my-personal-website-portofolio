function About() {
  return (
    <section id="about" className="px-5 sm:px-8 lg:px-12">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#EDF1E7] px-6 py-14 sm:px-12">


        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/about-me.png"
              alt="Portrait of Dwi Laras Setyadita"
              className="mx-auto w-full max-w-md rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 space-y-6 lg:order-2">

            <h2 className="font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
              About Me
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#243027] sm:text-lg">

              <p>
                I am{" "}
                <span className="font-bold">
                  Dwi Laras Setyadita
                </span>
                , an Information Technology graduate with a strong
                passion for{" "}
                <span className="font-bold">
                  data analysis
                </span>{" "}
                and{" "}
                <span className="font-bold">
                  machine learning
                </span>
                .
              </p>

              <p>
                I completed the Coding Camp powered by DBS Foundation
                as a Top 10% Distinction Graduate, and I actively take
                part in competitions and projects — both individually
                and as part of a team.
              </p>

            </div>

            {/* Roles */}
            <div className="grid grid-cols-1 gap-3 pt-2 font-bold text-center sm:grid-cols-3 sm:gap-4">

              <div className="rounded-xl bg-[#8FA98F] px-2 py-3 text-sm transition-transform hover:-translate-y-1 sm:text-base">
                Data Analyst
              </div>

              <div className="rounded-xl bg-[#8FA98F] px-2 py-3 text-sm leading-tight transition-transform hover:-translate-y-1 sm:text-base">
                Machine Learning Engineer
              </div>

              <div className="rounded-xl bg-[#8FA98F] px-2 py-3 text-sm transition-transform hover:-translate-y-1 sm:text-base">
                Web Developer
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

