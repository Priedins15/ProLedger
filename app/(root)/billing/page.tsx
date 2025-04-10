"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { DateRangePicker } from "@/components/date-range-picker"
import { Calendar, DollarSign, Download, Filter, Plus, RefreshCw, Search, Settings, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BillingPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Billing & Revenue Management" subtitle="Manage your billing, invoicing, and revenue" />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recurring Revenue</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.00</div>
            <p className="text-xs text-muted-foreground">+4.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deferred Revenue</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,456.78</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+15 new this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList className="grid grid-cols-5 md:w-auto w-full">
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="recurring">Recurring</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Recognition</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Invoices</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
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

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Customer Invoices</CardTitle>
              <CardDescription>Manage all your customer invoices and their status.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-2025-001",
                      customer: "Acme Corporation",
                      issueDate: "Apr 1, 2025",
                      dueDate: "May 1, 2025",
                      amount: "$3,450.00",
                      status: "Paid",
                    },
                    {
                      id: "INV-2025-002",
                      customer: "Globex Industries",
                      issueDate: "Apr 3, 2025",
                      dueDate: "May 3, 2025",
                      amount: "$1,290.50",
                      status: "Pending",
                    },
                    {
                      id: "INV-2025-003",
                      customer: "Wayne Enterprises",
                      issueDate: "Apr 5, 2025",
                      dueDate: "May 5, 2025",
                      amount: "$4,750.00",
                      status: "Draft",
                    },
                    {
                      id: "INV-2025-004",
                      customer: "Stark Industries",
                      issueDate: "Apr 7, 2025",
                      dueDate: "Apr 21, 2025",
                      amount: "$2,100.00",
                      status: "Pending",
                    },
                    {
                      id: "INV-2025-005",
                      customer: "Umbrella Corporation",
                      issueDate: "Apr 8, 2025",
                      dueDate: "Apr 22, 2025",
                      amount: "$5,600.00",
                      status: "Overdue",
                    },
                    {
                      id: "INV-2025-006",
                      customer: "Cyberdyne Systems",
                      issueDate: "Apr 10, 2025",
                      dueDate: "Apr 24, 2025",
                      amount: "$1,850.00",
                      status: "Pending",
                    },
                  ].map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell>{invoice.issueDate}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            invoice.status === "Paid"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : invoice.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                : invoice.status === "Draft"
                                  ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/invoices/${invoice.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recurring" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recurring Billing</CardTitle>
              <CardDescription>Manage your recurring billing templates and schedules.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Name</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Next Invoice</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "REC-001",
                      name: "Monthly Maintenance",
                      customer: "Acme Corporation",
                      frequency: "Monthly",
                      nextInvoice: "May 1, 2025",
                      amount: "$450.00",
                      status: "Active",
                    },
                    {
                      id: "REC-002",
                      name: "Quarterly Consulting",
                      customer: "Globex Industries",
                      frequency: "Quarterly",
                      nextInvoice: "Jul 1, 2025",
                      amount: "$2,500.00",
                      status: "Active",
                    },
                    {
                      id: "REC-003",
                      name: "Annual License",
                      customer: "Wayne Enterprises",
                      frequency: "Annually",
                      nextInvoice: "Jan 1, 2026",
                      amount: "$12,000.00",
                      status: "Active",
                    },
                    {
                      id: "REC-004",
                      name: "Weekly Support",
                      customer: "Stark Industries",
                      frequency: "Weekly",
                      nextInvoice: "Apr 15, 2025",
                      amount: "$175.00",
                      status: "Paused",
                    },
                    {
                      id: "REC-005",
                      name: "Bi-Monthly Services",
                      customer: "Umbrella Corporation",
                      frequency: "Bi-Monthly",
                      nextInvoice: "Jun 1, 2025",
                      amount: "$850.00",
                      status: "Active",
                    },
                  ].map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>{template.customer}</TableCell>
                      <TableCell>{template.frequency}</TableCell>
                      <TableCell>{template.nextInvoice}</TableCell>
                      <TableCell>{template.amount}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            template.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          }
                        >
                          {template.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Subscription Management</CardTitle>
              <CardDescription>Manage your subscription plans and customer subscriptions.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subscription ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Renewal Date</TableHead>
                    <TableHead>MRR</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "SUB-001",
                      customer: "Acme Corporation",
                      plan: "Enterprise",
                      startDate: "Jan 1, 2025",
                      renewalDate: "Jan 1, 2026",
                      mrr: "$1,200.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-002",
                      customer: "Globex Industries",
                      plan: "Professional",
                      startDate: "Feb 15, 2025",
                      renewalDate: "Feb 15, 2026",
                      mrr: "$600.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-003",
                      customer: "Wayne Enterprises",
                      plan: "Enterprise Plus",
                      startDate: "Mar 1, 2025",
                      renewalDate: "Mar 1, 2026",
                      mrr: "$2,500.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-004",
                      customer: "Stark Industries",
                      plan: "Professional",
                      startDate: "Jan 10, 2025",
                      renewalDate: "Jan 10, 2026",
                      mrr: "$600.00",
                      status: "Past Due",
                    },
                    {
                      id: "SUB-005",
                      customer: "Umbrella Corporation",
                      plan: "Basic",
                      startDate: "Apr 1, 2025",
                      renewalDate: "Jul 1, 2025",
                      mrr: "$200.00",
                      status: "Trial",
                    },
                  ].map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell className="font-medium">{subscription.id}</TableCell>
                      <TableCell>{subscription.customer}</TableCell>
                      <TableCell>{subscription.plan}</TableCell>
                      <TableCell>{subscription.startDate}</TableCell>
                      <TableCell>{subscription.renewalDate}</TableCell>
                      <TableCell>{subscription.mrr}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            subscription.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : subscription.status === "Trial"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {subscription.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Revenue Recognition</CardTitle>
              <CardDescription>Track and manage revenue recognition schedules (ASC 606 / IFRS 15).</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Recognized</TableHead>
                    <TableHead>Deferred</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "REV-001",
                      contract: "Enterprise License",
                      customer: "Acme Corporation",
                      totalValue: "$36,000.00",
                      startDate: "Jan 1, 2025",
                      endDate: "Dec 31, 2025",
                      recognized: "$12,000.00",
                      deferred: "$24,000.00",
                    },
                    {
                      id: "REV-002",
                      contract: "Implementation Services",
                      customer: "Globex Industries",
                      totalValue: "$15,000.00",
                      startDate: "Feb 1, 2025",
                      endDate: "Apr 30, 2025",
                      recognized: "$10,000.00",
                      deferred: "$5,000.00",
                    },
                    {
                      id: "REV-003",
                      contract: "Support Contract",
                      customer: "Wayne Enterprises",
                      totalValue: "$24,000.00",
                      startDate: "Mar 1, 2025",
                      endDate: "Feb 28, 2026",
                      recognized: "$2,000.00",
                      deferred: "$22,000.00",
                    },
                    {
                      id: "REV-004",
                      contract: "Custom Development",
                      customer: "Stark Industries",
                      totalValue: "$50,000.00",
                      startDate: "Jan 15, 2025",
                      endDate: "Jun 15, 2025",
                      recognized: "$20,000.00",
                      deferred: "$30,000.00",
                    },
                    {
                      id: "REV-005",
                      contract: "Training Services",
                      customer: "Umbrella Corporation",
                      totalValue: "$8,500.00",
                      startDate: "Apr 1, 2025",
                      endDate: "Apr 30, 2025",
                      recognized: "$2,125.00",
                      deferred: "$6,375.00",
                    },
                  ].map((revenue) => (
                    <TableRow key={revenue.id}>
                      <TableCell className="font-medium">{revenue.contract}</TableCell>
                      <TableCell>{revenue.customer}</TableCell>
                      <TableCell>{revenue.totalValue}</TableCell>
                      <TableCell>{revenue.startDate}</TableCell>
                      <TableCell>{revenue.endDate}</TableCell>
                      <TableCell>{revenue.recognized}</TableCell>
                      <TableCell>{revenue.deferred}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Schedule
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collections" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Collections Management</CardTitle>
              <CardDescription>Manage dunning processes and collections for overdue invoices.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Days Overdue</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-2025-005",
                      customer: "Umbrella Corporation",
                      dueDate: "Apr 22, 2025",
                      amount: "$5,600.00",
                      daysOverdue: 8,
                      lastContact: "Apr 25, 2025",
                      status: "First Notice",
                    },
                    {
                      id: "INV-2024-089",
                      customer: "Cyberdyne Systems",
                      dueDate: "Mar 15, 2025",
                      amount: "$3,200.00",
                      daysOverdue: 25,
                      lastContact: "Apr 5, 2025",
                      status: "Second Notice",
                    },
                    {
                      id: "INV-2024-076",
                      customer: "Initech",
                      dueDate: "Mar 1, 2025",
                      amount: "$1,850.00",
                      daysOverdue: 39,
                      lastContact: "Apr 1, 2025",
                      status: "Final Notice",
                    },
                    {
                      id: "INV-2024-062",
                      customer: "Massive Dynamic",
                      dueDate: "Feb 15, 2025",
                      amount: "$4,300.00",
                      daysOverdue: 53,
                      lastContact: "Apr 2, 2025",
                      status: "Collections",
                    },
                    {
                      id: "INV-2024-045",
                      customer: "Soylent Corp",
                      dueDate: "Jan 30, 2025",
                      amount: "$2,750.00",
                      daysOverdue: 69,
                      lastContact: "Mar 20, 2025",
                      status: "Legal",
                    },
                  ].map((collection) => (
                    <TableRow key={collection.id}>
                      <TableCell className="font-medium">{collection.id}</TableCell>
                      <TableCell>{collection.customer}</TableCell>
                      <TableCell>{collection.dueDate}</TableCell>
                      <TableCell>{collection.amount}</TableCell>
                      <TableCell>{collection.daysOverdue}</TableCell>
                      <TableCell>{collection.lastContact}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            collection.status === "First Notice"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              : collection.status === "Second Notice"
                                ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                : collection.status === "Final Notice"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : collection.status === "Collections"
                                    ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {collection.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Take Action
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
