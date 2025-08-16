import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: "5-signs-you-need-a-love-spell",
    title: "5 Signs You Need a Love Spell",
    excerpt: "Are you feeling lost in your love life? Discover the signs that indicate a love spell might be the answer you're looking for.",
    image: "https://placehold.co/600x400.png",
    aiHint: "love potion bottle"
  },
  {
    slug: "how-full-moon-affects-spell-energy",
    title: "How the Full Moon Affects Spell Energy",
    excerpt: "The full moon is a time of immense power. Learn how to harness its energy to amplify the effects of your love spells.",
    image: "https://placehold.co/600x400.png",
    aiHint: "full moon sky"
  },
  {
    slug: "why-african-love-spells-are-so-powerful",
    title: "Why African Love Spells Are So Powerful",
    excerpt: "Delve into the ancient traditions and potent energies that make African love spells uniquely effective and deeply spiritual.",
    image: "https://placehold.co/600x400.png",
    aiHint: "african spiritual symbols"
  },
  {
    slug: "truth-about-black-magic",
    title: "Truth About Black Magic: What I Will Never Do",
    excerpt: "Understand the critical difference between ethical spellcasting and harmful black magic, and why I strictly adhere to positive practices.",
    image: "https://placehold.co/600x400.png",
    aiHint: "light dark contrast"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">From My Sacred Journal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Insights, wisdom, and guidance on the path of love and spirituality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-60 w-full">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary hover:text-accent transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{post.excerpt}</p>
                  <Button variant="link" className="p-0 mt-4 text-accent">Read More &rarr;</Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
