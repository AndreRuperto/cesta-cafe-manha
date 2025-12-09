import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { CheckCircle2, Package, Truck, MessageCircle, Home, Share2, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CheckoutSteps from '@/components/CheckoutSteps';
import Header from '@/components/Header';

const Confirmation = () => {
  const navigate = useNavigate();
  const { items, total, itemCount } = useCart();

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const shippingCost = total >= 300 ? 0 : 19.90;
  const finalTotal = total + shippingCost;
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  useEffect(() => {
    if (itemCount === 0) {
      navigate('/');
    }
  }, [itemCount, navigate]);

  if (itemCount === 0) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-[15px]">
        <div className="container mx-auto px-4 py-8">
        <CheckoutSteps currentStep={4} />
        
        <div className="max-w-3xl mx-auto mt-8">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-950 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Pedido Confirmado!
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Obrigado pela sua compra
            </p>
            <p className="text-sm text-muted-foreground">
              Número do pedido: <span className="font-mono font-semibold text-foreground">#{orderNumber}</span>
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Resumo do Pedido
            </h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantidade: {item.quantity}
                    </p>
                    <p className="text-primary font-semibold mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className={shippingCost === 0 ? 'text-green-600 font-medium' : ''}>
                  {shippingCost === 0 ? 'Grátis' : formatPrice(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-foreground pt-2 border-t">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Próximos Passos
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Preparação do Pedido
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vamos preparar sua cesta com todo carinho e cuidado
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Entrega
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Você receberá um código de rastreamento por email e SMS
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    Acompanhamento
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enviaremos atualizações sobre o status do seu pedido
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Email Notice */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <p className="text-sm text-foreground">
              📧 <strong>Confirmação enviada!</strong> Verifique sua caixa de entrada para mais detalhes sobre o pedido.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 gap-2"
              size="lg"
              onClick={() => navigate('/')}
            >
              <Home className="w-4 h-4" />
              Voltar para Home
            </Button>
            <Button 
              variant="outline"
              className="flex-1 gap-2"
              size="lg"
              onClick={() => {
                const message = `Olá! Fiz um pedido (#${orderNumber}) e gostaria de mais informações.`;
                window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Suporte
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Adorou a experiência? Compartilhe nas redes sociais!
            </p>
            <div className="flex justify-center gap-4">
              <button 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
                title="Compartilhar"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
                title="Enviar mensagem"
              >
                <Send className="w-5 h-5" />
              </button>
              <button 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
                title="Enviar por email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;