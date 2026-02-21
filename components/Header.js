import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-primary border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <img
              src="/natalia-art-portfolio/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-secondary hidden sm:block">Natalia B. Llamas</h1>
        </div>
        <nav className="text-sm text-gray-400 hidden md:block">
          <a href="#gallery" className="hover:text-secondary transition">Gallery</a>
        </nav>
      </div>
    </header>
  )
}
