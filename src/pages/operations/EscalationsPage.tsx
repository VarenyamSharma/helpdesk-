
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, AlertTriangle, Clock, User, MessageSquare } from 'lucide-react';

const escalatedTickets = [
  {
    id: 'T-001',
    title: 'Critical server outage affecting all users',
    customer: 'Enterprise Corp',
    priority: 'critical',
    escalatedAt: '2024-07-02 09:30',
    escalatedBy: 'John Doe',
    assignedTo: 'Senior Team',
    timeInEscalation: '2h 30m',
    reason: 'Customer impact > 100 users'
  },
  {
    id: 'T-015',
    title: 'Payment processing system down',
    customer: 'E-commerce Ltd',
    priority: 'high',
    escalatedAt: '2024-07-02 11:15',
    escalatedBy: 'Jane Smith',
    assignedTo: 'Technical Lead',
    timeInEscalation: '45m',
    reason: 'Revenue impact'
  },
  {
    id: 'T-032',
    title: 'Data synchronization issues',
    customer: 'SaaS Company',
    priority: 'high',
    escalatedAt: '2024-07-02 14:00',
    escalatedBy: 'Mike Johnson',
    assignedTo: 'Database Team',
    timeInEscalation: '1h 15m',
    reason: 'Technical complexity'
  }
];

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

export const EscalationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = escalatedTickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Escalations - Operations Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-violet-crayola">Escalated Tickets</h1>
            <p className="text-muted-foreground">Monitor and manage escalated support cases</p>
          </div>
          <Button className="bg-capri hover:bg-capri/90 text-white">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Create Escalation
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-l-4 border-red-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Critical Escalations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-500">1</span>
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                High Priority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-orange-500">2</span>
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-turquoise">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-turquoise">4.2h</span>
                <Clock className="h-6 w-6 text-turquoise" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-crayola">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Escalation Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-violet-crayola">8%</span>
                <User className="h-6 w-6 text-violet-crayola" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search escalated tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Escalated By</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Time in Escalation</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-mono">{ticket.id}</TableCell>
                      <TableCell className="font-medium max-w-xs truncate">
                        {ticket.title}
                      </TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{ticket.escalatedBy}</TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                      <TableCell>{ticket.timeInEscalation}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <User className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Escalation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 border rounded bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm">{ticket.id}</span>
                    <Badge className={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </Badge>
                  </div>
                  <p className="font-medium mb-2">{ticket.title}</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div><strong>Reason:</strong> {ticket.reason}</div>
                    <div><strong>Escalated:</strong> {ticket.escalatedAt}</div>
                    <div><strong>Customer:</strong> {ticket.customer}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
