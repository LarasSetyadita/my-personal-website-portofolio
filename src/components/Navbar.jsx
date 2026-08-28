function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#FAF8F3]/80 px-5 py-3 shadow-sm backdrop-blur-md sm:px-6">

          {/* Logo */}
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight sm:text-xl"
          >
            Dwi Laras<span className="text-[#4F6B52]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex lg:text-base">
            <a
              href="#about"
              className="nav-link hover:text-[#4F6B52]"
            >
              About Me
            </a>

            <a
              href="#project"
              className="nav-link hover:text-[#4F6B52]"
            >
              Project
            </a>

            <a
              href="#awards"
              className="nav-link hover:text-[#4F6B52]"
            >
              Awards
            </a>

            <a
              href="#contact"
              className="nav-link hover:text-[#4F6B52]"
            >
              Contact
            </a>
          </div>

          {/* Let's Talk */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-[#4F6B52] px-5 py-2 text-sm font-semibold text-[#FAF8F3] transition-colors hover:bg-[#243027]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Open navigation menu"
          >
            <span className="block h-0.5 w-6 bg-[#243027]" />
            <span className="block h-0.5 w-6 bg-[#243027]" />
            <span className="block h-0.5 w-6 bg-[#243027]" />
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;

