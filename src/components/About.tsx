import { Heart, Award, Clock, Users, Leaf, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10.000+', label: 'Clientes Felizes' },
    { icon: Award, value: '15 Anos', label: 'de Experiência' },
    { icon: Clock, value: '24h', label: 'Entrega Expressa' },
    { icon: TrendingUp, value: '98%', label: 'Satisfação' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Amor em Cada Detalhe',
      description: 'Cada cesta é montada com carinho e atenção aos mínimos detalhes, pensando em surpreender quem você ama.',
    },
    {
      icon: Leaf,
      title: 'Produtos Frescos',
      description: 'Selecionamos apenas ingredientes frescos e de alta qualidade de fornecedores locais confiáveis.',
    },
    {
      icon: Award,
      title: 'Excelência Sempre',
      description: 'Nosso compromisso é com a excelência em cada entrega, superando expectativas a cada pedido.',
    },
  ];

  return (
    <section id="quem-somos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Quem Somos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma história de amor, dedicação e sabor
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Nossa História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2010, a CaféManhã nasceu do sonho de levar momentos especiais 
              para milhares de lares brasileiros. O que começou como uma pequena operação 
              familiar se transformou em referência nacional em cestas de café da manhã 
              artesanais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada cesta é preparada com ingredientes cuidadosamente selecionados, 
              combinando tradição, qualidade e muito amor. Nossa missão é transformar 
              o café da manhã em um momento inesquecível de celebração e afeto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ao longo desses anos, já fizemos parte de milhares de histórias especiais: 
              aniversários, declarações de amor, celebrações corporativas e tantos outros 
              momentos que merecem ser eternizados com carinho e dedicação.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Feito com amor
                  </p>
                  <p className="text-muted-foreground">
                    Desde 2010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}

        {/* Values */}
        {/* <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Mission */}
        {/* <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Nossa Missão
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proporcionar momentos únicos e memoráveis através de cestas artesanais que 
            transmitem carinho, qualidade e dedicação. Queremos estar presentes nos seus 
            momentos mais especiais, transformando um simples café da manhã em uma 
            experiência inesquecível.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;