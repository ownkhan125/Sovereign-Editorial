'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { cartUtils } from '@/lib/cartUtils'

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([])
  const [totals, setTotals] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const items = cartUtils.getCartItems()
    setCartItems(items)
    setTotals(cartUtils.calculateTotals(items))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart after successful checkout
    cartUtils.clearCart()
    alert('Order placed successfully!')
    window.location.href = '/'
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Navigation />
        <main className="pt-20">
          <section className="py-32 bg-surface">
            <div className="max-w-screen-2xl mx-auto px-6 text-center">
              <h1 className="font-headline text-4xl italic mb-4">Your cart is empty</h1>
              <Link
                href="/shop"
                className="inline-block bg-primary text-white px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300"
              >
                Back to Shop
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl italic mb-3">Checkout</h1>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="py-16 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Checkout Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Billing Information */}
                  <div className="bg-surface-container-low rounded-lg p-8">
                    <h2 className="font-headline text-2xl italic mb-6">
                      Billing Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div>
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="bg-surface-container-low rounded-lg p-8">
                    <h2 className="font-headline text-2xl italic mb-6">
                      Payment Information
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block font-label text-xs uppercase tracking-widest mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-label text-xs uppercase tracking-widest mb-2">
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          />
                        </div>
                        <div>
                          <label className="block font-label text-xs uppercase tracking-widest mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="123"
                            className="w-full border border-outline-variant/40 rounded-sm px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-surface-container-low rounded-lg p-8 sticky top-24 editorial-shadow">
                  <h2 className="font-headline text-2xl italic mb-8">
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="space-y-4 mb-8 pb-8 border-b border-outline-variant/20">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span className="font-body text-on-surface-variant">
                          {item.title} x {item.quantity}
                        </span>
                        <span className="font-label font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-4 mb-8 pb-8 border-b border-outline-variant/20">
                    <div className="flex justify-between">
                      <span className="font-body text-on-surface-variant">Subtotal</span>
                      <span className="font-label font-bold">
                        ${totals.subtotal?.toFixed(2) || '0.00'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-on-surface-variant">Tax</span>
                      <span className="font-label font-bold">
                        ${totals.tax?.toFixed(2) || '0.00'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-on-surface-variant">Shipping</span>
                      <span className="font-label font-bold">
                        {totals.shipping === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `$${totals.shipping?.toFixed(2)}`
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="flex justify-between items-center">
                    <span className="font-headline text-lg">Grand Total</span>
                    <span className="font-headline text-2xl text-secondary">
                      ${totals.grandTotal?.toFixed(2) || '0.00'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
