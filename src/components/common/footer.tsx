import Link from 'next/link';
import Logo from '@/components/logo';
import { Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo isFooter={true} />
            <p className="mt-4 text-sm text-primary-foreground/70">
              A sanctuary where love, energy, and intention align.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Me</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/book-a-spell" className="hover:text-accent transition-colors">Book a Spell</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:hello@solutiontemple.com" className="hover:text-accent transition-colors">hello@solutiontemple.com</a>
              </li>
            </ul>
            <div className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <p>DMCA Protected</p>
              <p>Google Safe Browsing Verified</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Solutiontemple. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
