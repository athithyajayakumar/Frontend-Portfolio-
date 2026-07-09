import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="bg-[#050505] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        Academic Background
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Education <span className="text-[#d4a017]">Journey</span>
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] px-8 py-8 transition hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute bottom-0 right-0 h-24 w-24 bg-[radial-gradient(circle_at_100%_100%,rgba(212,160,23,0.08),transparent_70%)]"></div>

            <h3 className="font-['Playfair_Display'] text-[28px] font-bold leading-snug text-[#f5f0e8]">
              {item.degree}
            </h3>

            <div className="mt-2 text-[15px] font-semibold text-[#d4a017]">
              {item.school}
            </div>

            <div className="mt-5 font-mono text-[12px] uppercase tracking-[0.14em] text-[#8c8c84]">
              Year: <span className="font-bold text-[#cc0000]">{item.year}</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-[4px] flex-1 overflow-hidden bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#cc0000] to-[#d4a017]"
                  style={{ width: `${item.width}%` }}
                ></div>
              </div>
              <div className="text-sm font-bold text-[#d4a017]">
                CGPA {item.cgpa}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;