import aboutImg from "../assets/images/aboutMe.png";
import redCircle from "../assets/images/redCircle.png";
import blueCircle from "../assets/images/blueCircle.png";

function AboutMe() {
    return (
        <section
            id="about"
            className="bg-lightaccent h-[80vh] flex items-center relative rounded-3xl mx-20 py-10"
        >
            <div className="grid grid-cols-9 mx-32 gap-20">
                <img className=" col-span-4 col-start-1" src={aboutImg} alt="About Me" />

                <div className="space-y-7 text-secondary col-span-5 col-start-5">
                    <h1 className="text-7xl font-extrabold">About Me</h1>

                    <div className="space-y-5 text-lg">
                        <p>
                        I am <span className="font-bold">Dwi Laras Setyadita</span>, a
                        seventh-semester Information Technology student with a strong
                        passion for <span className="font-bold">data analysis</span> and{" "}
                        <span className="font-bold">machine learning</span>.
                        </p>
                        <p>
                        I am <span className="font-bold">BNSP-certified as a Data Analyst</span> and have graduated from the <span className="font-bold">Coding Camp Powered by DBS Foundation, Machine Learning cohort, with a Distinction (top 10%)</span>.
                        </p>

                    </div>

                    <div className="grid grid-cols-3 gap-4 font-extrabold text-center">
                        {["Data Analyst", "Machine Learning Engineer", "Web Developer"].map(
                            (role) => (
                                <div
                                    key={role}
                                    className="bg-accent rounded-lg py-2 content-center"
                                >
                                    {role}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <img src={redCircle} className="absolute top-16 right-30" />
            <img src={blueCircle} className="absolute bottom-8 right-1/4" />
        </section>
    )
}

export default AboutMe
