
import { Link, useNavigate } from "react-router-dom";
import {
  Package,
  Users,
  Truck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { signOut, userRole } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", path: "/", roles: ["admin", "driver", "customer"] },
    { icon: Package, label: "Orders", path: "/orders", roles: ["admin", "driver", "customer"] },
    { icon: Users, label: "Customers", path: "/customers", roles: ["admin"] },
    { icon: Truck, label: "Drivers", path: "/drivers", roles: ["admin"] },
    { icon: Settings, label: "Settings", path: "/settings", roles: ["admin", "driver", "customer"] },
  ].filter(item => !item.roles || item.roles.includes(userRole || "") || userRole === "admin");

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  console.log("Current user role:", userRole); // Debug log to check user role

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
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
