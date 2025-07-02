
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Home,
  Ticket,
  Users,
  Settings,
  BarChart3,
  HelpCircle,
  User,
  LogOut,
  Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const getNavigationItems = (role: string) => {
  const baseItems = [
    { title: 'Dashboard', url: getDashboardUrl(role), icon: Home },
    { title: 'My Tickets', url: '/tickets', icon: Ticket },
  ];

  const roleSpecificItems = {
    admin: [
      { title: 'All Tickets', url: '/admin/tickets', icon: Ticket },
      { title: 'Users', url: '/admin/users', icon: Users },
      { title: 'Analytics', url: '/admin/analytics', icon: BarChart3 },
      { title: 'System Settings', url: '/admin/settings', icon: Settings },
    ],
    technical: [
      { title: 'Assigned Tickets', url: '/technical/tickets', icon: Ticket },
      { title: 'Knowledge Base', url: '/technical/kb', icon: HelpCircle },
      { title: 'Tools', url: '/technical/tools', icon: Wrench },
    ],
    operations: [
      { title: 'Queue Management', url: '/operations/queue', icon: BarChart3 },
      { title: 'Escalations', url: '/operations/escalations', icon: Ticket },
      { title: 'Reports', url: '/operations/reports', icon: BarChart3 },
    ],
    user: []
  };

  return [...baseItems, ...roleSpecificItems[role as keyof typeof roleSpecificItems]];
};

const getDashboardUrl = (role: string): string => {
  switch (role) {
    case 'admin':
      return '/admin/dashboard';
    case 'technical':
      return '/technical/dashboard';
    case 'operations':
      return '/operations/dashboard';
    default:
      return '/dashboard';
  }
};

export const AppSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const { state } = useSidebar();

  const navigationItems = getNavigationItems(user?.role || 'user');

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-8 w-8 text-capri" />
          {state === 'expanded' && (
            <div>
              <h2 className="font-bold text-violet-crayola">HelpDesk</h2>
              <p className="text-xs text-muted-foreground capitalize">
                {user?.role} Portal
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 bg-mauve rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-violet-crayola" />
          </div>
          {state === 'expanded' && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          )}
        </div>
        {state === 'expanded' && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};
