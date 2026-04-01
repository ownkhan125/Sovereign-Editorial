'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function IssueDetailPage({ params }) {
  const issueId = params.id

  const issue = {
    title: 'The Restoration of Civil Discourse',
    date: 'October 20, 2024',
    category: 'Deep Dive',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd',
    content: `How a return to traditional debate formats and architectural governance can heal the fractured landscape of modern political engagement. This comprehensive analysis explores the historical foundations of civil discourse and proposes practical mechanisms for restoring productive dialogue across ideological boundaries.`,
  }

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Article Header */}
        <section className="bg-surface">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <Link href="/issues" className="font-label text-xs uppercase tracking-widest text-secondary hover:underline mb-8 inline-block">
              ← Back to Issues
            </Link>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-4">
              {issue.category} • {issue.date}
            </span>
            <h1 className="font-headline text-5xl md:text-6xl italic mb-6 leading-tight">
              {issue.title}
            </h1>
            <p className="font-body text-lg text-on-surface-variant">
              {issue.readTime}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-surface border-b border-outline-variant/20">
          <div className="max-w-4xl mx-auto px-6">
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-6">
            <article className="prose prose-xl max-w-none">
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
                {issue.content}
              </p>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                The restoration of civil discourse requires more than good intentions. It demands specific practices, institutional structures, and a shared commitment to understanding rather than merely defeating opponents. This essay examines proven approaches to constructive debate and explores how they might be adapted to contemporary political contexts.
              </p>

              <h2 className="font-headline text-3xl italic mt-12 mb-6">The Historical Foundation</h2>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Political discourse in earlier eras benefited from different communication technologies and different social expectations. While we cannot recreate those conditions, we can draw lessons from periods when disagreement was rigorous but not bitter.
              </p>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Modern architecture also offers lessons in how form shapes function. Just as civic spaces designed with care encourage productive interaction, the structures of our political institutions shape the nature of discourse within them.
              </p>
            </article>

            {/* Related Articles */}
            <div className="mt-20 pt-12 border-t border-outline-variant/20">
              <h3 className="font-headline text-2xl italic mb-8">Related Issues</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((id) => (
                  <Link
                    key={id}
                    href={`/issues/${id + 1}`}
                    className="group hover:shadow-editorial p-6 rounded-lg transition-all duration-300"
                  >
                    <h4 className="font-headline text-lg italic mb-2 group-hover:text-secondary transition-colors">
                      Related Article Title
                    </h4>
                    <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">
                      Brief excerpt of the related article
                    </p>
                    <span className="font-label text-xs uppercase tracking-widest text-secondary hover:underline inline-flex items-center gap-2">
                      Read More <span className="material-symbols-outlined text-sm">trending_flat</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
