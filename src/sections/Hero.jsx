import redCircle from "../assets/images/redCircle.png";
import blueYellowCircles from "../assets/images/blueYellowCircles.png";

function Hero() {
    return(
        <section className="h-screen flex flex-col justify-center items-center relative">
            <img 
                src={redCircle}
                alt="" 
                className="absolute top-32 left-40 z-10"
            />

            <div className="text-8xl font-extrabold text-secondary text-center">
                <p>Hi There, I'm Laras</p>
                <p>Welcome to My Portofolio</p>
            </div>

            <div className="flex justify-center my-9">
                <div className="grid grid-cols-2 gap-4 font-bold">
                    <a href="https://drive.google.com/file/d/19zBVgwd6c_v04oLJXaqTfAfQWtlq8_sF/view?usp=drive_link" className="bg-accent px-3 py-1 text-secondary rounded-md hover:bg-accent2 hover:text-primary">
                        Download My CV
                    </a>
                    <a href="#about" className="bg-secondary px-3 py-1 text-accent rounded-md hover:bg-accent2 hover:text-primary">
                        Know Me as Well
                    </a>
                </div>
            </div>

            <img
                src={blueYellowCircles}
                alt=""
                className="absolute bottom-10 right-36 z-10"
            />

        </section>

    )
}

export default Hero