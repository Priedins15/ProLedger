"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  Filter,
  Plus,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

export default function CreditManagementPage() {
  const { toast } = useToast()
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  const handleApprove = () => {
    toast({
      title: "Credit Limit Approved",
      description: "The credit limit change has been approved successfully.",
    })
  }

  const handleReject = () => {
    toast({
      title: "Credit Limit Rejected",
      description: "The credit limit change has been rejected.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Credit Management" subtitle="Manage customer credit limits and credit notes" />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Credit Note
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credit Issued</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,678.90</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Utilization</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5%</div>
            <p className="text-xs text-muted-foreground">+2.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+4 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Notes Issued</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="limits" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:w-auto w-full">
          <TabsTrigger value="limits">Credit Limits</TabsTrigger>
          <TabsTrigger value="notes">Credit Notes</TabsTrigger>
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Customers</SelectItem>
                <SelectItem value="high">High Utilization</SelectItem>
                <SelectItem value="medium">Medium Utilization</SelectItem>
                <SelectItem value="low">Low Utilization</SelectItem>
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

        <TabsContent value="limits" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Customer Credit Limits</CardTitle>
              <CardDescription>Manage credit limits and monitor utilization.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Credit Limit</TableHead>
                    <TableHead>Current Balance</TableHead>
                    <TableHead>Available Credit</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Last Review</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "cust-001",
                      customer: "Acme Corporation",
                      creditLimit: "$50,000.00",
                      currentBalance: "$32,450.00",
                      availableCredit: "$17,550.00",
                      utilization: 65,
                      lastReview: "Jan 15, 2025",
                    },
                    {
                      id: "cust-002",
                      customer: "Globex Industries",
                      creditLimit: "$25,000.00",
                      currentBalance: "$22,500.00",
                      availableCredit: "$2,500.00",
                      utilization: 90,
                      lastReview: "Feb 10, 2025",
                    },
                    {
                      id: "cust-003",
                      customer: "Wayne Enterprises",
                      creditLimit: "$100,000.00",
                      currentBalance: "$45,600.00",
                      availableCredit: "$54,400.00",
                      utilization: 46,
                      lastReview: "Mar 5, 2025",
                    },
                    {
                      id: "cust-004",
                      customer: "Stark Industries",
                      creditLimit: "$75,000.00",
                      currentBalance: "$74,800.00",
                      availableCredit: "$200.00",
                      utilization: 99,
                      lastReview: "Apr 1, 2025",
                    },
                    {
                      id: "cust-005",
                      customer: "Umbrella Corporation",
                      creditLimit: "$30,000.00",
                      currentBalance: "$12,450.00",
                      availableCredit: "$17,550.00",
                      utilization: 42,
                      lastReview: "Mar 20, 2025",
                    },
                    {
                      id: "cust-006",
                      customer: "Cyberdyne Systems",
                      creditLimit: "$20,000.00",
                      currentBalance: "$5,600.00",
                      availableCredit: "$14,400.00",
                      utilization: 28,
                      lastReview: "Feb 25, 2025",
                    },
                  ].map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.customer}</TableCell>
                      <TableCell>{customer.creditLimit}</TableCell>
                      <TableCell>{customer.currentBalance}</TableCell>
                      <TableCell>{customer.availableCredit}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={customer.utilization}
                            className={`h-2 ${
                              customer.utilization > 90
                                ? "bg-red-100"
                                : customer.utilization > 75
                                  ? "bg-yellow-100"
                                  : "bg-green-100"
                            }`}
                          />
                          <span className="text-sm">{customer.utilization}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{customer.lastReview}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Adjust Limit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Credit Notes</CardTitle>
              <CardDescription>Manage credit notes and adjustments.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Credit Note #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Related Invoice</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "CN-2025-001",
                      customer: "Acme Corporation",
                      date: "Apr 5, 2025",
                      amount: "$1,250.00",
                      invoice: "INV-2025-042",
                      reason: "Billing Error",
                      status: "Issued",
                    },
                    {
                      id: "CN-2025-002",
                      customer: "Globex Industries",
                      date: "Apr 8, 2025",
                      amount: "$750.00",
                      invoice: "INV-2025-056",
                      reason: "Service Issue",
                      status: "Issued",
                    },
                    {
                      id: "CN-2025-003",
                      customer: "Wayne Enterprises",
                      date: "Apr 10, 2025",
                      amount: "$2,500.00",
                      invoice: "INV-2025-061",
                      reason: "Goodwill Adjustment",
                      status: "Issued",
                    },
                    {
                      id: "CN-2025-004",
                      customer: "Stark Industries",
                      date: "Apr 12, 2025",
                      amount: "$1,800.00",
                      invoice: "INV-2025-068",
                      reason: "Billing Error",
                      status: "Draft",
                    },
                    {
                      id: "CN-2025-005",
                      customer: "Umbrella Corporation",
                      date: "Apr 15, 2025",
                      amount: "$950.00",
                      invoice: "INV-2025-072",
                      reason: "Service Issue",
                      status: "Pending Approval",
                    },
                  ].map((note) => (
                    <TableRow key={note.id}>
                      <TableCell className="font-medium">{note.id}</TableCell>
                      <TableCell>{note.customer}</TableCell>
                      <TableCell>{note.date}</TableCell>
                      <TableCell>{note.amount}</TableCell>
                      <TableCell>{note.invoice}</TableCell>
                      <TableCell>{note.reason}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            note.status === "Issued"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : note.status === "Draft"
                                ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          }
                        >
                          {note.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Review and approve credit limit changes and credit notes.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Current Value</TableHead>
                    <TableHead>Requested Value</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "REQ-001",
                      type: "Credit Limit Increase",
                      customer: "Acme Corporation",
                      currentValue: "$50,000.00",
                      requestedValue: "$75,000.00",
                      requestedBy: "John Smith",
                      date: "Apr 8, 2025",
                    },
                    {
                      id: "REQ-002",
                      type: "Credit Note",
                      customer: "Globex Industries",
                      currentValue: "N/A",
                      requestedValue: "$2,500.00",
                      requestedBy: "Jane Doe",
                      date: "Apr 9, 2025",
                    },
                    {
                      id: "REQ-003",
                      type: "Credit Limit Increase",
                      customer: "Stark Industries",
                      currentValue: "$75,000.00",
                      requestedValue: "$100,000.00",
                      requestedBy: "Robert Johnson",
                      date: "Apr 10, 2025",
                    },
                    {
                      id: "REQ-004",
                      type: "Credit Note",
                      customer: "Umbrella Corporation",
                      currentValue: "N/A",
                      requestedValue: "$950.00",
                      requestedBy: "Emily Davis",
                      date: "Apr 12, 2025",
                    },
                    {
                      id: "REQ-005",
                      type: "Credit Limit Decrease",
                      customer: "Cyberdyne Systems",
                      currentValue: "$20,000.00",
                      requestedValue: "$15,000.00",
                      requestedBy: "Michael Wilson",
                      date: "Apr 13, 2025",
                    },
                  ].map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell>{request.customer}</TableCell>
                      <TableCell>{request.currentValue}</TableCell>
                      <TableCell>{request.requestedValue}</TableCell>
                      <TableCell>{request.requestedBy}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={handleApprove}>
                            <Check className="h-4 w-4 text-green-500" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={handleReject}>
                            <X className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
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
