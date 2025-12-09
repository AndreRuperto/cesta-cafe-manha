import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Eye, Download, Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const OrderHistory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Dados mockados de pedidos
  const orders = [
    {
      id: '123456',
      date: '15/11/2024',
      status: 'Entregue',
      items: 2,
      total: 389.90,
      products: [
        { name: 'Cesta Premium Luxo', quantity: 1, image: '/placeholder.jpg' },
        { name: 'Cesta Romântica', quantity: 1, image: '/placeholder.jpg' }
      ]
    },
    {
      id: '123455',
      date: '10/11/2024',
      status: 'Em trânsito',
      items: 1,
      total: 249.90,
      products: [
        { name: 'Cesta Fitness Saudável', quantity: 1, image: '/placeholder.jpg' }
      ]
    },
    {
      id: '123454',
      date: '05/11/2024',
      status: 'Cancelado',
      items: 3,
      total: 719.70,
      products: [
        { name: 'Cesta Tradicional', quantity: 2, image: '/placeholder.jpg' },
        { name: 'Cesta Aniversário', quantity: 1, image: '/placeholder.jpg' }
      ]
    },
  ];

  const formatPrice = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Entregue':
        return 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200';
      case 'Em trânsito':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200';
      case 'Processando':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200';
      case 'Cancelado':
        return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Meus Pedidos
            </h1>
            <p className="text-muted-foreground">
              Acompanhe o status e histórico de todos os seus pedidos
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl p-4 mb-6 shadow-soft">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por número do pedido..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtros
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Pedido #{order.id}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {order.date} • {order.items} {order.items === 1 ? 'item' : 'itens'}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>

                {/* Products */}
                <div className="space-y-2 mb-4">
                  {order.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-secondary rounded"></div>
                      <span className="text-muted-foreground">
                        {product.quantity}x {product.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-xl font-bold text-foreground">
                      {formatPrice(order.total)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => navigate(`/pedido/${order.id}`)}
                    >
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Nota Fiscal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (se não houver pedidos) */}
          {orders.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-24 h-24 text-muted-foreground/40 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Nenhum pedido encontrado
              </h2>
              <p className="text-muted-foreground mb-8">
                Você ainda não fez nenhum pedido
              </p>
              <Button onClick={() => navigate('/')}>
                Começar a Comprar
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;