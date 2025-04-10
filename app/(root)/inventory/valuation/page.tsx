"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  ArrowUpDown,
  Download,
  Filter,
  Search,
  Package,
  TrendingUp,
  Clock,
  Eye,
  FileText,
} from "lucide-react"
import { PageTitle } from "@/components/page-title"
import { DateRangePicker } from "@/components/date-range-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function InventoryValuationPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [valuationMethod, setValuationMethod] = useState("FIFO")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for item ${itemId}`,
      description: `${action} action triggered for item ${itemId}`,
    })
  }

  const handleValuationChange = (method: string) => {
    setValuationMethod(method)
    toast({
      title: "Valuation Method Changed",
      description: `Inventory valuation method changed to ${method}`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Inventory Valuation" subtitle="Manage and track inventory value using different methods" />
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                {valuationMethod} <BarChart className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Valuation Method</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleValuationChange("FIFO")}>
                FIFO (First In, First Out)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleValuationChange("LIFO")}>
                LIFO (Last In, First Out)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleValuationChange("Average Cost")}>Average Cost</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleValuationChange("Standard Cost")}>Standard Cost</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleValuationChange("Specific Identification")}>
                Specific Identification
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245,678.90</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+5.2%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,567</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+123</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Turnover</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+0.3</span>
              <span className="ml-1">from last quarter</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days in Inventory</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">-5</span>
              <span className="ml-1">from last quarter</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="valuation-methods">Valuation Methods</TabsTrigger>
            <TabsTrigger value="item-valuation">Item Valuation</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
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
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <DateRangePicker className="hidden lg:block" />
            </div>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4 mt-0">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Inventory Value Trend</CardTitle>
                <CardDescription>Monthly inventory value by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={[
                        { month: "Jan", raw: 350000, finished: 450000, wip: 120000, total: 920000 },
                        { month: "Feb", raw: 380000, finished: 470000, wip: 130000, total: 980000 },
                        { month: "Mar", raw: 400000, finished: 490000, wip: 140000, total: 1030000 },
                        { month: "Apr", raw: 420000, finished: 510000, wip: 150000, total: 1080000 },
                        { month: "May", raw: 450000, finished: 530000, wip: 160000, total: 1140000 },
                        { month: "Jun", raw: 470000, finished: 550000, wip: 170000, total: 1190000 },
                        { month: "Jul", raw: 490000, finished: 570000, wip: 180000, total: 1240000 },
                        { month: "Aug", raw: 510000, finished: 590000, wip: 190000, total: 1290000 },
                        { month: "Sep", raw: 530000, finished: 610000, wip: 200000, total: 1340000 },
                        { month: "Oct", raw: 550000, finished: 630000, wip: 210000, total: 1390000 },
                        { month: "Nov", raw: 570000, finished: 650000, wip: 220000, total: 1440000 },
                        { month: "Dec", raw: 590000, finished: 670000, wip: 230000, total: 1490000 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${Number(value).toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="raw" name="Raw Materials" stackId="a" fill="#8884d8" />
                      <Bar dataKey="finished" name="Finished Goods" stackId="a" fill="#82ca9d" />
                      <Bar dataKey="wip" name="Work in Progress" stackId="a" fill="#ffc658" />
                      <Area dataKey="total" name="Total Value" fill="#ff7300" stroke="#ff7300" fillOpacity={0.2} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Inventory Value by Category</CardTitle>
                <CardDescription>Current inventory value breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      category: "Raw Materials",
                      value: 590000,
                      percentage: 47.4,
                      change: "+3.5%",
                    },
                    {
                      category: "Finished Goods",
                      value: 425000,
                      percentage: 34.1,
                      change: "+2.8%",
                    },
                    {
                      category: "Work in Progress",
                      value: 230000,
                      percentage: 18.5,
                      change: "+4.2%",
                    },
                  ].map((category, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{category.category}</p>
                          <p className="text-xs text-muted-foreground">{category.percentage}% of total</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">${category.value.toLocaleString()}</p>
                          <p className="text-xs text-green-600">{category.change} from last month</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${
                            i === 0 ? "bg-purple-600" : i === 1 ? "bg-green-600" : "bg-amber-500"
                          }`}
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Inventory Value:</span>
                      <span className="font-bold">${(590000 + 425000 + 230000).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Top Inventory Items by Value</CardTitle>
              <CardDescription>Highest value items in inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Item</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Quantity</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Unit Cost</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Total Value</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV001",
                      name: "High-End Server Components",
                      sku: "HW-SRV-001",
                      category: "Electronics",
                      quantity: 250,
                      unitCost: 1200,
                      totalValue: 300000,
                      lastUpdated: "2023-11-15",
                    },
                    {
                      id: "INV002",
                      name: "Premium Aluminum Alloy",
                      sku: "RM-ALU-002",
                      category: "Raw Materials",
                      quantity: 5000,
                      unitCost: 45,
                      totalValue: 225000,
                      lastUpdated: "2023-11-12",
                    },
                    {
                      id: "INV003",
                      name: "Enterprise Software Licenses",
                      sku: "SW-ENT-003",
                      category: "Software",
                      quantity: 100,
                      unitCost: 1800,
                      totalValue: 180000,
                      lastUpdated: "2023-11-10",
                    },
                    {
                      id: "INV004",
                      name: "Industrial Automation Systems",
                      sku: "HW-AUT-004",
                      category: "Machinery",
                      quantity: 25,
                      unitCost: 6500,
                      totalValue: 162500,
                      lastUpdated: "2023-11-08",
                    },
                    {
                      id: "INV005",
                      name: "Precision Optical Components",
                      sku: "OP-PRC-005",
                      category: "Optics",
                      quantity: 150,
                      unitCost: 950,
                      totalValue: 142500,
                      lastUpdated: "2023-11-05",
                    },
                  ].map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity.toLocaleString()}</TableCell>
                      <TableCell>${item.unitCost.toLocaleString()}</TableCell>
                      <TableCell className="font-medium">${item.totalValue.toLocaleString()}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => handleAction("view", item.id)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Item Details: {item.name}</DialogTitle>
                                <DialogDescription>Detailed information about this inventory item.</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h3 className="font-medium text-sm">Item Information</h3>
                                    <div className="mt-2 space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">SKU:</span>
                                        <span className="text-sm font-medium">{item.sku}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Category:</span>
                                        <span className="text-sm font-medium">{item.category}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Location:</span>
                                        <span className="text-sm font-medium">Warehouse A, Section B12</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Status:</span>
                                        <Badge
                                          variant="outline"
                                          className="bg-green-50 text-green-700 hover:bg-green-50"
                                        >
                                          Active
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-sm">Valuation Details</h3>
                                    <div className="mt-2 space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Quantity:</span>
                                        <span className="text-sm font-medium">{item.quantity.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Unit Cost:</span>
                                        <span className="text-sm font-medium">${item.unitCost.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Total Value:</span>
                                        <span className="text-sm font-medium">${item.totalValue.toLocaleString()}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Valuation Method:</span>
                                        <span className="text-sm font-medium">{valuationMethod}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm">Purchase History</h3>
                                  <Table className="mt-2">
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Unit Cost</TableHead>
                                        <TableHead>Total</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell>2023-10-15</TableCell>
                                        <TableCell>100</TableCell>
                                        <TableCell>$1,150</TableCell>
                                        <TableCell>$115,000</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>2023-09-22</TableCell>
                                        <TableCell>75</TableCell>
                                        <TableCell>$1,200</TableCell>
                                        <TableCell>$90,000</TableCell>
                                      </TableRow>
                                      <TableRow>
                                        <TableCell>2023-08-10</TableCell>
                                        <TableCell>75</TableCell>
                                        <TableCell>$1,270</TableCell>
                                        <TableCell>$95,250</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </div>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline">
                                  <FileText className="mr-2 h-4 w-4" />
                                  Export Details
                                </Button>
                                <Button>Close</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="icon" onClick={() => handleAction("edit", item.id)}>
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex items-center justify-end">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="valuation-methods" className="space-y-4 mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Valuation Method Comparison</CardTitle>
                <CardDescription>Impact of different valuation methods on inventory value</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={[
                        { month: "Jan", fifo: 920000, lifo: 905000, avg: 912000 },
                        { month: "Feb", fifo: 980000, lifo: 960000, avg: 970000 },
                        { month: "Mar", fifo: 1030000, lifo: 1005000, avg: 1018000 },
                        { month: "Apr", fifo: 1080000, lifo: 1050000, avg: 1065000 },
                        { month: "May", fifo: 1140000, lifo: 1100000, avg: 1120000 },
                        { month: "Jun", fifo: 1190000, lifo: 1150000, avg: 1170000 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${Number(value).toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="fifo" name="FIFO" fill="#8884d8" />
                      <Bar dataKey="lifo" name="LIFO" fill="#82ca9d" />
                      <Bar dataKey="avg" name="Average Cost" fill="#ffc658" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Method Impact on Profit</CardTitle>
                <CardDescription>How valuation methods affect reported profit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "FIFO", value: 450000 },
                          { name: "LIFO", value: 420000 },
                          { name: "Average Cost", value: 435000 },
                          { name: "Standard Cost", value: 440000 },
                          { name: "Specific ID", value: 455000 },
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
                          { name: "FIFO", value: 450000 },
                          { name: "LIFO", value: 420000 },
                          { name: "Average Cost", value: 435000 },
                          { name: "Standard Cost", value: 440000 },
                          { name: "Specific ID", value: 455000 },
                        ].map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"][index % 5]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${Number(value).toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reported Profit (FIFO):</span>
                    <span className="font-medium">$450,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Reported Profit (LIFO):</span>
                    <span className="font-medium">$420,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Profit Difference:</span>
                    <span className="font-medium text-amber-600">$30,000 (6.7%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Valuation Method Comparison</CardTitle>
              <CardDescription>Detailed comparison of inventory valuation methods</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Pros</TableHead>
                    <TableHead>Cons</TableHead>
                    <TableHead>Best For</TableHead>
                    <TableHead>Current Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">FIFO</TableCell>
                    <TableCell>First In, First Out - Assumes oldest inventory items are sold first</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Matches physical flow in many businesses</li>
                        <li>Generally results in higher reported profits during inflation</li>
                        <li>Ending inventory values are closer to current market values</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Higher tax liability during inflation</li>
                        <li>May not match actual physical flow in all cases</li>
                      </ul>
                    </TableCell>
                    <TableCell>Businesses with perishable goods or items that become obsolete quickly</TableCell>
                    <TableCell className="font-medium">$1,245,678.90</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">LIFO</TableCell>
                    <TableCell>Last In, First Out - Assumes newest inventory items are sold first</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Lower tax liability during inflation</li>
                        <li>Better matching of current costs with current revenues</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Older inventory may never be valued properly</li>
                        <li>Lower reported profits during inflation</li>
                        <li>Not allowed under IFRS (international standards)</li>
                      </ul>
                    </TableCell>
                    <TableCell>Businesses in high-inflation environments or with stable inventory levels</TableCell>
                    <TableCell className="font-medium">$1,198,452.30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Average Cost</TableCell>
                    <TableCell>Uses the weighted average of all units available for sale</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Simple to calculate and apply</li>
                        <li>Smooths out price fluctuations</li>
                        <li>Accepted under both GAAP and IFRS</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>May not reflect actual physical flow</li>
                        <li>Less precise than other methods</li>
                      </ul>
                    </TableCell>
                    <TableCell>Businesses with homogeneous inventory items or commodity products</TableCell>
                    <TableCell className="font-medium">$1,220,345.60</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Standard Cost</TableCell>
                    <TableCell>Uses predetermined costs rather than actual costs</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Simplifies record keeping</li>
                        <li>Useful for performance evaluation</li>
                        <li>Helps with budgeting and planning</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Requires periodic adjustments for variances</li>
                        <li>May not reflect actual costs accurately</li>
                      </ul>
                    </TableCell>
                    <TableCell>Manufacturing companies with consistent production processes</TableCell>
                    <TableCell className="font-medium">$1,235,789.40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Specific Identification</TableCell>
                    <TableCell>Tracks each inventory item individually and its actual cost</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Most accurate method</li>
                        <li>Matches actual cost flow precisely</li>
                        <li>Ideal for unique or high-value items</li>
                      </ul>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 text-sm">
                        <li>Resource-intensive to implement</li>
                        <li>Requires sophisticated tracking systems</li>
                        <li>Not practical for large volumes of similar items</li>
                      </ul>
                    </TableCell>
                    <TableCell>Businesses with unique, high-value items (jewelry, art, luxury goods)</TableCell>
                    <TableCell className="font-medium">$1,250,123.70</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="item-valuation" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Item Valuation Details</CardTitle>
              <CardDescription>Detailed valuation information for each inventory item</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Unit Cost ({valuationMethod})</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Market Value</TableHead>
                    <TableHead>LCM Adjustment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV001",
                      name: "High-End Server Components",
                      sku: "HW-SRV-001",
                      category: "Electronics",
                      quantity: 250,
                      unitCost: 1200,
                      totalValue: 300000,
                      marketValue: 310000,
                      lcmAdjustment: 0,
                    },
                    {
                      id: "INV002",
                      name: "Premium Aluminum Alloy",
                      sku: "RM-ALU-002",
                      category: "Raw Materials",
                      quantity: 5000,
                      unitCost: 45,
                      totalValue: 225000,
                      marketValue: 225000,
                      lcmAdjustment: 0,
                    },
                    {
                      id: "INV003",
                      name: "Enterprise Software Licenses",
                      sku: "SW-ENT-003",
                      category: "Software",
                      quantity: 100,
                      unitCost: 1800,
                      totalValue: 180000,
                      marketValue: 175000,
                      lcmAdjustment: -5000,
                    },
                    {
                      id: "INV004",
                      name: "Industrial Automation Systems",
                      sku: "HW-AUT-004",
                      category: "Machinery",
                      quantity: 25,
                      unitCost: 6500,
                      totalValue: 162500,
                      marketValue: 162500,
                      lcmAdjustment: 0,
                    },
                    {
                      id: "INV005",
                      name: "Precision Optical Components",
                      sku: "OP-PRC-005",
                      category: "Optics",
                      quantity: 150,
                      unitCost: 950,
                      totalValue: 142500,
                      marketValue: 138000,
                      lcmAdjustment: -4500,
                    },
                    {
                      id: "INV006",
                      name: "Advanced Networking Equipment",
                      sku: "NW-ADV-006",
                      category: "Networking",
                      quantity: 75,
                      unitCost: 1850,
                      totalValue: 138750,
                      marketValue: 142500,
                      lcmAdjustment: 0,
                    },
                    {
                      id: "INV007",
                      name: "Specialized Manufacturing Tools",
                      sku: "TL-MFG-007",
                      category: "Tools",
                      quantity: 120,
                      unitCost: 850,
                      totalValue: 102000,
                      marketValue: 102000,
                      lcmAdjustment: 0,
                    },
                  ].map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity.toLocaleString()}</TableCell>
                      <TableCell>${item.unitCost.toLocaleString()}</TableCell>
                      <TableCell>${item.totalValue.toLocaleString()}</TableCell>
                      <TableCell>${item.marketValue.toLocaleString()}</TableCell>
                      <TableCell className={item.lcmAdjustment < 0 ? "text-red-600" : ""}>
                        {item.lcmAdjustment !== 0 ? `${item.lcmAdjustment.toLocaleString()}` : "-"}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50">
                    <TableCell colSpan={5} className="font-bold">
                      Total
                    </TableCell>
                    <TableCell className="font-bold">$1,250,750</TableCell>
                    <TableCell className="font-bold">$1,255,000</TableCell>
                    <TableCell className="font-bold text-red-600">-$9,500</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  * LCM (Lower of Cost or Market) adjustments are made when the market value of an item falls below its
                  cost.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Valuation History</CardTitle>
              <CardDescription>Historical inventory valuation records</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Valuation Method</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Items Count</TableHead>
                    <TableHead>LCM Adjustments</TableHead>
                    <TableHead>Performed By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "VAL001",
                      date: "2023-11-30",
                      method: "FIFO",
                      value: 1245678.9,
                      itemsCount: 4567,
                      lcmAdjustments: -9500,
                      performedBy: "John Smith",
                      status: "Current",
                    },
                    {
                      id: "VAL002",
                      date: "2023-10-31",
                      method: "FIFO",
                      value: 1185432.5,
                      itemsCount: 4490,
                      lcmAdjustments: -7800,
                      performedBy: "John Smith",
                      status: "Approved",
                    },
                    {
                      id: "VAL003",
                      date: "2023-09-30",
                      method: "FIFO",
                      value: 1142567.75,
                      itemsCount: 4350,
                      lcmAdjustments: -6500,
                      performedBy: "Sarah Johnson",
                      status: "Approved",
                    },
                    {
                      id: "VAL004",
                      date: "2023-08-31",
                      method: "FIFO",
                      value: 1098765.25,
                      itemsCount: 4210,
                      lcmAdjustments: -5200,
                      performedBy: "Sarah Johnson",
                      status: "Approved",
                    },
                    {
                      id: "VAL005",
                      date: "2023-07-31",
                      method: "FIFO",
                      value: 1056789.4,
                      itemsCount: 4150,
                      lcmAdjustments: -4800,
                      performedBy: "John Smith",
                      status: "Approved",
                    },
                    {
                      id: "VAL006",
                      date: "2023-06-30",
                      method: "FIFO",
                      value: 1012345.8,
                      itemsCount: 4050,
                      lcmAdjustments: -4200,
                      performedBy: "Sarah Johnson",
                      status: "Approved",
                    },
                  ].map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.method}</TableCell>
                      <TableCell>${record.value.toLocaleString()}</TableCell>
                      <TableCell>{record.itemsCount.toLocaleString()}</TableCell>
                      <TableCell className={record.lcmAdjustments < 0 ? "text-red-600" : ""}>
                        ${record.lcmAdjustments.toLocaleString()}
                      </TableCell>
                      <TableCell>{record.performedBy}</TableCell>
                      <TableCell>
                        <Badge
                          variant={record.status === "Current" ? "default" : "outline"}
                          className={record.status === "Current" ? "" : "bg-green-50 text-green-700 hover:bg-green-50"}
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleAction("view", record.id)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex items-center justify-end">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
