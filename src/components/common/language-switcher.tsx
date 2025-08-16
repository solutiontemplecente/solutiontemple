
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useLanguage } from './language-provider';
import { languages, LanguageCode } from '@/lib/i18n';


export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(() => languages.find(l => l.code === language) || languages[0]);

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setSelectedLanguage(languages.find(l => l.code === langCode) || languages[0]);
  };

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

    