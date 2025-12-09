import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, CreditCard, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Café<span className="text-primary">Manhã</span>
            </h3>
            <p className="text-background/70 mb-4">
              Cestas de café da manhã artesanais, preparadas com ingredientes 
              selecionados e muito carinho.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Nossas Cestas</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Cestas Românticas</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Aniversário</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Corporativas</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Tradicionais</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors">Fitness</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                contato@cafemanha.com.br
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-background/70">
                <CreditCard className="h-5 w-5" />
                <span className="text-sm">Cartões de Crédito</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Compra Segura</span>
              </div>
            </div>
            <p className="text-sm text-background/50">
              © {currentYear} CaféManhã. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
