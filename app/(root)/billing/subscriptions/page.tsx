"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { ArrowUpRight, Calendar, CreditCard, Download, Filter, Plus, Search, Settings, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SubscriptionBillingPage() {
  const { toast } = useToast()
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  const handleAction = (action: string, subscription: string) => {
    toast({
      title: `${action} Successful`,
      description: `Action ${action.toLowerCase()} was applied to subscription ${subscription}.`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Subscription Management" subtitle="Manage subscription plans and customer subscriptions" />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Subscription
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total MRR</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,350.00</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+15 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-muted-foreground">-0.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Customer LTV</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,287.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="subscriptions" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:w-auto w-full">
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="metrics">Metrics & Analytics</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search subscriptions..." className="pl-8" />
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
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="past-due">Past Due</SelectItem>
                <SelectItem value="canceled">Canceled</SelectItem>
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

        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Customer Subscriptions</CardTitle>
              <CardDescription>Manage all active and inactive customer subscriptions.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Next Billing</TableHead>
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
                      nextBilling: "May 1, 2025",
                      mrr: "$1,200.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-002",
                      customer: "Globex Industries",
                      plan: "Professional",
                      startDate: "Feb 15, 2025",
                      nextBilling: "May 15, 2025",
                      mrr: "$600.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-003",
                      customer: "Wayne Enterprises",
                      plan: "Enterprise Plus",
                      startDate: "Mar 1, 2025",
                      nextBilling: "May 1, 2025",
                      mrr: "$2,500.00",
                      status: "Active",
                    },
                    {
                      id: "SUB-004",
                      customer: "Stark Industries",
                      plan: "Professional",
                      startDate: "Jan 10, 2025",
                      nextBilling: "May 10, 2025",
                      mrr: "$600.00",
                      status: "Past Due",
                    },
                    {
                      id: "SUB-005",
                      customer: "Umbrella Corporation",
                      plan: "Basic",
                      startDate: "Apr 1, 2025",
                      nextBilling: "May 1, 2025",
                      mrr: "$200.00",
                      status: "Trial",
                    },
                    {
                      id: "SUB-006",
                      customer: "Cyberdyne Systems",
                      plan: "Professional",
                      startDate: "Mar 15, 2025",
                      nextBilling: "Apr 15, 2025",
                      mrr: "$600.00",
                      status: "Canceled",
                    },
                  ].map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell className="font-medium">{subscription.customer}</TableCell>
                      <TableCell>{subscription.plan}</TableCell>
                      <TableCell>{subscription.startDate}</TableCell>
                      <TableCell>{subscription.nextBilling}</TableCell>
                      <TableCell>{subscription.mrr}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            subscription.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : subscription.status === "Trial"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : subscription.status === "Past Due"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {subscription.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleAction("View", subscription.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Edit", subscription.id)}>
                              Edit subscription
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Pause", subscription.id)}>
                              Pause subscription
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Cancel", subscription.id)}>
                              Cancel subscription
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>Manage your subscription plans and pricing tiers.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plan Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Billing Cycle</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Active Subscribers</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "PLAN-001",
                      name: "Basic",
                      description: "Essential features for small businesses",
                      billingCycle: "Monthly",
                      price: "$200.00",
                      subscribers: 145,
                      status: "Active",
                    },
                    {
                      id: "PLAN-002",
                      name: "Professional",
                      description: "Advanced features for growing businesses",
                      billingCycle: "Monthly/Annual",
                      price: "$600.00",
                      subscribers: 287,
                      status: "Active",
                    },
                    {
                      id: "PLAN-003",
                      name: "Enterprise",
                      description: "Complete solution for large organizations",
                      billingCycle: "Monthly/Annual",
                      price: "$1,200.00",
                      subscribers: 98,
                      status: "Active",
                    },
                    {
                      id: "PLAN-004",
                      name: "Enterprise Plus",
                      description: "Custom solution with dedicated support",
                      billingCycle: "Annual only",
                      price: "$2,500.00",
                      subscribers: 43,
                      status: "Active",
                    },
                    {
                      id: "PLAN-005",
                      name: "Starter",
                      description: "Basic features for startups",
                      billingCycle: "Monthly",
                      price: "$99.00",
                      subscribers: 0,
                      status: "Draft",
                    },
                  ].map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>{plan.description}</TableCell>
                      <TableCell>{plan.billingCycle}</TableCell>
                      <TableCell>{plan.price}</TableCell>
                      <TableCell>{plan.subscribers}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            plan.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {plan.status}
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

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Growth</CardTitle>
                <CardDescription>Monthly subscription growth over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Subscription Growth Chart]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MRR Breakdown</CardTitle>
                <CardDescription>Monthly recurring revenue by plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [MRR Breakdown Chart]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Churn Analysis</CardTitle>
                <CardDescription>Monthly churn rate and reasons</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Churn Analysis Chart]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average LTV by plan and segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">[LTV Chart]</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
