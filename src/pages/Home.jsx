import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-16"
        >
          {/* Background Effects */}
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="ambient-orb absolute left-[-100px] top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="ambient-orb ambient-orb-delayed absolute bottom-20 right-[-100px] h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left" data-reveal>
              <div className="availability-pill mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-300 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for new opportunities
              </div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-green-400">
                Shopify · WordPress · CMS · SEO
              </p>

              <h1 className="hero-title text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Websites that
                <span className="premium-gradient-text block">
                  work harder.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                I’m Abhimanioue Sharma, a web developer with 2+ years of experience
                creating responsive Shopify, WordPress, Wix and Zoho experiences for
                ambitious brands.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["Shopify Liquid", "WordPress", "JavaScript", "Technical SEO"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#projects"
                  className="premium-button inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200 sm:w-auto"
                >
                  Explore selected work
                  <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
                </a>

                <a
                  href="/ABHIMANIOUE_SHARMA_Resume.pdf"
                  download="ABHIMANIOUE_SHARMA_Resume.pdf"
                  className="premium-outline-button w-full rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Developer Visual */}
            <div className="order-1 flex justify-center lg:order-2" data-reveal>
              <div className="hero-console relative w-full max-w-[500px]">
                <div className="console-glow absolute inset-10 rounded-full blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111712]/95 p-3 shadow-2xl sm:p-4">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3 pt-1">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff766b]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f3c969]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#72c58a]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Abhimanioue.dev</span>
                  </div>
                  <div className="grid min-h-[380px] grid-cols-[54px_1fr] sm:min-h-[460px]">
                    <div className="border-r border-white/10 py-5 text-center text-xs text-gray-600">
                      {["01","02","03","04","05","06","07","08","09","10"].map((line) => (
                        <span key={line} className="block leading-8">{line}</span>
                      ))}
                    </div>
                    <div className="flex flex-col justify-between p-5 sm:p-7">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#c5df9b]">Current status</p>
                        <div className="mt-5 space-y-3 font-mono text-sm sm:text-base">
                          <p><span className="text-[#72c58a]">const</span> <span className="text-white">developer</span> = <span className="text-[#f3c969]">&quot;Abhimanioue&quot;</span>;</p>
                          <p><span className="text-[#72c58a]">const</span> <span className="text-white">experience</span> = <span className="text-[#df9f68]">2+</span>; <span className="text-gray-600">// years</span></p>
                          <p><span className="text-[#72c58a]">const</span> <span className="text-white">focus</span> = [</p>
                          <p className="pl-5 text-[#d6a2e3]">&quot;Shopify&quot;, &quot;SEO&quot;, &quot;CMS&quot;</p>
                          <p>];</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {[["2+","Years"],["20+","Projects"],["5","CMS tools"]].map(([value,label]) => (
                          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center sm:p-4">
                            <p className="text-lg font-bold text-white sm:text-2xl">{value}</p>
                            <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-500 sm:text-[11px]">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;