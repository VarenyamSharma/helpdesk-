
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { RecentTickets } from '@/components/dashboard/RecentTickets';
import { CreateTicketForm } from '@/components/ticket/CreateTicketForm';
import { Ticket, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const UserDashboard = () => {
  const { user } = useAuth();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const metrics = [
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
    },
    {
      title: 'Pending Response',
      value: 2,
      icon: Clock,
      color: 'text-french-sky-blue',
      bgColor: 'bg-french-sky-blue/10'
    },
    {
      title: 'Escalated',
      value: 1,
      icon: AlertCircle,
      color: 'text-salmon-pink',
      bgColor: 'bg-salmon-pink/10'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your support tickets.
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-capri hover:bg-capri/90 text-white">
              Create New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <CreateTicketForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full justify-start bg-capri hover:bg-capri/90 text-white">
                  <Ticket className="mr-2 h-4 w-4" />
                  Submit New Request
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/tickets">
                <CheckCircle className="mr-2 h-4 w-4" />
                View My Tickets
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/tickets">
                <Clock className="mr-2 h-4 w-4" />
                Check Status
              </a>
            </Button>
          </CardContent>
        </Card>
        <RecentTickets />
      </div>
    </div>
  );
};
