
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ShieldCheck, Lock } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/common/language-provider';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('about_title')}</h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              {t('about_desc')}
            </p>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image 
                src="https://chiefbalala.com/wp-content/uploads/2024/07/Default_images_of_a_black_magic_spells_temple_2-1024x575.jpg"
                alt="Spiritualist portrait"
                layout="fill"
                objectFit="cover"
                data-ai-hint="spiritual healer portrait"
             />
          </div>
        </div>

        <section className="mt-24">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">{t('about_cert_title')}</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <Award className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">{t('about_cert_1_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{t('about_cert_1_desc')}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <ShieldCheck className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">{t('about_cert_2_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{t('about_cert_2_desc')}</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <Lock className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">{t('about_cert_3_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{t('about_cert_3_desc')}</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="mt-24 text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{t('about_values_title')}</h2>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground/80">
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">{t('about_value_1_title')}</h3>
                     <p className="mt-2">{t('about_value_1_desc')}</p>
                 </div>
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">{t('about_value_2_title')}</h3>
                     <p className="mt-2">{t('about_value_2_desc')}</p>
                 </div>
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">{t('about_value_3_title')}</h3>
                     <p className="mt-2">{t('about_value_3_desc')}</p>
                 </div>
             </div>
        </section>
      </div>
    </div>
  );
}
