import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
         Multimodal 
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#what-we-do" className="text-muted-foreground hover:text-black transition-colors">What We Do</Link>
          <Link href="#how-we-work" className="text-muted-foreground hover:text-black transition-colors">How We Work</Link>
          <Link href="#who-we-are" className="text-muted-foreground hover:text-black transition-colors">Who We Are</Link>
          <Link href="/joinmultimodal" className="text-muted-foreground hover:text-black transition-colors">Join Multimodal</Link>
          <Link href="/findAI" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Build AI Agents
          </Link>
        </nav>
      </div>
    </header>
  )
}