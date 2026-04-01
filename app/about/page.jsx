'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">About Our Movement</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-headline text-4xl mb-8 italic">The Sovereign Vision</h2>

            <div className="prose prose-lg max-w-none">
              <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
                The Sovereign Editorial represents a comprehensive reimagining of leadership in the modern era. Built on principles of architectural integrity, measured policy development, and unwavering commitment to collective progress, our movement seeks to establish new standards for political discourse and governance.
              </p>

              <h3 className="font-headline text-2xl mt-12 mb-6 italic">Our Core Values</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { title: 'Integrity', desc: 'Honest, transparent leadership rooted in principle' },
                  { title: 'Innovation', desc: 'Forward-thinking solutions to contemporary challenges' },
                  { title: 'Sovereignty', desc: 'Respect for self-determination and bold independence' },
                  { title: 'Service', desc: 'Unwavering commitment to the public good' },
                ].map((value) => (
                  <div key={value.title} className="border-l-4 border-secondary pl-6 hover:pl-8 transition-all duration-300">
                    <h4 className="font-headline text-xl italic mb-2">{value.title}</h4>
                    <p className="font-body text-on-surface-variant">{value.desc}</p>
                  </div>
                ))}
              </div>

              <p className="font-body text-lg text-on-surface-variant mb-6 leading-relaxed">
                We believe that effective governance requires a deep understanding of history, philosophy, and the complex interdependencies of modern society. Every policy position reflects extensive research, stakeholder consultation, and a commitment to practical implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="font-headline text-4xl mb-16 italic">Leadership Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'The Statesman', role: 'Campaign Director', bg: 'bg-primary text-white' },
                { name: 'Policy Director', role: 'Strategic Planning', bg: 'bg-secondary text-white' },
                { name: 'Communications Lead', role: 'Public Engagement', bg: 'bg-surface-container' },
              ].map((member) => (
                <div key={member.name} className={`p-8 rounded-lg ${member.bg} hover:shadow-editorial transition-all duration-300 hover:-translate-y-2`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full mb-6"></div>
                  <h3 className="font-headline text-xl italic mb-2">{member.name}</h3>
                  <p className="font-body opacity-90">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
