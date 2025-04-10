"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart, ArrowUpDown, MoreHorizontal, Download, Filter, Search, AlertCircle } from "lucide-react"
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
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  ComposedChart,
} from "@/components/ui/chart"

export default function CostComparisonPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("standard-vs-actual")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for item ${itemId}`,
      description: `${action} action triggered for item ${itemId}`,
    })
  }

  const standardVsActualData = [
    { month: "Jan", standard: 1000, actual: 1050, variance: 50 },
    { month: "Feb", standard: 1200, actual: 1150, variance: -50 },
    { month: "Mar", standard: 1100, actual: 1200, variance: 100 },
    { month: "Apr", standard: 1300, actual: 1250, variance: -50 },
    { month: "May", standard: 1400, actual: 1500, variance: 100 },
    { month: "Jun", standard: 1500, actual: 1450, variance: -50 },
    { month: "Jul", standard: 1600, actual: 1700, variance: 100 },
    { month: "Aug", standard: 1700, actual: 1650, variance: -50 },
    { month: "Sep", standard: 1800, actual: 1900, variance: 100 },
    { month: "Oct", standard: 1900, actual: 1850, variance: -50 },
    { month: "Nov", standard: 2000, actual: 2100, variance: 100 },
    { month: "Dec", standard: 2100, actual: 2050, variance: -50 },
  ]

  const varianceData = [
    { category: "Materials", standard: 5000, actual: 5300, variance: 300, percentage: 6 },
    { category: "Labor", standard: 3500, actual: 3200, variance: -300, percentage: -8.6 },
    { category: "Overhead", standard: 2000, actual: 2200, variance: 200, percentage: 10 },
    { category: "Shipping", standard: 1000, actual: 950, variance: -50, percentage: -5 },
    { category: "Duties", standard: 800, actual: 900, variance: 100, percentage: 12.5 },
    { category: "Insurance", standard: 500, actual: 480, variance: -20, percentage: -4 },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Standard vs. Actual Costing"
          subtitle="Compare standard costs to actual costs and analyze variances"
        />
        <div className="flex items-center gap-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Variance</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$230.00</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">+2.5%</span>
              <span className="ml-1">from standard cost</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Material Variance</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$300.00</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">+6.0%</span>
              <span className="ml-1">from standard cost</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Labor Variance</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$300.00</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">-8.6%</span>
              <span className="ml-1">from standard cost</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overhead Variance</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$200.00</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">+10.0%</span>
              <span className="ml-1">from standard cost</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs defaultValue="standard-vs-actual" className="w-full" onValueChange={setActiveTab}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="standard-vs-actual">Standard vs. Actual</TabsTrigger>
              <TabsTrigger value="variance-analysis">Variance Analysis</TabsTrigger>
              <TabsTrigger value="cost-drivers">Cost Drivers</TabsTrigger>
            </TabsList>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative w-full md:w-[250px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <DateRangePicker className="hidden lg:block" />
              </div>
            </div>
          </div>

          <TabsContent value="standard-vs-actual" className="space-y-4 mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Standard vs. Actual Cost Comparison</CardTitle>
                <CardDescription>Monthly comparison of standard and actual costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={standardVsActualData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="standard" name="Standard Cost" fill="#8884d8" />
                      <Bar yAxisId="left" dataKey="actual" name="Actual Cost" fill="#82ca9d" />
                      <Area yAxisId="right" dataKey="variance" name="Variance" fill="#ffc658" stroke="#ffc658" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Product Cost Comparison</CardTitle>
                <CardDescription>Standard vs. actual costs by product</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Product</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>SKU</TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Standard Cost</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Actual Cost</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Variance</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Variance %</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "P001",
                        name: "Widget A",
                        sku: "WA-001",
                        standardCost: 25.5,
                        actualCost: 27.3,
                        variance: 1.8,
                        variancePercent: 7.06,
                      },
                      {
                        id: "P002",
                        name: "Widget B",
                        sku: "WB-002",
                        standardCost: 32.75,
                        actualCost: 30.5,
                        variance: -2.25,
                        variancePercent: -6.87,
                      },
                      {
                        id: "P003",
                        name: "Gadget C",
                        sku: "GC-003",
                        standardCost: 45.0,
                        actualCost: 48.25,
                        variance: 3.25,
                        variancePercent: 7.22,
                      },
                      {
                        id: "P004",
                        name: "Gadget D",
                        sku: "GD-004",
                        standardCost: 38.25,
                        actualCost: 37.5,
                        variance: -0.75,
                        variancePercent: -1.96,
                      },
                      {
                        id: "P005",
                        name: "Component E",
                        sku: "CE-005",
                        standardCost: 12.5,
                        actualCost: 13.75,
                        variance: 1.25,
                        variancePercent: 10.0,
                      },
                      {
                        id: "P006",
                        name: "Component F",
                        sku: "CF-006",
                        standardCost: 18.75,
                        actualCost: 17.8,
                        variance: -0.95,
                        variancePercent: -5.07,
                      },
                      {
                        id: "P007",
                        name: "Assembly G",
                        sku: "AG-007",
                        standardCost: 65.0,
                        actualCost: 68.5,
                        variance: 3.5,
                        variancePercent: 5.38,
                      },
                      {
                        id: "P008",
                        name: "Assembly H",
                        sku: "AH-008",
                        standardCost: 72.25,
                        actualCost: 70.15,
                        variance: -2.1,
                        variancePercent: -2.91,
                      },
                    ].map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>${product.standardCost.toFixed(2)}</TableCell>
                        <TableCell>${product.actualCost.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className={product.variance < 0 ? "text-green-600" : "text-red-600"}>
                            {product.variance < 0 ? "-" : "+"}${Math.abs(product.variance).toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              product.variance < 0
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {product.variance < 0 ? "-" : "+"}
                            {Math.abs(product.variancePercent).toFixed(2)}%
                          </Badge>
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
                              <DropdownMenuItem onClick={() => handleAction("View details", product.id)}>
                                View details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("View cost breakdown", product.id)}>
                                View cost breakdown
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleAction("Update standard cost", product.id)}>
                                Update standard cost
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Adjust actual cost", product.id)}>
                                Adjust actual cost
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

          <TabsContent value="variance-analysis" className="space-y-4 mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Cost Variance Analysis</CardTitle>
                <CardDescription>Breakdown of variances by cost category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={varianceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="standard" name="Standard Cost" fill="#8884d8" />
                      <Bar yAxisId="left" dataKey="actual" name="Actual Cost" fill="#82ca9d" />
                      <Area yAxisId="right" dataKey="variance" name="Variance" fill="#ffc658" stroke="#ffc658" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Variance Analysis by Category</CardTitle>
                <CardDescription>Detailed breakdown of cost variances</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Category</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Standard Cost</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Actual Cost</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Variance</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center space-x-1">
                          <span>Variance %</span>
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Impact</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {varianceData.map((category, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{category.category}</TableCell>
                        <TableCell>${category.standard.toFixed(2)}</TableCell>
                        <TableCell>${category.actual.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className={category.variance < 0 ? "text-green-600" : "text-red-600"}>
                            {category.variance < 0 ? "-" : "+"}${Math.abs(category.variance).toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              category.variance < 0
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {category.variance < 0 ? "-" : "+"}
                            {Math.abs(category.percentage).toFixed(2)}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {Math.abs(category.percentage) > 5 ? (
                            <div className="flex items-center">
                              <AlertCircle className="mr-1 h-4 w-4 text-amber-500" />
                              <span className="text-amber-500">Significant</span>
                            </div>
                          ) : (
                            <span className="text-green-600">Normal</span>
                          )}
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
                              <DropdownMenuItem onClick={() => handleAction("View details", category.category)}>
                                View details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Analyze trend", category.category)}>
                                Analyze trend
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleAction("Adjust standard", category.category)}>
                                Adjust standard
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Create report", category.category)}>
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

          <TabsContent value="cost-drivers" className="space-y-4 mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Cost Drivers Analysis</CardTitle>
                <CardDescription>Identify and analyze key cost drivers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Material Cost Drivers</h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Price Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+$245.00</div>
                          <p className="text-sm text-muted-foreground">
                            Difference between standard and actual purchase prices
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Usage Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+$55.00</div>
                          <p className="text-sm text-muted-foreground">
                            Difference between standard and actual material usage
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Labor Cost Drivers</h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Rate Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">-$120.00</div>
                          <p className="text-sm text-muted-foreground">
                            Difference between standard and actual labor rates
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Efficiency Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">-$180.00</div>
                          <p className="text-sm text-muted-foreground">
                            Difference between standard and actual labor hours
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Overhead Cost Drivers</h3>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Spending Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+$150.00</div>
                          <p className="text-sm text-muted-foreground">
                            Difference between budgeted and actual overhead costs
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Volume Variance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+$50.00</div>
                          <p className="text-sm text-muted-foreground">
                            Impact of production volume on overhead allocation
                          </p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              Analyze
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
