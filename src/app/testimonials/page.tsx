import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Esther",
    location: "UK",
    avatar: "https://placehold.co/100x100.png",
    initials: "E",
    rating: 5,
    date: "4 days ago",
    text: "She helped me bring back my fiancé in just 4 days. I’m in tears of joy! Thank you, Lady Amina."
  },
  {
    name: "Joy",
    location: "Nigeria",
    avatar: "https://placehold.co/100x100.png",
    initials: "J",
    rating: 5,
    date: "1 week ago",
    text: "My boyfriend started texting me again after 2 weeks of silence. The spell worked — it’s like a miracle."
  },
  {
    name: "Mike",
    location: "Canada",
    avatar: "https://placehold.co/100x100.png",
    initials: "M",
    rating: 4,
    date: "2 weeks ago",
    text: "I used to doubt spells, but her rituals are done with love and ethics. She is truly gifted."
  },
  {
    name: "Sarah",
    location: "USA",
    avatar: "https://placehold.co/100x100.png",
    initials: "S",
    rating: 5,
    date: "3 weeks ago",
    text: "The 'Strengthen Relationship' spell worked wonders. The peace and love in my home have been restored completely."
  },
  {
    name: "Ahmed",
    location: "UAE",
    avatar: "https://placehold.co/100x100.png",
    initials: "A",
    rating: 5,
    date: "1 month ago",
    text: "I was skeptical, but desperate. Best decision I ever made. My wife and I are back together and happier than ever."
  },
  {
    name: "Maria",
    location: "Australia",
    avatar: "https://placehold.co/100x100.png",
    initials: "M",
    rating: 5,
    date: "1 month ago",
    text: "The custom spell was incredibly powerful and tailored to my exact needs. Thank you for your guidance and support."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Words from Happy Souls</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Discover how I've helped others find love and happiness. My average rating is 4.8/5.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-foreground/80 italic">"{testimonial.text}"</p>
              </CardContent>
              <div className="bg-secondary/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
