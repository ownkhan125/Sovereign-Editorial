"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NewsDetailPage({ params }) {
  const newsId = params?.id;

  const article = {
    id: newsId,
    title: "The Restoration of Civil Discourse",
    date: "October 20, 2024",
    category: "Deep Dive",
    author: "Editorial Team",
    readTime: "8 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd",
    content: `How a return to traditional debate formats and architectural governance can heal the fractured landscape of modern political engagement.`,
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Article Header */}
        <section className="bg-surface">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <Link
              href="/news"
              className="font-label text-xs uppercase tracking-widest text-secondary hover:underline mb-8 inline-block"
            >
              ← Back to News
            </Link>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-4">
              {article.category} • {article.date}
            </span>
            <h1 className="font-headline text-5xl md:text-6xl italic mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-on-surface-variant font-body text-sm">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-surface border-b border-outline-variant/20">
          <div className="max-w-4xl mx-auto px-6">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-surface">
          <div className="max-w-3xl mx-auto px-6">
            <article className="prose prose-xl max-w-none">
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
                {article.content}
              </p>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                The modern political landscape has become fractured, with
                dialogue replaced by confrontation and genuine debate giving way
                to performative disagreement. This crisis of civil discourse
                threatens the very foundations of democratic governance and
                shared civic life.
              </p>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                However, history and contemporary practice offer us examples of
                how civil discourse can be restored. By examining these models
                and adapting them to contemporary contexts, we can begin to
                rebuild the conditions for productive political engagement.
              </p>

              <h2 className="font-headline text-3xl italic mt-12 mb-6">
                The Challenge Before Us
              </h2>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Deep partisan divisions are not new to American politics.
                However, the scale and intensity of contemporary polarization
                presents distinctive challenges. Traditional venues for dialogue
                have been weakened, while social media amplifies extreme voices
                and incentivizes performative outrage rather than genuine
                engagement.
              </p>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                The Sovereign Editorial believes that this crisis can be
                addressed through intentional structural and cultural changes.
                By creating spaces and norms that favor understanding over
                victory, we can restore the possibility of genuine democratic
                discourse.
              </p>

              <h2 className="font-headline text-3xl italic mt-12 mb-6">
                Building Better Conversations
              </h2>

              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Effective dialogue requires specific preconditions: respect for
                participants, commitment to good faith engagement, and a shared
                commitment to understanding. These cannot be assumed; they must
                be actively cultivated through institutions and practices
                designed with this purpose in mind.
              </p>
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-y border-outline-variant/20 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                Share This Article
              </p>
              <div className="flex gap-4">
                {["public", "share", "mail"].map((icon) => (
                  <button
                    key={icon}
                    className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="font-headline text-2xl italic mb-8">
                Related News
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((id) => (
                  <Link
                    key={id}
                    href={`/news/${id + 1}`}
                    className="group hover:shadow-editorial p-6 rounded-lg transition-all duration-300 hover:bg-surface-container-low"
                  >
                    <h4 className="font-headline text-lg italic mb-2 group-hover:text-secondary transition-colors">
                      Related News Article
                    </h4>
                    <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">
                      Brief excerpt of the related article that provides
                      additional context on this topic.
                    </p>
                    <span className="font-label text-xs uppercase tracking-widest text-secondary hover:underline inline-flex items-center gap-2">
                      Read Story{" "}
                      <span className="material-symbols-outlined text-sm">
                        trending_flat
                      </span>
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
  );
}
