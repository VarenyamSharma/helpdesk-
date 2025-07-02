
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { RecentTickets } from '@/components/dashboard/RecentTickets';
import { Ticket, CheckCircle, AlertCircle, TrendingUp, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const OperationsDashboard = () => {
  const { user } = useAuth();

  const metrics = [
    {
      title: 'Queue Length',
      value: 28,
      icon: BarChart3,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      trend: { value: 5, isPositive: false }
    },
    {
      title: 'Processed Today',
      value: 142,
      icon: CheckCircle,
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10',
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Escalations',
      value: 6,
      icon: AlertCircle,
      color: 'text-salmon-pink',
      bgColor: 'bg-salmon-pink/10',
      trend: { value: 2, isPositive: false }
    },
    {
      title: 'Agent Utilization',
      value: 87,
      icon: Users,
      color: 'text-violet-crayola',
      bgColor: 'bg-mauve/20',
      trend: { value: 3, isPositive: true }
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">
            Operations Dashboard
          </h1>
          <p className="text-muted-foreground">
            Queue management and operational metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Button className="bg-capri hover:bg-capri/90 text-white">
            <Users className="mr-2 h-4 w-4" />
            Assign Tickets
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Technical Team</p>
                <p className="text-sm text-muted-foreground">12 active agents</p>
              </div>
              <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">92% SLA</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Level 1 Support</p>
                <p className="text-sm text-muted-foreground">8 active agents</p>
              </div>
              <span className="px-2 py-1 bg-corn/20 text-yellow-700 rounded text-sm">85% SLA</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Escalation Team</p>
                <p className="text-sm text-muted-foreground">4 active agents</p>
              </div>
              <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">96% SLA</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Queue Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>New Tickets</span>
              <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-sm">14</span>
            </div>
            <div className="flex items-center justify-between">
              <span>In Progress</span>
              <span className="px-2 py-1 bg-french-sky-blue/20 text-true-blue rounded text-sm">22</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Awaiting Customer</span>
              <span className="px-2 py-1 bg-corn/20 text-yellow-700 rounded text-sm">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Ready to Close</span>
              <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">12</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TicketChart />
        <RecentTickets />
      </div>
    </div>
  );
};
