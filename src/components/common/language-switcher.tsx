
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from './language-provider';
import { languages, LanguageCode } from '@/lib/i18n';
import { cn } from '@/lib/utils';


export default function LanguageSwitcher({ isFooter = false }: { isFooter?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(() => languages.find(l => l.code === language) || languages[0]);

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setSelectedLanguage(languages.find(l => l.code === langCode) || languages[0]);
  };

  if (isFooter) {
    return (
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-between bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground border-primary-foreground/30">
            <span className="flex items-center gap-2">
              <span className='text-lg'>{selectedLanguage.flag}</span>
              <span>{t(selectedLanguage.name as any)}</span>
            </span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className='w-[150px]'>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => handleLanguageChange(lang.code)}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{t(lang.name as any)}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select language">
          <Globe className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{t(lang.name as any)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
