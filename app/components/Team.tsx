import Image from 'next/image'

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
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}