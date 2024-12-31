import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
         Multimodal 
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#what-we-do" className="text-muted-foreground hover:text-primary transition-colors">What We Do</Link>
          <Link href="#how-we-work" className="text-muted-foreground hover:text-primary transition-colors">How We Work</Link>
          <Link href="#who-we-are" className="text-muted-foreground hover:text-primary transition-colors">Who We Are</Link>
          <Link href="#join" className="text-muted-foreground hover:text-primary transition-colors">Join Multimodal</Link>
          <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Find AI Talent
          </Link>
        </nav>
      </div>
    </header>
  )
}