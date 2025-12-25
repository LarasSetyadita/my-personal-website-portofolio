import ProjectCard from "../components/ProjectCard"
import portfolioImg from "../assets/images/my-portofolio.png"
import mindGardenImg from "../assets/images/MindGarden.png"
import foodinaryImg from "../assets/images/foodinary.png"
import salesDataAnalysis from "../assets/images/SalesData.png"

function Projects() {
    const projects = [
        { 
            image   :salesDataAnalysis,
            title   :"Sales Data Analysis",
            role    :"Data Analyst",
            desc    :"Sales data analysis project for the BNSP certification, identifying patterns, demand trends, and revenue insights to support business decisions.",
            date    :"Desember 2025",
            code    :"https://github.com/LarasSetyadita/sales-demand-revenue-analysis.git"
        }, {
            image   :mindGardenImg,
            title   :"MindGarden",
            role    :"Machine Learning Engineer",
            desc    :"A mobile app that supports users’ self-healing with personalized generative-AI responses and calming visuals.",
            date    :"April 2025 - Juli 2025",
            code    :"https://github.com/MindGardenApp"  
        }, {
            image   :foodinaryImg,
            title   :"Foodinary",
            role    :"Machine Learning Engineer and Project Manager",
            desc    :"Discover Indonesia’s traditional dishes instantly with Foodinary’s smart food recognition and cultural insights.",
            date    :"February 2025 - June 2025",
            code    :"https://github.com/foodinary-project"
        },{
            image   : portfolioImg, 
            title   : "MyPortofolio",   
            role    :"Full-stack Engineer",
            desc    :"This is my personal portfolio project, built using React and Tailwind. It is continually updated as my career progresses.",
            date    :"October 2025 - Present",
            code    :"https://github.com/LarasSetyadita/my-personal-website-portofolio.git"
        }
    ];

  return (
    <section id="projects" className="bg-primary my-24 flex items-center">
        <div className="mx-20 w-full">
            <h1 className="text-7xl font-extrabold text-secondary mb-4">
                Project
            </h1>
            <h2 className="text-xl mb-4"> 
                Little creations that started as ideas and ended up as something I’m proud of.
            </h2>

            <div className="grid grid-cols-3 gap-16">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Projects
