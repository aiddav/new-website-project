import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build AI Agents On Demand
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
         Hire world-class AI talent for your most pressing projects
        </p>
        <Link href="/findAI">
          <Button size="lg">Find AI Talent</Button>
        </Link>
      </div>
    </section>
  )
}

