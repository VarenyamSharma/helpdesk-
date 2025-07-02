
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MetricCard } from './MetricCard';
import { TicketChart } from './TicketChart';
import { RecentTickets } from './RecentTickets';
import { Ticket, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

const mockMetrics = {
  open: 24,
  resolved: 156,
  escalated: 8,
  inProgress: 12
};

export const DashboardLayout = () => {
  const { user } = useAuth();

  const getRoleSpecificMetrics = () => {
    switch (user?.role) {
      case 'admin':
        return [
          {
            title: 'Open Tickets',
            value: mockMetrics.open,
            icon: Ticket,
            color: 'text-electric-blue',
            bgColor: 'bg-electric-blue/10',
            trend: { value: 12, isPositive: false }
          },
          {
            title: 'Resolved Tickets',
            value: mockMetrics.resolved,
            icon: CheckCircle,
            color: 'text-turquoise',
            bgColor: 'bg-turquoise/10',
            trend: { value: 8, isPositive: true }
          },
          {
            title: 'Escalated Tickets',
            value: mockMetrics.escalated,
            icon: AlertCircle,
            color: 'text-salmon-pink',
            bgColor: 'bg-salmon-pink/10',
            trend: { value: 3, isPositive: false }
          },
          {
            title: 'In Progress',
            value: mockMetrics.inProgress,
            icon: TrendingUp,
            color: 'text-french-sky-blue',
            bgColor: 'bg-french-sky-blue/10',
            trend: { value: 15, isPositive: true }
          }
        ];
      case 'technical':
      case 'operations':
        return [
          {
            title: 'Assigned to Me',
            value: 8,
            icon: Ticket,
            color: 'text-electric-blue',
            bgColor: 'bg-electric-blue/10'
          },
          {
            title: 'Resolved Today',
            value: 12,
            icon: CheckCircle,
            color: 'text-turquoise',
            bgColor: 'bg-turquoise/10'
          },
          {
            title: 'Escalated',
            value: 3,
            icon: AlertCircle,
            color: 'text-salmon-pink',
            bgColor: 'bg-salmon-pink/10'
          }
        ];
      default:
        return [
          {
            title: 'My Open Tickets',
            value: 3,
            icon: Ticket,
            color: 'text-electric-blue',
            bgColor: 'bg-electric-blue/10'
          },
          {
            title: 'Resolved Tickets',
            value: 15,
            icon: CheckCircle,
            color: 'text-turquoise',
            bgColor: 'bg-turquoise/10'
          }
        ];
    }
  };

  const metrics = getRoleSpecificMetrics();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your tickets today.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TicketChart />
        <RecentTickets />
      </div>
    </div>
  );
};
