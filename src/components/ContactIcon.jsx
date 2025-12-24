function ContactIcon({ href, icon, label }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-4 rounded-2xl hover:bg-accent transition duration-300"
      >
        <img src={icon} alt={label} className="w-10" />
      </a>
    );
  }
  export default ContactIcon