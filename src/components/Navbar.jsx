const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#d4a017]/20 bg-[#050505]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-16">
        <a
          href="#hero"
          className="font-['Playfair_Display'] text-2xl font-black tracking-[0.08em] text-[#d4a017]"
        >
          ATHITHYAN.J 
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative font-['Rajdhani'] text-[13px] font-semibold uppercase tracking-[0.22em] text-[#8c8c84] transition hover:text-[#d4a017] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#d4a017] after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;