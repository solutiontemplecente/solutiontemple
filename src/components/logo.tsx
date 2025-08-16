import Link from 'next/link';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  isFooter?: boolean;
}

export default function Logo({ isFooter = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className={cn("rounded-md p-2 transition-colors", isFooter ? "bg-primary-foreground/10 group-hover:bg-accent" : "bg-primary/10 group-hover:bg-accent")}>
        <Globe className={cn("h-6 w-6 transition-colors", isFooter ? "text-white group-hover:text-accent-foreground" : "text-primary group-hover:text-accent-foreground")} />
      </div>
      <span className={cn("font-headline text-2xl font-bold tracking-tight", isFooter ? "text-white" : "text-primary")}>
        Solutiontemple
      </span>
    </Link>
  );
}
