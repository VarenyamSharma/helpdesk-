
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { Download, Calendar, BarChart3, TrendingUp } from 'lucide-react';

const reportMetrics = [
  {
    title: 'Total Tickets (This Month)',
    value: 485,
    change: '+12%',
    isPositive: true
  },
  {
    title: 'Average Resolution Time',
    value: '2.4 hours',
    change: '-15%',
    isPositive: true
  },
  {
    title: 'Customer Satisfaction',
    value: '4.8/5',
    change: '+0.2',
    isPositive: true
  },
  {
    title: 'First Response Time',
    value: '18 minutes',
    change: '-8%',
    isPositive: true
  }
];

const teamPerformance = [
  { team: 'Technical Support', resolved: 156, avgTime: '2.1h', satisfaction: 4.9 },
  { team: 'Operations', resolved: 89, avgTime: '1.8h', satisfaction: 4.7 },
  { team: 'Level 1 Support', resolved: 203, avgTime: '3.2h', satisfaction: 4.6 },
  { team: 'Escalation Team', resolved: 37, avgTime: '4.5h', satisfaction: 4.8 }
];

export const ReportsPage = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('overview');

  return (
    <>
      <Helmet>
        <title>Reports - Operations Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-violet-crayola">Reports & Analytics</h1>
            <p className="text-muted-foreground">Performance insights and operational reports</p>
          </div>
          <div className="flex gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-capri hover:bg-capri/90 text-white">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reportMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className={`text-sm font-medium ${
                    metric.isPositive ? 'text-turquoise' : 'text-salmon-pink'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TicketChart />
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamPerformance.map((team) => (
                  <div key={team.team} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">{team.team}</p>
                      <p className="text-sm text-muted-foreground">
                        {team.resolved} resolved • {team.avgTime} avg time
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-turquoise" />
                        <span className="font-medium">{team.satisfaction}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">satisfaction</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Technical Issues</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Account & Billing</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-turquoise h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Feature Requests</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-french-sky-blue h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Other</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-mauve h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SLA Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">First Response SLA</p>
                    <p className="text-sm text-muted-foreground">Target: 1 hour</p>
                  </div>
                  <span className="px-3 py-1 bg-turquoise/20 text-turquoise rounded text-sm font-medium">
                    95.2%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Resolution SLA</p>
                    <p className="text-sm text-muted-foreground">Target: 24 hours</p>
                  </div>
                  <span className="px-3 py-1 bg-turquoise/20 text-turquoise rounded text-sm font-medium">
                    88.7%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Escalation SLA</p>
                    <p className="text-sm text-muted-foreground">Target: 4 hours</p>
                  </div>
                  <span className="px-3 py-1 bg-corn/20 text-yellow-700 rounded text-sm font-medium">
                    76.3%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
