
export type UserRole = "admin" | "driver" | "client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Order {
  id: string;
  clientName: string;
  status: "pending" | "in_progress" | "delivered";
  address: string;
  date: string;
  total: number;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
  deliveries: number;
  rating: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  orders: number;
  joinDate: string;
}
