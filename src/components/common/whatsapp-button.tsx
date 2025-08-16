import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21.45,16.23a8.5,8.5,0,0,1-8.15,4.94A8.4,8.4,0,0,1,5.1,19.86l-1.2,4.3,4.43-1.16a8.5,8.5,0,0,1,14.07-7.5" />
    <path d="M16.5,12.5a.9.9,0,0,0-1.5-.5,4.3,4.3,0,0,1-4-4,.9.9,0,0,0-.5-1.5,5.1,5.1,0,0,0-3-1,8.4,8.4,0,0,0-6,8.5,8.5,8.5,0,0,0,9,7.5,7.7,7.7,0,0,0,7-5.5A4.4,4.4,0,0,0,16.5,12.5Z" />
  </svg>
);

const WhatsAppButton = ({ phoneNumber, message }: WhatsAppButtonProps) => {
  const sanitizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${sanitizedPhoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:bg-[#1EBE57] hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Link href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Link>
    </Button>
  );
};

export default WhatsAppButton;
