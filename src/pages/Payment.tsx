import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, CreditCard, Barcode, Smartphone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CheckoutSteps from '@/components/CheckoutSteps';
import Header from '@/components/Header';

const Payment = () => {
  const navigate = useNavigate();
  const { total, itemCount } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const shippingCost = total >= 300 ? 0 : 19.90;
  const finalTotal = total + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmacao');
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
        <CheckoutSteps currentStep={3} />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/entrega')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-foreground">
                Pagamento
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method */}
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Escolha a forma de pagamento
                </h2>

                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="credit" className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Crédito
                    </TabsTrigger>
                    <TabsTrigger value="pix" className="gap-2">
                      <Smartphone className="h-4 w-4" />
                      PIX
                    </TabsTrigger>
                    <TabsTrigger value="boleto" className="gap-2">
                      <Barcode className="h-4 w-4" />
                      Boleto
                    </TabsTrigger>
                  </TabsList>

                  {/* Credit Card */}
                  <TabsContent value="credit" className="space-y-4 mt-6">
                    <div>
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="0000 0000 0000 0000" 
                        maxLength={19}
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input 
                        id="cardName" 
                        placeholder="Nome como está no cartão" 
                        required 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Validade</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/AA" 
                          maxLength={5}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="000" 
                          maxLength={4}
                          type="password"
                          required 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="installments">Parcelas</Label>
                      <select 
                        id="installments"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      >
                        <option value="1">1x de {formatPrice(finalTotal)} sem juros</option>
                        <option value="2">2x de {formatPrice(finalTotal / 2)} sem juros</option>
                        <option value="3">3x de {formatPrice(finalTotal / 3)} sem juros</option>
                        <option value="4">4x de {formatPrice(finalTotal / 4)} sem juros</option>
                        <option value="5">5x de {formatPrice(finalTotal / 5)} sem juros</option>
                        <option value="6">6x de {formatPrice(finalTotal / 6)} sem juros</option>
                        <option value="7">7x de {formatPrice(finalTotal / 7)} sem juros</option>
                        <option value="8">8x de {formatPrice(finalTotal / 8)} sem juros</option>
                        <option value="9">9x de {formatPrice(finalTotal / 9)} sem juros</option>
                        <option value="10">10x de {formatPrice(finalTotal / 10)} sem juros</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                      <Lock className="h-4 w-4" />
                      <span>Seus dados estão seguros e criptografados</span>
                    </div>
                  </TabsContent>

                  {/* PIX */}
                  <TabsContent value="pix" className="space-y-4 mt-6">
                    <div className="text-center py-8 space-y-4">
                      <div className="w-48 h-48 bg-secondary rounded-lg mx-auto flex items-center justify-center">
                        <p className="text-muted-foreground">QR Code será gerado<br />após confirmação</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">
                          Pague {formatPrice(finalTotal)} via PIX
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Após a confirmação, você receberá o QR Code para pagamento
                        </p>
                        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg p-3 mt-4">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            💚 Pagamento instantâneo • Aprovação imediata
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Boleto */}
                  <TabsContent value="boleto" className="space-y-4 mt-6">
                    <div className="text-center py-8 space-y-4">
                      <Barcode className="w-16 h-16 mx-auto text-muted-foreground" />
                      <div className="space-y-2">
                        <p className="font-medium text-foreground">
                          Boleto de {formatPrice(finalTotal)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Após a confirmação, você receberá o boleto por email
                        </p>
                        <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-900 rounded-lg p-3 mt-4">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            ⚠️ Prazo de vencimento: 3 dias úteis
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Personal Data */}
              <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Dados Pessoais
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Finalizar Compra
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
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-semibold text-foreground mb-2">
                  <span>Total</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
                {paymentMethod === 'credit' && (
                  <p className="text-sm text-muted-foreground">
                    ou 10x de {formatPrice(finalTotal / 10)} sem juros
                  </p>
                )}
              </div>

              <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Compra 100% Segura</p>
                    <p>Seus dados são protegidos com criptografia SSL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Payment;