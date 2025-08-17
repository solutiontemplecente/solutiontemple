
'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/components/common/language-provider';
import React from 'react';

const blogPosts = {
  "5-signs-you-need-a-love-spell": {
    titleKey: "blog_title_1",
    image: "https://i.etsystatic.com/25258768/r/il/f9a708/2829438331/il_570xN.2829438331_ojek.jpg",
    aiHint: "love potion bottle",
    contentKey: "blog_content_1",
  },
  "how-full-moon-affects-spell-energy": {
    titleKey: "blog_title_2",
    image: "https://www.ritufy.com/wp-content/uploads/2024/09/full-moon-rituals.jpg",
    aiHint: "full moon sky",
    contentKey: "blog_content_2",
  },
  "why-african-love-spells-are-so-powerful": {
    titleKey: "blog_title_3",
    image: "https://i.etsystatic.com/46663678/r/il/6b0460/5736528821/il_600x600.5736528821_r2j2.jpg",
    aiHint: "african spiritual symbols",
    contentKey: "blog_content_3",
  },
  "truth-about-black-magic": {
    titleKey: "blog_title_4",
    image: "https://static.vecteezy.com/system/resources/previews/053/107/739/non_2x/blue-eye-icon-free-vector.jpg",
    aiHint: "eye icon",
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
  const resolvedParams = React.use(params);
  const post = (blogPosts as Record<string, BlogPostData>)[resolvedParams.slug];

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
