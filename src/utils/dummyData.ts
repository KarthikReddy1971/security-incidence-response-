
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'employee';
  avatar?: string;
}

export interface Comment {
  id: string;
  incidentId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  type: 'phishing' | 'malware' | 'unauthorized_access' | 'data_breach' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'reported' | 'investigating' | 'contained' | 'resolved' | 'closed';
  reportedBy: {
    id: string;
    name: string;
  };
  assignedTo?: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
  affectedSystems?: string[];
  comments?: Comment[];
}

// Sample users
export const users: User[] = [
  {
    id: 'user1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
  {
    id: 'user2',
    name: 'Security Analyst',
    email: 'analyst@example.com',
    role: 'analyst',
  },
  {
    id: 'user3',
    name: 'Employee',
    email: 'employee@example.com',
    role: 'employee',
  }
];

// Sample incidents
export const incidents: Incident[] = [
  {
    id: 'inc-001',
    title: 'Suspicious Email Received',
    description: 'Multiple employees received an email claiming to be from IT asking for password resets.',
    type: 'phishing',
    severity: 'high',
    status: 'contained',
    reportedBy: {
      id: 'user3',
      name: 'Employee',
    },
    assignedTo: {
      id: 'user2',
      name: 'Security Analyst',
    },
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    affectedSystems: ['Email Systems'],
    comments: [
      {
        id: 'comment1',
        incidentId: 'inc-001',
        userId: 'user2',
        userName: 'Security Analyst',
        content: 'Email headers analyzed. Source appears to be from outside our domain.',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      }
    ]
  },
  {
    id: 'inc-002',
    title: 'Ransomware Attack',
    description: 'Finance department reporting encrypted files and ransom demands.',
    type: 'malware',
    severity: 'critical',
    status: 'investigating',
    reportedBy: {
      id: 'user3',
      name: 'Employee',
    },
    assignedTo: {
      id: 'user1',
      name: 'Admin User',
    },
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    affectedSystems: ['Finance Workstations', 'File Servers'],
  },
  {
    id: 'inc-003',
    title: 'Failed Login Attempts',
    description: 'Multiple failed login attempts detected on the admin portal.',
    type: 'unauthorized_access',
    severity: 'medium',
    status: 'reported',
    reportedBy: {
      id: 'user2',
      name: 'Security Analyst',
    },
    createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    updatedAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    affectedSystems: ['Admin Portal'],
  },
  {
    id: 'inc-004',
    title: 'Data Exposure on Public Website',
    description: 'Customer data was briefly exposed on our public website due to misconfiguration.',
    type: 'data_breach',
    severity: 'high',
    status: 'resolved',
    reportedBy: {
      id: 'user3',
      name: 'Employee',
    },
    assignedTo: {
      id: 'user2',
      name: 'Security Analyst',
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    affectedSystems: ['Public Website', 'Customer Database'],
  },
  {
    id: 'inc-005',
    title: 'Suspicious Network Traffic',
    description: 'Unusual outbound traffic detected to foreign IP addresses.',
    type: 'other',
    severity: 'low',
    status: 'closed',
    reportedBy: {
      id: 'user2',
      name: 'Security Analyst',
    },
    assignedTo: {
      id: 'user2',
      name: 'Security Analyst',
    },
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    updatedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000), // 12 days ago
    affectedSystems: ['Network Infrastructure'],
  }
];

// Helper functions
export const getIncidentsByStatus = (status: Incident['status']): Incident[] => {
  return incidents.filter(incident => incident.status === status);
};

export const getIncidentsBySeverity = (severity: Incident['severity']): Incident[] => {
  return incidents.filter(incident => incident.severity === severity);
};

export const getRecentIncidents = (count: number = 5): Incident[] => {
  return [...incidents]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, count);
};

export const getIncidentById = (id: string): Incident | undefined => {
  return incidents.find(incident => incident.id === id);
};

export const getMetrics = () => {
  return {
    totalIncidents: incidents.length,
    openIncidents: incidents.filter(inc => 
      ['reported', 'investigating', 'contained'].includes(inc.status)).length,
    criticalIncidents: incidents.filter(inc => inc.severity === 'critical').length,
    resolvedLast30Days: incidents.filter(inc => 
      inc.status === 'resolved' && 
      inc.updatedAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length
  };
};
