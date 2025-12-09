import { useEffect, useState } from 'react';
import { ShoppingBasket } from 'lucide-react';

interface FlyingItem {
  id: string;
  image: string;
  startX: number;
  startY: number;
}

interface FlyingBasketProps {
  items: FlyingItem[];
  onComplete: (id: string) => void;
}

const FlyingBasket = ({ items, onComplete }: FlyingBasketProps) => {
  return (
    <>
      {items.map((item) => (
        <FlyingBasketItem
          key={item.id}
          item={item}
          onComplete={onComplete}
        />
      ))}
    </>
  );
};

const FlyingBasketItem = ({ 
  item, 
  onComplete 
}: { 
  item: FlyingItem; 
  onComplete: (id: string) => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      onComplete(item.id);
    }, 1500);

    return () => clearTimeout(timer);
  }, [item.id, onComplete]);

  // Pegar a posição do ícone do carrinho
  const getCartPosition = () => {
    const cartIcon = document.querySelector('[data-cart-icon]');
    if (cartIcon) {
      const rect = cartIcon.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    return { x: window.innerWidth - 100, y: 50 };
  };

  const cartPos = getCartPosition();

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${item.startX}px`,
        top: `${item.startY}px`,
        transform: mounted
          ? `translate(${cartPos.x - item.startX}px, ${cartPos.y - item.startY}px) scale(0.3)`
          : 'translate(0, 0) scale(1) rotate(0deg)',
        transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: mounted ? 0 : 1,
      }}
    >
      {/* Cesta animada */}
      <div className="relative">
        {/* A cesta */}
        <div
          className="absolute -top-8 -left-8 bg-amber-100 dark:bg-amber-900 rounded-full p-3 shadow-lg"
          style={{
            animation: mounted ? 'bounce 0.5s ease-in-out infinite' : 'none',
          }}
        >
          <ShoppingBasket className="w-12 h-12 text-amber-700 dark:text-amber-300" />
        </div>
        
        {/* Produto pulando dentro */}
        <img
          src={item.image}
          alt="produto"
          className="w-24 h-24 object-cover rounded-lg shadow-xl"
          style={{
            animation: mounted ? 'productJump 0.3s ease-in-out infinite' : 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes productJump {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default FlyingBasket;