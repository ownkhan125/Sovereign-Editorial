"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ShopDetailPage({ params }) {
  const productId = params?.id;

  const product = {
    id: productId,
    title: "The Sovereign Manifesto - Hardcover",
    price: "$45.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0FmnKnu6uDbDj2ZJ53vkoApDpew5lBC5A_PtEJ_CCivrh7CmnbjUof65gEzWRigQJFMi-cSOnWJ-bNl69V9VGDOv9odY_EluFEvGvLOWZE_f3j4HG1jFreDDPk4myNH_wenXVnIHADo-eVTwApCOTfeobqfkpvZmYagqNowMnEQw9kZDvpirWbZ49DJOXUyFisauRNmtHG4kdRikZumoBXCTlJOLaZwaTFTOq8t47iY_Y_LiyoX_LzefbOpfkDQBRnfTDx4bQFyd",
    category: "Books",
    inStock: true,
    description:
      "The complete policy platform and philosophical foundation of The Sovereign Editorial. A comprehensive hardcover edition featuring the full manifesto, detailed policy positions, and exclusive essays on governance and leadership.",
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="bg-surface py-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <Link
              href="/shop"
              className="font-label text-xs uppercase tracking-widest text-secondary hover:underline mb-8 inline-block"
            >
              ← Back to Shop
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="bg-surface-container-high rounded-lg overflow-hidden h-96">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-2">
                  {product.category}
                </span>
                <h1 className="font-headline text-4xl italic mb-4">
                  {product.title}
                </h1>

                <div className="mb-8">
                  <p className="font-label text-3xl font-bold text-primary mb-2">
                    {product.price}
                  </p>
                  <p
                    className={`font-label text-sm uppercase tracking-widest ${product.inStock ? "text-secondary" : "text-error"}`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>

                <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="font-label text-xs uppercase tracking-widest block mb-2">
                      Quantity
                    </label>
                    <select className="w-full border border-outline-variant p-3 font-body bg-surface text-on-surface hover:border-primary transition-colors">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-4 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 hover-lift">
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-primary text-primary py-4 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-surface-container-low transition-all duration-300">
                    Add to Wishlist
                  </button>
                </div>

                {/* Product Details */}
                <div className="mt-12 pt-8 border-t border-outline-variant/20">
                  <h3 className="font-headline text-xl italic mb-6">
                    Product Details
                  </h3>
                  <dl className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        Format
                      </dt>
                      <dd className="font-body">Hardcover</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        Pages
                      </dt>
                      <dd className="font-body">248 pages</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        Published
                      </dt>
                      <dd className="font-body">2024</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="font-headline text-3xl italic mb-12">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((id) => (
                <Link key={id} href={`/shop/${id + 1}`} className="group">
                  <div className="bg-surface-container-high rounded-lg overflow-hidden h-64 hover-scale">
                    <img
                      src={product.image}
                      alt="Related product"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-headline text-lg italic mb-2 group-hover:text-secondary transition-colors">
                      Related Product {id}
                    </h3>
                    <p className="font-label text-lg font-bold text-primary">
                      $35.00
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
