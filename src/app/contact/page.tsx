
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/common/language-provider';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('contact_title')}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto text-accent"/>
              <CardTitle className="font-headline text-2xl text-primary mt-4">{t('contact_whatsapp_title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80 mb-4">{t('contact_whatsapp_desc')}</p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <a href="https://wa.me/2348139375655" target="_blank" rel="noopener noreferrer">{t('contact_whatsapp_button')}</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto text-accent"/>
              <CardTitle className="font-headline text-2xl text-primary mt-4">{t('contact_email_title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80 mb-4">{t('contact_email_desc')}</p>
              <Button asChild className="w-full" variant="outline">
                <a href="mailto:hello@solutiontemple.com">hello@solutiontemple.com</a>
              </Button>
            </CardContent>
          </Card>
        </div>

         <div className="mt-16 text-center">
           <p className="text-xl text-primary mb-4">{t('contact_cta_text')}</p>
           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-10">
            <Link href="/book-a-spell">{t('Book Your Spell Now')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
