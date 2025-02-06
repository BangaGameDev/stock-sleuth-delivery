
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Save } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Settings = () => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    companyName: "",
    email: "",
    phone: "",
    maxDistance: "",
    baseRate: "",
    ratePerKm: "",
    lowStockThreshold: "",
    orderNotifications: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSettings(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Here you would typically save to your backend
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <SettingsIcon className="h-6 w-6 text-primary-500" />
                <h1 className="text-2xl font-bold">Settings</h1>
              </div>
              <Button onClick={handleSave} disabled={saving}>
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
            
            <div className="grid gap-6">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <h2 className="text-lg font-semibold mb-4 text-blue-700">Company Information</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input 
                      id="companyName" 
                      placeholder="Enter company name"
                      value={settings.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter contact email"
                      value={settings.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter contact phone"
                      value={settings.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-green-500">
                <h2 className="text-lg font-semibold mb-4 text-green-700">Delivery Settings</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="maxDistance">Maximum Delivery Distance (km)</Label>
                    <Input 
                      id="maxDistance" 
                      type="number" 
                      placeholder="Enter maximum distance"
                      value={settings.maxDistance}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baseRate">Base Delivery Rate ($)</Label>
                    <Input 
                      id="baseRate" 
                      type="number" 
                      placeholder="Enter base rate"
                      value={settings.baseRate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ratePerKm">Rate per Kilometer ($)</Label>
                    <Input 
                      id="ratePerKm" 
                      type="number" 
                      placeholder="Enter rate per km"
                      value={settings.ratePerKm}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-purple-500">
                <h2 className="text-lg font-semibold mb-4 text-purple-700">Notification Settings</h2>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lowStockThreshold">Low Stock Alert Threshold</Label>
                    <Input 
                      id="lowStockThreshold" 
                      type="number" 
                      placeholder="Enter threshold value"
                      value={settings.lowStockThreshold}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orderNotifications">Order Notifications Email</Label>
                    <Input 
                      id="orderNotifications" 
                      type="email" 
                      placeholder="Enter email for notifications"
                      value={settings.orderNotifications}
                      onChange={handleChange}
                    />
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
