import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IncidentList from "./components/Incidents/IncidentList";
import IncidentForm from "./components/Incidents/IncidentForm";
import Header from "./components/Layout/Header";
import { 
  Settings, 
  FileText,
  BarChart3, 
  Users, 
  Shield, 
  Calendar,
  Database,
  Bell
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// Incidents Page Component
const IncidentsPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <IncidentList />
      </div>
    </main>
  </div>
);

// New Incident Page Component
const NewIncidentPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Report Security Incident</h1>
        <IncidentForm />
      </div>
    </main>
  </div>
);

// Reports Page Component with actual content
const ReportsPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Security Reports</h1>
          <div className="flex space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Export</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <NavigationMenuLink className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
                        <FileText className="h-4 w-4" />
                        <span>Export as PDF</span>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
                        <FileText className="h-4 w-4" />
                        <span>Export as CSV</span>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Incidents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">284</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Mean Time to Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">18.3 h</div>
                  <p className="text-xs text-muted-foreground mt-1">-5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">High Severity Incidents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Monthly Incident Report</CardTitle>
                <CardDescription>Breakdown of incidents by type and severity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Incident Type</TableHead>
                      <TableHead>Low</TableHead>
                      <TableHead>Medium</TableHead>
                      <TableHead>High</TableHead>
                      <TableHead>Critical</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Phishing</TableCell>
                      <TableCell>45</TableCell>
                      <TableCell>38</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>98</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Malware</TableCell>
                      <TableCell>28</TableCell>
                      <TableCell>32</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>81</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Unauthorized Access</TableCell>
                      <TableCell>16</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>9</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>51</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Data Breach</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>24</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>DDoS</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>30</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Incident Trend Analysis</CardTitle>
                <CardDescription>Six month trend of security incidents</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <BarChart3 className="h-16 w-16 mb-4" />
                  <div className="text-center">
                    <p>Chart data would display here</p>
                    <p className="text-sm">(Using Recharts library)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Reports</CardTitle>
                <CardDescription>Status of security compliance standards</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Standard</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Audit</TableHead>
                      <TableHead>Next Audit</TableHead>
                      <TableHead>Compliance Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ISO 27001</TableCell>
                      <TableCell className="text-green-500">Compliant</TableCell>
                      <TableCell>Mar 15, 2025</TableCell>
                      <TableCell>Sep 15, 2025</TableCell>
                      <TableCell>92%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>SOC 2</TableCell>
                      <TableCell className="text-green-500">Compliant</TableCell>
                      <TableCell>Feb 10, 2025</TableCell>
                      <TableCell>Aug 10, 2025</TableCell>
                      <TableCell>94%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>GDPR</TableCell>
                      <TableCell className="text-amber-500">In Progress</TableCell>
                      <TableCell>Jan 20, 2025</TableCell>
                      <TableCell>Jul 20, 2025</TableCell>
                      <TableCell>86%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HIPAA</TableCell>
                      <TableCell className="text-green-500">Compliant</TableCell>
                      <TableCell>Apr 05, 2025</TableCell>
                      <TableCell>Oct 05, 2025</TableCell>
                      <TableCell>90%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  </div>
);

// Settings Page Component with actual content
const SettingsPage = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Settings</h1>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>User Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Integrations</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Manage your profile information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-medium">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Name</label>
                      <p className="text-base">John Doe</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="text-base">john.doe@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Role</label>
                      <p className="text-base">Security Analyst</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Department</label>
                      <p className="text-base">Information Security</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-medium">Communication Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="email-notifications" checked className="form-checkbox" />
                      <label htmlFor="email-notifications">Email notifications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sms-notifications" className="form-checkbox" />
                      <label htmlFor="sms-notifications">SMS notifications</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="weekly-digest" checked className="form-checkbox" />
                      <label htmlFor="weekly-digest">Weekly digest</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure how you receive alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Type</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>In-app</TableHead>
                      <TableHead>SMS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>New incident assigned</TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>High severity incident</TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Incident status update</TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Comment on incident</TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Weekly reports available</TableCell>
                      <TableCell>
                        <input type="checkbox" checked className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                      <TableCell>
                        <input type="checkbox" className="form-checkbox" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Password</h3>
                  <p className="text-sm text-muted-foreground">Last changed: March 12, 2025</p>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">Change Password</button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Enable additional security for your account</p>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enable-2fa" className="form-checkbox" />
                    <label htmlFor="enable-2fa">Enable 2FA</label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Active Sessions</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">Windows 11 • Chrome • New York, USA</p>
                        </div>
                        <span className="text-sm text-green-500">Active Now</span>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">Mobile Device</p>
                          <p className="text-sm text-muted-foreground">iOS 17 • Safari • New York, USA</p>
                        </div>
                        <span className="text-sm text-muted-foreground">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integration">
            <Card>
              <CardHeader>
                <CardTitle>System Integrations</CardTitle>
                <CardDescription>Connect with other security and management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Threat Intelligence Feed</h3>
                        <p className="text-sm text-muted-foreground">Connect to external threat intelligence sources</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-green-500 mr-4">Connected</span>
                      <button className="text-sm text-muted-foreground hover:text-foreground">Configure</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Calendar Integration</h3>
                        <p className="text-sm text-muted-foreground">Sync incidents with your calendar</p>
                      </div>
                    </div>
                    <div>
                      <button className="text-sm text-blue-500 hover:text-blue-600">Connect</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">SIEM System</h3>
                        <p className="text-sm text-muted-foreground">Connect to your SIEM for incident correlation</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-green-500 mr-4">Connected</span>
                      <button className="text-sm text-muted-foreground hover:text-foreground">Configure</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Document Management</h3>
                        <p className="text-sm text-muted-foreground">Link to your document repository</p>
                      </div>
                    </div>
                    <div>
                      <button className="text-sm text-blue-500 hover:text-blue-600">Connect</button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  </div>
);

const App = () => {
  // Create a new QueryClient instance within the component
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/incidents" element={<IncidentsPage />} />
            <Route path="/incidents/new" element={<NewIncidentPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </TooltipProvider>
    </BrowserRouter>
  );
};

export default App;
