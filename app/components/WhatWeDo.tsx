import { Database, Bot, LineChart } from 'lucide-react'

export default function WhatWeDo() {
  const services = [
    {
      title: 'Data Processing',
      description: 'Capture, process, store and transform unstructured and structured data',
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button style={{ backgroundColor: 'black' }}>Explore</button>
      </div>
    </section>
  )
}