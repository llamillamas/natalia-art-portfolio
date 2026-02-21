export default function Hero() {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          NATALIA B. LLAMAS
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          GRAPHIC DESIGNER & DIGITAL ILLUSTRATOR
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#gallery"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
          >
            View Work
          </a>
          <a
            href="/natalia-art-portfolio/contact"
            className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
