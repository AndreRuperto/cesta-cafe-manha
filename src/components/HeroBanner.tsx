import { Button } from "@/components/ui/button";
import { Gift, Truck } from "lucide-react";
import heroImage from "@/assets/hero-basket.jpg";

const HeroBanner = () => {
  const scrollToCestas = () => {
    const element = document.getElementById('produtos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Surpreenda quem você{" "}
              <span className="text-gradient">ama</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Cestas de café da manhã artesanais, preparadas com ingredientes 
              selecionados e muito carinho. Perfeitas para aniversários, 
              datas especiais ou simplesmente para demonstrar afeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="text-lg px-8 gap-2" onClick={scrollToCestas}>
                <Gift className="h-5 w-5" />
                Ver Cestas
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3 scale-105 opacity-20" />
              <img
                src={heroImage}
                alt="Cesta de café da manhã luxuosa com croissants, frutas e café"
                className="relative rounded-3xl shadow-card w-full object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-bounce-gentle">
                <p className="text-2xl font-bold text-primary">-15%</p>
                <p className="text-xs text-muted-foreground">1ª compra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroBanner;
