import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Globe, MessageCircle, Heart, Shield, Lock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Choose Solutiontemple?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
              My practice is built on a foundation of trust, ancient wisdom, and a genuine desire to help you.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">Ethical Practices</h3>
              <p className="mt-2 text-foreground/80">All rituals respect free will and are performed with pure intentions for healing and love.</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Lock className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">100% Confidential</h3>
              <p className="mt-2 text-foreground/80">Your privacy is my priority. All consultations and spell work are kept strictly confidential.</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">Guaranteed Safety</h3>
              <p className="mt-2 text-foreground/80">I never use black magic. My work is focused on positive energy to ensure no harm comes to anyone.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">A Word From a Happy Soul</h2>
          </div>
          <Card className="mt-12 max-w-3xl mx-auto bg-card shadow-xl p-8 border border-primary/20">
             <div className="flex items-center">
                <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" alt="Esther" data-ai-hint="person portrait" />
                    <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                    <p className="font-bold text-primary">Esther, UK</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-6 text-lg text-foreground/80 italic">
                "She helped me bring back my fiancé in just 4 days. I’m in tears of joy! Thank you, Lady Amina."
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
           <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-4 mx-auto text-lg text-foreground/80">
              Have questions? Here are some of the most common ones I receive.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-primary">Is spell casting safe?</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                Absolutely. My practice is rooted in ethical and positive energy work. I do not engage in any form of black magic or rituals intended to cause harm. The focus is always on healing, alignment, and respect for free will.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-primary">How long does it take to see results?</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                The manifestation time for a spell can vary depending on the complexity of the situation and the energies involved. Some clients see results within a few days, while for others it may take a few weeks. Patience and a positive mindset are key.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-primary">Is my information kept private?</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                Yes, 100%. All communications, including your personal details, situation, and any photos you share, are held in the strictest confidence. Your privacy and trust are paramount to my work.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
