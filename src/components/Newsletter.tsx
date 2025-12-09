import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades e promoções em breve.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Receba Novidades e Descontos
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Cadastre seu e-mail e ganhe 10% de desconto na primeira compra, 
            além de receber ofertas exclusivas!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
              required
            />
            <Button 
              type="submit" 
              variant="secondary" 
              className="whitespace-nowrap px-8"
            >
              Cadastrar
            </Button>
          </form>
          <p className="text-xs text-primary-foreground/60 mt-4">
            Respeitamos sua privacidade. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
