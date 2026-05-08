const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

const Stats = () => {
  return (
    <section className="bg-violet-600 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center border-r border-violet-400 last:border-r-0 px-4"
            >
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-violet-100 text-base font-medium opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats