"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  ClipboardCheck,
  ArrowUpDown,
  MoreHorizontal,
  Filter,
  Search,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Plus,
} from "lucide-react"
import { PageTitle } from "@/components/page-title"
import { DateRangePicker } from "@/components/date-range-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"

export default function CycleCountingPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("schedule")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for item ${itemId}`,
      description: `${action} action triggered for item ${itemId}`,
    })
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Cycle Counting" subtitle="Schedule and manage inventory cycle counts" />
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Count
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Counts</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="ml-1">Next count: Tomorrow</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Counts</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+8</span>
              <span className="ml-1">this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+1.2%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discrepancies</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">8</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">-3</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="schedule" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="counts">Counts</TabsTrigger>
            <TabsTrigger value="discrepancies">Discrepancies</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full md:w-[250px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search items..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <DateRangePicker className="hidden lg:block" />
            </div>
          </div>
        </div>

        <TabsContent value="schedule" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Cycle Count Schedule</CardTitle>
              <CardDescription>Upcoming and planned inventory counts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Date</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Items to Count</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "CC001",
                      date: "Apr 10, 2025",
                      location: "Warehouse A - Zone 1",
                      category: "Electronics",
                      assignedTo: "John Smith",
                      itemCount: 45,
                      status: "Scheduled",
                    },
                    {
                      id: "CC002",
                      date: "Apr 11, 2025",
                      location: "Warehouse A - Zone 2",
                      category: "Accessories",
                      assignedTo: "Sarah Johnson",
                      itemCount: 32,
                      status: "Scheduled",
                    },
                    {
                      id: "CC003",
                      date: "Apr 12, 2025",
                      location: "Warehouse B - Zone 1",
                      category: "Raw Materials",
                      assignedTo: "Michael Brown",
                      itemCount: 28,
                      status: "Scheduled",
                    },
                    {
                      id: "CC004",
                      date: "Apr 15, 2025",
                      location: "Warehouse B - Zone 3",
                      category: "Finished Goods",
                      assignedTo: "Emily Davis",
                      itemCount: 56,
                      status: "Scheduled",
                    },
                    {
                      id: "CC005",
                      date: "Apr 17, 2025",
                      location: "Warehouse C - Zone 1",
                      category: "Components",
                      assignedTo: "Robert Wilson",
                      itemCount: 38,
                      status: "Scheduled",
                    },
                    {
                      id: "CC006",
                      date: "Apr 18, 2025",
                      location: "Warehouse C - Zone 2",
                      category: "Packaging",
                      assignedTo: "Jennifer Lee",
                      itemCount: 24,
                      status: "Scheduled",
                    },
                    {
                      id: "CC007",
                      date: "Apr 20, 2025",
                      location: "Warehouse A - Zone 3",
                      category: "Hardware",
                      assignedTo: "David Miller",
                      itemCount: 42,
                      status: "Scheduled",
                    },
                    {
                      id: "CC008",
                      date: "Apr 22, 2025",
                      location: "Warehouse B - Zone 2",
                      category: "Tools",
                      assignedTo: "Lisa Anderson",
                      itemCount: 35,
                      status: "Scheduled",
                    },
                  ].map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell>{schedule.date}</TableCell>
                      <TableCell>{schedule.location}</TableCell>
                      <TableCell>{schedule.category}</TableCell>
                      <TableCell>{schedule.assignedTo}</TableCell>
                      <TableCell>{schedule.itemCount}</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{schedule.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleAction("View details", schedule.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Edit schedule", schedule.id)}>
                              Edit schedule
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Print count sheet", schedule.id)}>
                              Print count sheet
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Start count", schedule.id)}>
                              Start count
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => handleAction("Cancel count", schedule.id)}
                            >
                              Cancel count
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

        <TabsContent value="counts" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Recent Counts</CardTitle>
              <CardDescription>Recently completed inventory counts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Date</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Counted By</TableHead>
                    <TableHead>Items Counted</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "CC101",
                      date: "Apr 8, 2025",
                      location: "Warehouse A - Zone 4",
                      category: "Electronics",
                      countedBy: "John Smith",
                      itemsCounted: 52,
                      accuracy: 98.1,
                      status: "Completed",
                    },
                    {
                      id: "CC102",
                      date: "Apr 7, 2025",
                      location: "Warehouse B - Zone 2",
                      category: "Components",
                      countedBy: "Sarah Johnson",
                      itemsCounted: 38,
                      accuracy: 94.7,
                      status: "Discrepancies",
                    },
                    {
                      id: "CC103",
                      date: "Apr 5, 2025",
                      location: "Warehouse C - Zone 1",
                      category: "Raw Materials",
                      countedBy: "Michael Brown",
                      itemsCounted: 45,
                      accuracy: 97.8,
                      status: "Completed",
                    },
                    {
                      id: "CC104",
                      date: "Apr 3, 2025",
                      location: "Warehouse A - Zone 2",
                      category: "Finished Goods",
                      countedBy: "Emily Davis",
                      itemsCounted: 60,
                      accuracy: 95.0,
                      status: "Discrepancies",
                    },
                    {
                      id: "CC105",
                      date: "Apr 1, 2025",
                      location: "Warehouse B - Zone 3",
                      category: "Hardware",
                      countedBy: "Robert Wilson",
                      itemsCounted: 42,
                      accuracy: 100.0,
                      status: "Completed",
                    },
                  ].map((count) => (
                    <TableRow key={count.id}>
                      <TableCell>{count.date}</TableCell>
                      <TableCell>{count.location}</TableCell>
                      <TableCell>{count.category}</TableCell>
                      <TableCell>{count.countedBy}</TableCell>
                      <TableCell>{count.itemsCounted}</TableCell>
                      <TableCell>
                        <span
                          className={
                            count.accuracy >= 98
                              ? "text-green-600"
                              : count.accuracy >= 95
                                ? "text-amber-600"
                                : "text-red-600"
                          }
                        >
                          {count.accuracy}%
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            count.status === "Completed"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          }
                        >
                          {count.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View details", count.id)}>
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

        <TabsContent value="discrepancies" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Discrepancies</CardTitle>
              <CardDescription>Items with count discrepancies that need resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>System Qty</TableHead>
                    <TableHead>Counted Qty</TableHead>
                    <TableHead>Variance</TableHead>
                    <TableHead>Value Impact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "D001",
                      item: "Wireless Headphones",
                      sku: "WH-101",
                      location: "Warehouse A - Zone 4",
                      systemQty: 25,
                      countedQty: 22,
                      variance: -3,
                      valueImpact: -149.97,
                    },
                    {
                      id: "D002",
                      item: "USB-C Cable",
                      sku: "UC-202",
                      location: "Warehouse B - Zone 2",
                      systemQty: 150,
                      countedQty: 142,
                      variance: -8,
                      valueImpact: -79.92,
                    },
                    {
                      id: "D003",
                      item: "Aluminum Enclosure",
                      sku: "AE-303",
                      location: "Warehouse C - Zone 1",
                      systemQty: 45,
                      countedQty: 48,
                      variance: 3,
                      valueImpact: 74.97,
                    },
                    {
                      id: "D004",
                      item: "Circuit Board v2",
                      sku: "CB-404",
                      location: "Warehouse A - Zone 2",
                      systemQty: 60,
                      countedQty: 55,
                      variance: -5,
                      valueImpact: -224.95,
                    },
                    {
                      id: "D005",
                      item: "Power Supply 500W",
                      sku: "PS-505",
                      location: "Warehouse B - Zone 3",
                      systemQty: 30,
                      countedQty: 32,
                      variance: 2,
                      valueImpact: 159.98,
                    },
                    {
                      id: "D006",
                      item: "Cooling Fan 120mm",
                      sku: "CF-606",
                      location: "Warehouse A - Zone 1",
                      systemQty: 80,
                      countedQty: 76,
                      variance: -4,
                      valueImpact: -59.96,
                    },
                    {
                      id: "D007",
                      item: "HDMI Cable 2m",
                      sku: "HC-707",
                      location: "Warehouse C - Zone 2",
                      systemQty: 120,
                      countedQty: 115,
                      variance: -5,
                      valueImpact: -74.95,
                    },
                    {
                      id: "D008",
                      item: "Wireless Mouse",
                      sku: "WM-808",
                      location: "Warehouse B - Zone 1",
                      systemQty: 40,
                      countedQty: 43,
                      variance: 3,
                      valueImpact: 89.97,
                    },
                  ].map((discrepancy) => (
                    <TableRow key={discrepancy.id}>
                      <TableCell className="font-medium">{discrepancy.item}</TableCell>
                      <TableCell>{discrepancy.sku}</TableCell>
                      <TableCell>{discrepancy.location}</TableCell>
                      <TableCell>{discrepancy.systemQty}</TableCell>
                      <TableCell>{discrepancy.countedQty}</TableCell>
                      <TableCell className={discrepancy.variance < 0 ? "text-red-600" : "text-green-600"}>
                        {discrepancy.variance > 0 ? "+" : ""}
                        {discrepancy.variance}
                      </TableCell>
                      <TableCell className={discrepancy.valueImpact < 0 ? "text-red-600" : "text-green-600"}>
                        ${discrepancy.valueImpact > 0 ? "+" : ""}
                        {discrepancy.valueImpact.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleAction("Investigate", discrepancy.id)}>
                              Investigate
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Recount", discrepancy.id)}>
                              Recount
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Adjust inventory", discrepancy.id)}>
                              Adjust inventory
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Create report", discrepancy.id)}>
                              Create report
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

        <TabsContent value="analytics" className="space-y-4 mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Accuracy Trend</CardTitle>
                <CardDescription>Monthly inventory accuracy percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={[
                        { month: "Jan", accuracy: 94.2 },
                        { month: "Feb", accuracy: 94.8 },
                        { month: "Mar", accuracy: 95.5 },
                        { month: "Apr", accuracy: 96.8 },
                        { month: "May", accuracy: 96.2 },
                        { month: "Jun", accuracy: 96.5 },
                        { month: "Jul", accuracy: 97.1 },
                        { month: "Aug", accuracy: 97.3 },
                        { month: "Sep", accuracy: 96.9 },
                        { month: "Oct", accuracy: 97.5 },
                        { month: "Nov", accuracy: 97.8 },
                        { month: "Dec", accuracy: 96.8 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[90, 100]} />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="accuracy" name="Accuracy %" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Discrepancy by Category</CardTitle>
                <CardDescription>Distribution of inventory discrepancies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Electronics", value: 35 },
                          { name: "Components", value: 25 },
                          { name: "Raw Materials", value: 15 },
                          { name: "Finished Goods", value: 10 },
                          { name: "Packaging", value: 15 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {[
                          { name: "Electronics", value: 35 },
                          { name: "Components", value: 25 },
                          { name: "Raw Materials", value: 15 },
                          { name: "Finished Goods", value: 10 },
                          { name: "Packaging", value: 15 },
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cycle Count Performance</CardTitle>
              <CardDescription>Key metrics and performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Current</TableHead>
                    <TableHead>Previous</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      metric: "Inventory Accuracy",
                      current: "96.8%",
                      previous: "95.6%",
                      change: "+1.2%",
                      target: "98.0%",
                      status: "Approaching Target",
                    },
                    {
                      metric: "Count Efficiency",
                      current: "42 items/hour",
                      previous: "38 items/hour",
                      change: "+4 items/hour",
                      target: "45 items/hour",
                      status: "Approaching Target",
                    },
                    {
                      metric: "Discrepancy Rate",
                      current: "3.2%",
                      previous: "4.4%",
                      change: "-1.2%",
                      target: "2.0%",
                      status: "Needs Improvement",
                    },
                    {
                      metric: "Adjustment Value",
                      current: "$1,245.67",
                      previous: "$2,356.89",
                      change: "-$1,111.22",
                      target: "<$1,000.00",
                      status: "Needs Improvement",
                    },
                    {
                      metric: "Count Coverage",
                      current: "85.4%",
                      previous: "82.1%",
                      change: "+3.3%",
                      target: "90.0%",
                      status: "Approaching Target",
                    },
                  ].map((metric, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{metric.metric}</TableCell>
                      <TableCell>{metric.current}</TableCell>
                      <TableCell>{metric.previous}</TableCell>
                      <TableCell className={metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                        {metric.change}
                      </TableCell>
                      <TableCell>{metric.target}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            metric.status === "Meeting Target"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : metric.status === "Approaching Target"
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {metric.status}
                        </Badge>
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
