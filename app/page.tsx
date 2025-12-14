'use client'

import { useState } from 'react'

export default function Home() {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-investment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit investment commitment')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your commitment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Letter Container */}
        <div className="bg-gradient-to-br from-white via-amber-50/20 to-white luxury-shadow luxury-border rounded-none p-10 sm:p-16 md:p-20 lg:p-24 border-t-4 border-b-4" style={{ borderColor: '#d4af37' }}>
          {/* Letter Content */}
          <div className="font-serif text-stone-800 leading-relaxed space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-12 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">A Personal Invitation</span>
              <br />
              <span className="text-stone-800">to Invest in 2 Seasons</span>
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              2 Seasons is a carefully planned regenerative lifestyle development designed around wellness, residential living, agriculture, and creative infrastructure. It is not an idea—we are already deeply invested, financially and structurally.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">What Has Already Been Done</span>
            </h2>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              Before opening this investment window, we have already committed approximately ₦160,000,000 into the foundation of 2 Seasons, covering:
            </p>

            <ul className="list-none space-y-3 ml-6 text-xl sm:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-libre)' }}>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Land acquisition</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Legal documentation</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Registered survey</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Clearing of essential areas</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Boundary definition and access paths</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Early positioning and marketing groundwork</span>
              </li>
            </ul>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This means investors are not coming into a blank slate—you are stepping into a project that is already alive, secured, and structured.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">The Asset Backing This Opportunity</span>
            </h2>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              2 Seasons sits on 85 acres of land.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              At current market realities:
            </p>

            <ul className="list-none space-y-3 ml-6 text-xl sm:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-libre)' }}>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">85 acres ≈ 510 standard plots</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Average plot value ≈ ₦3.5 million</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Total land value today ≈ ₦1.7 billion</span>
              </li>
            </ul>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This reflects a significant appreciation from our initial land cost and places the project on a solid asset foundation, not speculation.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">Why We Are Raising Capital</span>
            </h2>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              The land value is established.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              The vision is clear.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              The next phase is scale.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-6" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              We are doubling down on:
            </p>

            <ul className="list-none space-y-3 ml-6 text-xl sm:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-libre)' }}>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Strategic marketing</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Visibility and positioning</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Accelerated development milestones</span>
              </li>
            </ul>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This capital injection is designed to unlock momentum, not to start the project.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">The Investment Offer</span>
            </h2>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              We are opening a limited investment round with a clear structure:
            </p>

            <ul className="list-none space-y-3 ml-6 text-xl sm:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-libre)' }}>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Investors receive 30% return on their investment within six months</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Returns are driven by active marketing, plot absorption, and phased execution</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Backed by real land value and ongoing development activities</span>
              </li>
            </ul>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This is a time-bound opportunity, created to move the project decisively into its next growth phase.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">Why This Makes Sense</span>
            </h2>

            <ul className="list-none space-y-3 ml-6 text-xl sm:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-libre)' }}>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Strong asset-to-investment ratio</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Real, verifiable land value</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Early-stage entry into a multi-use lifestyle destination</span>
              </li>
              <li className="flex items-start">
                <span className="gold-text mr-4 text-2xl">•</span>
                <span className="text-stone-700">Clear short-term return, with long-term upside</span>
              </li>
            </ul>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8 italic" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This is not about chasing hype.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              It is about leveraging what already exists and scaling it intelligently.
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mt-16 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
              <span className="gold-text">A Seat at the Right Time</span>
            </h2>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              2 Seasons is being built for longevity—but moments like this are brief.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              This investment window will close once the marketing and development phase is fully funded. Future participation will be at a higher valuation and different terms.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              2 Seasons is already rooted.
            </p>

            <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
              Now it is time to expand.
            </p>

            <p className="text-2xl sm:text-3xl leading-relaxed text-stone-800 font-normal mt-8" style={{ fontFamily: 'var(--font-cormorant)', lineHeight: '1.8' }}>
              This is your opportunity to grow with it.
            </p>

            {/* Signature Section */}
            <div className="mt-20 space-y-3">
              <p className="text-xl sm:text-2xl" style={{ fontFamily: 'var(--font-libre)' }}>
                Sincerely,
              </p>
              <div className="mt-10 pt-6 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                <p className="text-3xl sm:text-4xl font-light tracking-wider" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.1em' }}>
                  <span className="gold-text">Tolulope Olugbode</span>
                </p>
                <p className="text-xl sm:text-2xl mt-3 text-stone-600" style={{ fontFamily: 'var(--font-libre)' }}>
                  CEO Focal Point Prop.
                </p>
                <p className="text-xl sm:text-2xl text-stone-600" style={{ fontFamily: 'var(--font-libre)' }}>
                  Founder 2 Seasons
                </p>
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <a 
                    href="https://www.2seasonsabk.store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl transition-all duration-300 hover:opacity-80"
                    style={{ fontFamily: 'var(--font-libre)' }}
                  >
                    <span className="gold-text underline decoration-2 underline-offset-4">www.2seasonsabk.store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Form */}
          {!submitted ? (
            <div className="mt-20 pt-16 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <h2 className="text-3xl sm:text-4xl font-light mb-10 text-center tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
                <span className="gold-text">Commit to Your Investment</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
                <div>
                  <label htmlFor="amount" className="block text-xl mb-3 font-normal tracking-wide" style={{ fontFamily: 'var(--font-libre)', letterSpacing: '0.05em' }}>
                    Investment Amount (₦)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="1"
                    placeholder="Enter amount"
                    className="w-full px-6 py-4 border-2 border-stone-300 rounded-none focus:border-amber-600 focus:outline-none text-xl bg-white/50 transition-all duration-300 hover:border-amber-400"
                    style={{ fontFamily: 'var(--font-libre)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xl mb-3 font-normal tracking-wide" style={{ fontFamily: 'var(--font-libre)', letterSpacing: '0.05em' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-4 border-2 border-stone-300 rounded-none focus:border-amber-600 focus:outline-none text-xl bg-white/50 transition-all duration-300 hover:border-amber-400"
                    style={{ fontFamily: 'var(--font-libre)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-white font-light py-5 px-8 rounded-none text-xl tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] luxury-shadow"
                  style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.1em' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Investment Commitment'}
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-20 pt-16 border-t" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div className="max-w-lg mx-auto text-center space-y-6">
                <div className="text-7xl mb-6 gold-text" style={{ fontFamily: 'var(--font-cormorant)' }}>✓</div>
                <h2 className="text-3xl sm:text-4xl font-light tracking-wide" style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}>
                  <span className="gold-text">Thank You for Your Commitment</span>
                </h2>
                <p className="text-xl sm:text-2xl leading-relaxed text-stone-700" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
                  We have received your investment commitment. We will send the contract and details of payment to your email address shortly.
                </p>
                <p className="text-xl sm:text-2xl leading-relaxed text-stone-600 mt-8" style={{ fontFamily: 'var(--font-libre)', lineHeight: '1.8' }}>
                  Our team will be in touch with you soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

