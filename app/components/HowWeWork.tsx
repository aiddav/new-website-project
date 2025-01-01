import { Search, Rocket, RefreshCw } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      title: 'Scoping',
      description: 'We explore your idea and understand your business goals before producing a detailed plan.',
      icon: Search,
    },
    {
      title: 'Development',
      description: 'In 4 weeks, our team develops and implements the MVP of the AI agent plan.',
      icon: Rocket,
    },
    {
      title: 'Optimisation',
      description: 'Once in production, we refine and optimize your AI agent for another 4 weeks',
      icon: RefreshCw,
    },
  ]

  return (
    <section id="how-we-work" className="pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How We Work</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
        Working in lockstep with you and your team, we rapidly put use cases into production in 4 weeks.
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