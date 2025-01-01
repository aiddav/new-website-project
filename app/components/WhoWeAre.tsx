import { Code, Database, Palette, LineChart } from 'lucide-react'

export default function WhoWeAre() {
  const teams = [
    {
      name: 'AI Engineers',
      description: 'Expert developers specializing in machine learning and AI model implementation.',
      icon: Code,
    },
    {
      name: 'Data Scientists',
      description: 'Skilled professionals in data analysis, processing, and model training.',
      icon: Database,
    },
    {
      name: 'UX/UI Designers',
      description: 'Creative minds focused on making AI interfaces intuitive and user-friendly.',
      icon: Palette,
    },
    {
      name: 'Evaluation Analysts',
      description: 'Specialists in optimizing AI agent performance by providing ground truth data.',
      icon: LineChart,
    },
  ]

  return (
    <section id="who-we-are" className="pt-8 pb-10 md:pt-12 md:pb-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Are</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <div key={team.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                <team.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
              <p className="text-gray-600 text-sm">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}