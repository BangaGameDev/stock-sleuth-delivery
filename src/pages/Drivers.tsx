
import { Truck } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const Drivers = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="h-6 w-6 text-primary-500" />
              <h1 className="text-2xl font-bold">Drivers</h1>
            </div>
            {/* Driver content will be implemented later */}
            <div className="grid gap-6">
              <p className="text-gray-600">Driver management coming soon...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Drivers;
