'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cartItems')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    setIsLoading(false)
  }, [])

  // Save cart to localStorage
  const saveCart = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return

    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCart)
    saveCart(updatedCart)
  }

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCart)
    saveCart(updatedCart)
  }

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const tax = subtotal * 0.1 // 10% tax
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0
  const grandTotal = subtotal + tax + shipping

  // Empty cart state
  if (!isLoading && cartItems.length === 0) {
    return (
      <>
        <Navigation />
        <main className="pt-20">
          <section className="py-32 bg-surface">
            <div className="max-w-screen-2xl mx-auto px-6">
              <div className="text-center">
                <h1 className="font-headline text-5xl italic mb-4">Your Cart is Empty</h1>
                <p className="font-body text-lg text-on-surface-variant mb-12">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-primary text-white px-8 py-4 font-label text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 hover-lift"
                >
                  Continue Shopping
                </Link>
              </div>
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
            <h1 className="font-headline text-5xl md:text-6xl mb-3 italic">Shopping Cart</h1>
            <p className="font-body text-on-surface-variant">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-16 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 pb-6 border-b border-outline-variant/20 hover:bg-surface-container-low/50 p-4 rounded-lg transition-colors duration-300"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <Link
                          href={`/shop/${item.id}`}
                          className="font-headline text-lg italic hover:text-secondary transition-colors duration-300"
                        >
                          {item.title}
                        </Link>
                        <p className="font-label text-xs uppercase tracking-widest text-secondary mt-2 mb-4">
                          {item.category}
                        </p>
                        <p className="font-label text-lg font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col items-end justify-between">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3 border border-outline-variant/40 rounded-sm p-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-primary hover:bg-surface-container-low rounded transition-colors duration-300"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-label font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center font-bold text-primary hover:bg-surface-container-low rounded transition-colors duration-300"
                          >
                            +
                          </button>
                        </div>

                        {/* Subtotal & Remove */}
                        <div className="text-right">
                          <p className="font-label text-sm text-on-surface-variant mb-3">
                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-error hover:text-secondary text-sm font-label font-bold uppercase tracking-widest transition-colors duration-300"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping Link */}
                <Link
                  href="/shop"
                  className="inline-block mt-8 font-label text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* Cart Summary */}
              <div className="md:col-span-1">
                <div className="bg-surface-container-low rounded-lg p-8 sticky top-24 editorial-shadow">
                  <h2 className="font-headline text-2xl italic mb-8">Order Summary</h2>

                  <div className="space-y-4 mb-8 pb-8 border-b border-outline-variant/20">
                    {/* Subtotal */}
                    <div className="flex justify-between items-center">
                      <span className="font-body text-on-surface-variant">Subtotal</span>
                      <span className="font-label font-bold">${subtotal.toFixed(2)}</span>
                    </div>

                    {/* Tax */}
                    <div className="flex justify-between items-center">
                      <span className="font-body text-on-surface-variant">Tax (10%)</span>
                      <span className="font-label font-bold text-primary">
                        ${tax.toFixed(2)}
                      </span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between items-center">
                      <span className="font-body text-on-surface-variant">
                        Shipping
                        {shipping === 0 && (
                          <span className="text-success ml-2 text-xs font-bold">FREE</span>
                        )}
                      </span>
                      <span className="font-label font-bold">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  {/* Grand Total */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-headline text-lg">Grand Total</span>
                    <span className="font-headline text-2xl text-secondary">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    className="block w-full bg-primary text-white py-4 text-center font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary transition-all duration-300 hover-lift mb-4"
                  >
                    Proceed to Checkout
                  </Link>

                  {/* Secondary Action */}
                  <Link
                    href="/shop"
                    className="block w-full border-2 border-primary text-primary text-center py-3 font-label text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-primary/5 transition-all duration-300"
                  >
                    Continue Shopping
                  </Link>

                  {/* Shipping Info */}
                  <p className="text-xs text-on-surface-variant mt-6 text-center font-body">
                    Free shipping on orders over $100
                  </p>
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
