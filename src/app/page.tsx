import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Spiritual background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="spiritual candles stars"
        />
        <div className="absolute inset-0 z-10 bg-primary/70" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Restore Your Love Today 🌹
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            A sanctuary where love, energy, and intention align to bring harmony back into your life.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10">
            <Link href="/book-a-spell">Book Your Spell Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Welcome to Solutiontemple
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            I’m a licensed spiritual consultant with over 12 years of experience helping souls reunite with their true partners through ancient, ethical, and natural spell casting.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 text-3xl font-bold text-primary">1200+</h3>
                <p className="mt-2 text-lg text-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 text-3xl font-bold text-primary">20+</h3>
                <p className="mt-2 text-lg text-foreground">Countries Served</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 text-3xl font-bold text-primary">24/7</h3>
                <p className="mt-2 text-lg text-foreground">Support via WhatsApp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
