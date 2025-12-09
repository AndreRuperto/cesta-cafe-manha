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
  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto py-6">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium transition-all duration-300 ${
                step.number <= currentStep
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-background text-muted-foreground'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {step.label}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <div
              className={`w-16 md:w-24 h-0.5 mx-2 transition-colors duration-300 ${
                step.number < currentStep ? 'bg-primary' : 'bg-border'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
