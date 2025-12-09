import ProductCard from "./ProductCard";

import basketPremium from "@/assets/basket-premium.jpg";
import basketRomantic from "@/assets/basket-romantic.jpg";
import basketTradicional from "@/assets/basket-tradicional.jpg";
import basketFitness from "@/assets/basket-fitness.jpg";
import basketBirthday from "@/assets/basket-birthday.jpg";
import basketExecutive from "@/assets/basket-executive.jpg";

const products = [
  {
    id: 1,
    image: basketPremium,
    name: "Cesta Premium Luxo com Champagne e Frutas",
    price: 389.90,
    originalPrice: 449.90,
    tag: "Mais Vendida",
  },
  {
    id: 2,
    image: basketRomantic,
    name: "Cesta Romântica com Rosas e Champagne",
    price: 329.90,
    tag: "Dia dos Namorados",
  },
  {
    id: 3,
    image: basketTradicional,
    name: "Cesta Tradicional Brasileira",
    price: 189.90,
    originalPrice: 219.90,
  },
  {
    id: 4,
    image: basketFitness,
    name: "Cesta Fitness Saudável com Frutas e Granola",
    price: 249.90,
    tag: "Saudável",
  },
  {
    id: 5,
    image: basketBirthday,
    name: "Cesta Aniversário Especial com Bolo",
    price: 279.90,
    tag: "Aniversário",
  },
  {
    id: 6,
    image: basketExecutive,
    name: "Cesta Executiva Premium com Vinho",
    price: 429.90,
    originalPrice: 499.90,
    tag: "Corporativa",
  },
];

const ProductGrid = () => {
  return (
    <section id="produtos" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nossas Cestas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada cesta é preparada com ingredientes frescos e selecionados, 
            embalada com carinho para surpreender quem você ama
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                tag={product.tag}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-hover">
            Ver Todas as Cestas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
