function Navbar() {
    return(
        <nav className="text-secondary w-full px-20 z-50 shadow-sm py-2 fixed bg-primary">
            <div className="grid grid-cols-5 items-center py-2">
                <div className="col-span-1 font-extrabold text-2xl">
                    Dwi Laras Setyadita
                </div>
  
                <div className="col-span-3 flex justify-center gap-4 font-bold text-lg">
                    <a href="#about" className="hover:text-accent2">About Me</a>
                    <a href="#projects" className="hover:text-accent2">Project</a>
                    <a href="#contact" className="hover:text-accent2">Contact</a>
                </div>
  
                <div className="col-span-1 flex justify-end">
                    <a href="#login" className="bg-accent hover:bg-accent2 hover:text-primary px-5 rounded-xl font-bold py-1">
                        Login
                    </a>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar