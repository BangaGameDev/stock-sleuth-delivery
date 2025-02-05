
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Settings as SettingsIcon } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const Settings = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <SettingsIcon className="h-6 w-6 text-primary-500" />
              <h1 className="text-2xl font-bold">Settings</h1>
            </div>
            
            <div className="grid gap-6">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Company Information</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Enter company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input id="email" type="email" placeholder="Enter contact email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter contact phone" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Delivery Settings</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="maxDistance">Maximum Delivery Distance (km)</Label>
                    <Input id="maxDistance" type="number" placeholder="Enter maximum distance" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baseRate">Base Delivery Rate ($)</Label>
                    <Input id="baseRate" type="number" placeholder="Enter base rate" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ratePerKm">Rate per Kilometer ($)</Label>
                    <Input id="ratePerKm" type="number" placeholder="Enter rate per km" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lowStockThreshold">Low Stock Alert Threshold</Label>
                    <Input id="lowStockThreshold" type="number" placeholder="Enter threshold value" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orderNotifications">Order Notifications Email</Label>
                    <Input id="orderNotifications" type="email" placeholder="Enter email for notifications" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
