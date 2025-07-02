
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { RecentTickets } from '@/components/dashboard/RecentTickets';
import { Ticket, CheckCircle, AlertCircle, Wrench, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const TechnicalDashboard = () => {
  const { user } = useAuth();

  const metrics = [
    {
      title: 'Assigned to Me',
      value: 12,
      icon: Ticket,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10'
    },
    {
      title: 'Resolved Today',
      value: 8,
      icon: CheckCircle,
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10'
    },
    {
      title: 'High Priority',
      value: 4,
      icon: AlertCircle,
      color: 'text-salmon-pink',
      bgColor: 'bg-salmon-pink/10'
    },
    {
      title: 'Avg Response Time',
      value: 23,
      icon: Clock,
      color: 'text-french-sky-blue',
      bgColor: 'bg-french-sky-blue/10'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">
            Technical Support Dashboard
          </h1>
          <p className="text-muted-foreground">
            Your assigned tickets and technical resources.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BookOpen className="mr-2 h-4 w-4" />
            Knowledge Base
          </Button>
          <Button className="bg-capri hover:bg-capri/90 text-white">
            <Wrench className="mr-2 h-4 w-4" />
            Tools
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
            <CardTitle>Priority Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded bg-red-50">
              <div>
                <p className="font-medium">Critical - Server Down</p>
                <p className="text-sm text-muted-foreground">Ticket #T-2024-001</p>
              </div>
              <Button size="sm" className="bg-salmon-pink hover:bg-salmon-pink/90 text-white">
                Take
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded bg-orange-50">
              <div>
                <p className="font-medium">High - Login Issues</p>
                <p className="text-sm text-muted-foreground">Ticket #T-2024-002</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">Medium - Email Setup</p>
                <p className="text-sm text-muted-foreground">Ticket #T-2024-003</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
        <RecentTickets />
      </div>

      <TicketChart />
    </div>
  );
};
