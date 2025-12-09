import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { itemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkAuth);
    checkAuth();

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Cestas", href: "#produtos" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#" },
  ];

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === "#") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      setIsMenuOpen(false);
      return;
    }

    const targetId = href.replace("#", "");

    // Se NÃO estiver na página inicial, navega para ela primeiro
    if (window.location.pathname !== "/") {
      navigate("/");

      // espera o React montar a página inicial
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 80);

      setIsMenuOpen(false);
      return;
    }

    // Já estamos na tela inicial → só fazer o scroll
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Café<span className="text-primary">Manhã</span>
            </h1>
            <span className="text-xs text-muted-foreground">Cestas Especiais</span>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:block flex-1">
            <ul className="flex justify-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="nav-link text-sm"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  {/* 👉 Opção para admin */}
                  {localStorage.getItem('isAdmin') === 'true' && (
                    <DropdownMenuItem onClick={() => navigate('/admin')}>
                      Painel Admin
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem onClick={() => navigate('/pedidos')}>
                    Meus Pedidos
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => navigate('/configuracoes')}>
                    Meu Perfil
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={handleLogout}>
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex"
                onClick={() => navigate('/login')}
              >
                <User className="h-5 w-5" />
              </Button>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/carrinho')}
              data-cart-icon
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {itemCount}
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border">
              {isLoggedIn ? (
                <>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/orders');
                      setIsMenuOpen(false);
                    }}
                  >
                    Meus Pedidos
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/profile');
                      setIsMenuOpen(false);
                    }}
                  >
                    Meu Perfil
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sair
                  </a>
                </>
              ) : (
                <a 
                  href="#" 
                  className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="h-4 w-4" />
                  Minha Conta
                </a>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;