import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  Package2,
  Plus,
  Settings2,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const overviewCards = [
  {
    label: "Faturamento",
    value: "R$ 124.500",
    delta: "+18%",
    icon: BarChart3,
    highlight: "Mês atual",
  },
  {
    label: "Pedidos",
    value: "1.284",
    delta: "+6%",
    icon: ShoppingBag,
    highlight: "Últimos 30 dias",
  },
  {
    label: "Novos clientes",
    value: "312",
    delta: "+22%",
    icon: Users,
    highlight: "Comparado ao mês passado",
  },
  {
    label: "Ticket médio",
    value: "R$ 97,00",
    delta: "+4%",
    icon: TrendingUp,
    highlight: "Saudável",
  },
];

const salesTrendData = [
  { month: "Mai", vendas: 32000, clientes: 140 },
  { month: "Jun", vendas: 36500, clientes: 156 },
  { month: "Jul", vendas: 41000, clientes: 170 },
  { month: "Ago", vendas: 43200, clientes: 188 },
  { month: "Set", vendas: 47000, clientes: 205 },
  { month: "Out", vendas: 50500, clientes: 217 },
];

const chartConfig = {
  vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-1))",
  },
  clientes: {
    label: "Novos clientes",
    color: "hsl(var(--chart-2))",
  },
};

const topProducts = [
  {
    name: "Combo Premium",
    sku: "CB-001",
    revenue: "R$ 21.400",
    status: "Em alta",
  },
  {
    name: "Cesta Saudável",
    sku: "CS-014",
    revenue: "R$ 17.920",
    status: "Stable",
  },
  {
    name: "Kit Executivo",
    sku: "KE-090",
    revenue: "R$ 14.880",
    status: "Em alta",
  },
  {
    name: "Assinatura Café",
    sku: "AC-302",
    revenue: "R$ 11.350",
    status: "Observação",
  },
];

const recentOrders = [
  {
    id: "#9821",
    customer: "Maria Oliveira",
    status: "Separando",
    total: "R$ 280,00",
    eta: "Hoje, 16h",
  },
  {
    id: "#9819",
    customer: "Pedro Santos",
    status: "Em rota",
    total: "R$ 149,00",
    eta: "Hoje, 18h",
  },
  {
    id: "#9817",
    customer: "Camila Souza",
    status: "Entregue",
    total: "R$ 342,00",
    eta: "Ontem",
  },
  {
    id: "#9816",
    customer: "João Reis",
    status: "Aguardando",
    total: "R$ 199,00",
    eta: "Pendência",
  },
];

const fulfillment = [
  {
    label: "Pedidos em rota",
    value: 68,
    badge: "+12%",
    tone: "success",
  },
  {
    label: "Pedidos separando",
    value: 22,
    badge: "-4%",
    tone: "warning",
  },
  {
    label: "Aguardando pagamento",
    value: 14,
    badge: "+1%",
    tone: "muted",
  },
];

const quickActions = [
  {
    label: "Criar campanha",
    icon: Plus,
  },
  {
    label: "Gerenciar estoque",
    icon: Package2,
  },
  {
    label: "Alertas",
    icon: Bell,
  },
  {
    label: "Preferências",
    icon: Settings2,
  },
];

const statusTone: Record<string, string> = {
  Entregue: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
  "Em rota": "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200",
  Separando: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
  Aguardando: "bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-200",
  "Em alta": "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
  Stable: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200",
  Observação: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
};

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pb-10 pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Visão geral</p>
            <h1 className="text-3xl font-semibold text-foreground">Painel do administrador</h1>
            <p className="text-muted-foreground">
              Acompanhe vendas, operações e produtos em um painel resumido.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              Relatar incidente
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo pedido manual
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((item) => (
            <Card key={item.label} className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <Badge variant="outline" className="gap-1 text-xs">
                    <ArrowUpRight className="h-3 w-3" />
                    {item.delta}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{item.highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Card className="shadow-soft lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-lg">Vendas e clientes</CardTitle>
                <CardDescription>Desempenho mensal, comparando faturamento e novos clientes.</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent>
              <ChartContainer
                config={{
                    vendas: { label: "Vendas", color: "hsl(var(--chart-1))" },
                    clientes: { label: "Clientes", color: "hsl(var(--chart-2))" },
                }}
                className="min-h-[320px]"
                >
                <LineChart data={salesTrendData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="vendas"
                    stroke="var(--color-vendas)"
                    strokeWidth={2}
                    dot={false}
                    data-chart="vendas"
                    />

                    <Line
                    type="monotone"
                    dataKey="clientes"
                    stroke="var(--color-clientes)"
                    strokeWidth={2}
                    dot={false}
                    data-chart="clientes"
                    />
                  <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Operação</CardTitle>
              <CardDescription>Status das entregas e pedidos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {fulfillment.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <Badge variant="outline" className={cn("text-xs", item.tone === "success" && "text-emerald-600")}>
                      {item.badge}
                    </Badge>
                  </div>

                  <Progress value={item.value} className={cn("h-2", item.tone === "warning" && "bg-amber-50 dark:bg-amber-950/40")} />

                  <div className="text-xs text-muted-foreground">{item.value}% concluído</div>
                </div>
              ))}

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  92% das entregas do dia já finalizadas
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 className="h-4 w-4 text-amber-500" />
                  6 pedidos com atenção: janelas de entrega próximas
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Card className="shadow-soft lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-lg">Produtos em destaque</CardTitle>
                <CardDescription>Itens que mais geraram receita na última semana.</CardDescription>
              </div>

              <Tabs defaultValue="week" className="w-[220px]">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="week">Semana</TabsTrigger>
                  <TabsTrigger value="month">Mês</TabsTrigger>
                </TabsList>

                <TabsContent value="week" />
                <TabsContent value="month" />
              </Tabs>
            </CardHeader>

            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Receita</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.sku}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-muted-foreground">{product.sku}</TableCell>
                      <TableCell>{product.revenue}</TableCell>

                      <TableCell className="text-right">
                        <Badge variant="secondary" className={cn("border-0", statusTone[product.status])}>
                          {product.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Pedidos recentes</CardTitle>
              <CardDescription>Últimas movimentações da operação.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium text-foreground">{order.id}</div>

                      <Badge variant="outline" className={cn("border-0", statusTone[order.status])}>
                        {order.status}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">{order.customer}</p>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{order.total}</span>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock3 className="h-4 w-4" />
                        {order.eta}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="ghost" className="w-full">
                Ver todos os pedidos
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="mt-4 shadow-soft">
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Ações rápidas</CardTitle>
              <CardDescription>Atalhos para as tarefas mais usadas pelo time.</CardDescription>
            </div>

            <Button variant="outline" className="gap-2">
              <Settings2 className="h-4 w-4" />
              Personalizar
            </Button>
          </CardHeader>

          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-4 text-left transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <action.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium text-foreground">{action.label}</p>
                    <p className="text-xs text-muted-foreground">Clique para acessar</p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
