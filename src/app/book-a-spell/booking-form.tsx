
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
import { useState } from 'react';
import { useLanguage } from '@/components/common/language-provider';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { CheckCircle } from 'lucide-react';
import { submitBooking } from './actions';
import { useToast } from '@/hooks/use-toast';

const createFormSchema = (t: (key: any) => string) => z.object({
  fullName: z.string().min(2, {
    message: t('form_error_name_min'),
  }),
  whatsappNumber: z.string().min(10, {
    message: t('form_error_whatsapp_invalid'),
  }),
  email: z.string().email({
    message: t('form_error_email_invalid'),
  }),
  spellType: z.string({
    required_error: t('form_error_spell_required'),
  }),
  targetName: z.string().min(2, {
    message: t('form_error_target_name_min'),
  }),
  photo: z.any().optional(),
  message: z.string().min(10, {
    message: t('form_error_message_min'),
  }).max(500, {
    message: t('form_error_message_max'),
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: t('form_error_terms_required'),
  }),
});


export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const formSchema = createFormSchema(t);

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
    
    // Omit the photo from the submission for now to prevent errors
    const { photo, ...submissionValues } = values;

    try {
      const result = await submitBooking(submissionValues);
      if (result.success) {
        setShowSuccessDialog(true);
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "There was a problem with your submission.",
        });
      }
    } catch (error) {
       toast({
          variant: "destructive",
          title: "Submission Error",
          description: "An unexpected error occurred. Please try again.",
        });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form_label_name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_placeholder_name')} {...field} />
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
                <FormLabel>{t('form_label_whatsapp')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_placeholder_whatsapp')} {...field} />
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
                <FormLabel>{t('form_label_email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_placeholder_email')} {...field} />
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
                <FormLabel>{t('form_label_spell_type')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form_placeholder_spell_type')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="reunite-lovers">{t('Reunite Lovers Spell')}</SelectItem>
                    <SelectItem value="attract-new-love">{t('Attract New Love Spell')}</SelectItem>
                    <SelectItem value="strengthen-relationship">{t('Strengthen Relationship Spell')}</SelectItem>
                    <SelectItem value="stop-breakup">{t('Stop Break-Up / Divorce Spell')}</SelectItem>
                    <SelectItem value="custom-spell">{t('Custom Spell Work')}</SelectItem>
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
                <FormLabel>{t('form_label_target_name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_placeholder_target_name')} {...field} />
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
                <FormLabel>{t('form_label_photo')}</FormLabel>
                <FormControl>
                  <Input type="file" {...form.register('photo')} />
                </FormControl>
                <FormDescription>
                  {t('form_desc_photo')}
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
                <FormLabel>{t('form_label_situation')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('form_placeholder_situation')}
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
                    {t('form_label_terms')}
                  </FormLabel>
                  <FormDescription>
                    {t('form_desc_terms_1')}{' '}
                    <a href="/privacy-policy" className="underline hover:text-accent">{t('footer_privacy')}</a> {t('form_desc_terms_2')} <a href="/refund-policy" className="underline hover:text-accent">{t('footer_refund')}</a>.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={isSubmitting}>
            {isSubmitting ? t('form_button_submitting') : t('nav_book_spell')}
          </Button>
        </form>
      </Form>
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <AlertDialogTitle className="text-center">{t('form_toast_title')}</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {t('form_toast_desc')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessDialog(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
