function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "/images/github.png",
      url: "https://github.com/LarasSetyadita",
    },
    {
      name: "Instagram",
      icon: "/images/instagram.png",
      url: "https://www.instagram.com/rastyaditaa/",
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/dwi-laras-setyadita/",
    },
    {
      name: "Email",
      icon: "/images/email.png",
      url: "mailto:dwilarassetyadita@gmail.com",
    },
  ];

  return (
    <section id="contact" className="px-5 pb-24 sm:px-8 lg:px-12">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#EDF1E7] px-6 py-16 text-center sm:px-12 sm:py-20">


        {/* Content */}
        <div className="relative z-10 mx-auto max-w-2xl">

          <h2 className="mb-4 font-display text-4xl font-extrabold text-[#243027] sm:text-5xl">
            Get in Touch
          </h2>

          <p className="mb-10 text-lg font-semibold text-[#243027]/85 sm:text-2xl">
            Drop me a message and let's make something awesome together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-5 sm:gap-7">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="rounded-2xl bg-[#FAF8F3]/60 p-3 transition-transform hover:-translate-y-1 hover:bg-[#FAF8F3]"
              >
                <img
                  src={social.icon}
                  alt=""
                  className="w-7 sm:w-8"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

