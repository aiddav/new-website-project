import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Multimodal</h3>
            <p className="text-sm">Building the future of AI, one business at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm hover:underline">Services</Link></li>
              <li><Link href="#team" className="text-sm hover:underline">Team</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">multimodalpartners@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} Multimodel Partners. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

