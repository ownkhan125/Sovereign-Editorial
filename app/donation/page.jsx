'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function DonationPage() {
  const [formData, setFormData] = useState({
    amount: '50',
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ amount: '50', fullName: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const donationTiers = [
    { amount: '$25', description: 'Supporter', color: 'bg-slate-100' },
    { amount: '$50', description: 'Advocate', color: 'bg-blue-50' },
    { amount: '$100', description: 'Champion', color: 'bg-purple-50' },
    { amount: '$250', description: 'Leader', color: 'bg-red-50' },
    { amount: '$500', description: 'Visionary', color: 'bg-amber-50' },
    { amount: 'Custom', description: 'Your Amount', color: 'bg-primary text-white' },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="font-headline text-5xl md:text-7xl mb-6 italic">Support Our Vision</h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl">
              Your contribution directly supports our mission to build a sovereign future with integrity, innovation, and unwavering public service.
            </p>
          </div>
        </section>

        {/* Main Donation Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Donation Tiers */}
              <div>
                <h2 className="font-headline text-3xl italic mb-8">Choose Your Level</h2>
                <div className="grid grid-cols-2 gap-4">
                  {donationTiers.slice(0, 4).map((tier, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFormData(prev => ({ ...prev, amount: tier.amount }))}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        formData.amount === tier.amount
                          ? 'border-secondary bg-secondary/5'
                          : 'border-outline-variant hover:border-secondary'
                      }`}
                    >
                      <p className="font-headline text-2xl italic mb-2">{tier.amount}</p>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                        {tier.description}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 border-2 border-primary rounded-lg bg-primary/5">
                  <h3 className="font-headline text-xl italic mb-4">Impact of Your Donation</h3>
                  <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Direct support for policy development</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Grassroots outreach and engagement</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Educational initiatives and research</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Exclusive updates and insider briefings</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Donation Form */}
              <div className="bg-white p-8 rounded-lg border border-outline-variant hover:shadow-editorial transition-shadow duration-300">
                <h2 className="font-headline text-2xl italic mb-6">Make Your Contribution</h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 text-center p-8 rounded-lg">
                    <span className="material-symbols-outlined text-5xl text-green-600 flex justify-center mb-4">
                      check_circle
                    </span>
                    <h3 className="font-headline text-xl italic mb-2">Thank You!</h3>
                    <p className="font-body text-on-surface-variant">
                      Your generous donation has been received. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount Display */}
                    <div className="bg-surface-container rounded-lg p-4">
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                        Donation Amount
                      </p>
                      <p className="font-headline text-3xl italic text-secondary">
                        {formData.amount}
                      </p>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-outline-variant p-3 rounded font-body focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-outline-variant p-3 rounded font-body focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-outline-variant p-3 rounded font-body focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-label text-xs uppercase tracking-widest block mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full border border-outline-variant p-3 rounded font-body focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                        placeholder="Share why you're supporting this movement..."
                      />
                    </div>

                    {/* Checkbox */}
                    <div className="flex gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-5 h-5 border border-outline-variant rounded cursor-pointer"
                      />
                      <label htmlFor="terms" className="font-body text-sm text-on-surface-variant cursor-pointer">
                        I understand that federal law requires us to use our best efforts to collect and report the name, address, occupation, and employer.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 font-label text-sm font-bold uppercase tracking-widest rounded hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 active:scale-95"
                    >
                      Contribute Now
                    </button>

                    <p className="font-label text-[10px] text-on-surface-variant/60 uppercase tracking-widest text-center">
                      Your donation is secure and processed immediately
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="font-headline text-4xl italic mb-16 text-center">Why Your Support Matters</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Policy Development',
                  desc: 'Extensive research and expert analysis to build comprehensive policy solutions'
                },
                {
                  title: 'Grassroots Outreach',
                  desc: 'Community engagement and direct connection with citizens across the nation'
                },
                {
                  title: 'Educational Initiative',
                  desc: 'Advancing civic literacy and fostering informed political discourse'
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-lg hover:shadow-editorial transition-all duration-300">
                  <h3 className="font-headline text-xl italic mb-4">{item.title}</h3>
                  <p className="font-body text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-headline text-4xl italic mb-16 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Is my donation secure?',
                  a: 'Yes, all donations are processed through secure, encrypted channels and comply with federal regulations.'
                },
                {
                  q: 'Can I donate anonymously?',
                  a: 'Federal law requires us to collect donor information for reporting purposes. However, your privacy is protected.'
                },
                {
                  q: 'What is your tax status?',
                  a: 'We are a registered campaign committee. Contributions are not deductible as charitable donations.'
                },
                {
                  q: 'Can I set up a recurring donation?',
                  a: 'Contact our donation team for options on recurring contributions and major gift support.'
                },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-outline-variant/20 pb-6 last:border-0">
                  <h3 className="font-headline text-lg italic mb-3">{item.q}</h3>
                  <p className="font-body text-on-surface-variant">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary text-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-headline text-5xl italic mb-6">Ready to Make a Difference?</h2>
            <p className="font-body text-lg mb-8 text-white/80">
              Every contribution, regardless of size, strengthens our movement and carries us closer to our vision.
            </p>
            <button className="bg-white text-primary px-16 py-4 font-label text-sm font-bold uppercase tracking-widest rounded hover:bg-slate-100 transition-all hover:translate-y-[-2px] duration-300">
              Donate Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
