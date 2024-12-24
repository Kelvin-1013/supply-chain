import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Factory, Package, Store, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SupplyChainFlow() {
  const { t } = useTranslation();

  return (
    <Card className="col-span-3 dark:bg-gray-800">
      <CardHeader>
        <CardTitle>{t('supply.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-primary/10 rounded-full dark:bg-primary/20">
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Manufacturing</span>
          </div>
          
          <ArrowRight className="h-6 w-6 text-muted-foreground flow-animation" />
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-primary/10 rounded-full dark:bg-primary/20">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Packaging</span>
          </div>
          
          <ArrowRight className="h-6 w-6 text-muted-foreground flow-animation" />
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-primary/10 rounded-full dark:bg-primary/20">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Distribution</span>
          </div>
          
          <ArrowRight className="h-6 w-6 text-muted-foreground flow-animation" />
          
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-primary/10 rounded-full dark:bg-primary/20">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium">Retail</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}