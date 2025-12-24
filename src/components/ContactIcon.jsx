function ContactIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-4 rounded-2xl hover:bg-accent transition duration-300"
    >
      <Icon className="w-10 h-10 text-secondary" />
    </a>
  );
}

  export default ContactIcon