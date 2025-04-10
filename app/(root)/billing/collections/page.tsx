"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { AlertTriangle, ArrowUpRight, Clock, Download, Filter, Mail, Plus, Search, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export default function CollectionsPage() {
  const { toast } = useToast()
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  const handleAction = (action: string, invoice: string) => {
    toast({
      title: `${action} Sent`,
      description: `${action} has been sent for invoice ${invoice}.`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Dunning & Collections" subtitle="Manage overdue invoices and collection processes" />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Dunning Campaign
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,567.89</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Days to Collect</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">-3 days from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Dunning Campaigns</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="aging" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-auto w-full">
          <TabsTrigger value="aging">Aging Analysis</TabsTrigger>
          <TabsTrigger value="dunning">Dunning Campaigns</TabsTrigger>
          <TabsTrigger value="collections">Collections Workflow</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Select aging period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Periods</SelectItem>
                <SelectItem value="1-30">1-30 Days</SelectItem>
                <SelectItem value="31-60">31-60 Days</SelectItem>
                <SelectItem value="61-90">61-90 Days</SelectItem>
                <SelectItem value="90+">90+ Days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-9">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="aging" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Accounts Receivable Aging</CardTitle>
              <CardDescription>Overview of overdue invoices by aging period.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Current</TableHead>
                    <TableHead>1-30 Days</TableHead>
                    <TableHead>31-60 Days</TableHead>
                    <TableHead>61-90 Days</TableHead>
                    <TableHead>90+ Days</TableHead>
                    <TableHead>Total Overdue</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "cust-001",
                      customer: "Acme Corporation",
                      current: "$12,450.00",
                      days1to30: "$8,500.00",
                      days31to60: "$5,200.00",
                      days61to90: "$0.00",
                      days90plus: "$0.00",
                      totalOverdue: "$13,700.00",
                    },
                    {
                      id: "cust-002",
                      customer: "Globex Industries",
                      current: "$8,750.00",
                      days1to30: "$4,500.00",
                      days31to60: "$2,800.00",
                      days61to90: "$1,500.00",
                      days90plus: "$0.00",
                      totalOverdue: "$8,800.00",
                    },
                    {
                      id: "cust-003",
                      customer: "Wayne Enterprises",
                      current: "$24,500.00",
                      days1to30: "$12,000.00",
                      days31to60: "$0.00",
                      days61to90: "$0.00",
                      days90plus: "$0.00",
                      totalOverdue: "$12,000.00",
                    },
                    {
                      id: "cust-004",
                      customer: "Stark Industries",
                      current: "$18,200.00",
                      days1to30: "$0.00",
                      days31to60: "$0.00",
                      days61to90: "$0.00",
                      days90plus: "$15,600.00",
                      totalOverdue: "$15,600.00",
                    },
                    {
                      id: "cust-005",
                      customer: "Umbrella Corporation",
                      current: "$9,800.00",
                      days1to30: "$5,600.00",
                      days31to60: "$3,200.00",
                      days61to90: "$2,100.00",
                      days90plus: "$1,800.00",
                      totalOverdue: "$12,700.00",
                    },
                    {
                      id: "cust-006",
                      customer: "Cyberdyne Systems",
                      current: "$7,500.00",
                      days1to30: "$4,200.00",
                      days31to60: "$0.00",
                      days61to90: "$0.00",
                      days90plus: "$0.00",
                      totalOverdue: "$4,200.00",
                    },
                  ].map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.customer}</TableCell>
                      <TableCell>{customer.current}</TableCell>
                      <TableCell>{customer.days1to30}</TableCell>
                      <TableCell>{customer.days31to60}</TableCell>
                      <TableCell>{customer.days61to90}</TableCell>
                      <TableCell>{customer.days90plus}</TableCell>
                      <TableCell className="font-medium">{customer.totalOverdue}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Aging Summary</CardTitle>
                <CardDescription>Distribution of overdue amounts by aging period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { period: "Current", amount: "$81,200.00", percent: 40 },
                    { period: "1-30 Days", amount: "$34,800.00", percent: 17 },
                    { period: "31-60 Days", amount: "$11,200.00", percent: 6 },
                    { period: "61-90 Days", amount: "$3,600.00", percent: 2 },
                    { period: "90+ Days", amount: "$17,400.00", percent: 9 },
                  ].map((aging, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">{aging.period}</div>
                          <div className="text-xs text-muted-foreground">{aging.amount}</div>
                        </div>
                        <div className="text-sm font-medium">{aging.percent}%</div>
                      </div>
                      <Progress
                        value={aging.percent}
                        className={`h-2 ${
                          aging.period === "90+ Days"
                            ? "bg-red-100"
                            : aging.period === "61-90 Days"
                              ? "bg-orange-100"
                              : aging.period === "31-60 Days"
                                ? "bg-yellow-100"
                                : aging.period === "1-30 Days"
                                  ? "bg-blue-100"
                                  : "bg-green-100"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collection Trends</CardTitle>
                <CardDescription>Monthly collection rate and overdue amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Collection Trends Chart]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dunning" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Dunning Campaigns</CardTitle>
              <CardDescription>Manage automated dunning campaigns for overdue invoices.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign Name</TableHead>
                    <TableHead>Trigger</TableHead>
                    <TableHead>Communication</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Active Customers</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "camp-001",
                      name: "Payment Reminder",
                      trigger: "3 days before due",
                      communication: "Email",
                      frequency: "One-time",
                      activeCustomers: 145,
                      successRate: "92%",
                      status: "Active",
                    },
                    {
                      id: "camp-002",
                      name: "First Notice",
                      trigger: "1 day overdue",
                      communication: "Email",
                      frequency: "One-time",
                      activeCustomers: 87,
                      successRate: "78%",
                      status: "Active",
                    },
                    {
                      id: "camp-003",
                      name: "Second Notice",
                      trigger: "7 days overdue",
                      communication: "Email + SMS",
                      frequency: "One-time",
                      activeCustomers: 42,
                      successRate: "65%",
                      status: "Active",
                    },
                    {
                      id: "camp-004",
                      name: "Final Notice",
                      trigger: "14 days overdue",
                      communication: "Email + Phone",
                      frequency: "One-time",
                      activeCustomers: 28,
                      successRate: "52%",
                      status: "Active",
                    },
                    {
                      id: "camp-005",
                      name: "Legal Notice",
                      trigger: "30 days overdue",
                      communication: "Email + Mail",
                      frequency: "One-time",
                      activeCustomers: 15,
                      successRate: "40%",
                      status: "Active",
                    },
                    {
                      id: "camp-006",
                      name: "Monthly Statement",
                      trigger: "End of month",
                      communication: "Email",
                      frequency: "Monthly",
                      activeCustomers: 210,
                      successRate: "85%",
                      status: "Active",
                    },
                  ].map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.trigger}</TableCell>
                      <TableCell>{campaign.communication}</TableCell>
                      <TableCell>{campaign.frequency}</TableCell>
                      <TableCell>{campaign.activeCustomers}</TableCell>
                      <TableCell>{campaign.successRate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("Edit", campaign.id)}>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Success rates of dunning campaigns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Campaign Performance Chart]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Communication Templates</CardTitle>
                <CardDescription>Manage email and SMS templates for dunning campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Payment Reminder", type: "Email", lastUpdated: "2 days ago" },
                    { name: "First Notice", type: "Email", lastUpdated: "1 week ago" },
                    { name: "Second Notice", type: "Email", lastUpdated: "2 weeks ago" },
                    { name: "Second Notice SMS", type: "SMS", lastUpdated: "2 weeks ago" },
                    { name: "Final Notice", type: "Email", lastUpdated: "1 month ago" },
                  ].map((template, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{template.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {template.type} • Last updated {template.lastUpdated}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collections" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Collections Workflow</CardTitle>
              <CardDescription>Manage the collections process for overdue invoices.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "inv-001",
                      customer: "Acme Corporation",
                      invoice: "INV-2025-0042",
                      amount: "$8,500.00",
                      dueDate: "Mar 15, 2025",
                      daysOverdue: 25,
                      status: "In Progress",
                      assignedTo: "John Smith",
                    },
                    {
                      id: "inv-002",
                      customer: "Globex Industries",
                      invoice: "INV-2025-0038",
                      amount: "$4,500.00",
                      dueDate: "Mar 10, 2025",
                      daysOverdue: 30,
                      status: "In Progress",
                      assignedTo: "Sarah Johnson",
                    },
                    {
                      id: "inv-003",
                      customer: "Wayne Enterprises",
                      invoice: "INV-2025-0035",
                      amount: "$12,000.00",
                      dueDate: "Mar 5, 2025",
                      daysOverdue: 35,
                      status: "Escalated",
                      assignedTo: "Michael Brown",
                    },
                    {
                      id: "inv-004",
                      customer: "Stark Industries",
                      invoice: "INV-2024-0128",
                      amount: "$15,600.00",
                      dueDate: "Dec 15, 2024",
                      daysOverdue: 115,
                      status: "Legal",
                      assignedTo: "Jennifer Davis",
                    },
                    {
                      id: "inv-005",
                      customer: "Umbrella Corporation",
                      invoice: "INV-2025-0022",
                      amount: "$5,600.00",
                      dueDate: "Feb 20, 2025",
                      daysOverdue: 48,
                      status: "Payment Plan",
                      assignedTo: "Robert Wilson",
                    },
                    {
                      id: "inv-006",
                      customer: "Cyberdyne Systems",
                      invoice: "INV-2025-0045",
                      amount: "$4,200.00",
                      dueDate: "Mar 20, 2025",
                      daysOverdue: 20,
                      status: "In Progress",
                      assignedTo: "Emily Taylor",
                    },
                  ].map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.customer}</TableCell>
                      <TableCell>{invoice.invoice}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>{invoice.daysOverdue}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`
                            ${invoice.status === "In Progress" ? "bg-blue-50 text-blue-700" : ""}
                            ${invoice.status === "Escalated" ? "bg-orange-50 text-orange-700" : ""}
                            ${invoice.status === "Legal" ? "bg-red-50 text-red-700" : ""}
                            ${invoice.status === "Payment Plan" ? "bg-green-50 text-green-700" : ""}
                          `}
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{invoice.assignedTo}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View", invoice.id)}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Collection Actions</CardTitle>
                <CardDescription>Quick actions for collection activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full">Send Payment Reminder</Button>
                  <Button className="w-full" variant="outline">
                    Schedule Call
                  </Button>
                  <Button className="w-full" variant="outline">
                    Create Payment Plan
                  </Button>
                  <Button className="w-full" variant="outline">
                    Escalate to Manager
                  </Button>
                  <Button className="w-full" variant="outline">
                    Send to Legal
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Collection Notes</CardTitle>
                <CardDescription>Recent collection activities and notes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      customer: "Wayne Enterprises",
                      invoice: "INV-2025-0035",
                      date: "Apr 8, 2025",
                      user: "Michael Brown",
                      note: "Customer requested payment extension until April 15. Escalated to manager for approval.",
                    },
                    {
                      customer: "Stark Industries",
                      invoice: "INV-2024-0128",
                      date: "Apr 7, 2025",
                      user: "Jennifer Davis",
                      note: "No response to final notice. Preparing legal documentation for collections process.",
                    },
                    {
                      customer: "Umbrella Corporation",
                      invoice: "INV-2025-0022",
                      date: "Apr 5, 2025",
                      user: "Robert Wilson",
                      note: "Customer agreed to payment plan: $1,400 per week for 4 weeks. First payment received.",
                    },
                    {
                      customer: "Globex Industries",
                      invoice: "INV-2025-0038",
                      date: "Apr 3, 2025",
                      user: "Sarah Johnson",
                      note: "Left voicemail for accounts payable manager. Will follow up on April 6.",
                    },
                  ].map((note, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium">
                          {note.customer} - {note.invoice}
                        </div>
                        <div className="text-sm text-muted-foreground">{note.date}</div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">By: {note.user}</div>
                      <div className="text-sm">{note.note}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Track payment history and patterns for customers.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Payment Date</TableHead>
                    <TableHead>Days Late</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "pay-001",
                      customer: "Acme Corporation",
                      invoice: "INV-2025-0030",
                      amount: "$6,750.00",
                      dueDate: "Mar 1, 2025",
                      paymentDate: "Mar 5, 2025",
                      daysLate: 4,
                      paymentMethod: "ACH",
                    },
                    {
                      id: "pay-002",
                      customer: "Globex Industries",
                      invoice: "INV-2025-0025",
                      amount: "$3,200.00",
                      dueDate: "Feb 25, 2025",
                      paymentDate: "Mar 10, 2025",
                      daysLate: 13,
                      paymentMethod: "Credit Card",
                    },
                    {
                      id: "pay-003",
                      customer: "Wayne Enterprises",
                      invoice: "INV-2025-0020",
                      amount: "$9,800.00",
                      dueDate: "Feb 20, 2025",
                      paymentDate: "Feb 19, 2025",
                      daysLate: 0,
                      paymentMethod: "Wire Transfer",
                    },
                    {
                      id: "pay-004",
                      customer: "Stark Industries",
                      invoice: "INV-2024-0115",
                      amount: "$12,400.00",
                      dueDate: "Nov 30, 2024",
                      paymentDate: "Jan 15, 2025",
                      daysLate: 46,
                      paymentMethod: "Check",
                    },
                    {
                      id: "pay-005",
                      customer: "Umbrella Corporation",
                      invoice: "INV-2025-0015",
                      amount: "$4,300.00",
                      dueDate: "Feb 15, 2025",
                      paymentDate: "Feb 28, 2025",
                      daysLate: 13,
                      paymentMethod: "ACH",
                    },
                    {
                      id: "pay-006",
                      customer: "Cyberdyne Systems",
                      invoice: "INV-2025-0010",
                      amount: "$5,800.00",
                      dueDate: "Feb 10, 2025",
                      paymentDate: "Feb 12, 2025",
                      daysLate: 2,
                      paymentMethod: "Credit Card",
                    },
                  ].map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.customer}</TableCell>
                      <TableCell>{payment.invoice}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>{payment.paymentDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`
                            ${payment.daysLate === 0 ? "bg-green-50 text-green-700" : ""}
                            ${payment.daysLate > 0 && payment.daysLate <= 7 ? "bg-blue-50 text-blue-700" : ""}
                            ${payment.daysLate > 7 && payment.daysLate <= 30 ? "bg-yellow-50 text-yellow-700" : ""}
                            ${payment.daysLate > 30 ? "bg-red-50 text-red-700" : ""}
                          `}
                        >
                          {payment.daysLate}
                        </Badge>
                      </TableCell>
                      <TableCell>{payment.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View", payment.id)}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Patterns</CardTitle>
                <CardDescription>Average days to payment by customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { customer: "Acme Corporation", avgDays: 5, trend: "Improving" },
                    { customer: "Globex Industries", avgDays: 12, trend: "Stable" },
                    { customer: "Wayne Enterprises", avgDays: 0, trend: "Excellent" },
                    { customer: "Stark Industries", avgDays: 38, trend: "Worsening" },
                    { customer: "Umbrella Corporation", avgDays: 15, trend: "Improving" },
                    { customer: "Cyberdyne Systems", avgDays: 3, trend: "Excellent" },
                  ].map((pattern, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">{pattern.customer}</div>
                          <div className="text-xs text-muted-foreground">
                            {pattern.trend === "Improving" && "↓ Improving"}
                            {pattern.trend === "Stable" && "→ Stable"}
                            {pattern.trend === "Excellent" && "✓ Excellent"}
                            {pattern.trend === "Worsening" && "↑ Worsening"}
                          </div>
                        </div>
                        <div className="text-sm font-medium">{pattern.avgDays} days</div>
                      </div>
                      <Progress
                        value={100 - Math.min(pattern.avgDays * 2, 100)}
                        className={`h-2 ${
                          pattern.avgDays > 30
                            ? "bg-red-100"
                            : pattern.avgDays > 15
                              ? "bg-orange-100"
                              : pattern.avgDays > 7
                                ? "bg-yellow-100"
                                : pattern.avgDays > 0
                                  ? "bg-blue-100"
                                  : "bg-green-100"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Method Distribution</CardTitle>
                <CardDescription>Breakdown of payment methods used</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Payment Method Chart]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
