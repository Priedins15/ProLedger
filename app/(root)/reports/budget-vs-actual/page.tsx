"use client"

import { useState } from "react"
import { Download, Filter, FileText, Printer, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function BudgetVsActualPage() {
  const [reportType, setReportType] = useState("income")
  const [varianceThreshold, setVarianceThreshold] = useState("5")
  const [department, setDepartment] = useState("all")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Budget vs. Actual" subtitle="Compare actual performance against budgeted targets" />
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
          <CardTitle>Report Settings</CardTitle>
          <CardDescription>Configure your budget vs. actual report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income Statement</SelectItem>
                  <SelectItem value="expenses">Expense Detail</SelectItem>
                  <SelectItem value="revenue">Revenue Detail</SelectItem>
                  <SelectItem value="department">Department Analysis</SelectItem>
                  <SelectItem value="project">Project Analysis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="variance-threshold">Variance Threshold</Label>
              <Select value={varianceThreshold} onValueChange={setVarianceThreshold}>
                <SelectTrigger id="variance-threshold">
                  <SelectValue placeholder="Select threshold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3%</SelectItem>
                  <SelectItem value="5">5%</SelectItem>
                  <SelectItem value="10">10%</SelectItem>
                  <SelectItem value="15">15%</SelectItem>
                  <SelectItem value="20">20%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
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

      {/* Budget vs. Actual Report */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Budget vs. Actual - Income Statement</CardTitle>
            <CardDescription>For the period April 1, 2025 - April 30, 2025</CardDescription>
          </div>
          <Badge variant="outline" className="font-normal">
            Variance Threshold: {varianceThreshold}%
          </Badge>
        </CardHeader>
        <CardContent className="px-0">
          <div className="h-[400px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  {
                    name: "Revenue",
                    budget: 1200000,
                    actual: 1238000,
                    variance: 3.2,
                  },
                  {
                    name: "COGS",
                    budget: 580000,
                    actual: 596600,
                    variance: 2.9,
                  },
                  {
                    name: "Gross Profit",
                    budget: 620000,
                    actual: 641400,
                    variance: 3.5,
                  },
                  {
                    name: "Operating Expenses",
                    budget: 400000,
                    actual: 430700,
                    variance: 7.7,
                  },
                  {
                    name: "Operating Income",
                    budget: 220000,
                    actual: 210700,
                    variance: -4.2,
                  },
                  {
                    name: "Net Income",
                    budget: 165000,
                    actual: 155025,
                    variance: -6.0,
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
                <Bar dataKey="budget" fill="#9ca3af" name="Budget" />
                <Bar dataKey="actual" fill="#f97316" name="Actual" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Budget vs. Actual Detail</CardTitle>
          <CardDescription>Detailed comparison with variance analysis</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <ScrollArea className="h-[500px]">
            <Table>
              <TableHeader className="sticky top-0 bg-background">
                <TableRow>
                  <TableHead className="w-[250px]">Account</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
                  <TableHead className="text-right">Actual</TableHead>
                  <TableHead className="text-right">Variance ($)</TableHead>
                  <TableHead className="text-right">Variance (%)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Revenue Section */}
                <TableRow className="font-medium bg-muted/50">
                  <TableCell colSpan={6}>Revenue</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Product Sales</TableCell>
                  <TableCell className="text-right">$820,000.00</TableCell>
                  <TableCell className="text-right">$845,250.00</TableCell>
                  <TableCell className="text-right text-green-600">$25,250.00</TableCell>
                  <TableCell className="text-right text-green-600">3.1%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Favorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Service Revenue</TableCell>
                  <TableCell className="text-right">$380,000.00</TableCell>
                  <TableCell className="text-right">$392,750.00</TableCell>
                  <TableCell className="text-right text-green-600">$12,750.00</TableCell>
                  <TableCell className="text-right text-green-600">3.4%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Favorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="font-medium">
                  <TableCell>Total Revenue</TableCell>
                  <TableCell className="text-right font-bold">$1,200,000.00</TableCell>
                  <TableCell className="text-right font-bold">$1,238,000.00</TableCell>
                  <TableCell className="text-right font-bold text-green-600">$38,000.00</TableCell>
                  <TableCell className="text-right font-bold text-green-600">3.2%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Favorable</Badge>
                  </TableCell>
                </TableRow>

                {/* Cost of Goods Sold Section */}
                <TableRow className="font-medium bg-muted/50">
                  <TableCell colSpan={6}>Cost of Goods Sold</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Materials & Supplies</TableCell>
                  <TableCell className="text-right">$300,000.00</TableCell>
                  <TableCell className="text-right">$312,450.00</TableCell>
                  <TableCell className="text-right text-red-600">$12,450.00</TableCell>
                  <TableCell className="text-right text-red-600">4.2%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Direct Labor</TableCell>
                  <TableCell className="text-right">$180,000.00</TableCell>
                  <TableCell className="text-right">$185,700.00</TableCell>
                  <TableCell className="text-right text-red-600">$5,700.00</TableCell>
                  <TableCell className="text-right text-red-600">3.2%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Manufacturing Overhead</TableCell>
                  <TableCell className="text-right">$100,000.00</TableCell>
                  <TableCell className="text-right">$98,450.00</TableCell>
                  <TableCell className="text-right text-green-600">$1,550.00</TableCell>
                  <TableCell className="text-right text-green-600">1.6%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Favorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="font-medium">
                  <TableCell>Total Cost of Goods Sold</TableCell>
                  <TableCell className="text-right font-bold">$580,000.00</TableCell>
                  <TableCell className="text-right font-bold">$596,600.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">$16,600.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">2.9%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>

                <TableRow className="font-medium bg-muted/30">
                  <TableCell>Gross Profit</TableCell>
                  <TableCell className="text-right font-bold">$620,000.00</TableCell>
                  <TableCell className="text-right font-bold">$641,400.00</TableCell>
                  <TableCell className="text-right font-bold text-green-600">$21,400.00</TableCell>
                  <TableCell className="text-right font-bold text-green-600">3.5%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Favorable</Badge>
                  </TableCell>
                </TableRow>

                {/* Operating Expenses Section */}
                <TableRow className="font-medium bg-muted/50">
                  <TableCell colSpan={6}>Operating Expenses</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Salaries & Wages</TableCell>
                  <TableCell className="text-right">$225,000.00</TableCell>
                  <TableCell className="text-right">$245,750.00</TableCell>
                  <TableCell className="text-right text-red-600">$20,750.00</TableCell>
                  <TableCell className="text-right text-red-600">9.2%</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Unfavorable
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Rent & Utilities</TableCell>
                  <TableCell className="text-right">$40,000.00</TableCell>
                  <TableCell className="text-right">$42,500.00</TableCell>
                  <TableCell className="text-right text-red-600">$2,500.00</TableCell>
                  <TableCell className="text-right text-red-600">6.3%</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Marketing & Advertising</TableCell>
                  <TableCell className="text-right">$65,000.00</TableCell>
                  <TableCell className="text-right">$78,250.00</TableCell>
                  <TableCell className="text-right text-red-600">$13,250.00</TableCell>
                  <TableCell className="text-right text-red-600">20.4%</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Unfavorable
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Depreciation & Amortization</TableCell>
                  <TableCell className="text-right">$35,000.00</TableCell>
                  <TableCell className="text-right">$35,750.00</TableCell>
                  <TableCell className="text-right text-red-600">$750.00</TableCell>
                  <TableCell className="text-right text-red-600">2.1%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6">Other Operating Expenses</TableCell>
                  <TableCell className="text-right">$35,000.00</TableCell>
                  <TableCell className="text-right">$28,450.00</TableCell>
                  <TableCell className="text-right text-green-600">$6,550.00</TableCell>
                  <TableCell className="text-right text-green-600">18.7%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Favorable
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="font-medium">
                  <TableCell>Total Operating Expenses</TableCell>
                  <TableCell className="text-right font-bold">$400,000.00</TableCell>
                  <TableCell className="text-right font-bold">$430,700.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">$30,700.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">7.7%</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Unfavorable
                    </Badge>
                  </TableCell>
                </TableRow>

                <TableRow className="font-medium bg-muted/30">
                  <TableCell>Operating Income</TableCell>
                  <TableCell className="text-right font-bold">$220,000.00</TableCell>
                  <TableCell className="text-right font-bold">$210,700.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">($9,300.00)</TableCell>
                  <TableCell className="text-right font-bold text-red-600">-4.2%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Unfavorable</Badge>
                  </TableCell>
                </TableRow>

                <TableRow className="font-medium bg-muted/50">
                  <TableCell>Net Income</TableCell>
                  <TableCell className="text-right font-bold">$165,000.00</TableCell>
                  <TableCell className="text-right font-bold">$155,025.00</TableCell>
                  <TableCell className="text-right font-bold text-red-600">($9,975.00)</TableCell>
                  <TableCell className="text-right font-bold text-red-600">-6.0%</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Unfavorable
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Variance Analysis</CardTitle>
            <CardDescription>Key variances requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    Critical
                  </Badge>
                  <p className="text-sm font-medium">Marketing & Advertising (+20.4%)</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Expenses significantly over budget due to unplanned digital marketing campaign and higher than
                  anticipated costs for trade show participation.
                </p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground">Recommended Action:</p>
                  <p className="text-xs text-muted-foreground">
                    Review marketing spend approval process and implement tighter controls for campaign budgets.
                  </p>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    Critical
                  </Badge>
                  <p className="text-sm font-medium">Salaries & Wages (+9.2%)</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Higher than budgeted due to unplanned hiring in the sales department and overtime costs in operations.
                </p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground">Recommended Action:</p>
                  <p className="text-xs text-muted-foreground">
                    Implement stricter headcount controls and review overtime authorization procedures.
                  </p>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    Positive
                  </Badge>
                  <p className="text-sm font-medium">Other Operating Expenses (-18.7%)</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Significantly under budget due to successful cost-cutting initiatives and delayed discretionary
                  spending.
                </p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground">Recommended Action:</p>
                  <p className="text-xs text-muted-foreground">
                    Document successful cost-saving measures for implementation in other expense categories.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Budget Performance Summary</CardTitle>
            <CardDescription>Overall budget performance assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Revenue</p>
                  <p className="text-xs text-muted-foreground">vs. Budget</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">103.2%</p>
                  <p className="text-xs text-green-600">$38,000 above target</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Expenses</p>
                  <p className="text-xs text-muted-foreground">vs. Budget</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">104.8%</p>
                  <p className="text-xs text-red-600">$47,300 above target</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Net Income</p>
                  <p className="text-xs text-muted-foreground">vs. Budget</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">94.0%</p>
                  <p className="text-xs text-red-600">$9,975 below target</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-sm font-medium">Executive Summary</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  While revenue exceeded budget by 3.2%, higher than anticipated operating expenses (particularly in
                  Marketing and Salaries) resulted in net income falling 6.0% below target. Immediate attention is
                  required to address expense overruns to meet annual profit targets.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
