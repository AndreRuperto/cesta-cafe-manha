import { Truck, Shield, Clock, Heart, CreditCard, Phone } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Expressa",
    description: "Entregamos no mesmo dia para pedidos até 14h",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Seus dados protegidos com criptografia de ponta",
  },
  {
    icon: Clock,
    title: "Desde 2010",
    description: "Mais de 14 anos surpreendendo famílias",
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada cesta montada manualmente com carinho",
  },
  {
    icon: CreditCard,
    title: "Parcele em 3x",
    description: "Sem juros no cartão de crédito",
  },
  {
    icon: Phone,
    title: "Suporte Dedicado",
    description: "Atendimento por WhatsApp das 8h às 20h",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Por que escolher a CaféManhã?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com dedicação para proporcionar a melhor experiência em presentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
