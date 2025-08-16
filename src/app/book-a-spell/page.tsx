import { BookingForm } from './booking-form';
import Image from 'next/image';

export default function BookSpellPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Book Your Spell</h1>
            <p className="mt-4 text-lg text-foreground/80">
              Take the first step towards restoring your love and happiness. Fill out the form with your details, and I will contact you within 12 hours to begin the process. All information is 100% confidential.
            </p>
            <div className="relative h-64 w-full rounded-lg shadow-lg overflow-hidden mt-8">
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Spell casting items"
                layout="fill"
                objectFit="cover"
                data-ai-hint="spell candles"
              />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-2xl border border-primary/10">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
