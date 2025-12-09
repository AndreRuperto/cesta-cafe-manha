import { useCart } from '@/contexts/CartContext';
import { Progress } from '@/components/ui/progress';
import { Truck, Gift } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 300;

const CartProgress = () => {
  const { total, itemCount } = useCart();

  if (itemCount === 0) return null;

  const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);
  const hasFreeShipping = total >= FREE_SHIPPING_THRESHOLD;

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-accent animate-fade-in">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            {hasFreeShipping ? (
              <Gift className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Truck className="w-5 h-5 text-primary-foreground" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs md:text-sm font-medium text-primary-foreground truncate">
                {hasFreeShipping ? (
                  "🎉 Parabéns! Você ganhou frete grátis!"
                ) : (
                  <>
                    Faltam <span className="font-bold">{formatPrice(remaining)}</span> para frete grátis
                  </>
                )}
              </p>
              <span className="text-xs text-primary-foreground/80 ml-2 flex-shrink-0">
                {itemCount} {itemCount === 1 ? 'item' : 'itens'}
              </span>
            </div>
            
            <Progress 
              value={progress} 
              className="h-2 bg-primary-foreground/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProgress;
