
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoProps {
  isFooter?: boolean;
}

export default function Logo({ isFooter = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
       <div className={cn("relative h-10 w-10 overflow-hidden rounded-md")}>
         <Image 
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/350701446/original/bc2544426bc7bdb4e722696b4c2e52912c8391cd/cast-love-spell-binding-love-spell-come-back-to-me-in-24-hours.jpg"
          alt="Solutiontemple Logo"
          layout="fill"
          objectFit="cover"
        />
       </div>
      <span className={cn("font-headline text-2xl font-bold tracking-tight", isFooter ? "text-white" : "text-primary")}>
        Solutiontemple
      </span>
    </Link>
  );
}
