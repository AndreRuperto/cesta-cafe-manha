import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  installments?: number;
  tag?: string;
}

const ProductCard = ({ id, image, name, price, originalPrice, installments = 3, tag }: ProductCardProps) => {
  const { addItem } = useCart();

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const installmentValue = price / installments;

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast({
      title: "Adicionado ao carrinho!",
      description: name,
    });
  };

  return (
    <article className="product-card group bg-card">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        {/* Tag */}
        {tag && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {tag}
          </Badge>
        )}

        {/* Favorite button */}
        <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:text-accent">
          <Heart className="h-4 w-4" />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button className="w-full gap-2" size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 min-h-[48px] group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="space-y-1">
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </p>
          )}
          <p className="price-tag">{formatPrice(price)}</p>
          <p className="installment">
            ou <span className="installment-highlight">{installments}x</span> de{" "}
            <span className="installment-highlight">{formatPrice(installmentValue)}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
