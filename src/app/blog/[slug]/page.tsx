
'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/components/common/language-provider';

const blogPosts = {
  "5-signs-you-need-a-love-spell": {
    titleKey: "blog_title_1",
    image: "https://placehold.co/1200x600.png",
    aiHint: "love potion bottle",
    contentKey: "blog_content_1",
  },
  "how-full-moon-affects-spell-energy": {
    titleKey: "blog_title_2",
    image: "https://placehold.co/1200x600.png",
    aiHint: "full moon sky",
    contentKey: "blog_content_2",
  },
  "why-african-love-spells-are-so-powerful": {
    titleKey: "blog_title_3",
    image: "https://placehold.co/1200x600.png",
    aiHint: "african spiritual symbols",
    contentKey: "blog_content_3",
  },
  "truth-about-black-magic": {
    titleKey: "blog_title_4",
    image: "https://placehold.co/1200x600.png",
    aiHint: "light dark contrast",
    contentKey: "blog_content_4",
  }
};

type BlogPostData = {
  titleKey: string;
  image: string;
  aiHint: string;
  contentKey: string;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const post = (blogPosts as Record<string, BlogPostData>)[params.slug];

  if (!post) {
    notFound();
  }

  const title = t(post.titleKey as any);
  const content = t(post.contentKey as any);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center">{title}</h1>
          <div className="relative h-64 md:h-80 w-full rounded-lg shadow-lg overflow-hidden my-8">
            <Image src={post.image} alt={title} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
          </div>
          <div
            className="prose prose-lg lg:prose-xl max-w-none text-foreground/80"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </div>
  );
}
