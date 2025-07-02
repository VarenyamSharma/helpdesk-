
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketChart } from '@/components/dashboard/TicketChart';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { BarChart3, TrendingUp, Users, Clock, Ticket } from 'lucide-react';

export const AnalyticsPage = () => {
  const metrics = [
    {
      title: 'Total Tickets This Month',
      value: 486,
      icon: Ticket,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
      trend: { value: 23, isPositive: true }
    },
    {
      title: 'Average Resolution Time',
      value: 2.4,
      icon: Clock,
      color: 'text-turquoise',
      bgColor: 'bg-turquoise/10',
      trend: { value: 15, isPositive: false }
    },
    {
      title: 'Customer Satisfaction',
      value: 4.8,
      icon: TrendingUp,
      color: 'text-violet-crayola',
      bgColor: 'bg-mauve/20',
      trend: { value: 5, isPositive: true }
    },
    {
      title: 'Active Agents',
      value: 24,
      icon: Users,
      color: 'text-french-sky-blue',
      bgColor: 'bg-french-sky-blue/10',
      trend: { value: 2, isPositive: true }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Analytics - Admin Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-violet-crayola">Analytics</h1>
          <p className="text-muted-foreground">Performance insights and system metrics</p>
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
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Technical Team</p>
                  <p className="text-sm text-muted-foreground">Avg: 2.1 hrs resolution</p>
                </div>
                <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">Excellent</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Operations Team</p>
                  <p className="text-sm text-muted-foreground">Avg: 1.8 hrs resolution</p>
                </div>
                <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">Excellent</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Level 1 Support</p>
                  <p className="text-sm text-muted-foreground">Avg: 3.2 hrs resolution</p>
                </div>
                <span className="px-2 py-1 bg-corn/20 text-yellow-700 rounded text-sm">Good</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Technical Issues</span>
                <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-sm">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Account & Billing</span>
                <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Feature Requests</span>
                <span className="px-2 py-1 bg-french-sky-blue/20 text-true-blue rounded text-sm">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Other</span>
                <span className="px-2 py-1 bg-mauve/20 text-violet-crayola rounded text-sm">10%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Priority Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Critical</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-600 rounded text-sm">5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>High</span>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-600 rounded text-sm">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Medium</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 rounded text-sm">50%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Low</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-sm">30%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>First Response</span>
                <span className="px-2 py-1 bg-turquoise/20 text-turquoise rounded text-sm">24 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Average Response</span>
                <span className="px-2 py-1 bg-french-sky-blue/20 text-true-blue rounded text-sm">1.2 hrs</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Resolution Time</span>
                <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-sm">2.4 hrs</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
