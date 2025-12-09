import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import CheckoutSteps from '@/components/CheckoutSteps';
import Header from '@/components/Header';

const Delivery = () => {
  const navigate = useNavigate();
  const { total, itemCount } = useCart();
  const [deliveryType, setDeliveryType] = useState('standard');

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const shippingCost = total >= 300 ? 0 : deliveryType === 'express' ? 29.90 : 19.90;
  const finalTotal = total + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pagamento');
  };

  if (itemCount === 0) {
    navigate('/carrinho');
    return null;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-[15px]">
        <div className="container mx-auto px-4 py-8">
        <CheckoutSteps currentStep={2} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Delivery Form */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/carrinho')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-foreground">
                Dados de Entrega
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Address Section */}
              <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Endereço</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" placeholder="00000-000" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" placeholder="Nome da rua" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apartamento, bloco, etc." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Nome do bairro" required />
                  </div>
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Cidade" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="SP" required />
                </div>
              </div>

              {/* Delivery Type */}
              <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Tipo de Entrega</h2>
                </div>

                <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Entrega Padrão</p>
                          <p className="text-sm text-muted-foreground">Receba em até 3 dias úteis</p>
                        </div>
                        <span className="font-semibold text-foreground">
                          {total >= 300 ? 'Grátis' : formatPrice(19.90)}
                        </span>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Entrega Express</p>
                          <p className="text-sm text-muted-foreground">Receba no mesmo dia (SP Capital)</p>
                        </div>
                        <span className="font-semibold text-foreground">
                          {formatPrice(29.90)}
                        </span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Delivery Date */}
              <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Data de Entrega</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Data Preferencial</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="time">Horário Preferencial</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>
              </div>

              {/* Recipient Info */}
              <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Destinatário
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="recipientName">Nome Completo</Label>
                    <Input id="recipientName" placeholder="Nome do destinatário" required />
                  </div>
                  <div>
                    <Label htmlFor="recipientPhone">Telefone</Label>
                    <Input id="recipientPhone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem do Cartão (Opcional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva uma mensagem especial..." 
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Continuar para Pagamento
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-soft sticky top-20">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frete</span>
                  <span className={shippingCost === 0 ? 'text-green-600 font-medium' : ''}>
                    {shippingCost === 0 ? 'Grátis' : formatPrice(shippingCost)}
                  </span>
                </div>
                {total >= 300 && (
                  <div className="text-sm text-green-600 font-medium">
                    🎉 Você ganhou frete grátis!
                  </div>
                )}
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-semibold text-foreground mb-2">
                  <span>Total</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 10x de {formatPrice(finalTotal / 10)} sem juros
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;