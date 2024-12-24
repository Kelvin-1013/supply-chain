import { BarChart3, Box, DollarSign, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { SupplyChainFlow } from "@/components/SupplyChainFlow";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailedView } from "@/components/DetailedView";
import { useTranslation } from "react-i18next";

const mockProducts = [
  {
    name: "Premium Laptop",
    sku: "LAP-2024-001",
    status: "in-stock" as const,
    quantity: 150,
    location: "Warehouse A"
  },
  {
    name: "Wireless Earbuds",
    sku: "AUD-2024-002",
    status: "low-stock" as const,
    quantity: 25,
    location: "Warehouse B"
  },
  {
    name: "Smart Watch",
    sku: "WAT-2024-003",
    status: "out-of-stock" as const,
    quantity: 0,
    location: "Warehouse A"
  }
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="container py-10">
          <h1 className="text-4xl font-bold mb-8">{t('dashboard.title')}</h1>
          
          <div className="stats-grid mb-8">
            <StatCard
              title={t('stats.inventory')}
              value="2,345"
              icon={<Box className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              title={t('stats.revenue')}
              value="$45,231"
              icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard
              title={t('stats.orders')}
              value="145"
              icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
            />
            <StatCard
              title={t('stats.efficiency')}
              value="92%"
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 3, isPositive: true }}
            />
          </div>

          <div className="mb-8">
            <SupplyChainFlow />
          </div>

          <div className="mb-8">
            <DetailedView />
          </div>

          <h2 className="text-2xl font-bold mb-4">{t('tracking.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockProducts.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;