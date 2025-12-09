import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import CartProgress from "@/components/CartProgress";
import FlyingBasket from "@/components/FlyingBasket";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Auth from "./pages/Auth";
import OrderHistory from "./pages/OrderHistory";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { flyingItems, removeFlyingItem } = useCart();
  
  return (
    <>
      <FlyingBasket items={flyingItems} onComplete={removeFlyingItem} />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/entrega" element={<Delivery />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/confirmacao" element={<Confirmation />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/pedidos" element={<OrderHistory />} />
          <Route path="/configuracoes" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;