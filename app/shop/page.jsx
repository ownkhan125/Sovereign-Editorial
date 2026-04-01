'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: 'The Sovereign Manifesto - Hardcover',
      price: '$45.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd',
      category: 'Books',
    },
    {
      id: 2,
      title: 'Campaign Pin Collection',
      price: '$25.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW9EPS-mMUT7Nm_DeoasN0AJN1fHrxEh3SHdDyAiNT46xbMj8-uSwmUNJLmOBMURvSJlIaFrolaeFljumNSTsUaR_Do918rnMXgWvcNU3I90-osk9oIyuhQpbeFkTpKXi6Se3eTXBB1aYzjZSoLiocXR3kdd8JQJ7RhC9U5KKwF0nrJuFUEjuDOOD95cWPmZgz3SmDLFkHIM-kuuq-r8LwxKq-gw4P1lmTb_EMnkwe9rD54DExjjQYHoFGr170-eol999Wkiz2uO0S',
      category: 'Merchandise',
    },
    {
      id: 3,
      title: 'Sovereign Edition T-Shirt',
      price: '$35.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcFXWBBfMcbymwFuYIzztX5d11JvoYvSPHZQY82vQslm6riez_7T6X4ommr1p1x4wjRjHMZNNRf5VhJrAywE8IiYmbn2S1GNCxmUmsp-SmIlBg45mSh8CjLKs1G3f0j_yMO1HVEKPiEQZuwXKwHUJ5HpE_TUwaur53MAJBYH-_nyF51VbULyzGceOpdYjsSmij2Tw-LcCCyjIhQn7gG5xXq_h66FtDlz5PNXQ5QVfSAbqi1BR0_xCkMNRrRMguf4rX_DDmEDiSwFRy',
      category: 'Apparel',
    },
    {
      id: 4,
      title: 'Policy Briefing Notebook',
      price: '$15.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSlCHNH0qBTwt0Bxb7Ma9gbwCyhpZkhw5-I8LSeKVPYHXqaxP8OPs8atTDD4zM81H-Xa35d_SI7hY1eb0vZEUHk2Ds4UfoeaCPLkmUpGj51xp6TO4oLaTknCb3VmoTPXkJYhmEHEkLlbLk2aN1oiTYMKWf-pqsEVXjt-LOxBwRIxCQBhzpMNTQp6WpVqRBoi6a-aasUVwGHf-aiDlpUr1PSP6zb__EqSg2k-HSkT32erdBzw_1hRkj-sAqtyIF6fWtiPD0HA5sMQzV',
      category: 'Books',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">The Sovereign Shop</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Official merchandise and publications supporting the movement for sovereign progress.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group"
                >
                  <div className="overflow-hidden bg-surface-container-high rounded-lg editorial-shadow hover:shadow-2xl transition-all duration-300 hover:scale-105 h-64">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-headline text-xl mb-3 group-hover:text-secondary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="font-label text-lg font-bold text-primary">
                      {product.price}
                    </p>
                    <button className="mt-4 w-full bg-primary text-white py-3 font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 hover-lift">
                      Add to Cart
                    </button>
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
