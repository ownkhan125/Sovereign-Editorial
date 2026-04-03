import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AddToCartButton } from "@/components/AddToCartButton";
import { getProductById, getProducts } from "@/lib/products";
import { getPriceById } from "@/lib/price";

export default async function ShopDetailPage({ params }) {
  // Properly handle params in Next.js App Router
  const resolvedParams = await params;
  const productId = resolvedParams?.id;

  // Validate productId
  if (!productId || productId.trim() === "") {
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
              <h1 className="font-headline text-3xl italic">
                Invalid Product ID
              </h1>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const product = await getProductById(productId);
  const price = await getPriceById(productId);
  const relatedProducts = await getProducts();

  if (!product) {
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
              <h1 className="font-headline text-3xl italic">
                Product not found
              </h1>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

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
                  {product.name}
                </h1>

                <div className="mb-8">
                  <p className="font-label text-3xl font-bold text-primary mb-2">
                    {price.prices[0].amount}
                  </p>
                  <p className="font-label text-sm uppercase tracking-widest text-secondary mb-6">
                    In Stock
                  </p>
                  <AddToCartButton product={product} />
                </div>

                <p
                  className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
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
              {relatedProducts.slice(0, 3).map((item, index) => (
                <Link key={index} href={`/shop/${item.id}`} className="group">
                  <div className="bg-surface-container-high rounded-lg overflow-hidden h-64 hover-scale">
                    <img
                      src={item.image || ""}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-headline text-lg italic mb-2 group-hover:text-secondary transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-label text-lg font-bold text-primary">
                      {item.price}
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
