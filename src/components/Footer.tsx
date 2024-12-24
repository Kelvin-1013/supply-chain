import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">SupplySphere</h3>
            <p className="text-sm text-muted-foreground">
              Modern supply chain solutions for emerging AI companies, AgriTech, Consumer Brands, PropTech, and Retail.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>Supply Chain Management</li>
              <li>Inventory Tracking</li>
              <li>Real-time Analytics</li>
              <li>Supplier Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>AgriTech</li>
              <li>Consumer Brands</li>
              <li>PropTech</li>
              <li>Retail</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 SupplySphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}