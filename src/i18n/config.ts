import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "dashboard.title": "Supply Chain Dashboard",
      "stats.inventory": "Total Inventory",
      "stats.revenue": "Revenue",
      "stats.orders": "Active Orders",
      "stats.efficiency": "Efficiency",
      "tracking.title": "Product Tracking",
      "supply.title": "Supply Chain Details",
      "supply.overview": "Overview",
      "supply.tracking": "Tracking",
      "supply.analytics": "Analytics",
      "supply.inventory": "Inventory Health",
      "supply.leadTime": "Lead Time",
      "supply.suppliers": "Suppliers",
      "supply.optimal": "Optimal stock levels maintained",
      "supply.processing": "Average processing time",
      "supply.partnerships": "Active partnerships",
      "supply.order": "Order",
      "supply.shipment": "Shipment",
      "supply.transit": "In Transit to Warehouse",
      "supply.delivery": "Out for Delivery",
      "footer.about": "Modern supply chain solutions for emerging AI companies, AgriTech, Consumer Brands, PropTech, and Retail.",
      "footer.solutions": "Solutions",
      "footer.industries": "Industries",
      "footer.connect": "Connect",
      "nav.dashboard": "Dashboard",
      "nav.products": "Products",
      "nav.search": "Search..."
    }
  },
  es: {
    translation: {
      "dashboard.title": "Panel de Control de Cadena de Suministro",
      "stats.inventory": "Inventario Total",
      "stats.revenue": "Ingresos",
      "stats.orders": "Pedidos Activos",
      "stats.efficiency": "Eficiencia",
      "tracking.title": "Seguimiento de Productos",
      "supply.title": "Detalles de la Cadena de Suministro",
      "supply.overview": "Resumen",
      "supply.tracking": "Seguimiento",
      "supply.analytics": "Análisis",
      "supply.inventory": "Salud del Inventario",
      "supply.leadTime": "Tiempo de Entrega",
      "supply.suppliers": "Proveedores",
      "supply.optimal": "Niveles óptimos de stock mantenidos",
      "supply.processing": "Tiempo promedio de procesamiento",
      "supply.partnerships": "Asociaciones activas",
      "supply.order": "Pedido",
      "supply.shipment": "Envío",
      "supply.transit": "En Tránsito al Almacén",
      "supply.delivery": "En Reparto",
      "footer.about": "Soluciones modernas de cadena de suministro para empresas emergentes de IA, AgriTech, Marcas de Consumo, PropTech y Retail.",
      "footer.solutions": "Soluciones",
      "footer.industries": "Industrias",
      "footer.connect": "Conectar",
      "nav.dashboard": "Panel",
      "nav.products": "Productos",
      "nav.search": "Buscar..."
    }
  },
  fr: {
    translation: {
      "dashboard.title": "Tableau de Bord de la Chaîne d'Approvisionnement",
      "stats.inventory": "Inventaire Total",
      "stats.revenue": "Revenus",
      "stats.orders": "Commandes Actives",
      "stats.efficiency": "Efficacité",
      "tracking.title": "Suivi des Produits",
      "supply.title": "Détails de la Chaîne d'Approvisionnement",
      "supply.overview": "Aperçu",
      "supply.tracking": "Suivi",
      "supply.analytics": "Analyses",
      "supply.inventory": "Santé de l'Inventaire",
      "supply.leadTime": "Délai de Livraison",
      "supply.suppliers": "Fournisseurs",
      "supply.optimal": "Niveaux de stock optimaux maintenus",
      "supply.processing": "Temps de traitement moyen",
      "supply.partnerships": "Partenariats actifs",
      "supply.order": "Commande",
      "supply.shipment": "Expédition",
      "supply.transit": "En Transit vers l'Entrepôt",
      "supply.delivery": "En Cours de Livraison",
      "nav.dashboard": "Tableau de Bord",
      "nav.products": "Produits",
      "nav.search": "Rechercher..."
    }
  },
  zh: {
    translation: {
      "dashboard.title": "供应链仪表板",
      "stats.inventory": "总库存",
      "stats.revenue": "收入",
      "stats.orders": "活动订单",
      "stats.efficiency": "效率",
      "tracking.title": "产品追踪",
      "supply.title": "供应链详情",
      "supply.overview": "概览",
      "supply.tracking": "追踪",
      "supply.analytics": "分析",
      "supply.inventory": "库存健康度",
      "supply.leadTime": "交货周期",
      "supply.suppliers": "供应商",
      "supply.optimal": "保持最佳库存水平",
      "supply.processing": "平均处理时间",
      "supply.partnerships": "活跃合作伙伴",
      "supply.order": "订单",
      "supply.shipment": "货运",
      "supply.transit": "运往仓库",
      "supply.delivery": "正在配送",
      "nav.dashboard": "仪表板",
      "nav.products": "产品",
      "nav.search": "搜索..."
    }
  },
  de: {
    translation: {
      "dashboard.title": "Supply Chain Dashboard",
      "stats.inventory": "Gesamtbestand",
      "stats.revenue": "Umsatz",
      "stats.orders": "Aktive Bestellungen",
      "stats.efficiency": "Effizienz",
      "tracking.title": "Produktverfolgung",
      "supply.title": "Supply Chain Details",
      "supply.overview": "Übersicht",
      "supply.tracking": "Verfolgung",
      "supply.analytics": "Analysen",
      "supply.inventory": "Bestandsgesundheit",
      "supply.leadTime": "Lieferzeit",
      "supply.suppliers": "Lieferanten",
      "supply.optimal": "Optimale Lagerbestände gehalten",
      "supply.processing": "Durchschnittliche Bearbeitungszeit",
      "supply.partnerships": "Aktive Partnerschaften",
      "supply.order": "Bestellung",
      "supply.shipment": "Versand",
      "supply.transit": "Im Transit zum Lager",
      "supply.delivery": "In Zustellung",
      "nav.dashboard": "Dashboard",
      "nav.products": "Produkte",
      "nav.search": "Suchen..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
