import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Team() {
  const team = [
    {
      name: 'Dr. Jane Smith',
      role: 'Chief AI Scientist',
      bio: 'Ph.D. in Machine Learning with 10+ years of experience in developing cutting-edge AI solutions.',
      image: '/placeholder.svg',
    },
    {
      name: 'John Doe',
      role: 'Lead AI Engineer',
      bio: 'Expert in implementing large-scale AI systems with a focus on natural language processing.',
      image: '/placeholder.svg',
    },
    {
      name: 'Emily Chen',
      role: 'AI UX Designer',
      bio: 'Specializes in creating intuitive and user-friendly interfaces for AI-powered applications.',
      image: '/placeholder.svg',
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center text-primary">{member.role}</CardDescription>
                <p className="text-center text-muted-foreground mt-2">{member.bio}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

