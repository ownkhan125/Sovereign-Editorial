'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function IssuesPage() {
  const issues = [
    {
      id: 1,
      title: 'The Restoration of Civil Discourse',
      category: 'Deep Dive',
      readTime: '8 Min Read',
      description: 'How a return to traditional debate formats and architectural governance can heal the fractured landscape of modern political engagement.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd',
    },
    {
      id: 2,
      title: 'Blueprint for Urban Resilience',
      category: 'Policy Update',
      readTime: '5 Min Read',
      description: 'An analysis of our newly released strategy for municipal growth and sustainable urban development in the tri-state area.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW9EPS-mMUT7Nm_DeoasN0AJN1fHrxEh3SHdDyAiNT46xbMj8-uSwmUNJLmOBMURvSJlIaFrolaeFljumNSTsUaR_Do918rnMXgWvcNU3I90-osk9oIyuhQpbeFkTpKXi6Se3eTXBB1aYzjZSoLiocXR3kdd8JQJ7RhC9U5KKwF0nrJuFUEjuDOOD95cWPmZgz3SmDLFkHIM-kuuq-r8LwxKq-gw4P1lmTb_EMnkwe9rD54DExjjQYHoFGr170-eol999Wkiz2uO0S',
    },
    {
      id: 3,
      title: 'Modernizing the Sovereign Grid',
      category: 'Infrastructure',
      readTime: '10 Min Read',
      description: 'Investing in resilient digital and physical infrastructure to secure our nation\'s competitive edge.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcFXWBBfMcbymwFuYIzztX5d11JvoYvSPHZQY82vQslm6riez_7T6X4ommr1p1x4wjRjHMZNNRf5VhJrAywE8IiYmbn2S1GNCxmUmsp-SmIlBg45mSh8CjLKs1G3f0j_yMO1HVEKPiEQZuwXKwHUJ5HpE_TUwaur53MAJBYH-_nyF51VbULyzGceOpdYjsSmij2Tw-LcCCyjIhQn7gG5xXq_h66FtDlz5PNXQ5QVfSAbqi1BR0_xCkMNRrRMguf4rX_DDmEDiSwFRy',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">The Sovereign Platform</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Comprehensive policy positions and detailed analysis on the critical issues facing our nation.
            </p>
          </div>
        </section>

        {/* Issues Grid */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid gap-12">
              {issues.map((issue) => (
                <article
                  key={issue.id}
                  className="grid md:grid-cols-5 gap-8 group cursor-pointer hover:shadow-editorial p-6 rounded-lg transition-all duration-300 hover:bg-surface-container-low"
                >
                  <div className="md:col-span-2 overflow-hidden bg-surface-container-high hover-scale rounded-lg">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-3 py-4 flex flex-col">
                    <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant mb-4">
                      {issue.category} • {issue.readTime}
                    </span>
                    <h3 className="font-headline text-3xl mb-4 group-hover:text-secondary transition-colors duration-300">
                      {issue.title}
                    </h3>
                    <p className="font-body text-on-surface-variant line-clamp-3 mb-6">
                      {issue.description}
                    </p>
                    <Link
                      href={`/issues/${issue.id}`}
                      className="font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto hover:translate-x-1 transition-transform duration-300 hover:text-secondary"
                    >
                      Read Full Article{' '}
                      <span className="material-symbols-outlined text-sm">trending_flat</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
