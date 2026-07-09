import { highlights, quickProfile } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] px-6 py-24 lg:px-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
        <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
        Who I Am
      </div>

      <h2 className="mb-14 font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
        Driven by <span className="text-[#d4a017]">Data </span>
      </h2>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <div className="space-y-5 text-[17px] leading-9 text-[#f5f0e8]/72">
            <p>
              I'm a <strong className="text-[#d4a017]">Data Analyst</strong> with
              2 years of hands-on experience across real business environments,
              specialising in uncovering meaningful patterns in messy, complex
              datasets and translating them into decisions that move the needle.
            </p>

            <p>
              My toolkit spans{" "}
              <strong className="text-[#d4a017]">
                SQL, Python, Power BI, Tableau, and Excel
              </strong>{" "}
              — and I've used each one in production environments, not just
              tutorials. I'm equally comfortable writing a stored procedure at
              midnight and designing an executive dashboard by morning.
            </p>

            <p>
              I also leverage{" "}
              <strong className="text-[#d4a017]">
                AI tools like Claude, ChatGPT & Gemini
              </strong>{" "}
              and workflow automation via{" "}
              <strong className="text-[#d4a017]">N8N</strong> to build faster,
              smarter analytical pipelines.
            </p>
          </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
  {quickProfile.map((item) => (
    <div
      key={item.label}
      className="border-l-2 border-[#cc0000] pl-4 transition duration-300 hover:translate-x-2 hover:border-[#d4a017]"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8c8c84]">
        {item.label}
      </div>
      <div className="mt-1 text-[15px] font-semibold text-[#f5f0e8]">
        {item.value}
      </div>
    </div>
  ))}
</div>
        </div>

        <div className="flex flex-col gap-5">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden border border-[#d4a017]/20 bg-[#111111] px-7 py-6 transition hover:translate-x-1.5 hover:border-[#d4a017]/50"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#d4a017]"></div>
              <div className="font-['Playfair_Display'] text-4xl font-black leading-none text-[#cc0000]">
                {item.num}
              </div>
              <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#8c8c84]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;