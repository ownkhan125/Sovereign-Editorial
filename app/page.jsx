"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[921px] flex items-center overflow-hidden bg-surface pt-4">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
              <span className="font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-6 block">
                The 2024 Campaign
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter mb-8 italic">
                A Vision for <br />
                Tomorrow
              </h1>
              <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Redefining the standard of leadership through architectural
                integrity, measured policy, and a commitment to the collective
                progress of our sovereign state.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/volunteer"
                  className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:shadow-2xl hover-lift transition-all duration-500"
                >
                  Join the Movement
                </Link>
                <Link
                  href="/issues"
                  className="bg-surface-container-lowest border border-outline-variant/20 px-10 py-4 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-surface-container-low transition-all duration-300"
                >
                  Read the Platform
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 lg:col-span-6 relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]">
              <div className="absolute inset-0 bg-surface-container-high rounded-sm overflow-hidden editorial-shadow transform rotate-1 translate-x-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK_n3v-AG72z-1O9sA9CMvDf5MAQBAYR1eu5MIFIKhADOcsmCwNGbWoLxwEqzonY2iRWbrxrrx1IebUwQxHPwshJS63UbQWNZX8dDac6oGRE8n5oTMk_vjxND53ChgauGQAHT4bTTL5dwo3g3F7-0nsjvP9iVvGK0uelystYD9PtuvI3g0Wur-GrlvrOOwty-sJ1GnprUauNoXkljQnj2sJmTiCIibKZfqptc13L_ogLyuT68wquHnZEFJ4SlalZ2Kg779V1XdNDhx"
                  alt="Dignified statesman"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                />
              </div>
              <div className="absolute bottom-[-2rem] left-[-2rem] bg-white p-4 sm:p-6 md:p-8 max-w-xs editorial-shadow hidden lg:block hover:shadow-2xl transition-shadow duration-300">
                <p className="font-headline text-lg sm:text-xl md:text-2xl italic mb-4">
                  &quot;The future is not inherited, it is designed by those
                  with the courage to lead.&quot;
                </p>
                <span className="font-label text-[10px] uppercase tracking-widest font-bold opacity-60">
                  — The Statesman
                </span>
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -z-0"></div>
        </section>

        {/* Foundations of Progress Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-4 sm:gap-6 md:gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-6">
                  Foundations of Progress
                </h2>
                <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant">
                  Our policy framework is built on the pillars of stability,
                  innovation, and unwavering public service.
                </p>
              </div>
              <Link
                href="/issues"
                className="font-label text-xs font-bold uppercase tracking-widest text-secondary hover:underline underline-offset-8 transition-all hover-color-change hover:scale-110"
              >
                View Full Platform
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Policy Card 1 */}
              <div className="md:col-span-8 group relative bg-surface-container-lowest overflow-hidden editorial-shadow h-[300px] sm:h[400px] md:h-[500px] hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcFXWBBfMcbymwFuYIzztX5d11JvoYvSPHZQY82vQslm6riez_7T6X4ommr1p1x4wjRjHMZNNRf5VhJrAywE8IiYmbn2S1GNCxmUmsp-SmIlBg45mSh8CjLKs1G3f0j_yMO1HVEKPiEQZuwXKwHUJ5HpE_TUwaur53MAJBYH-_nyF51VbULyzGceOpdYjsSmij2Tw-LcCCyjIhQn7gG5xXq_h66FtDlz5PNXQ5QVfSAbqi1BR0_xCkMNRrRMguf4rX_DDmEDiSwFRy"
                  alt="Modern architectural glass facade"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20"
                />
                <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col h-full justify-end">
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-4 block">
                    Infrastructure
                  </span>
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl mb-6 -mt-16 bg-white p-6 sm:p-8 md:p-8 absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 inline-block editorial-shadow group-hover:shadow-2xl transition-shadow duration-300">
                    Modernizing the Sovereign Grid
                  </h3>
                  <p className="max-w-md font-body text-on-surface-variant mb-8">
                    Investing in resilient digital and physical infrastructure
                    to secure our nation's competitive edge in the global
                    market.
                  </p>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all hover:scale-110 duration-300">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Policy Card 2 */}
              <div className="md:col-span-4 bg-primary text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between editorial-shadow h-[300px] sm:h-[400px] md:h-[500px] hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px]">
                <div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6 block">
                    Economics
                  </span>
                  <h3 className="font-headline text-4xl italic leading-tight">
                    A Fiscal Blueprint for Stability
                  </h3>
                </div>
                <div>
                  <p className="font-body text-white/70 mb-8 leading-relaxed">
                    Sustainable economic growth through strategic deregulation
                    and support for domestic small-scale industry.
                  </p>
                  <Link
                    href="#"
                    className="font-label text-xs font-bold uppercase tracking-[0.2em] hover:text-secondary transition-colors inline-flex items-center gap-2 hover:scale-105"
                  >
                    Detail Report{" "}
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>

              {/* Policy Card 3 */}
              <div className="md:col-span-4 bg-white p-6 sm:p-8 md:p-12 flex flex-col justify-between h-[280px] sm:h-[350px] md:h-[450px] hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                <h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-4">
                  Educational Sovereignty
                </h3>
                <p className="font-body text-sm sm:text-base text-on-surface-variant mb-6">
                  Empowering the next generation with specialized vocational
                  training and elite academic standards.
                </p>
                <div className="mt-auto">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlCHNH0qBTwt0Bxb7Ma9gbwCyhpZkhw5-I8LSeKVPYHXqaxP8OPs8atTDD4zM81H-Xa35d_SI7hY1eb0vZEUHk2Ds4UfoeaCPLkmUpGj51xp6TO4oLaTknCb3VmoTPXkJYhmEHEkLlbLk2aN1oiTYMKWf-pqsEVXjt-LOxBwRIxCQBhzpMNTQp6WpVqRBoi6a-aasUVwGHf-aiDlpUr1PSP6zb__EqSg2k-HSkT32erdBzw_1hRkj-sAqtyIF6fWtiPD0HA5sMQzV"
                    alt="Empty library"
                    className="w-full h-32 object-cover grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Policy Card 4 */}
              <div className="md:col-span-8 bg-surface p-6 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center hover:shadow-editorial transition-all duration-300">
                <div>
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl mb-6">
                    Environmental Stewardship
                  </h3>
                  <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-8">
                    Protecting our natural landscapes through innovative
                    conservation practices that align with industrial growth.
                  </p>
                  <button className="bg-primary text-white px-8 py-3 font-label text-[10px] font-bold uppercase tracking-widest hover:bg-secondary transition-all hover-lift">
                    Action Plan
                  </button>
                </div>
                <div className="h-full bg-surface-container-high relative overflow-hidden hover:shadow-editorial transition-shadow duration-300">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMCBjfp2ZVUrj-I2VZAUZSLjrNls1EOIZU51PFENZPgJb-kzxzvki88O9hmYK7eXfDPrwEhpNH1z_5lIQo_pwGkfS-l9isryzW6rXXod6sqeL5tW5G6FlopGPz7fzt2E4r2vD6HNP2-cgFdhBk7HHVTgql-BlBVrYcXRBwo0if5y0LHWNKOQOLaLouJXWmnlJqMZx0CSd6GKNv7Z2tGO6D6OPEeU08pURnS0gvvCaSkc2SvtLpEs4TQNtjYaWnUWRvSNy1mpiCJ5SB"
                    alt="Forest landscape"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent News Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl mb-8">
                    The Editorial Journal
                  </h2>
                  <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mb-12">
                    Latest dispatches, policy updates, and insights from the
                    campaign trail. Stay informed on the decisions shaping our
                    collective future.
                  </p>
                  <div className="space-y-6">
                    <div className="border-b border-outline-variant/20 pb-6 hover-color-change hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-2">
                        Upcoming Events
                      </span>
                      <h4 className="font-headline text-xl">
                        Metropolitan Town Hall: The Future of Trade
                      </h4>
                      <p className="text-xs opacity-60 mt-2">
                        October 24, 2024 • Grand Hall
                      </p>
                    </div>
                    <div className="border-b border-outline-variant/20 pb-6 hover-color-change hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-2">
                        Press Release
                      </span>
                      <h4 className="font-headline text-xl">
                        Sovereign Editorial Endorsed by National Industry Board
                      </h4>
                      <p className="text-xs opacity-60 mt-2">
                        October 18, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-8 sm:gap-12 md:gap-16">
                  {/* News Item 1 */}
                  <article className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 group cursor-pointer">
                    <div className="md:col-span-2 overflow-hidden bg-surface-container-high hover:shadow-editorial transition-shadow duration-300">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd"
                        alt="Office space"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-3 py-4 flex flex-col">
                      <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                        Deep Dive • 8 Min Read
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-4 group-hover:text-secondary transition-colors duration-300">
                        The Restoration of Civil Discourse
                      </h3>
                      <p className="font-body text-sm sm:text-base text-on-surface-variant line-clamp-3 mb-6">
                        How a return to traditional debate formats and
                        architectural governance can heal the fractured
                        landscape of modern political engagement.
                      </p>
                      <span className="font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto hover:translate-x-1 transition-transform duration-300">
                        Read Full Article{" "}
                        <span className="material-symbols-outlined text-sm">
                          trending_flat
                        </span>
                      </span>
                    </div>
                  </article>

                  {/* News Item 2 */}
                  <article className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 group cursor-pointer">
                    <div className="md:col-span-2 overflow-hidden bg-surface-container-high hover:shadow-editorial transition-shadow duration-300">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW9EPS-mMUT7Nm_DeoasN0AJN1fHrxEh3SHdDyAiNT46xbMj8-uSwmUNJLmOBMURvSJlIaFrolaeFljumNSTsUaR_Do918rnMXgWvcNU3I90-osk9oIyuhQpbeFkTpKXi6Se3eTXBB1aYzjZSoLiocXR3kdd8JQJ7RhC9U5KKwF0nrJuFUEjuDOOD95cWPmZgz3SmDLFkHIM-kuuq-r8LwxKq-gw4P1lmTb_EMnkwe9rD54DExjjQYHoFGr170-eol999Wkiz2uO0S"
                        alt="Architectural blueprints"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-3 py-4 flex flex-col">
                      <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                        Policy Update • 5 Min Read
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl md:text-3xl mb-4 group-hover:text-secondary transition-colors duration-300">
                        Blueprint for Urban Resilience
                      </h3>
                      <p className="font-body text-sm sm:text-base text-on-surface-variant line-clamp-3 mb-6">
                        An analysis of our newly released strategy for municipal
                        growth and sustainable urban development in the
                        tri-state area.
                      </p>
                      <span className="font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto hover:translate-x-1 transition-transform duration-300">
                        Read Full Article{" "}
                        <span className="material-symbols-outlined text-sm">
                          trending_flat
                        </span>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#04072E]"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwMkALmOPyCp_-LBJW_aaTKi-pY0fZXbDSqd1jW9yRxcRuxhdwjypZ2YlW6x5UWUty_0XRN5_FV8q9Xj-FXY8JeMlaIdRR8nFrGmmWrjcAVFJLUIez4sSOtkZ3MNw6R3DSsj2BdSc21L4dWVxDTEwXfSqN57LajbGj35lM21p8NnWQPZ7SYM7uM6abVBJtJHXJDci_xyDEtDpI97g2QvjmXsZ_mn2qgrjm8NeX5A9Yf32RKWvwOGyMeGVNuhPQcYsRpNNEHd6aef"
              alt="Night sky capitol building"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <span className="font-label text-xs font-bold uppercase tracking-[0.5em] text-secondary mb-8 block">
              Join the Cause
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 italic">
              Invest in the <br />
              Sovereign Future
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your support enables the essential work of policy development,
              grassroots outreach, and the structural reform needed to ensure
              our vision becomes reality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
              {["$25", "$100", "$250", "Custom"].map((amount, idx) => (
                <button
                  key={amount}
                  className={`py-6 font-label text-xl font-bold transition-all hover:scale-105 ${
                    amount === "$250"
                      ? "bg-secondary/90 hover:bg-secondary shadow-xl"
                      : "bg-white/10 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            <Link
              href="/donation"
              className="bg-white text-primary px-16 py-5 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-slate-100 transition-all hover-lift inline-block"
            >
              Contribute Now
            </Link>
            <p className="mt-8 text-[10px] text-white/40 uppercase tracking-widest">
              Federal law requires us to use our best efforts to collect and
              report the name, address, occupation, and employer.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
