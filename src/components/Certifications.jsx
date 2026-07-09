import { certifications } from "../data/portfolioData";
import {
  FaBolt,
  FaBriefcase,
  FaChartBar,
  FaDatabase,
  FaPython,
  FaRobot,
} from "react-icons/fa";

const certIconMap = {
  chartBar: FaChartBar,
  robot: FaRobot,
  bolt: FaBolt,
  briefcase: FaBriefcase,
  database: FaDatabase,
  python: FaPython,
};

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#0a0a0a] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        Credentials
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Certifications <span className="text-[#d4a017]">& Awards</span>
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const Icon = certIconMap[cert.iconKey];

          return (
            <div
              key={index}
              className="group relative flex items-center gap-5 overflow-hidden border border-[#d4a017]/20 bg-[#111111] px-6 py-6 transition duration-300 hover:border-[#d4a017]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#cc0000] to-[#d4a017] transition-all duration-500 ease-out group-hover:w-full"></span>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8b0000] to-[#cc0000] text-2xl text-white shadow-[0_4px_16px_rgba(204,0,0,0.3)]">
                {Icon ? <Icon /> : null}
              </div>

              <div>
                <div className="text-[17px] font-bold leading-snug text-[#f5f0e8]">
                  {cert.name}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#d4a017]">
                  {cert.issuer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;