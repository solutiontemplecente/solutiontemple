
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/common/language-provider';

const blogPosts = [
  {
    slug: "5-signs-you-need-a-love-spell",
    titleKey: "blog_title_1",
    excerptKey: "blog_excerpt_1",
    image: "https://i.etsystatic.com/25258768/r/il/f9a708/2829438331/il_570xN.2829438331_ojek.jpg",
    aiHint: "love potion bottle"
  },
  {
    slug: "how-full-moon-affects-spell-energy",
    titleKey: "blog_title_2",
    excerptKey: "blog_excerpt_2",
    image: "https://www.ritufy.com/wp-content/uploads/2024/09/full-moon-rituals.jpg",
    aiHint: "full moon sky"
  },
  {
    slug: "why-african-love-spells-are-so-powerful",
    titleKey: "blog_title_3",
    excerptKey: "blog_excerpt_3",
    image: "https://i.etsystatic.com/46663678/r/il/6b0460/5736528821/il_600x600.5736528821_r2j2.jpg",
    aiHint: "african spiritual symbols"
  },
  {
    slug: "truth-about-black-magic",
    titleKey: "blog_title_4",
    excerptKey: "blog_excerpt_4",
    image: "https://placehold.co/600x400.png",
    aiHint: "light dark contrast"
  }
];

export default function BlogPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('blog_page_title')}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            {t('blog_page_subtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-60 w-full">
                  <Image src={post.image} alt={t(post.titleKey as any)} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary hover:text-accent transition-colors">{t(post.titleKey as any)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{t(post.excerptKey as any)}</p>
                  <Button variant="link" className="p-0 mt-4 text-accent">{t('blog_read_more')}</Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
