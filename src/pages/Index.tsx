import { Package, TrendingUp, Users, Truck } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentOrders } from "@/components/dashboard/RecentOrders";

const Index = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "150",
      description: "+12% from last month",
      icon: <Package className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Revenue",
      value: "$12,500",
      description: "+8% from last month",
      icon: <TrendingUp className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Active Customers",
      value: "45",
      description: "+5% from last month",
      icon: <Users className="h-6 w-6 text-primary-500" />,
    },
    {
      title: "Active Drivers",
      value: "8",
      description: "2 currently delivering",
      icon: <Truck className="h-6 w-6 text-primary-500" />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          <div className="mt-6">
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;