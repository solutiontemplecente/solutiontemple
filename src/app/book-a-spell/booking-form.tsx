'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  whatsappNumber: z.string().min(10, {
    message: 'Please enter a valid WhatsApp number.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  spellType: z.string({
    required_error: 'Please select a spell type.',
  }),
  targetName: z.string().min(2, {
    message: "Target person's name must be at least 2 characters.",
  }),
  photo: z.any().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not be longer than 500 characters.'
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
});

export function BookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      whatsappNumber: '',
      email: '',
      targetName: '',
      message: '',
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(values);
    
    toast({
      title: 'Booking Received!',
      description: "You'll be contacted within 12 hours via WhatsApp.",
      variant: 'default',
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsappNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g., +1 123 456 7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spellType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Spell</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a spell" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="reunite-lovers">Reunite Lovers Spell</SelectItem>
                  <SelectItem value="attract-new-love">Attract New Love Spell</SelectItem>
                  <SelectItem value="strengthen-relationship">Strengthen Relationship Spell</SelectItem>
                  <SelectItem value="stop-breakup">Stop Break-Up / Divorce Spell</SelectItem>
                  <SelectItem value="custom-spell">Custom Spell Work</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="targetName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Person’s First Name</FormLabel>
              <FormControl>
                <Input placeholder="Their first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Photo (Optional)</FormLabel>
              <FormControl>
                <Input type="file" {...form.register('photo')} />
              </FormControl>
               <FormDescription>
                You can upload a photo of yourself or the target person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Situation</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me a little about your situation..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Accept terms and conditions
                </FormLabel>
                <FormDescription>
                  You agree to our{' '}
                  <a href="/privacy-policy" className="underline hover:text-accent">Privacy Policy</a> and <a href="/refund-policy" className="underline hover:text-accent">Refund Policy</a>.
                </FormDescription>
                 <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Proceed to Payment'}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Payment options: PayPal, Crypto, Bank Transfer. Details provided after submission.
        </p>
      </form>
    </Form>
  );
}
