
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const mockTickets = [
  {
    id: 'T-001',
    title: 'Login issues with new system',
    status: 'open',
    priority: 'high',
    createdAt: '2 hours ago'
  },
  {
    id: 'T-002',
    title: 'Email notifications not working',
    status: 'in-progress',
    priority: 'medium',
    createdAt: '4 hours ago'
  },
  {
    id: 'T-003',
    title: 'Performance issues on dashboard',
    status: 'escalated',
    priority: 'critical',
    createdAt: '1 day ago'
  },
  {
    id: 'T-004',
    title: 'Feature request: Dark mode',
    status: 'resolved',
    priority: 'low',
    createdAt: '2 days ago'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-electric-blue text-white';
    case 'resolved':
      return 'bg-turquoise text-white';
    case 'escalated':
      return 'bg-salmon-pink text-white';
    case 'in-progress':
      return 'bg-french-sky-blue text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'critical':
      return 'bg-red-500 text-white';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'medium':
      return 'bg-yellow-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const RecentTickets = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tickets</CardTitle>
        <CardDescription>
          Latest ticket updates and activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-mono text-muted-foreground">
                    {ticket.id}
                  </span>
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                  <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </div>
                <p className="font-medium truncate">{ticket.title}</p>
                <p className="text-sm text-muted-foreground">{ticket.createdAt}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
