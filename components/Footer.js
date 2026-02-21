export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-secondary font-bold mb-4">Natalia B. Llamas</h4>
            <p className="text-gray-400 text-sm">
              Artist and creative professional showcasing original artworks.
            </p>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-secondary transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-secondary transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-secondary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Natalia B. Llamas. All rights reserved.
          </p>
          <p className="mt-2">
            Portfolio built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              Next.js
            </a>
            {' '}and{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
