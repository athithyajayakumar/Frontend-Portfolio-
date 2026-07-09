import { projects } from "../data/portfolioData";
import {
  FaBoxOpen,
  FaChartLine,
  FaFilm,
  FaGlobe,
  FaHospital,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

const iconMap = {
  hospital: FaHospital,
  cart: FaShoppingCart,
  globe: FaGlobe,
  film: FaFilm,
  utensils: FaUtensils,
  box: FaBoxOpen,
  users: FaUsers,
  chart: FaChartLine,
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        What I've Built
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Featured <span className="text-[#d4a017]">Projects</span>
      </h2>

      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = iconMap[project.iconKey];

          return (
            <div
              key={project.num}
              className="group relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#cc0000] to-[#d4a017] transition duration-300 group-hover:scale-x-100"></div>

              <div className="pointer-events-none absolute right-4 top-0 text-[64px] font-black leading-none text-[#d4a017]/10">
                {project.num}
              </div>

              <div className="mb-4 text-3xl text-[#d4a017]">
                {Icon ? <Icon /> : null}
              </div>

              <h3 className="mb-3 font-['Playfair_Display'] text-[24px] font-bold leading-snug text-[#f5f0e8]">
                {project.title}
              </h3>

              <p className="mb-5 text-[15px] leading-7 text-[#f5f0e8]/60">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#cc0000]/25 bg-[#cc0000]/12 px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-[#f5f0e8]/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center border border-[#d4a017] px-5 py-2 font-['Rajdhani'] text-[12px] font-bold uppercase tracking-[0.18em] text-[#d4a017] transition hover:bg-[#d4a017] hover:text-[#050505]"
                >
                  View on GitHub
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;