import { useEffect, useState } from "react";

function Hero() {
  const text = "Hi there, I'm Ras";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    // Typing
    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
    }

    // Wait after typing is complete
    else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    }

    // Deleting
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 60);
    }

    // Wait before typing again
    else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-20 sm:px-8">
      <div className="reveal mx-auto max-w-4xl text-center">

        {/* Subtitle */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4F6B52] sm:text-sm">
          Data Analyst · ML Engineer
        </p>

        {/* Typewriter */}
        <h1 className="font-display text-4xl font-bold leading-tight text-[#243027] sm:text-6xl lg:text-7xl">
          {displayText}
          <span className="ml-1 animate-pulse text-[#4F6B52]">
            |
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 font-display text-2xl font-bold leading-tight text-[#4F6B52] sm:text-4xl lg:text-5xl">
          Welcome to my portfolio
        </p>

        {/* Buttons */}
        <div className="mx-auto mt-10 flex max-w-md flex-col justify-center gap-4 sm:flex-row">

        <a
          href="https://drive.google.com/file/d/16qshraL5EwDbIitPZM2SYdRtJS9_g5Bp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#4F6B52] px-6 py-3 text-center font-semibold text-[#FAF8F3] transition-all hover:-translate-y-0.5 hover:bg-[#243027]"
        >
          Download My CV
        </a>


          <a
            href="#about"
            className="rounded-xl border border-[#243027]/10 bg-[#EDF1E7] px-6 py-3 text-center font-semibold text-[#243027] transition-all hover:-translate-y-0.5 hover:bg-[#243027] hover:text-[#FAF8F3]"
          >
            Know Me Better
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;

