import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import type { Order } from "@/lib/types";

const mockOrders: Order[] = [
  {
    id: "1",
    clientName: "John Doe",
    status: "pending",
    address: "123 Main St",
    date: "2024-03-20",
    total: 150.00
  },
  {
    id: "2",
    clientName: "Jane Smith",
    status: "in_progress",
    address: "456 Oak Ave",
    date: "2024-03-20",
    total: 75.50
  },
  {
    id: "3",
    clientName: "Bob Johnson",
    status: "delivered",
    address: "789 Pine Rd",
    date: "2024-03-20",
    total: 200.25
  }
];

export function RecentOrders() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>{order.clientName}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                    ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                    {order.status.replace('_', ' ')}
                  </span>
                </TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}