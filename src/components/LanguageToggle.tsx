import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('es')}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('fr')}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('zh')}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('de')}>
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}