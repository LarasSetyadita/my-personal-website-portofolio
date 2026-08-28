function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="w-full bg-[#243027] py-6 text-center text-sm text-[#FAF8F3]">
        Created with love by Dwi Laras Setyadita &copy; {currentYear}
      </footer>
    );
  }
  
  export default Footer;