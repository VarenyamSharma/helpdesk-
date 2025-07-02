
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { RecentTickets } from '@/components/dashboard/RecentTickets';
import { Ticket, CheckCircle, AlertCircle, TrendingUp, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AdminDashboard = () => {
  const { user } = useAuth();

  const metrics = [
    {
      title: 'Total Open Tickets',
      value: 47,
      icon: Ticket,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      trend: { value: 12, isPositive: false }
    },
    {
      title: 'Resolved This Month',
      value: 324,
      icon: CheckCircle,
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10',
      trend: { value: 18, isPositive: true }
    },
    {
      title: 'Escalated Issues',
      value: 8,
      icon: AlertCircle,
      color: 'text-salmon-pink',
      bgColor: 'bg-salmon-pink/10',
      trend: { value: 3, isPositive: false }
    },
    {
      title: 'Active Users',
      value: 156,
      icon: Users,
      color: 'text-violet-crayola',
      bgColor: 'bg-mauve/20',
      trend: { value: 8, isPositive: true }
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            System overview and management controls.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            System Settings
          </Button>
          <Button className="bg-capri hover:bg-capri/90 text-white">
            <Users className="mr-2 h-4 w-4" />
            Manage Users
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TicketChart />
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Server Status</span>
              <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Database</span>
              <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">Healthy</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response Time</span>
              <span className="px-2 py-1 bg-corn/20 text-yellow-700 rounded text-sm">245ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Active Sessions</span>
              <span className="px-2 py-1 bg-french-sky-blue/20 text-true-blue rounded text-sm">89</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <RecentTickets />
    </div>
  );
};
