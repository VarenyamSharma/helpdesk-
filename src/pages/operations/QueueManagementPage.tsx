
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Users, ArrowRight, Pause, Play } from 'lucide-react';

const queueData = [
  {
    id: 'new',
    name: 'New Tickets',
    count: 23,
    color: 'bg-electric-blue',
    textColor: 'text-electric-blue',
    bgColor: 'bg-electric-blue/10'
  },
  {
    id: 'assigned',
    name: 'Assigned',
    count: 15,
    color: 'bg-french-sky-blue',
    textColor: 'text-french-sky-blue',
    bgColor: 'bg-french-sky-blue/10'
  },
  {
    id: 'in-progress',
    name: 'In Progress',
    count: 18,
    color: 'bg-turquoise',
    textColor: 'text-turquoise',
    bgColor: 'bg-turquoise/10'
  },
  {
    id: 'waiting',
    name: 'Waiting Customer',
    count: 7,
    color: 'bg-corn',
    textColor: 'text-yellow-700',
    bgColor: 'bg-corn/10'
  },
  {
    id: 'escalated',
    name: 'Escalated',
    count: 4,
    color: 'bg-salmon-pink',
    textColor: 'text-salmon-pink',
    bgColor: 'bg-salmon-pink/10'
  }
];

const agents = [
  { name: 'John Doe', tickets: 8, status: 'active', department: 'Technical' },
  { name: 'Jane Smith', tickets: 6, status: 'active', department: 'Technical' },
  { name: 'Mike Johnson', tickets: 5, status: 'busy', department: 'Operations' },
  { name: 'Alice Brown', tickets: 3, status: 'available', department: 'Support' },
  { name: 'Bob Wilson', tickets: 7, status: 'active', department: 'Technical' }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-turquoise text-white';
    case 'active':
      return 'bg-electric-blue text-white';
    case 'busy':
      return 'bg-corn text-white';
    case 'offline':
      return 'bg-gray-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const QueueManagementPage = () => {
  const [autoAssign, setAutoAssign] = useState(true);

  return (
    <>
      <Helmet>
        <title>Queue Management - Operations Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-violet-crayola">Queue Management</h1>
            <p className="text-muted-foreground">Monitor and manage ticket queues and agent assignments</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={autoAssign ? "default" : "outline"}
              onClick={() => setAutoAssign(!autoAssign)}
              className={autoAssign ? "bg-capri hover:bg-capri/90 text-white" : ""}
            >
              {autoAssign ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              Auto-assign {autoAssign ? 'ON' : 'OFF'}
            </Button>
            <Button className="bg-capri hover:bg-capri/90 text-white">
              <Users className="mr-2 h-4 w-4" />
              Bulk Assign
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {queueData.map((queue) => (
            <Card key={queue.id} className={`border-l-4 ${queue.color}`}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {queue.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className={`text-3xl font-bold ${queue.textColor}`}>
                    {queue.count}
                  </span>
                  <BarChart3 className={`h-6 w-6 ${queue.textColor}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Agent Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-mauve rounded-full flex items-center justify-center">
                        <span className="text-violet-crayola font-medium">
                          {agent.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm text-muted-foreground">{agent.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{agent.tickets} tickets</span>
                      <Badge className={getStatusColor(agent.status)}>
                        {agent.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Queue Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <Button variant="outline" className="justify-between">
                  <span>Move tickets to Technical Queue</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Escalate high priority tickets</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Reassign unassigned tickets</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Close resolved tickets</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-mauve/10 rounded">
                <h4 className="font-medium text-violet-crayola mb-2">Assignment Rules</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Max tickets per agent:</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Auto-escalation time:</span>
                    <span className="font-medium">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Round-robin assignment:</span>
                    <span className={`font-medium ${autoAssign ? 'text-turquoise' : 'text-gray-500'}`}>
                      {autoAssign ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
