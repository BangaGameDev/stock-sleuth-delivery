import { Link } from "react-router-dom";
import {
  Package,
  Users,
  Truck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", path: "/" },
    { icon: Package, label: "Orders", path: "/orders" },
    { icon: Users, label: "Customers", path: "/customers" },
    { icon: Truck, label: "Drivers", path: "/drivers" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div
      className={cn(
        "flex h-screen w-64 flex-col border-r bg-white",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <h1 className="text-lg font-semibold">Delivery Manager</h1>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}