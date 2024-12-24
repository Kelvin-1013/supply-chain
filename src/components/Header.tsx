import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            SupplySphere
          </span>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('nav.dashboard')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Overview
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Analytics
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Reports
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t('nav.products')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Inventory
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Categories
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                      Suppliers
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder={t('nav.search')}
              className="pl-8 h-9 w-64 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}