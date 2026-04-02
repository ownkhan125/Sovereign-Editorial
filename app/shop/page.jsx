import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AddToCartButton } from "@/components/AddToCartButton";
import { getProducts } from "@/lib/products";

export default async function ShopPage() {
  const products = await getProducts();
  console.log("products shop page check::", products);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">
              The Sovereign Shop
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Official merchandise and publications supporting the movement for
              sovereign progress.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={`/shop/${product._id}`}
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
                      {product.name}
                    </h3>
                    <p className="font-label text-lg font-bold text-primary">
                      {product.price}
                    </p>
                    <AddToCartButton product={product._id} />
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
