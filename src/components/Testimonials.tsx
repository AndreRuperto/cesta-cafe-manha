import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente desde 2019',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Simplesmente perfeito! Encomendei uma cesta surpresa para o aniversário da minha mãe e ela amou cada detalhe. A qualidade dos produtos é excepcional e a entrega foi pontual. Com certeza voltarei a comprar!',
    },
    {
      name: 'João Santos',
      role: 'Cliente corporativo',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Utilizamos as cestas da CaféManhã para presentear nossos colaboradores no final do ano. O feedback foi incrível! Todos elogiaram a apresentação impecável e a variedade de produtos. Recomendo muito para empresas!',
    },
    {
      name: 'Ana Paula Costa',
      role: 'Cliente desde 2020',
      avatar: '👩',
      rating: 5,
      text: 'Presenteei meu namorado com a cesta romântica e foi um sucesso absoluto! Os produtos eram frescos, deliciosos e a apresentação estava linda. O atendimento também foi nota 10. Melhor escolha que fiz!',
    },
    {
      name: 'Carlos Mendes',
      role: 'Cliente recorrente',
      avatar: '👨',
      rating: 5,
      text: 'Sempre compro cestas aqui para ocasiões especiais. A qualidade nunca decepciona e o cuidado com cada detalhe faz toda diferença. É visível o carinho que colocam em cada cesta montada.',
    },
    {
      name: 'Beatriz Oliveira',
      role: 'Cliente desde 2021',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'Fiz uma encomenda de última hora e fui super bem atendida. A cesta chegou no horário combinado e estava impecável. Minha sogra adorou! Virei cliente fiel da CaféManhã.',
    },
    {
      name: 'Ricardo Ferreira',
      role: 'Empresário',
      avatar: '🧑‍💼',
      rating: 5,
      text: 'Excelente custo-benefício e atendimento personalizado. As cestas corporativas que encomendamos foram elogiadas por todos os nossos parceiros. Profissionalismo e qualidade em primeiro lugar!',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que escolheram celebrar momentos especiais conosco
          </p>
        </div>

        {/* Overall Rating */}
        <div className="max-w-md mx-auto mb-12 p-8 bg-card rounded-xl shadow-soft text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-4xl font-bold text-foreground mb-2">4.9/5.0</p>
          <p className="text-muted-foreground">Baseado em 2.500+ avaliações</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-card rounded-lg">
            <p className="text-2xl font-bold text-primary mb-1">2.500+</p>
            <p className="text-sm text-muted-foreground">Avaliações</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <p className="text-2xl font-bold text-primary mb-1">98%</p>
            <p className="text-sm text-muted-foreground">Satisfação</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <p className="text-2xl font-bold text-primary mb-1">10.000+</p>
            <p className="text-sm text-muted-foreground">Clientes</p>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <p className="text-2xl font-bold text-primary mb-1">4.9★</p>
            <p className="text-sm text-muted-foreground">Média Geral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;