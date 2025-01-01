import { Search, Rocket, RefreshCw } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      title: 'Discovery',
      description: 'We work closely with you to understand your business needs and identify opportunities for AI integration.',
      icon: Search,
    },
    {
      title: 'Delivery',
      description: 'Our expert team develops and implements custom AI solutions tailored to your specific requirements.',
      icon: Rocket,
    },
    {
      title: 'Optimisation',
      description: 'We continuously refine and optimize your AI agents to ensure they deliver maximum value over time.',
      icon: RefreshCw,
    },
  ]

  return (
    <section id="how-we-work" className="pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How We Work</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
        Working in lockstep with you and your team, we rapidly put use cases into production in 4 - 5 weeks.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}