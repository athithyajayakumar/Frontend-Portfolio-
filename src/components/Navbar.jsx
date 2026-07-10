import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#d4a017]/20 bg-[#050505]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-['Playfair_Display'] text-2xl font-black tracking-[0.08em] text-[#d4a017]"
        >
          ATHITHYAN.J
        </a>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-6 w-6 flex-col justify-between p-1 md:hidden z-50 relative focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-[2px] w-full bg-[#d4a017] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-[#d4a017] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-[#d4a017] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div
        className={`fixed left-0 top-0 h-screen w-full bg-[#050505]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8 font-['Rajdhani']">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase tracking-[0.25em] text-[#8c8c84] transition hover:text-[#d4a017]"
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