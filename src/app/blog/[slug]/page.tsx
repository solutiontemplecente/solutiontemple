import { notFound } from 'next/navigation';
import Image from 'next/image';

const blogPosts = {
  "5-signs-you-need-a-love-spell": {
    title: "5 Signs You Need a Love Spell",
    image: "https://placehold.co/1200x600.png",
    aiHint: "love potion bottle",
    content: `
      <p>In the intricate dance of love and relationships, sometimes we find ourselves at a crossroads, feeling helpless as a cherished connection fades. While communication and effort are key, there are times when energetic influences are at play. Here are five signs that might indicate a love spell could help restore balance and harmony.</p>
      <h3 class="font-headline text-xl text-primary mt-6 mb-2">1. Unexplained Distance</h3>
      <p>If your partner has suddenly become distant without any logical reason, creating an emotional or physical chasm, it could be a sign of external energetic interference or a block in their own heart chakra. A love spell can help clear these negative energies and reopen the pathways to connection.</p>
      <h3 class="font-headline text-xl text-primary mt-6 mb-2">2. Constant Arguments Over Trivial Matters</h3>
      <p>Couples argue, but when every small disagreement escalates into a major fight, it often points to a build-up of negative energy. A spell to strengthen a relationship can soothe this tension and promote understanding and patience.</p>
      <h3 class="font-headline text-xl text-primary mt-6 mb-2">3. Interference from a Third Party</h3>
      <p>Whether it's an ex-partner, a meddling family member, or a rival, third-party interference can poison a relationship. A binding or protection spell can create an energetic shield around your relationship, neutralizing negative influences from outside sources.</p>
      <h3 class="font-headline text-xl text-primary mt-6 mb-2">4. A Breakup That Feels 'Wrong'</h3>
      <p>Sometimes, a separation happens that defies all logic. You both still have deep feelings, yet you can't seem to find your way back to each other. A reunion spell can help dissolve the pride, fear, or confusion that is keeping you apart, reminding both of you of the true love you share.</p>
      <h3 class="font-headline text-xl text-primary mt-6 mb-2">5. Feeling Hopeless About Finding Love</h3>
      <p>If you've been searching for a soulmate to no avail, feeling perpetually unlucky in love, you may have energetic blocks preventing you from attracting the right partner. An attraction spell can cleanse your aura and align your energy to draw in a compatible, loving partner.</p>
    `
  },
  "how-full-moon-affects-spell-energy": {
    title: "How the Full Moon Affects Spell Energy",
    image: "https://placehold.co/1200x600.png",
    aiHint: "full moon sky",
    content: `
      <p>The full moon is a peak of lunar energy, a time when intuition, emotions, and spiritual power are at their highest. For centuries, spiritual practitioners have harnessed this potent energy to amplify their rituals. For love spells, the full moon is particularly significant.</p>
      <p class="mt-4">It represents culmination, manifestation, and illumination. Casting a spell during this phase is like planting a seed in the most fertile soil under the most nurturing light. It brings clarity to intentions, reveals hidden truths in a relationship, and provides the powerful energetic 'push' needed to bring your desires into reality. Spells for reunion, commitment, and attracting a new partner are especially powerful under its glow.</p>
    `
  },
  "why-african-love-spells-are-so-powerful": {
    title: "Why African Love Spells Are So Powerful",
    image: "https://placehold.co/1200x600.png",
    aiHint: "african spiritual symbols",
    content: `
      <p>African traditional spirituality is one of the oldest and most profound systems in the world, deeply rooted in the understanding of nature, ancestral wisdom, and the flow of life force (known by many names, such as 'Ashe'). What makes these love spells so potent is their holistic approach.</p>
      <p class="mt-4">They don't just focus on the target but on the entire energetic ecosystem of the relationship. They work by:</p>
      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><strong>Connecting with Nature:</strong> Using specific herbs, roots, and natural elements that hold powerful vibrations for love and harmony.</li>
        <li><strong>Honoring Ancestors:</strong> Calling upon the wisdom and support of ancestral spirits who guide and protect the relationship.</li>
        <li><strong>Focusing on Alignment:</strong> Rather than forcing a will, these spells work to align the energies of two people, clearing blockages and fostering a natural, powerful attraction and bond.</li>
      </ul>
      <p class="mt-4">This deep, earth-connected approach results in changes that are not only effective but also lasting and spiritually sound.</p>
    `
  },
  "truth-about-black-magic": {
    title: "Truth About Black Magic: What I Will Never Do",
    image: "https://placehold.co/1200x600.png",
    aiHint: "light dark contrast",
    content: `
      <p>The term 'black magic' often evokes fear and misunderstanding. In its truest sense, it refers to rituals performed with the intent to harm, control, or manipulate another person against their free will. This is a path I will never walk, and it is crucial for anyone seeking spiritual help to understand the difference.</p>
      <p class="mt-4">My practice is founded on light, love, and ethical principles. The work I do is a form of spiritual healing. It aims to:</p>
      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><strong>Heal</strong> emotional wounds and clear negative energy.</li>
        <li><strong>Enhance</strong> existing love and attraction, not fabricate it.</li>
        <li><strong>Protect</strong> a relationship from external negativity.</li>
        <li><strong>Align</strong> energies to open paths for love to flourish naturally.</li>
      </ul>
      <p class="mt-4">True spiritual power does not need to resort to coercion. It works in harmony with the universe's flow, encouraging positive outcomes without infringing on the sacred free will of any individual. Any practitioner who promises to force someone to love you is treading a dangerous path that can lead to karmic consequences for all involved. My commitment is to positive, healing work only.</p>
    `
  }
};

type BlogPost = {
  title: string;
  image: string;
  aiHint: string;
  content: string;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (blogPosts as Record<string, BlogPost>)[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center">{post.title}</h1>
          <div className="relative h-64 md:h-80 w-full rounded-lg shadow-lg overflow-hidden my-8">
            <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.aiHint} />
          </div>
          <div
            className="prose prose-lg lg:prose-xl max-w-none text-foreground/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
