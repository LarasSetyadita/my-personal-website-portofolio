const awards = [
  {
    title:
      "2nd Honorable Mention (Team) — UNITY 13 Software Development Competition",
    decoration: "/images/Ellipse 10.png",
  },
  {
    title:
      "2nd Place Winner (Team) — PEKAN IT UNSIKA Software Development Competition",
    decoration: "/images/Ellipse 3.png",
  },
  {
    title:
      "Distinction Graduate (Top 10%) — Coding Camp powered by DBS Foundation",
    decoration: "/images/Ellipse 10.png",
  },
];

function Awards() {
  return (
    <section id="awards" className="px-5 pb-24 sm:px-8 lg:px-12">
      <div className="reveal mx-auto max-w-7xl text-center">

        {/* Section Header */}
        <div className="reveal mx-auto mb-12 max-w-2xl">
          <h2 className="mb-3 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl lg:text-6xl">
            Awards &amp; Honors
          </h2>

          <p className="text-base text-[#243027]/80 sm:text-lg">
            A few milestones and achievements that shaped my journey.
          </p>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">

          {awards.map((award) => (
            <div
              key={award.title}
              className="reveal card-hover flex flex-col items-center justify-center rounded-3xl bg-[#EDF1E7] p-8"
            >
              <img
                src={award.decoration}
                alt=""
                aria-hidden="true"
                className="mb-4 w-10"
              />

              <p className="font-semibold text-[#243027]">
                {award.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Awards;
