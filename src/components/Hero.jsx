export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now in public beta
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Ship faster with{' '}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">LaunchPad</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 Q150 2 298 10"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed">
          The all-in-one platform to build, launch, and scale your SaaS product.
          From idea to revenue in record time.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 text-lg">
            Get Started — it's free
          </button>
          <button className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200 text-lg backdrop-blur-sm">
            See a demo →
          </button>
        </div>

        {/* Social proof */}
        <p className="text-sm text-white/60 mt-2">
          Trusted by <span className="font-semibold text-white">12,000+</span> builders worldwide · No credit card required
        </p>
      </div>
    </section>
  )
}
