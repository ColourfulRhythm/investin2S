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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Letter Container */}
        <div className="bg-white shadow-2xl rounded-lg p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Letter Content */}
          <div className="font-serif text-gray-800 leading-relaxed space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Personal Invitation to Invest in 2 Seasons
            </h1>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              2 Seasons is a carefully planned regenerative lifestyle development designed around wellness, residential living, agriculture, and creative infrastructure. It is not an idea—we are already deeply invested, financially and structurally.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              What Has Already Been Done
            </h2>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              Before opening this investment window, we have already committed approximately ₦160,000,000 into the foundation of 2 Seasons, covering:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              <li>Land acquisition</li>
              <li>Legal documentation</li>
              <li>Registered survey</li>
              <li>Clearing of essential areas</li>
              <li>Boundary definition and access paths</li>
              <li>Early positioning and marketing groundwork</li>
            </ul>

            <p className="text-lg sm:text-xl leading-loose mt-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              This means investors are not coming into a blank slate—you are stepping into a project that is already alive, secured, and structured.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Asset Backing This Opportunity
            </h2>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              2 Seasons sits on 85 acres of land.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              At current market realities:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              <li>85 acres ≈ 510 standard plots</li>
              <li>Average plot value ≈ ₦3.5 million</li>
              <li>Total land value today ≈ ₦1.7 billion</li>
            </ul>

            <p className="text-lg sm:text-xl leading-loose mt-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              This reflects a significant appreciation from our initial land cost and places the project on a solid asset foundation, not speculation.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why We Are Raising Capital
            </h2>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              The land value is established.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              The vision is clear.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              The next phase is scale.
            </p>

            <p className="text-lg sm:text-xl leading-loose mt-4" style={{ fontFamily: "'Crimson Text', serif" }}>
              We are doubling down on:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              <li>Strategic marketing</li>
              <li>Visibility and positioning</li>
              <li>Accelerated development milestones</li>
            </ul>

            <p className="text-lg sm:text-xl leading-loose mt-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              This capital injection is designed to unlock momentum, not to start the project.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              The Investment Offer
            </h2>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              We are opening a limited investment round with a clear structure:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4 text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              <li>Investors receive 30% return on their investment within six months</li>
              <li>Returns are driven by active marketing, plot absorption, and phased execution</li>
              <li>Backed by real land value and ongoing development activities</li>
            </ul>

            <p className="text-lg sm:text-xl leading-loose mt-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              This is a time-bound opportunity, created to move the project decisively into its next growth phase.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why This Makes Sense
            </h2>

            <ul className="list-disc list-inside space-y-2 ml-4 text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              <li>Strong asset-to-investment ratio</li>
              <li>Real, verifiable land value</li>
              <li>Early-stage entry into a multi-use lifestyle destination</li>
              <li>Clear short-term return, with long-term upside</li>
            </ul>

            <p className="text-lg sm:text-xl leading-loose mt-6 italic" style={{ fontFamily: "'Crimson Text', serif" }}>
              This is not about chasing hype.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              It is about leveraging what already exists and scaling it intelligently.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Seat at the Right Time
            </h2>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              2 Seasons is being built for longevity—but moments like this are brief.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              This investment window will close once the marketing and development phase is fully funded. Future participation will be at a higher valuation and different terms.
            </p>

            <p className="text-lg sm:text-xl leading-loose mt-6" style={{ fontFamily: "'Crimson Text', serif" }}>
              2 Seasons is already rooted.
            </p>

            <p className="text-lg sm:text-xl leading-loose" style={{ fontFamily: 'var(--font-crimson)' }}>
              Now it is time to expand.
            </p>

            <p className="text-lg sm:text-xl leading-loose font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
              This is your opportunity to grow with it.
            </p>

            {/* Signature Section */}
            <div className="mt-16 space-y-2">
              <p className="text-lg sm:text-xl" style={{ fontFamily: 'var(--font-crimson)' }}>
                Sincerely,
              </p>
              <div className="mt-8">
                <p className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Tolulope Olugbode
                </p>
                <p className="text-lg sm:text-xl mt-1" style={{ fontFamily: 'var(--font-crimson)' }}>
                  CEO Focal Point Prop.
                </p>
                <p className="text-lg sm:text-xl" style={{ fontFamily: 'var(--font-crimson)' }}>
                  Founder 2 Seasons
                </p>
              </div>
            </div>
          </div>

          {/* Investment Form */}
          {!submitted ? (
            <div className="mt-16 pt-12 border-t-2 border-gray-300">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
                Commit to Your Investment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div>
                  <label htmlFor="amount" className="block text-lg mb-2 font-semibold" style={{ fontFamily: 'var(--font-crimson)' }}>
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                    style={{ fontFamily: 'var(--font-crimson)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg mb-2 font-semibold" style={{ fontFamily: 'var(--font-crimson)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
                    style={{ fontFamily: 'var(--font-crimson)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-crimson)' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Investment Commitment'}
                </button>
              </form>
            </div>
          ) : (
            <div className="mt-16 pt-12 border-t-2 border-gray-300">
              <div className="max-w-md mx-auto text-center space-y-4">
                <div className="text-6xl mb-4">✓</div>
                <h2 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Thank You for Your Commitment
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-crimson)' }}>
                  We have received your investment commitment. We will send the contract and details of payment to your email address shortly.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed mt-6" style={{ fontFamily: 'var(--font-crimson)' }}>
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

