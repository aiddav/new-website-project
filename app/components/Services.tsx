import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, Cpu, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed to meet your specific business needs.',
      icon: Brain,
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      icon: Cpu,
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Expert guidance on leveraging AI to drive innovation and growth in your industry.',
      icon: Lightbulb,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

