import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
    <section id="how-we-work" className="pt-8 pb-10 md:pt-12 md:pb-14 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

