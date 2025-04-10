"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { ArrowUpRight, Download, FileText, Filter, Plus, Search, Settings, DollarSign, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { Progress } from "@/components/ui/progress"

export default function RevenueRecognitionPage() {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(2025, 3, 1),
    to: new Date(2025, 3, 30),
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle
          title="Revenue Recognition"
          subtitle="Manage revenue recognition and deferred revenue (ASC 606 / IFRS 15)"
        />
        <div className="flex items-center space-x-2">
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Revenue Schedule
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recognized Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$245,678.90</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deferred Revenue</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245,890.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+5 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Contract Value</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,350.00</div>
            <p className="text-xs text-muted-foreground">+3.7% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="contracts" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-auto w-full">
          <TabsTrigger value="contracts">Revenue Contracts</TabsTrigger>
          <TabsTrigger value="schedules">Revenue Schedules</TabsTrigger>
          <TabsTrigger value="deferred">Deferred Revenue</TabsTrigger>
          <TabsTrigger value="forecasting">Revenue Forecasting</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contracts..." className="pl-8" />
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
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
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

        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Revenue Contracts</CardTitle>
              <CardDescription>Manage revenue contracts and performance obligations.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Recognized</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "REV-001",
                      contract: "Enterprise License",
                      customer: "Acme Corporation",
                      startDate: "Jan 1, 2025",
                      endDate: "Dec 31, 2025",
                      totalValue: "$36,000.00",
                      recognized: "$12,000.00",
                      status: "Active",
                    },
                    {
                      id: "REV-002",
                      contract: "Implementation Services",
                      customer: "Globex Industries",
                      startDate: "Feb 1, 2025",
                      endDate: "Apr 30, 2025",
                      totalValue: "$15,000.00",
                      recognized: "$10,000.00",
                      status: "Active",
                    },
                    {
                      id: "REV-003",
                      contract: "Support Contract",
                      customer: "Wayne Enterprises",
                      startDate: "Mar 1, 2025",
                      endDate: "Feb 28, 2026",
                      totalValue: "$24,000.00",
                      recognized: "$2,000.00",
                      status: "Active",
                    },
                    {
                      id: "REV-004",
                      contract: "Custom Development",
                      customer: "Stark Industries",
                      startDate: "Jan 15, 2025",
                      endDate: "Jun 15, 2025",
                      totalValue: "$50,000.00",
                      recognized: "$20,000.00",
                      status: "Active",
                    },
                    {
                      id: "REV-005",
                      contract: "Training Services",
                      customer: "Umbrella Corporation",
                      startDate: "Apr 1, 2025",
                      endDate: "Apr 30, 2025",
                      totalValue: "$8,500.00",
                      recognized: "$2,125.00",
                      status: "Active",
                    },
                    {
                      id: "REV-006",
                      contract: "Consulting Services",
                      customer: "Cyberdyne Systems",
                      startDate: "Jan 1, 2025",
                      endDate: "Mar 31, 2025",
                      totalValue: "$12,000.00",
                      recognized: "$12,000.00",
                      status: "Completed",
                    },
                  ].map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">{contract.contract}</TableCell>
                      <TableCell>{contract.customer}</TableCell>
                      <TableCell>{contract.startDate}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
                      <TableCell>{contract.totalValue}</TableCell>
                      <TableCell>{contract.recognized}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            contract.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : contract.status === "Completed"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                          }
                        >
                          {contract.status}
                        </Badge>
                      </TableCell>
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
        </TabsContent>

        <TabsContent value="schedules" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Revenue Recognition Schedules</CardTitle>
              <CardDescription>View and manage revenue recognition schedules.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Scheduled Amount</TableHead>
                    <TableHead>Recognized Amount</TableHead>
                    <TableHead>Recognition Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "SCH-001",
                      contract: "Enterprise License",
                      customer: "Acme Corporation",
                      period: "Apr 2025",
                      scheduledAmount: "$3,000.00",
                      recognizedAmount: "$3,000.00",
                      recognitionDate: "Apr 30, 2025",
                      status: "Recognized",
                    },
                    {
                      id: "SCH-002",
                      contract: "Enterprise License",
                      customer: "Acme Corporation",
                      period: "May 2025",
                      scheduledAmount: "$3,000.00",
                      recognizedAmount: "$0.00",
                      recognitionDate: "May 31, 2025",
                      status: "Scheduled",
                    },
                    {
                      id: "SCH-003",
                      contract: "Support Contract",
                      customer: "Wayne Enterprises",
                      period: "Apr 2025",
                      scheduledAmount: "$2,000.00",
                      recognizedAmount: "$2,000.00",
                      recognitionDate: "Apr 30, 2025",
                      status: "Recognized",
                    },
                    {
                      id: "SCH-004",
                      contract: "Support Contract",
                      customer: "Wayne Enterprises",
                      period: "May 2025",
                      scheduledAmount: "$2,000.00",
                      recognizedAmount: "$0.00",
                      recognitionDate: "May 31, 2025",
                      status: "Scheduled",
                    },
                    {
                      id: "SCH-005",
                      contract: "Custom Development",
                      customer: "Stark Industries",
                      period: "Apr 2025",
                      scheduledAmount: "$10,000.00",
                      recognizedAmount: "$10,000.00",
                      recognitionDate: "Apr 15, 2025",
                      status: "Recognized",
                    },
                    {
                      id: "SCH-006",
                      contract: "Custom Development",
                      customer: "Stark Industries",
                      period: "May 2025",
                      scheduledAmount: "$10,000.00",
                      recognizedAmount: "$0.00",
                      recognitionDate: "May 15, 2025",
                      status: "Scheduled",
                    },
                  ].map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">{schedule.contract}</TableCell>
                      <TableCell>{schedule.customer}</TableCell>
                      <TableCell>{schedule.period}</TableCell>
                      <TableCell>{schedule.scheduledAmount}</TableCell>
                      <TableCell>{schedule.recognizedAmount}</TableCell>
                      <TableCell>{schedule.recognitionDate}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            schedule.status === "Recognized"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {schedule.status}
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

        <TabsContent value="deferred" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Deferred Revenue</CardTitle>
              <CardDescription>Track and manage deferred revenue balances.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total Contract Value</TableHead>
                    <TableHead>Recognized to Date</TableHead>
                    <TableHead>Deferred Balance</TableHead>
                    <TableHead>Recognition Schedule</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "DEF-001",
                      contract: "Enterprise License",
                      customer: "Acme Corporation",
                      totalValue: "$36,000.00",
                      recognizedToDate: "$12,000.00",
                      deferredBalance: "$24,000.00",
                      schedule: "Monthly",
                    },
                    {
                      id: "DEF-002",
                      contract: "Implementation Services",
                      customer: "Globex Industries",
                      totalValue: "$15,000.00",
                      recognizedToDate: "$10,000.00",
                      deferredBalance: "$5,000.00",
                      schedule: "Milestone-based",
                    },
                    {
                      id: "DEF-003",
                      contract: "Support Contract",
                      customer: "Wayne Enterprises",
                      totalValue: "$24,000.00",
                      recognizedToDate: "$2,000.00",
                      deferredBalance: "$22,000.00",
                      schedule: "Monthly",
                    },
                    {
                      id: "DEF-004",
                      contract: "Custom Development",
                      customer: "Stark Industries",
                      totalValue: "$50,000.00",
                      recognizedToDate: "$20,000.00",
                      deferredBalance: "$30,000.00",
                      schedule: "Milestone-based",
                    },
                    {
                      id: "DEF-005",
                      contract: "Training Services",
                      customer: "Umbrella Corporation",
                      totalValue: "$8,500.00",
                      recognizedToDate: "$2,125.00",
                      deferredBalance: "$6,375.00",
                      schedule: "Weekly",
                    },
                  ].map((deferred) => (
                    <TableRow key={deferred.id}>
                      <TableCell className="font-medium">{deferred.contract}</TableCell>
                      <TableCell>{deferred.customer}</TableCell>
                      <TableCell>{deferred.totalValue}</TableCell>
                      <TableCell>{deferred.recognizedToDate}</TableCell>
                      <TableCell>{deferred.deferredBalance}</TableCell>
                      <TableCell>{deferred.schedule}</TableCell>
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

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Deferred Revenue Aging</CardTitle>
                <CardDescription>Deferred revenue by expected recognition period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { period: "Current Month", amount: "$45,678.00", percent: 25 },
                    { period: "Next 3 Months", amount: "$89,432.00", percent: 48 },
                    { period: "4-6 Months", amount: "$32,450.00", percent: 18 },
                    { period: "7-12 Months", amount: "$12,330.00", percent: 7 },
                    { period: "Beyond 12 Months", amount: "$4,500.00", percent: 2 },
                  ].map((aging, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">{aging.period}</div>
                          <div className="text-xs text-muted-foreground">{aging.amount}</div>
                        </div>
                        <div className="text-sm font-medium">{aging.percent}%</div>
                      </div>
                      <Progress value={aging.percent} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Deferred Revenue by Type</CardTitle>
                <CardDescription>Breakdown of deferred revenue by contract type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Deferred Revenue Chart]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Revenue Forecast</CardTitle>
              <CardDescription>Projected revenue recognition for the next 12 months.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Contracted Revenue</TableHead>
                    <TableHead>Renewal Forecast</TableHead>
                    <TableHead>New Business Forecast</TableHead>
                    <TableHead>Total Forecast</TableHead>
                    <TableHead>YoY Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      period: "May 2025",
                      contracted: "$245,678.00",
                      renewal: "$12,500.00",
                      newBusiness: "$18,000.00",
                      total: "$276,178.00",
                      growth: "+8.2%",
                    },
                    {
                      period: "Jun 2025",
                      contracted: "$243,450.00",
                      renewal: "$15,600.00",
                      newBusiness: "$22,000.00",
                      total: "$281,050.00",
                      growth: "+9.5%",
                    },
                    {
                      period: "Jul 2025",
                      contracted: "$240,120.00",
                      renewal: "$18,900.00",
                      newBusiness: "$25,000.00",
                      total: "$284,020.00",
                      growth: "+10.2%",
                    },
                    {
                      period: "Aug 2025",
                      contracted: "$238,750.00",
                      renewal: "$22,400.00",
                      newBusiness: "$28,000.00",
                      total: "$289,150.00",
                      growth: "+11.8%",
                    },
                    {
                      period: "Sep 2025",
                      contracted: "$235,890.00",
                      renewal: "$25,600.00",
                      newBusiness: "$32,000.00",
                      total: "$293,490.00",
                      growth: "+12.5%",
                    },
                    {
                      period: "Oct 2025",
                      contracted: "$232,450.00",
                      renewal: "$28,900.00",
                      newBusiness: "$35,000.00",
                      total: "$296,350.00",
                      growth: "+13.2%",
                    },
                  ].map((forecast, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{forecast.period}</TableCell>
                      <TableCell>{forecast.contracted}</TableCell>
                      <TableCell>{forecast.renewal}</TableCell>
                      <TableCell>{forecast.newBusiness}</TableCell>
                      <TableCell>{forecast.total}</TableCell>
                      <TableCell>{forecast.growth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Forecast Visualization</CardTitle>
                <CardDescription>12-month revenue forecast by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  [Revenue Forecast Chart]
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Forecast Assumptions</CardTitle>
                <CardDescription>Key assumptions used in revenue forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Renewal Rate</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Current: 92%</div>
                      <div className="text-sm">Forecast: 90%</div>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Upsell Rate</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Current: 35%</div>
                      <div className="text-sm">Forecast: 40%</div>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">New Customer Acquisition</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Current: 15 per month</div>
                      <div className="text-sm">Forecast: 18 per month</div>
                    </div>
                    <Progress value={18} max={30} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Average Contract Value</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Current: $24,350</div>
                      <div className="text-sm">Forecast: $25,500</div>
                    </div>
                    <Progress value={25500} max={30000} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
