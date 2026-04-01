'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function UpdatedIssuePage() {
  const issues = [
    {
      id: 1,
      title: 'Bureaucratic Inefficiency Reform',
      status: 'Active',
      progress: 75,
      updated: 'Oct 25, 2024',
      description: 'Streamlining public services and regulatory processes'
    },
    {
      id: 2,
      title: 'Infrastructure Development Initiative',
      status: 'In Progress',
      progress: 60,
      updated: 'Oct 24, 2024',
      description: 'Building resilient digital and physical infrastructure'
    },
    {
      id: 3,
      title: 'Healthcare Access Program',
      status: 'Planning',
      progress: 45,
      updated: 'Oct 23, 2024',
      description: 'Expanding affordable healthcare across all regions'
    },
    {
      id: 4,
      title: 'Education Quality Enhancement',
      status: 'Active',
      progress: 70,
      updated: 'Oct 22, 2024',
      description: 'Improving education standards and access'
    },
    {
      id: 5,
      title: 'Environmental Conservation Strategy',
      status: 'Research',
      progress: 40,
      updated: 'Oct 21, 2024',
      description: 'Protecting natural resources while supporting growth'
    },
    {
      id: 6,
      title: 'Economic Opportunity Program',
      status: 'Active',
      progress: 80,
      updated: 'Oct 20, 2024',
      description: 'Creating jobs and supporting entrepreneurship'
    },
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Planning': 'bg-purple-100 text-purple-800',
      'Research': 'bg-amber-100 text-amber-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">Policy Implementation Status</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Real-time tracking of our policy initiatives and their progress toward implementation.
            </p>
          </div>
        </section>

        {/* Status Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {issues.map((issue) => (
                <div key={issue.id} className="bg-white p-8 rounded-lg hover:shadow-editorial transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-xl italic flex-1">{issue.title}</h3>
                    <span className={`font-label text-[10px] px-3 py-1 rounded uppercase tracking-widest whitespace-nowrap ml-4 ${getStatusColor(issue.status)}`}>
                      {issue.status}
                    </span>
                  </div>

                  <p className="font-body text-on-surface-variant mb-4">{issue.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Progress</span>
                      <span className="font-label text-sm font-bold text-primary">{issue.progress}%</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${issue.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-label text-xs text-on-surface-variant">Updated {issue.updated}</span>
                    <Link
                      href={`/issues/${issue.id}`}
                      className="font-label text-xs font-bold text-secondary hover:text-primary transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-headline text-4xl italic mb-12 text-center">Overall Progress</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Active Initiatives', count: '6', color: 'bg-green-100' },
                { label: 'In Development', count: '3', color: 'bg-blue-100' },
                { label: 'Research Phase', count: '2', color: 'bg-purple-100' },
                { label: 'Completed', count: '12', color: 'bg-amber-100' },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} p-8 rounded-lg text-center`}>
                  <p className="font-headline text-4xl italic font-bold mb-2">{item.count}</p>
                  <p className="font-body text-sm text-on-surface-variant">{item.label}</p>
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
