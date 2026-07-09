import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a0a] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        Work History
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Professional <span className="text-[#d4a017]">Experience</span>
      </h2>

      <div className="relative border-l border-transparent pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-[#cc0000] before:via-[#d4a017] before:to-transparent">
        {experiences.map((item, index) => (
          <div key={index} className="relative mb-14">
            <div className="absolute -left-[46px] top-1.5 h-4 w-4 rounded-full border-2 border-[#d4a017] bg-[#cc0000] shadow-[0_0_12px_rgba(204,0,0,0.6)]"></div>

            <div className="mb-2 font-mono text-[12px] uppercase tracking-[0.18em] text-[#d4a017]">
              {item.period}
            </div>

            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#f5f0e8]">
              {item.role}
            </h3>

            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#cc0000]">
              {item.company}
            </div>

            <ul className="space-y-3">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-[16px] leading-8 text-[#f5f0e8]/68 before:absolute before:left-0 before:top-1 before:text-xs before:text-[#d4a017] before:content-['▸']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;