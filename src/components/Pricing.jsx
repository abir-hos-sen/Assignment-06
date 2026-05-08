const plans = [
  {
    name: 'Starter',
    desc: 'For individuals getting started',
    price: '0',
    period: '/month',
    features: ['5 basic tools', '3 projects', 'Community support', 'Basic analytics'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    desc: 'Best for growing professionals',
    price: '29',
    period: '/month',
    features: ['All 200+ tools', 'Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom workflows'],
    cta: 'Get Started',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    desc: 'For large teams and organizations',
    price: '99',
    period: '/month',
    features: ['Everything in Pro', 'Dedicated manager', 'Custom integrations', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm mt-2">Choose the plan that works best for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 relative ${
                plan.highlight
                  ? 'bg-violet-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-xs mb-4 ${plan.highlight ? 'text-violet-200' : 'text-gray-400'}`}>{plan.desc}</p>
              <div className="mb-5">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-xs ml-1 ${plan.highlight ? 'text-violet-200' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className={`text-xs flex items-center gap-2 ${plan.highlight ? 'text-violet-100' : 'text-gray-500'}`}>
                    <span className={plan.highlight ? 'text-violet-200' : 'text-violet-600'}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                  plan.highlight
                    ? 'bg-white text-violet-600 hover:bg-violet-50'
                    : 'bg-violet-600 hover:bg-violet-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing