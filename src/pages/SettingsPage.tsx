import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Bell, Shield, Users, Database } from 'lucide-react';

export const SettingsPage = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <>
      <Helmet>
        <title>Settings - HelpDesk</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Settings className="h-8 w-8 text-violet-crayola" />
          <div>
            <h1 className="text-3xl font-bold text-violet-crayola">Settings</h1>
            <p className="text-muted-foreground">Configure your application preferences</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full lg:w-auto">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            {isAdmin && <TabsTrigger value="users">Users</TabsTrigger>}
            {isAdmin && <TabsTrigger value="system">System</TabsTrigger>}
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="My Company" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="cst">CST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-capri hover:bg-capri/90 text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-alerts">Email Alerts</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for new tickets</p>
                  </div>
                  <Switch id="email-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="browser-notifications">Browser Notifications</Label>
                    <p className="text-sm text-muted-foreground">Show browser notifications</p>
                  </div>
                  <Switch id="browser-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="escalation-alerts">Escalation Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when tickets are escalated</p>
                  </div>
                  <Switch id="escalation-alerts" defaultChecked />
                </div>
                <Button className="bg-capri hover:bg-capri/90 text-white">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {isAdmin && (
            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-assign tickets</Label>
                      <p className="text-sm text-muted-foreground">Automatically assign new tickets to available agents</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="max-tickets">Max tickets per agent</Label>
                    <Input id="max-tickets" type="number" defaultValue="10" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Allow user registration</Label>
                      <p className="text-sm text-muted-foreground">Allow new users to create accounts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button className="bg-capri hover:bg-capri/90 text-white">
                    Update Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {isAdmin && (
            <TabsContent value="system" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable maintenance mode</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="60" />
                  </div>
                  <Button className="bg-capri hover:bg-capri/90 text-white">
                    Save Configuration
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </>
  );
};
