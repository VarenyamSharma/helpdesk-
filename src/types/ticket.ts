
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'escalated';
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignedTo?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  attachments?: string[];
}

export interface TicketMetrics {
  open: number;
  resolved: number;
  escalated: number;
  inProgress: number;
}
