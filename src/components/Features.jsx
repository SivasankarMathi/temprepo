const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description:
      'Built on edge infrastructure with sub-100ms response times globally. Your users get instant experiences, always.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified, end-to-end encryption, SSO/SAML support, and fine-grained role-based access control.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Live dashboards, funnel analysis, and cohort reports that help you understand your users and grow smarter.',
  },
  {
    icon: '🔌',
    title: 'Powerful Integrations',
    description:
      'Connect with Stripe, Slack, HubSpot, Salesforce and 200+ more tools in one click. Your stack, unified.',
  },
  {
    icon: '🚀',
    title: 'One-click Deploy',
    description:
      'Push to production with zero downtime deployments, automatic rollbacks, and a global CDN out of the box.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Teams',
    description:
      'Invite teammates, set granular permissions, leave comments, and keep everyone aligned in real time.',
  },
]

export default function Features() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything you need to{' '}
            <span className="text-indigo-600">scale</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Stop stitching together a dozen tools. LaunchPad gives your team one
            powerful platform that covers the entire lifecycle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl mb-5 group-hover:bg-indigo-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg">
            Get Started for Free
          </button>
          <p className="mt-3 text-sm text-gray-400">
            Free plan available · No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
