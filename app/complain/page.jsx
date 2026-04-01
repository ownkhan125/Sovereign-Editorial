'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ComplainPage() {
  const issues = [
    {
      id: 1,
      title: 'Bureaucratic Inefficiency in Public Services',
      category: 'Administration',
      priority: 'High',
      date: 'Oct 20, 2024',
      description: 'Citizens report delays in permit processing and regulatory compliance across multiple agencies.',
      status: 'Under Review',
      responses: 342
    },
    {
      id: 2,
      title: 'Infrastructure Maintenance Neglect',
      category: 'Infrastructure',
      priority: 'High',
      date: 'Oct 18, 2024',
      description: 'Critical infrastructure deficiencies reported in urban development areas requiring immediate attention.',
      status: 'In Progress',
      responses: 256
    },
    {
      id: 3,
      title: 'Educational Service Coverage',
      category: 'Education',
      priority: 'Medium',
      date: 'Oct 15, 2024',
      description: 'Gaps in educational access and quality standards affecting rural and underserved communities.',
      status: 'Proposed Solution',
      responses: 189
    },
    {
      id: 4,
      title: 'Healthcare Access & Affordability',
      category: 'Healthcare',
      priority: 'High',
      date: 'Oct 12, 2024',
      description: 'Systemic issues in healthcare delivery and cost barriers affecting vulnerable populations.',
      status: 'Under Review',
      responses: 428
    },
    {
      id: 5,
      title: 'Environmental Protection Standards',
      category: 'Environment',
      priority: 'Medium',
      date: 'Oct 10, 2024',
      description: 'Concerns regarding environmental regulation enforcement and conservation initiatives.',
      status: 'Study Phase',
      responses: 167
    },
    {
      id: 6,
      title: 'Economic Opportunity Disparity',
      category: 'Economics',
      priority: 'High',
      date: 'Oct 8, 2024',
      description: 'Regional economic imbalances and limited entrepreneurial support affecting business growth.',
      status: 'In Progress',
      responses: 312
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-blue-100 text-blue-800'
      case 'In Progress':
        return 'bg-purple-100 text-purple-800'
      case 'Proposed Solution':
        return 'bg-green-100 text-green-800'
      case 'Study Phase':
        return 'bg-amber-100 text-amber-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-secondary font-bold'
      case 'Medium':
        return 'text-amber-600 font-semibold'
      case 'Low':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">Citizen Issues & Complaints</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Direct feedback from citizens on critical governance issues. Your concerns drive our policy agenda and solutions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-surface border-b border-outline-variant/20">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded text-sm font-label hover:shadow-editorial transition-all">
                All Issues
              </button>
              {['High', 'Medium', 'Low'].map(priority => (
                <button
                  key={priority}
                  className="px-4 py-2 border border-outline-variant rounded text-sm font-label hover:bg-surface-container-low transition-all"
                >
                  {priority} Priority
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Issues Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid gap-6">
              {issues.map((issue) => (
                <Link
                  key={issue.id}
                  href={`/issues/${issue.id}`}
                  className="group p-6 bg-white border border-outline-variant rounded-lg hover:shadow-editorial hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-3 mb-4 items-center">
                        <span className={`font-label text-[10px] px-2 py-1 rounded uppercase tracking-widest ${getPriorityColor(issue.priority)}`}>
                          {issue.priority} Priority
                        </span>
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                          {issue.category}
                        </span>
                        <span className={`font-label text-[10px] px-2 py-1 rounded uppercase tracking-widest ${getStatusColor(issue.status)}`}>
                          {issue.status}
                        </span>
                      </div>

                      <h3 className="font-headline text-2xl italic mb-3 group-hover:text-secondary transition-colors">
                        {issue.title}
                      </h3>

                      <p className="font-body text-on-surface-variant mb-4">
                        {issue.description}
                      </p>

                      <div className="flex gap-6 text-sm">
                        <span className="font-label text-on-surface-variant">
                          <span className="font-bold text-primary">{issue.responses}</span> Community Responses
                        </span>
                        <span className="font-label text-on-surface-variant">
                          Reported {issue.date}
                        </span>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="md:self-center">
                      <span className="material-symbols-outlined text-2xl text-secondary group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
