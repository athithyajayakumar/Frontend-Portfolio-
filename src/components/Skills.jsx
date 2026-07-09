import {
  skillBars,
  dbTags,
  pythonTags,
  analyticsTags,
  aiTags,
} from "../data/portfolioData";
import { FaChartPie, FaCode, FaDatabase } from "react-icons/fa";

const iconWrap =
  "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a017]/20 bg-[#050505] text-2xl text-[#d4a017]";

const tagBase =
  "rounded-full border px-3 py-1 font-mono text-xs tracking-[0.08em] transition";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        What I Use
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Technical <span className="text-[#d4a017]">Toolkit</span>
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] p-8 transition hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#cc0000] to-[#d4a017] transition duration-300 group-hover:scale-x-100"></div>

          <div className={iconWrap}>
            <FaCode />
          </div>

          <h3 className="mb-6 font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
            Languages & Tools
          </h3>

          <div className="space-y-4">
            {skillBars.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-semibold text-[#f5f0e8]/85">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="h-[4px] overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#cc0000] to-[#d4a017]"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] p-8 transition hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#cc0000] to-[#d4a017] transition duration-300 group-hover:scale-x-100"></div>

          <div className={iconWrap}>
            <FaDatabase />
          </div>

          <h3 className="mb-6 font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
            Databases & Platforms
          </h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {dbTags.map((tag) => (
              <span
                key={tag}
                className={`${tagBase} border-[#cc0000]/30 bg-[#cc0000]/10 text-[#f5f0e8]/80 hover:border-[#cc0000] hover:bg-[#cc0000] hover:text-white`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4a017]">
            Python Libraries
          </h4>

          <div className="flex flex-wrap gap-2">
            {pythonTags.map((tag) => (
              <span
                key={tag}
                className={`${tagBase} border-[#d4a017]/30 bg-[#d4a017]/10 text-[#f5f0e8]/80 hover:border-[#d4a017] hover:bg-[#d4a017] hover:text-[#050505]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] p-8 transition hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#cc0000] to-[#d4a017] transition duration-300 group-hover:scale-x-100"></div>

          <div className={iconWrap}>
            <FaChartPie />
          </div>

          <h3 className="mb-6 font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
            Analytics & Concepts
          </h3>

          <div className="mb-6 flex flex-wrap gap-2">
            {analyticsTags.map((tag) => (
              <span
                key={tag}
                className={`${tagBase} border-[#cc0000]/30 bg-[#cc0000]/10 text-[#f5f0e8]/80 hover:border-[#cc0000] hover:bg-[#cc0000] hover:text-white`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4a017]">
            AI & Automation
          </h4>

          <div className="flex flex-wrap gap-2">
            {aiTags.map((tag) => (
              <span
                key={tag}
                className={`${tagBase} border-[#d4a017]/30 bg-[#d4a017]/10 text-[#f5f0e8]/80 hover:border-[#d4a017] hover:bg-[#d4a017] hover:text-[#050505]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;