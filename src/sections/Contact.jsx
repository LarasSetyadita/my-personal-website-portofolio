import ContactIcon from "../components/ContactIcon";

import redCircle from "../assets/images/redCircle.png";
import yellowRedCircle from "../assets/images/yellowRedCircle.png";

import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contacts = [
    { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/rastyaditaa/" },
    { label: "EnvFaEnvelope", icon: FaEnvelope, href: "mailto:larassetyadita@gmail.com" },
    { label: "LinkedIn", icon: FaLinkedin, href: "www.linkedin.com/in/dwi-laras-setyadita" },
    { label: "GitHub", icon: FaGithub, href: "https://github.com/LarasSetyadita" },
  ];

  return (
    <section id="contact" className="relative mx-20 my-20">
      <div className="rounded-3xl bg-lightaccent h-[80vh] flex flex-col justify-center">
        <div className="text-secondary text-center mx-20 mb-14">
          <h1 className="text-7xl font-extrabold mb-5">Get in Touch</h1>
          <h2 className="text-6xl font-bold">
            Drop me a message and let’s make something awesome together.
          </h2>
        </div>

        <div className="flex justify-center gap-7">
          {contacts.map((contact, index) => (
            <ContactIcon key={index} {...contact} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <img src={yellowRedCircle} alt="" className="absolute bottom-20 left-20" />
      <img src={redCircle} alt="" className="absolute top-20 right-56" />
    </section>
  );
}

export default Contact;
