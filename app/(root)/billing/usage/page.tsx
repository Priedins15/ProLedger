"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { BarChart3, Download, Filter, LineChart, Plus, RefreshCw, Search, Settings, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { Progress } from "@/components/ui/progress"

export default function UsageBasedBillingPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Usage-Based Billing" subtitle="Track and bill based on customer usage metrics" />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Meter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usage Revenue</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,432.50</div>
            <p className="text-xs text-muted-foreground">+12.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Meters</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Usage Growth</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers with Usage</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+18 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="meters" className="space-y-4">
        <TabsList className="grid grid-cols-3 md:w-auto w-full">
          <TabsTrigger value="meters">Usage Meters</TabsTrigger>
          <TabsTrigger value="customer-usage">Customer Usage</TabsTrigger>
          <TabsTrigger value="pricing-models">Pricing Models</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search meters..." className="pl-8" />
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="api">API Calls</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
                <SelectItem value="bandwidth">Bandwidth</SelectItem>
                <SelectItem value="compute">Compute</SelectItem>
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

        <TabsContent value="meters" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Usage Meters</CardTitle>
              <CardDescription>Configure and manage usage meters for billing.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Meter Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Aggregation</TableHead>
                    <TableHead>Current Period Usage</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "meter-001",
                      name: "API Calls",
                      category: "API",
                      unit: "Requests",
                      aggregation: "Count",
                      currentUsage: "1,245,678",
                      status: "Active",
                    },
                    {
                      id: "meter-002",
                      name: "Storage",
                      category: "Storage",
                      unit: "GB",
                      aggregation: "Max",
                      currentUsage: "8,432",
                      status: "Active",
                    },
                    {
                      id: "meter-003",
                      name: "Data Transfer",
                      category: "Bandwidth",
                      unit: "GB",
                      aggregation: "Sum",
                      currentUsage: "12,567",
                      status: "Active",
                    },
                    {
                      id: "meter-004",
                      name: "Compute Hours",
                      category: "Compute",
                      unit: "Hours",
                      aggregation: "Sum",
                      currentUsage: "4,321",
                      status: "Active",
                    },
                    {
                      id: "meter-005",
                      name: "Premium API Calls",
                      category: "API",
                      unit: "Requests",
                      aggregation: "Count",
                      currentUsage: "345,678",
                      status: "Active",
                    },
                    {
                      id: "meter-006",
                      name: "ML Processing",
                      category: "Compute",
                      unit: "Minutes",
                      aggregation: "Sum",
                      currentUsage: "2,345",
                      status: "Inactive",
                    },
                  ].map((meter) => (
                    <TableRow key={meter.id}>
                      <TableCell className="font-medium">{meter.name}</TableCell>
                      <TableCell>{meter.category}</TableCell>
                      <TableCell>{meter.unit}</TableCell>
                      <TableCell>{meter.aggregation}</TableCell>
                      <TableCell>{meter.currentUsage}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            meter.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {meter.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Configure
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customer-usage" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Customer Usage</CardTitle>
              <CardDescription>Track and analyze customer usage across all meters.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Meter</TableHead>
                    <TableHead>Current Usage</TableHead>
                    <TableHead>Included Quota</TableHead>
                    <TableHead>Overage</TableHead>
                    <TableHead className="text-right">Projected Bill</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "usage-001",
                      customer: "Acme Corporation",
                      plan: "Enterprise",
                      meter: "API Calls",
                      currentUsage: "845,678",
                      includedQuota: "1,000,000",
                      overage: "0",
                      projectedBill: "$1,200.00",
                      percentUsed: 85,
                    },
                    {
                      id: "usage-002",
                      customer: "Acme Corporation",
                      plan: "Enterprise",
                      meter: "Storage",
                      currentUsage: "4,532 GB",
                      includedQuota: "5,000 GB",
                      overage: "0",
                      projectedBill: "$0.00",
                      percentUsed: 91,
                    },
                    {
                      id: "usage-003",
                      customer: "Globex Industries",
                      plan: "Professional",
                      meter: "API Calls",
                      currentUsage: "345,678",
                      includedQuota: "250,000",
                      overage: "95,678",
                      projectedBill: "$191.36",
                      percentUsed: 138,
                    },
                    {
                      id: "usage-004",
                      customer: "Wayne Enterprises",
                      plan: "Enterprise Plus",
                      meter: "Compute Hours",
                      currentUsage: "1,245",
                      includedQuota: "2,000",
                      overage: "0",
                      projectedBill: "$0.00",
                      percentUsed: 62,
                    },
                    {
                      id: "usage-005",
                      customer: "Stark Industries",
                      plan: "Professional",
                      meter: "Data Transfer",
                      currentUsage: "4,532 GB",
                      includedQuota: "3,000 GB",
                      overage: "1,532 GB",
                      projectedBill: "$153.20",
                      percentUsed: 151,
                    },
                  ].map((usage) => (
                    <TableRow key={usage.id}>
                      <TableCell className="font-medium">{usage.customer}</TableCell>
                      <TableCell>{usage.plan}</TableCell>
                      <TableCell>{usage.meter}</TableCell>
                      <TableCell>{usage.currentUsage}</TableCell>
                      <TableCell>{usage.includedQuota}</TableCell>
                      <TableCell>{usage.overage}</TableCell>
                      <TableCell className="text-right">{usage.projectedBill}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Customers by Usage</CardTitle>
                <CardDescription>Customers with highest usage across all meters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { customer: "Acme Corporation", usage: "5.4 TB", revenue: "$1,200.00", percent: 85 },
                    { customer: "Wayne Enterprises", usage: "4.2 TB", revenue: "$2,500.00", percent: 62 },
                    { customer: "Globex Industries", usage: "3.8 TB", revenue: "$791.36", percent: 138 },
                    { customer: "Stark Industries", usage: "2.9 TB", revenue: "$753.20", percent: 151 },
                    { customer: "Umbrella Corporation", usage: "1.7 TB", revenue: "$342.50", percent: 45 },
                  ].map((customer, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">{customer.customer}</div>
                          <div className="text-xs text-muted-foreground">
                            {customer.usage} • ${customer.revenue}
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          {customer.percent > 100 ? (
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                              {customer.percent}%
                            </Badge>
                          ) : (
                            <span>{customer.percent}%</span>
                          )}
                        </div>
                      </div>
                      <Progress value={Math.min(customer.percent, 100)} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Usage Trends</CardTitle>
                <CardDescription>Month-over-month usage growth by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Usage Trends Chart]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pricing-models" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Usage Pricing Models</CardTitle>
              <CardDescription>Configure pricing models for usage-based billing.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Model Name</TableHead>
                    <TableHead>Meter</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Tiers</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "model-001",
                      name: "Standard API Pricing",
                      meter: "API Calls",
                      type: "Tiered",
                      rate: "Varies",
                      tiers: "3 tiers",
                      status: "Active",
                    },
                    {
                      id: "model-002",
                      name: "Storage Pricing",
                      meter: "Storage",
                      type: "Linear",
                      rate: "$0.10 per GB",
                      tiers: "N/A",
                      status: "Active",
                    },
                    {
                      id: "model-003",
                      name: "Data Transfer Pricing",
                      meter: "Data Transfer",
                      type: "Tiered",
                      rate: "Varies",
                      tiers: "4 tiers",
                      status: "Active",
                    },
                    {
                      id: "model-004",
                      name: "Compute Pricing",
                      meter: "Compute Hours",
                      type: "Linear",
                      rate: "$0.25 per hour",
                      tiers: "N/A",
                      status: "Active",
                    },
                    {
                      id: "model-005",
                      name: "Premium API Pricing",
                      meter: "Premium API Calls",
                      type: "Volume",
                      rate: "Varies by volume",
                      tiers: "Volume-based",
                      status: "Active",
                    },
                    {
                      id: "model-006",
                      name: "ML Processing Pricing",
                      meter: "ML Processing",
                      type: "Linear",
                      rate: "$0.50 per minute",
                      tiers: "N/A",
                      status: "Draft",
                    },
                  ].map((model) => (
                    <TableRow key={model.id}>
                      <TableCell className="font-medium">{model.name}</TableCell>
                      <TableCell>{model.meter}</TableCell>
                      <TableCell>{model.type}</TableCell>
                      <TableCell>{model.rate}</TableCell>
                      <TableCell>{model.tiers}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            model.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {model.status}
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

          <Card>
            <CardHeader>
              <CardTitle>Tiered Pricing Example: API Calls</CardTitle>
              <CardDescription>Detailed view of tiered pricing structure</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tier</TableHead>
                    <TableHead>Range</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Calculation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      tier: "Tier 1",
                      range: "0 - 250,000 calls",
                      rate: "Included in base plan",
                      calculation: "$0.00",
                    },
                    {
                      tier: "Tier 2",
                      range: "250,001 - 1,000,000 calls",
                      rate: "$0.002 per call",
                      calculation: "(calls - 250,000) × $0.002",
                    },
                    {
                      tier: "Tier 3",
                      range: "1,000,001 - 5,000,000 calls",
                      rate: "$0.0015 per call",
                      calculation: "(calls - 1,000,000) × $0.0015 + $1,500",
                    },
                    {
                      tier: "Tier 4",
                      range: "5,000,001+ calls",
                      rate: "$0.001 per call",
                      calculation: "(calls - 5,000,000) × $0.001 + $7,500",
                    },
                  ].map((tier, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{tier.tier}</TableCell>
                      <TableCell>{tier.range}</TableCell>
                      <TableCell>{tier.rate}</TableCell>
                      <TableCell>{tier.calculation}</TableCell>
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
