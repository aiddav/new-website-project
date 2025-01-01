import { Database, Bot, LineChart } from 'lucide-react'

export default function WhatWeDo() {
  const services = [
    {
      title: 'Data Processing',
      description: 'Capture, process, store and transform your unstructured and structured data',
      icon: Database,
    },
    {
      title: 'AI Development',
      description: 'Deploy custom AI agents utilising cutting-edge models to automate workflows.',
      icon: Bot,
    },
    {
      title: 'Agent Monitoring',
      description: 'Monitor and evaluate agent performance on an ongoing basis for optimisation.',
      icon: LineChart,
    },
  ]

  return (
    <section id="what-we-do" className="pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What We Do</h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
          We build, train and optimise AI Agents that seamlessly integrate with your internal systems and data.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}