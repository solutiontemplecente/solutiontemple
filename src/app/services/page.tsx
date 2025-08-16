import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    name: "Reunite Lovers Spell",
    description: "Bring back an ex-lover or reconnect emotionally.",
    delivery: "Within 3 days"
  },
  {
    name: "Attract New Love Spell",
    description: "Manifest a soulmate or serious partner.",
    delivery: "Within 5 days"
  },
  {
    name: "Strengthen Relationship Spell",
    description: "Eliminate third parties, restore peace.",
    delivery: "Within 48 hours"
  },
  {
    name: "Stop Break-Up / Divorce Spell",
    description: "Protect your marriage from falling apart.",
    delivery: "Within 2–4 days"
  },
  {
    name: "Custom Spell Work",
    description: "Tailored to your unique love situation.",
    delivery: "Time varies"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Spell Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Powerful, ethical spells designed to help you with your love life challenges.
          </p>
        </div>

        <Card className="mt-12 shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-headline text-primary text-lg">Service</TableHead>
                <TableHead className="font-headline text-primary text-lg">Description</TableHead>
                <TableHead className="font-headline text-primary text-lg text-right">Delivery</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.name}>
                  <TableCell className="font-medium text-primary">{service.name}</TableCell>
                  <TableCell className="text-foreground/80">{service.description}</TableCell>
                  <TableCell className="text-right text-accent font-semibold">{service.delivery}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <section className="mt-16 md:mt-24">
          <Card className="bg-secondary/50 border-primary/20 p-8">
            <h2 className="font-headline text-2xl md:text-3xl text-center font-bold text-primary">What Each Spell Includes</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-lg">
              <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-accent" />
                <h3 className="mt-4 font-semibold text-primary">Personalized Consultation</h3>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-accent" />
                <h3 className="mt-4 font-semibold text-primary">Custom Ritual</h3>
                <p className="text-sm text-muted-foreground">(with your name & photo)</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-accent" />
                <h3 className="mt-4 font-semibold text-primary">Post-Spell Follow-Up</h3>
              </div>
            </div>
          </Card>
        </section>
        
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
