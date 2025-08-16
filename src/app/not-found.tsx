import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center p-4">
      <AlertTriangle className="h-24 w-24 text-accent" />
      <h1 className="mt-8 font-headline text-5xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="mt-4 max-w-md text-lg text-foreground/80">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
