import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Natalia B. Llamas',
  description: 'Get in touch with Natalia B. Llamas for illustration commissions, collaborations, or freelance work.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together.
        </p>
      </div>
      
      <ContactSection />
    </div>
  );
}
