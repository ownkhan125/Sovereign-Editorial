'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function VolunteerPage() {
  const opportunities = [
    {
      id: 1,
      title: 'Community Outreach Coordinator',
      location: 'Metropolitan Area',
      type: 'Full-time',
      description: 'Lead grassroots engagement initiatives and build connections with local communities.',
    },
    {
      id: 2,
      title: 'Policy Research Assistant',
      location: 'Remote',
      type: 'Part-time',
      description: 'Support the development of detailed policy analysis and position papers.',
    },
    {
      id: 3,
      title: 'Event Organizer',
      location: 'Multiple Locations',
      type: 'Flexible',
      description: 'Plan and execute campaign events, town halls, and community gatherings.',
    },
    {
      id: 4,
      title: 'Digital Media Producer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling visual and multimedia content for our digital platforms.',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">Join Our Movement</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Dedicated volunteers are the backbone of our campaign. Help us build a better future through your passion and commitment.
            </p>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="font-headline text-4xl mb-16 italic">Current Opportunities</h2>

            <div className="grid gap-8">
              {opportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white border border-outline-variant p-8 rounded-lg hover:shadow-editorial hover:translate-y-[-4px] transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-headline text-2xl mb-2 group-hover:text-secondary transition-colors">
                        {opp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="font-label text-xs uppercase tracking-widest text-secondary">
                          {opp.location}
                        </span>
                        <span className="font-label text-xs uppercase tracking-widest bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full">
                          {opp.type}
                        </span>
                      </div>
                      <p className="font-body text-on-surface-variant">
                        {opp.description}
                      </p>
                    </div>
                    <Link href="/volunteer" className="bg-primary text-white px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 hover-lift whitespace-nowrap inline-block">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 bg-primary text-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-headline text-5xl md:text-6xl mb-8 italic">Make a Difference Today</h2>
            <p className="font-body text-lg text-white/70 mb-12 leading-relaxed">
              Whether you have a few hours a week or can commit fully to the campaign, there's a role for you. Together, we will build the sovereign future we envision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/volunteer" className="bg-white text-primary px-8 py-3 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-slate-100 transition-all hover-lift inline-block text-center">
                Sign Up to Volunteer
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-all inline-block text-center">
                Schedule a Chat
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
