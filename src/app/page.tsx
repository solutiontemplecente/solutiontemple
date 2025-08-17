
'use client';

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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/components/common/language-provider';

const testimonials = [
  {
    name: "Esther",
    location: "UK",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuH7ry-DkF3M02C1Kde_vBN2sX_bl7W2PGA&s",
    initials: "E",
    rating: 5,
    textKey: "testimonial1"
  },
  {
    name: "Joy",
    location: "Nigeria",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuH7ry-DkF3M02C1Kde_vBN2sX_bl7W2PGA&s",
    initials: "J",
    rating: 5,
    textKey: "testimonial2"
  },
  {
    name: "Mike",
    location: "Canada",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuH7ry-DkF3M02C1Kde_vBN2sX_bl7W2PGA&s",
    initials: "M",
    rating: 4,
    textKey: "testimonial3"
  },
  {
    name: "Sarah",
    location: "USA",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuH7ry-DkF3M02C1Kde_vBN2sX_bl7W2PGA&s",
    initials: "S",
    rating: 5,
    textKey: "testimonial4"
  },
];


export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full text-white">
        <Image
          src="https://img.etimg.com/thumb/msid-116685050,width-650,height-488,imgsize-42538,resizemode-75/bloodworm-love-spell-ritual-sparks-debate-in-singapore.jpg"
          alt="Spiritual background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="spiritual candles stars"
        />
        <div className="absolute inset-0 z-10 bg-primary/70" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            {t("Restore Your Love Today 🌹")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            {t("A sanctuary where love, energy, and intention align to bring harmony back into your life.")}
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10">
            <Link href="/book-a-spell">{t("Book Your Spell Now")}</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            {t("Welcome to Solutiontemple")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            {t("I’m a licensed spiritual consultant with over 12 years of experience helping souls reunite with their true partners through ancient, ethical, and natural spell casting.")}
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
                <p className="mt-2 text-lg text-foreground">{t('Happy Clients')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 text-3xl font-bold text-primary">20+</h3>
                <p className="mt-2 text-lg text-foreground">{t('Countries Served')}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-primary/20">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 text-3xl font-bold text-primary">24/7</h3>
                <p className="mt-2 text-lg text-foreground">{t('Support via WhatsApp')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{t("Explore Our Most Sought-After Spells")}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
              {t("Each ritual is performed with utmost care, tailored to your unique situation to bring about profound and lasting change.")}
            </p>
          </div>

          <div className="mt-16 space-y-20">
            {/* Service 1: Reunite Lovers Spell */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 w-full rounded-lg shadow-xl overflow-hidden">
                <Image 
                  src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/160281278/original/0b5e5011a795ed18f8185caee189ca66666d2f2a/cast-a-spell-to-retrieve-and-reunite-your-lover.jpeg" 
                  alt={t("Reunite Lovers Spell")} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="reuniting couple"
                />
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary">{t("Reunite Lovers Spell")}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {t("Has distance, misunderstanding, or a painful breakup separated you from the one you love? This powerful spell works to dissolve the negative energies and emotional blockages that stand in your way, reopening the path for reconciliation and rekindling the flame of love.")}
                </p>
                <p className="mt-4 font-semibold text-accent">{t("Delivery: Within 3 days")}</p>
                <Button asChild className="mt-6" variant="outline">
                  <Link href="/book-a-spell">{t("Request This Spell")}</Link>
                </Button>
              </div>
            </div>

            {/* Service 2: Attract New Love Spell */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 w-full rounded-lg shadow-xl overflow-hidden md:order-2">
                <Image 
                  src="https://artoftheroot.com/cdn/shop/articles/The_Power_of_Knot_Magic_in_Love_Spells.webp?v=1733408693" 
                  alt="A single red rose on a book" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="love attraction"
                />
              </div>
              <div className="md:order-1">
                <h3 className="font-headline text-3xl text-primary">{t("Attract New Love Spell")}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {t("If you are ready to welcome a true soulmate into your life, this spell is for you. It cleanses your aura, enhances your natural magnetism, and aligns your spiritual energy to attract a compatible, loving, and committed partner who is searching for someone just like you.")}
                </p>
                <p className="mt-4 font-semibold text-accent">{t("Delivery: Within 5 days")}</p>
                 <Button asChild className="mt-6" variant="outline">
                  <Link href="/book-a-spell">{t("Request This Spell")}</Link>
                </Button>
              </div>
            </div>
            
            {/* Service 3: Strengthen Relationship Spell */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 w-full rounded-lg shadow-xl overflow-hidden">
                <Image 
                  src="https://cdn.shopify.com/s/files/1/2462/1459/files/Gay_Love_Spell_5_480x480.jpg?v=1729861436" 
                  alt="A rope tied into a strong knot" 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint="strong bond"
                />
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary">{t("Strengthen Relationship Spell")}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {t("Is your current relationship facing turmoil from third-party interference, constant arguments, or fading passion? This binding spell creates a powerful shield of protection around your union, neutralizing external threats and restoring peace, trust, and deep intimacy between you and your partner.")}
                </p>
                <p className="mt-4 font-semibold text-accent">{t("Delivery: Within 48 hours")}</p>
                 <Button asChild className="mt-6" variant="outline">
                  <Link href="/book-a-spell">{t("Request This Spell")}</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">{t("View All Services")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{t('Why Choose Solutiontemple?')}</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
              {t('My practice is built on a foundation of trust, ancient wisdom, and a genuine desire to help you.')}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">{t('Ethical Practices')}</h3>
              <p className="mt-2 text-foreground/80">{t('All rituals respect free will and are performed with pure intentions for healing and love.')}</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Lock className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">{t('100% Confidential')}</h3>
              <p className="mt-2 text-foreground/80">{t('Your privacy is my priority. All consultations and spell work are kept strictly confidential.')}</p>
            </Card>
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 mx-auto text-accent" />
              <h3 className="font-headline text-2xl font-semibold mt-4 text-primary">{t('Guaranteed Safety')}</h3>
              <p className="mt-2 text-foreground/80">{t('I never use black magic. My work is focused on positive energy to ensure no harm comes to anyone.')}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{t('Words from Happy Souls')}</h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-card shadow-xl p-8 border border-primary/20">
                     <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                            <p className="font-bold text-primary">{testimonial.name}, {testimonial.location}</p>
                            <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                ))}
                                {[...Array(5 - testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-gray-300" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-lg text-foreground/80 italic">
                        "{t(testimonial.textKey as any)}"
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
           <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{t('Frequently Asked Questions')}</h2>
            <p className="mt-4 mx-auto text-lg text-foreground/80">
              {t('Have questions? Here are some of the most common ones I receive.')}
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12 bg-background p-8 rounded-lg shadow-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq1_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq1_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq2_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq2_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq3_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
               {t('faq3_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq4_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq4_a')}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq5_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq5_a')}
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq6_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq6_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq7_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
               {t('faq7_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq8_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
                {t('faq8_a')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">{t('faq9_q')}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 text-left">
               {t('faq9_a')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

    

    