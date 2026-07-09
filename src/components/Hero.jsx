import { useEffect, useState } from "react";
import { phrases, heroStats } from "../data/portfolioData";
import athiImage from "../assets/athi.jpeg";

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timer;

    if (!deleting) {
      if (charIndex < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 90);
      } else {
        timer = setTimeout(() => setDeleting(true), 1600);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 55);
      } else {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative grid min-h-screen overflow-hidden bg-[#050505] px-6 pb-16 pt-32 lg:grid-cols-2 lg:px-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="absolute -right-[5%] top-[-10%] hidden h-[130%] w-[55%] skew-x-[-8deg] bg-[linear-gradient(135deg,rgba(139,0,0,0.12)_0%,rgba(204,0,0,0.06)_50%,transparent_100%)] lg:block"></div>

      <div className="relative z-10 flex items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-[#d4a017]">
            <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
            Available for opportunities
          </div>

       <div className="font-['Playfair_Display'] leading-none">
  <h1 className="text-5xl font-black text-[#f5f0e8] sm:text-6xl lg:text-[88px]">
    Athithyan
  </h1>

 <div className="text-5xl font-black text-[#f5f0e8] sm:text-6xl sm:text-lg lg:text-[30px]">
  Jaya Kumar
</div>
</div>
          <div className="mt-4 min-h-[42px] font-['Rajdhani'] text-lg font-light uppercase tracking-[0.35em] text-[#e31717] sm:text-2xl">
            <span>{text}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[#d4a017] align-middle"></span>
          </div>

          <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#f5f0e8]/65">
            Transforming raw, complex data into sharp business insights through SQL,
            Python, Power BI & Tableau. I don't just analyse data — I transform information into intelligence that drives success.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gradient-to-br from-[#cc0000] to-[#8b0000] px-8 py-3 font-['Rajdhani'] text-[13px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_24px_rgba(204,0,0,0.35)] transition hover:-translate-y-1"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#d4a017] px-8 py-3 font-['Rajdhani'] text-[13px] font-bold uppercase tracking-[0.22em] text-[#d4a017] transition hover:-translate-y-1 hover:bg-[#d4a017] hover:text-[#050505]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 hidden items-center justify-center lg:flex">
        <div className="relative h-[460px] w-[360px]">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#d4a017]"></div>
          <div className="absolute -bottom-4 -right-4 h-[60%] w-[60%] border-2 border-[#cc0000]"></div>

          <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden bg-[linear-gradient(145deg,#1a0a0a_0%,#0d0d0d_50%,#1a1000_100%)] px-8">
         <div className="h-70 w-56 overflow-hidden rounded-full border-4 border-[#d4a017] shadow-[0_0_40px_rgba(212,160,23,0.3)]">
  <img
    src={athiImage}
    alt="Athithyan"
    className="h-full w-full rounded-full object-cover object-center"
  />
</div>
            <div className="mt-2 text-center font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
              Athithyan J
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff1a1a]">
              Data Analyst
            </div>

            <div className="mt-4 flex gap-6">
              {heroStats.map((item) => (
                <div key={item.label} className="text-center">
                  <span className="block font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
                    {item.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#8c8c84]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-[-2rem] top-6 bg-[#cc0000] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            Open to Work
          </div>

          <div className="absolute bottom-12 left-[-3rem] bg-[#d4a017] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#050505]">
            Data Analyst
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;