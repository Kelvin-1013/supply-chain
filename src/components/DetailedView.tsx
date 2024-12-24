import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Box, Clock, Map, Package, Truck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function DetailedView() {
  const { t } = useTranslation();

  return (
    <Card className="col-span-3 dark:bg-gray-800">
      <CardHeader>
        <CardTitle>{t('supply.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">{t('supply.overview')}</TabsTrigger>
            <TabsTrigger value="tracking">{t('supply.tracking')}</TabsTrigger>
            <TabsTrigger value="analytics">{t('supply.analytics')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="dark:bg-gray-700">
                <CardHeader className="flex flex-row items-center space-y-0">
                  <Box className="h-4 w-4 text-primary mr-2" />
                  <CardTitle className="text-sm font-medium">{t('supply.inventory')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98%</div>
                  <p className="text-xs text-muted-foreground">{t('supply.optimal')}</p>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-700">
                <CardHeader className="flex flex-row items-center space-y-0">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <CardTitle className="text-sm font-medium">{t('supply.leadTime')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2 days</div>
                  <p className="text-xs text-muted-foreground">{t('supply.processing')}</p>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-700">
                <CardHeader className="flex flex-row items-center space-y-0">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  <CardTitle className="text-sm font-medium">{t('supply.suppliers')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">124</div>
                  <p className="text-xs text-muted-foreground">{t('supply.partnerships')}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="tracking">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center gap-4">
                  <Package className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">{t('supply.order')} #12345</h4>
                    <p className="text-sm text-muted-foreground">{t('supply.transit')}</p>
                  </div>
                </div>
                <Map className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center gap-4">
                  <Truck className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">{t('supply.shipment')} #67890</h4>
                    <p className="text-sm text-muted-foreground">{t('supply.delivery')}</p>
                  </div>
                </div>
                <Map className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="h-[300px] flex items-center justify-center border rounded-lg dark:border-gray-600 dark:bg-gray-700">
              <BarChart className="h-16 w-16 text-muted-foreground" />
              <p className="ml-4 text-muted-foreground">{t('supply.analytics')}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}