import { Heart, Cake, Briefcase, Star, Coffee, Gift } from "lucide-react";

const categories = [
  { icon: Star, label: "Destaques", color: "bg-primary/10 text-primary" },
  { icon: Heart, label: "Românticas", color: "bg-accent/10 text-accent" },
  { icon: Cake, label: "Aniversário", color: "bg-primary/10 text-primary" },
  { icon: Briefcase, label: "Corporativas", color: "bg-secondary text-secondary-foreground" },
  { icon: Coffee, label: "Tradicionais", color: "bg-primary/10 text-primary" },
  { icon: Gift, label: "Especiais", color: "bg-accent/10 text-accent" },
];

const Categories = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
            Categorias
          </h2>
          <p className="text-muted-foreground">
            Encontre a cesta perfeita para cada ocasião
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-pill flex items-center gap-2 ${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
