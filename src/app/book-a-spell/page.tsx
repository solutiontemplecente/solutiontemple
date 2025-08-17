
'use client';
import { BookingForm } from './booking-form';
import Image from 'next/image';
import { useLanguage } from '@/components/common/language-provider';

export default function BookSpellPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('book_spell_title')}</h1>
            <p className="mt-4 text-lg text-foreground/80">
              {t('book_spell_subtitle')}
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
