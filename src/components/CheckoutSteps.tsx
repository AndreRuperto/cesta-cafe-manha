import { useEffect, useState } from 'react';

interface CheckoutStepsProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Carrinho' },
  { number: 2, label: 'Entrega' },
  { number: 3, label: 'Pagamento' },
  { number: 4, label: 'Confirmação' },
];

const CheckoutSteps = ({ currentStep }: CheckoutStepsProps) => {
  const [animatedStep, setAnimatedStep] = useState(1);
  const [filledSteps, setFilledSteps] = useState<number[]>([1]); // Steps com bolinha preenchida

  console.log('🔵 CheckoutSteps renderizado');
  console.log('📍 currentStep recebido:', currentStep);
  console.log('📊 animatedStep atual:', animatedStep);
  console.log('🎨 filledSteps:', filledSteps);

  useEffect(() => {
    console.log('⚡ useEffect disparado! currentStep mudou para:', currentStep);
    
    // Pequeno delay para garantir que a transição aconteça
    const timer = setTimeout(() => {
      console.log('✅ Atualizando animatedStep de', animatedStep, 'para', currentStep);
      setAnimatedStep(currentStep);
      
      // Após 3 segundos (duração da animação), preenche a bolinha
      setTimeout(() => {
        console.log('🎯 Preenchendo bolinha do step:', currentStep);
        setFilledSteps(prev => {
          const newSteps = [...prev];
          for (let i = 1; i <= currentStep; i++) {
            if (!newSteps.includes(i)) {
              newSteps.push(i);
            }
          }
          return newSteps;
        });
      }, 1300);
    }, 50);

    return () => {
      console.log('🧹 Limpando timeout');
      clearTimeout(timer);
    };
  }, [currentStep]);

  const progressWidth = ((animatedStep - 1) / (steps.length - 1)) * 100;
  console.log('📏 Largura calculada da barra:', progressWidth + '%');

  return (
    <div className="w-full max-w-3xl mx-auto py-6">
      <div className="relative flex items-center justify-between">
        {/* Linha de fundo */}
        <div className="absolute top-5 left-0 right-0 h-1 bg-border rounded-full" style={{ zIndex: 0 }} />
        
        {/* Linha de progresso com animação de 3 segundos */}
        <div 
          className="absolute top-5 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          style={{ 
            width: `${progressWidth}%`,
            zIndex: 0,
            transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center relative" style={{ zIndex: 1 }}>
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium transition-all duration-300 ${
                filledSteps.includes(step.number)
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`mt-2 text-xs md:text-sm font-medium transition-colors duration-300 text-center ${
                filledSteps.includes(step.number) ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;