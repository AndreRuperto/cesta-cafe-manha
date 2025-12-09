import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Phone, Shield, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Cestas", href: "#produtos" },
    { label: "Românticas", href: "#" },
    { label: "Aniversário", href: "#" },
    { label: "Corporativas", href: "#" },
    { label: "Quem Somos", href: "#" },
    { label: "Contato", href: "#" },
  ];

  const trustBadges = [
    { icon: Phone, text: "(11) 99999-9999", subtext: "Atendimento" },
    { icon: Shield, text: "Desde 2010", subtext: "Empresa" },
    { icon: CreditCard, text: "100% Segura", subtext: "Sua compra" },
    { icon: Truck, text: "Entrega Rápida", subtext: "Agilidade" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Café<span className="text-primary">Manhã</span>
            </h1>
            <span className="text-xs text-muted-foreground">Cestas Especiais</span>
          </a>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input 
                type="search" 
                placeholder="Buscar cestas de café da manhã..." 
                className="pr-12 bg-secondary/50 border-border focus:bg-background"
              />
              <Button 
                size="icon" 
                className="absolute right-0 top-0 h-full rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => window.location.href = '/carrinho'}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Input 
              type="search" 
              placeholder="Buscar cestas..." 
              className="pr-12 bg-secondary/50"
            />
            <Button 
              size="icon" 
              className="absolute right-0 top-0 h-full rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-8 py-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border">
              <a href="#" className="flex items-center gap-2 py-2 text-foreground hover:text-primary">
                <User className="h-4 w-4" />
                Minha Conta
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
