import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ShieldCheck, Lock } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About Me</h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Hello, I’m a spiritualist and 5th-generation African healer. I was born with the divine gift of energetic alignment and emotional healing. My journey began in the sacred lands of Benin, where my grandmother passed down secret ancestral rituals for love and harmony.
            </p>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg shadow-2xl overflow-hidden">
             <Image 
                src="https://placehold.co/600x400.png"
                alt="Spiritualist portrait"
                layout="fill"
                objectFit="cover"
                data-ai-hint="spiritual healer portrait"
             />
          </div>
        </div>

        <section className="mt-24">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-primary">My Certifications</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <Award className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">Energy Healing License</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Holistic Practitioner Board</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <ShieldCheck className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">Spiritual Wellness</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Global Occult Council (G.O.C.)</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <Lock className="h-12 w-12 mx-auto text-accent"/>
                        <CardTitle className="font-body font-semibold text-xl mt-4">Registered Member</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Spiritual Advisors Network (SAN)</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="mt-24 text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">My Core Values</h2>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground/80">
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">Ethical Spell Casting</h3>
                     <p className="mt-2">All rituals are performed with pure intentions and respect for free will.</p>
                 </div>
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">100% Confidentiality</h3>
                     <p className="mt-2">Your privacy is paramount. All consultations and work are kept strictly secret.</p>
                 </div>
                 <div className="p-6">
                     <h3 className="font-headline text-2xl text-primary">No Black Magic</h3>
                     <p className="mt-2">I do not engage in any form of magic that causes harm or manipulates against natural order.</p>
                 </div>
             </div>
        </section>
      </div>
    </div>
  );
}
