import { Card } from "@/components/ui/card";
import type { StatsCardProps } from "@/lib/types";

export function StatsCard({ title, value, description, icon }: StatsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-primary-100 p-3">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold">{value}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Card>
  );
}