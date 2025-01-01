import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build AI Agents On Demand
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
         Turn your AI vision into reality in a matter of weeks. Get a world-class team to build your AI agents now. 
        </p>
        <Link 
          href="/findAI"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Build AI Agents
        </Link>
      </div>
    </section>
  )
}