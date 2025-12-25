import Award from "../components/Award";

import redCircle from "../assets/images/redCircle.png";
import blueCircle from "../assets/images/blueCircle.png";

export default function Awards() {
  const awards = [
    {
      title:
        "2nd Honorable Mention (Team) UNITY 13 Software Development Competition",
      image: blueCircle,
    },
    {
      title:
        "2nd Place Winner (Team) PEKAN IT UNSIKA Software Development Competition",
      image: redCircle,
    },
    {
      title:
        "Distinction Graduate (TOP 10%) on Coding Camp powered by DBS Foundation",
      image: blueCircle,
    },
  ];

  return (
    <section id="awards" className="mx-20 my-24">
      <div className="text-center text-secondary mb-8">
        <h1 className="text-7xl font-extrabold mb-4">
          Awards & Honor
        </h1>
        <h2 className="text-xl mb-4">
          A few milestones and achievements that shaped my journey.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-16 mx-52">
        {awards.map((award, index) => (
          <Award
            key={index}
            image={award.image}
            title={award.title}
          />
        ))}
      </div>
    </section>
  );
}
