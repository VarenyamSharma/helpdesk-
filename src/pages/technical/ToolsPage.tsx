
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Server, Code, Monitor, Terminal, Wrench, ExternalLink } from 'lucide-react';

const techTools = [
  {
    name: 'Database Manager',
    description: 'Query and manage database connections',
    icon: Database,
    status: 'available',
    url: '#'
  },
  {
    name: 'Server Monitor',
    description: 'Real-time server performance monitoring',
    icon: Server,
    status: 'available',
    url: '#'
  },
  {
    name: 'API Tester',
    description: 'Test and debug API endpoints',
    icon: Code,
    status: 'available',
    url: '#'
  },
  {
    name: 'Log Analyzer',
    description: 'Search and analyze application logs',
    icon: Monitor,
    status: 'maintenance',
    url: '#'
  },
  {
    name: 'SSH Terminal',
    description: 'Secure shell access to servers',
    icon: Terminal,
    status: 'available',
    url: '#'
  },
  {
    name: 'Diagnostic Tools',
    description: 'System health and performance diagnostics',
    icon: Wrench,
    status: 'available',
    url: '#'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-turquoise text-white';
    case 'maintenance':
      return 'bg-corn text-white';
    case 'offline':
      return 'bg-salmon-pink text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tools - Technical Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">Technical Tools</h1>
          <p className="text-muted-foreground">Development and debugging tools for technical support</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techTools.map((tool) => (
            <Card key={tool.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <tool.icon className="h-8 w-8 text-electric-blue" />
                  <Badge className={getStatusColor(tool.status)}>
                    {tool.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button 
                  className="w-full bg-capri hover:bg-capri/90 text-white"
                  disabled={tool.status !== 'available'}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {tool.status === 'available' ? 'Launch Tool' : 'Unavailable'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="justify-start">
                <Database className="mr-2 h-4 w-4" />
                Check DB Status
              </Button>
              <Button variant="outline" className="justify-start">
                <Server className="mr-2 h-4 w-4" />
                Server Health
              </Button>
              <Button variant="outline" className="justify-start">
                <Monitor className="mr-2 h-4 w-4" />
                View Logs
              </Button>
              <Button variant="outline" className="justify-start">
                <Wrench className="mr-2 h-4 w-4" />
                Run Diagnostics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
