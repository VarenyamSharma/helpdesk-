
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', open: 12, resolved: 18, escalated: 2 },
  { name: 'Tue', open: 15, resolved: 14, escalated: 3 },
  { name: 'Wed', open: 8, resolved: 22, escalated: 1 },
  { name: 'Thu', open: 18, resolved: 16, escalated: 4 },
  { name: 'Fri', open: 14, resolved: 20, escalated: 2 },
  { name: 'Sat', open: 6, resolved: 8, escalated: 1 },
  { name: 'Sun', open: 4, resolved: 6, escalated: 0 },
];

export const TicketChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Trends</CardTitle>
        <CardDescription>
          Weekly overview of ticket activity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="open" fill="#2AF5FF" name="Open" />
            <Bar dataKey="resolved" fill="#55D6C2" name="Resolved" />
            <Bar dataKey="escalated" fill="#F49097" name="Escalated" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
