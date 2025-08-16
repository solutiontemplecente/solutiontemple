import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    name: "Reunite Lovers Spell",
    description: "Has distance, misunderstanding, or a painful breakup separated you from the one you love? This powerful spell works to dissolve the negative energies and emotional blockages that stand in your way, reopening the path for reconciliation and rekindling the flame of love.",
    delivery: "Within 3 days",
    image: "https://placehold.co/600x400.png",
    aiHint: "reuniting couple",
  },
  {
    name: "Attract New Love Spell",
    description: "If you are ready to welcome a true soulmate into your life, this spell is for you. It cleanses your aura, enhances your natural magnetism, and aligns your spiritual energy to attract a compatible, loving, and committed partner who is searching for someone just like you.",
    delivery: "Within 5 days",
    image: "https://placehold.co/600x400.png",
    aiHint: "love attraction",
  },
  {
    name: "Strengthen Relationship Spell",
    description: "Is your current relationship facing turmoil from third-party interference, constant arguments, or fading passion? This binding spell creates a powerful shield of protection around your union, neutralizing external threats and restoring peace, trust, and deep intimacy between you and your partner.",
    delivery: "Within 48 hours",
    image: "https://placehold.co/600x400.png",
    aiHint: "strong bond",
  },
  {
    name: "Stop Break-Up / Divorce Spell",
    description: "When your relationship is on the verge of collapse, this potent ritual works to halt the process of separation or divorce. It rebuilds the foundation of your union, reminding both partners of the love that once was and providing a chance to start anew.",
    delivery: "Within 2–4 days",
    image: "https://placehold.co/600x400.png",
    aiHint: "broken heart mending",
  },
  {
    name: "Custom Spell Work",
    description: "Every love story is unique, and sometimes a situation requires a completely tailored approach. I will perform a deep divination to understand the specifics of your case and craft a custom spell designed to address your exact needs and desires.",
    delivery: "Time varies",
    image: "https://placehold.co/600x400.png",
    aiHint: "spiritual alchemy",
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Spell Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Powerful, ethical spells designed to help you with your love life challenges. Each ritual is performed with utmost care, tailored to your unique situation.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service, index) => (
            <div key={service.name} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`relative h-80 w-full rounded-lg shadow-xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-headline text-3xl text-primary">{service.name}</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-4 font-semibold text-accent">Delivery: {service.delivery}</p>
                <Button asChild className="mt-6" variant="outline">
                  <Link href="/book-a-spell">Request This Spell</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
           <p className="text-xl text-primary mb-4">Ready to change your destiny?</p>
           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10">
            <Link href="/book-a-spell">Book Your Spell Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
