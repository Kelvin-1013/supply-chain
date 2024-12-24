import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    name: string;
    sku: string;
    status: "in-stock" | "low-stock" | "out-of-stock";
    quantity: number;
    location: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const statusConfig = {
    "in-stock": { color: "bg-success", text: "In Stock" },
    "low-stock": { color: "bg-warning", text: "Low Stock" },
    "out-of-stock": { color: "bg-error", text: "Out of Stock" }
  };

  return (
    <Card className="dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{product.name}</CardTitle>
        <Badge className={cn(statusConfig[product.status].color)}>
          {statusConfig[product.status].text}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">SKU</span>
            <span className="text-sm font-medium">{product.sku}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <span className="text-sm font-medium">{product.quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-sm font-medium">{product.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}