
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './language-switcher';
import { useLanguage } from './language-provider';

const navLinks = [
  { href: '/', labelKey: 'nav_home' },
  { href: '/about', labelKey: 'nav_about' },
  { href: '/services', labelKey: 'nav_services' },
  { href: '/testimonials', labelKey: 'nav_testimonials' },
  { href: '/blog', labelKey: 'nav_blog' },
  { href: '/contact', labelKey: 'nav_contact' },
];

function ThemeToggleButton() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const NavLink = ({ href, labelKey, className = '' }: { href: string; labelKey: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'transition-colors hover:text-accent',
          isActive ? 'text-accent font-semibold' : 'text-primary/80',
          className
        )}
      >
        {t(labelKey as any)}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center space-x-6 text-lg md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
           <ThemeToggleButton />
           <LanguageSwitcher />
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-a-spell">{t('nav_book_spell')}</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <LanguageSwitcher />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6 text-xl">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                  <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/book-a-spell" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_book_spell')}</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
