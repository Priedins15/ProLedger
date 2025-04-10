"use client"

import { useState } from "react"
import { Download, Filter, FileText, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export default function SegmentReportingPage() {
  const [segmentType, setSegmentType] = useState("department")
  const [reportType, setReportType] = useState("revenue")
  const [timeFrame, setTimeFrame] = useState("monthly")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Segment Reporting" subtitle="Analyze financial data by business segments" />
        <div className="flex flex-col sm:flex-row gap-2">
          <DateRangePicker className="w-full sm:w-auto" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Excel (.xlsx)
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      {/* Report Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Segment Settings</CardTitle>
          <CardDescription>Configure your segment report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="segment-type">Segment Type</Label>
              <Select value={segmentType} onValueChange={setSegmentType}>
                <SelectTrigger id="segment-type">
                  <SelectValue placeholder="Select segment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="department">Department</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="product">Product Line</SelectItem>
                  <SelectItem value="customer">Customer Type</SelectItem>
                  <SelectItem value="project">Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="expenses">Expenses</SelectItem>
                  <SelectItem value="profit">Profit</SelectItem>
                  <SelectItem value="margin">Profit Margin</SelectItem>
                  <SelectItem value="roi">ROI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time-frame">Time Frame</Label>
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger id="time-frame">
                  <SelectValue placeholder="Select time frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department Segment View */}
      {segmentType === "department" && (
        <>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>
                  {reportType === "revenue" && "Revenue by department"}
                  {reportType === "expenses" && "Expenses by department"}
                  {reportType === "profit" && "Profit by department"}
                  {reportType === "margin" && "Profit margin by department"}
                  {reportType === "roi" && "Return on investment by department"}
                </CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {timeFrame === "monthly" && "Monthly View"}
                {timeFrame === "quarterly" && "Quarterly View"}
                {timeFrame === "yearly" && "Yearly View"}
                {timeFrame === "ytd" && "Year to Date"}
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <div className="h-[400px] p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      {
                        name: "Sales",
                        current: 425000,
                        previous: 385000,
                      },
                      {
                        name: "Marketing",
                        current: 325000,
                        previous: 290000,
                      },
                      {
                        name: "Operations",
                        current: 225000,
                        previous: 210000,
                      },
                      {
                        name: "Finance",
                        current: 175000,
                        previous: 165000,
                      },
                      {
                        name: "HR",
                        current: 125000,
                        previous: 120000,
                      },
                      {
                        name: "IT",
                        current: 150000,
                        previous: 135000,
                      },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#f97316" name="Current Period" />
                    <Bar dataKey="previous" fill="#9ca3af" name="Previous Period" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Department Breakdown</CardTitle>
              <CardDescription>Detailed performance metrics by department</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[200px]">Department</TableHead>
                      <TableHead className="text-right">Current Period</TableHead>
                      <TableHead className="text-right">Previous Period</TableHead>
                      <TableHead className="text-right">Variance</TableHead>
                      <TableHead className="text-right">Variance %</TableHead>
                      <TableHead className="text-right">% of Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sales</TableCell>
                      <TableCell className="text-right">$425,000.00</TableCell>
                      <TableCell className="text-right">$385,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$40,000.00</TableCell>
                      <TableCell className="text-right text-green-600">10.4%</TableCell>
                      <TableCell className="text-right">29.8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing</TableCell>
                      <TableCell className="text-right">$325,000.00</TableCell>
                      <TableCell className="text-right">$290,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$35,000.00</TableCell>
                      <TableCell className="text-right text-green-600">12.1%</TableCell>
                      <TableCell className="text-right">22.8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Operations</TableCell>
                      <TableCell className="text-right">$225,000.00</TableCell>
                      <TableCell className="text-right">$210,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$15,000.00</TableCell>
                      <TableCell className="text-right text-green-600">7.1%</TableCell>
                      <TableCell className="text-right">15.8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Finance</TableCell>
                      <TableCell className="text-right">$175,000.00</TableCell>
                      <TableCell className="text-right">$165,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$10,000.00</TableCell>
                      <TableCell className="text-right text-green-600">6.1%</TableCell>
                      <TableCell className="text-right">12.3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">HR</TableCell>
                      <TableCell className="text-right">$125,000.00</TableCell>
                      <TableCell className="text-right">$120,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$5,000.00</TableCell>
                      <TableCell className="text-right text-green-600">4.2%</TableCell>
                      <TableCell className="text-right">8.8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">IT</TableCell>
                      <TableCell className="text-right">$150,000.00</TableCell>
                      <TableCell className="text-right">$135,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$15,000.00</TableCell>
                      <TableCell className="text-right text-green-600">11.1%</TableCell>
                      <TableCell className="text-right">10.5%</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/30">
                      <TableCell className="font-medium">Total</TableCell>
                      <TableCell className="text-right font-bold">$1,425,000.00</TableCell>
                      <TableCell className="text-right font-bold">$1,305,000.00</TableCell>
                      <TableCell className="text-right font-bold text-green-600">$120,000.00</TableCell>
                      <TableCell className="text-right font-bold text-green-600">9.2%</TableCell>
                      <TableCell className="text-right font-bold">100.0%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <Tabs defaultValue="sales" className="space-y-4">
            <TabsList>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="hr">HR</TabsTrigger>
              <TabsTrigger value="it">IT</TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Sales Department Detail</CardTitle>
                  <CardDescription>Performance metrics for the Sales department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Revenue</p>
                            <p className="text-xs text-muted-foreground">Total sales revenue</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">$425,000.00</p>
                            <p className="text-xs text-green-600">+10.4% vs previous period</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Cost of Sales</p>
                            <p className="text-xs text-muted-foreground">Direct costs</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">$212,500.00</p>
                            <p className="text-xs text-red-600">+8.2% vs previous period</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Gross Profit</p>
                            <p className="text-xs text-muted-foreground">Revenue less cost of sales</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">$212,500.00</p>
                            <p className="text-xs text-green-600">+12.6% vs previous period</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">Gross Margin</p>
                            <p className="text-xs text-muted-foreground">Gross profit as % of revenue</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">50.0%</p>
                            <p className="text-xs text-green-600">+1.0% vs previous period</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Sales by Product Line</h3>
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={[
                              { name: "Product A", value: 175000 },
                              { name: "Product B", value: 125000 },
                              { name: "Product C", value: 85000 },
                              { name: "Product D", value: 40000 },
                            ]}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#f97316" name="Revenue" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other department tabs would follow the same pattern */}
          </Tabs>
        </>
      )}
    </div>
  )
}
