import { useCart } from '@/contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CheckoutSteps from '@/components/CheckoutSteps';
import Header from '@/components/Header';

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  if (itemCount === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-[15px]">
          <div className="container mx-auto px-4 py-8">
            <CheckoutSteps currentStep={1} />
            
            <div className="flex flex-col items-center justify-center py-16">
              <ShoppingBag className="w-24 h-24 text-muted-foreground/40 mb-6" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Seu carrinho está vazio
              </h2>
              <p className="text-muted-foreground mb-8">
                Adicione cestas deliciosas ao seu carrinho
              </p>
              <Link to="/">
                <Button className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-[15px]">
        <div className="container mx-auto px-4 py-8">
        <CheckoutSteps currentStep={1} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-foreground">
                Meu Carrinho ({itemCount} {itemCount === 1 ? 'item' : 'itens'})
              </h1>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={clearCart}
              >
                <Trash2 className="w-4 h-4" />
                Esvaziar Carrinho
              </Button>
            </div>
            
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-card rounded-xl shadow-soft"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {formatPrice(item.price)}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <p className="font-semibold text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
            
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mt-4">
              <ArrowLeft className="w-4 h-4" />
              Continuar Comprando
            </Link>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-soft sticky top-20">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frete</span>
                  <span className={total >= 300 ? 'text-green-600 font-medium' : ''}>
                    {total >= 300 ? 'Grátis' : 'Calcular na próxima etapa'}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  ou 10x de {formatPrice(total / 10)} sem juros
                </p>
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => navigate('/entrega')}
              >
                Continuar para Entrega
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;