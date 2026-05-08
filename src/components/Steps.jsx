import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

const steps = [
  {
    number: '01',
    icon: userIcon,
    bg: 'bg-violet-100',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: packageIcon,
    bg: 'bg-violet-100',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: rocketIcon,
    bg: 'bg-violet-100',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
]

const Steps = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative bg-white border border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
            >
              {/* Step Number Badge - Top Right */}
              <div className="absolute top-5 right-5 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-violet-200">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className={`w-24 h-24 ${step.bg} rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300`}>
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="font-extrabold text-gray-900 text-xl mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps