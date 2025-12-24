function ProjectCard({ image, title, role, desc, date }) {
    return (
        <div>
            <img src={image} className="rounded-3xl shadow-md" />
            <div className="text-secondary my-3">
                <h2 className="text-xl font-bold">{title}</h2>
                <h3 className="font-semibold text-sm">{role}</h3>
                <p className="text-sm">{desc}</p>
                <p className="font-semibold text-gray-800 text-sm">{date}</p>
            </div>
            <a className="bg-accent2 px-3 py-1 rounded-xl hover:bg-secondary text-primary font-bold">
                Source Code
            </a>
        </div>
    )
}

export default ProjectCard
  