"use client"

import { useState } from "react"
import {
  BarChart,
  FileText,
  Download,
  Filter,
  Calendar,
  PieChart,
  TrendingUp,
  DollarSign,
  Printer,
  Share2,
  Settings,
  Plus,
  Building,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ReportsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("financial")
  const [showCustomReportDialog, setShowCustomReportDialog] = useState(false)

  const handleGenerateReport = () => {
    setShowCustomReportDialog(false)
    toast({
      title: "Report generated",
      description: "Your custom report has been generated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Reports" subtitle="Generate and view financial and operational reports" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={() => setShowCustomReportDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Custom Report
          </Button>
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
        </div>
      </div>

      {/* Report Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select defaultValue="current-month">
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="previous-month">Previous Month</SelectItem>
                  <SelectItem value="current-quarter">Current Quarter</SelectItem>
                  <SelectItem value="previous-quarter">Previous Quarter</SelectItem>
                  <SelectItem value="ytd">Year to Date</SelectItem>
                  <SelectItem value="previous-year">Previous Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comparison">Comparison</Label>
              <Select defaultValue="previous-period">
                <SelectTrigger id="comparison">
                  <SelectValue placeholder="Select comparison" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="previous-period">Previous Period</SelectItem>
                  <SelectItem value="same-period-ly">Same Period Last Year</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="forecast">Forecast</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select defaultValue="all">
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

      {/* Reports Tabs */}
      <Tabs defaultValue="financial" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="financial">Financial Reports</TabsTrigger>
          <TabsTrigger value="tax">Tax Reports</TabsTrigger>
          <TabsTrigger value="management">Management Reports</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>

        {/* Financial Reports Tab */}
        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Profit & Loss Statement",
                description: "Income, expenses, and profitability",
                icon: BarChart,
                lastRun: "Apr 8, 2025",
                frequency: "Monthly",
              },
              {
                title: "Balance Sheet",
                description: "Assets, liabilities, and equity",
                icon: FileText,
                lastRun: "Apr 8, 2025",
                frequency: "Monthly",
              },
              {
                title: "Cash Flow Statement",
                description: "Cash inflows and outflows",
                icon: TrendingUp,
                lastRun: "Apr 8, 2025",
                frequency: "Monthly",
              },
              {
                title: "Accounts Receivable Aging",
                description: "Outstanding customer invoices by age",
                icon: Calendar,
                lastRun: "Apr 8, 2025",
                frequency: "Weekly",
              },
              {
                title: "Accounts Payable Aging",
                description: "Outstanding vendor bills by age",
                icon: Calendar,
                lastRun: "Apr 8, 2025",
                frequency: "Weekly",
              },
              {
                title: "General Ledger",
                description: "Detailed transaction journal",
                icon: FileText,
                lastRun: "Apr 8, 2025",
                frequency: "On Demand",
              },
              {
                title: "Trial Balance",
                description: "Account balances before adjustments",
                icon: FileText,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
              {
                title: "Statement of Changes in Equity",
                description: "Changes in shareholders' equity",
                icon: PieChart,
                lastRun: "Apr 1, 2025",
                frequency: "Quarterly",
              },
              {
                title: "Bank Reconciliation",
                description: "Reconciled bank accounts and statements",
                icon: DollarSign,
                lastRun: "Apr 5, 2025",
                frequency: "Monthly",
              },
            ].map((report, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">{report.title}</CardTitle>
                    <report.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last run: {report.lastRun}</span>
                    <Badge variant="outline">{report.frequency}</Badge>
                  </div>
                </CardContent>
                <div className="bg-muted/50 px-4 py-3 flex justify-between">
                  <Button variant="ghost" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tax Reports Tab */}
        <TabsContent value="tax" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sales Tax Summary",
                description: "Summary of collected sales tax by jurisdiction",
                icon: DollarSign,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
                dueDate: "Apr 15, 2025",
              },
              {
                title: "Income Tax Provision",
                description: "Income tax calculation and provision",
                icon: Calculator,
                lastRun: "Mar 31, 2025",
                frequency: "Quarterly",
                dueDate: "Apr 15, 2025",
              },
              {
                title: "Payroll Tax Summary",
                description: "Summary of payroll taxes withheld and paid",
                icon: Users,
                lastRun: "Mar 31, 2025",
                frequency: "Quarterly",
                dueDate: "Apr 30, 2025",
              },
              {
                title: "1099 Vendor Report",
                description: "Payments to 1099 vendors",
                icon: FileText,
                lastRun: "Jan 15, 2025",
                frequency: "Annually",
                dueDate: "Jan 31, 2025",
              },
              {
                title: "Fixed Asset Tax Depreciation",
                description: "Tax depreciation schedules for fixed assets",
                icon: Building,
                lastRun: "Mar 31, 2025",
                frequency: "Quarterly",
                dueDate: "Apr 15, 2025",
              },
              {
                title: "VAT/GST Report",
                description: "Value-added tax or goods and services tax report",
                icon: DollarSign,
                lastRun: "Mar 31, 2025",
                frequency: "Quarterly",
                dueDate: "Apr 20, 2025",
              },
            ].map((report, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">{report.title}</CardTitle>
                    <report.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last run: {report.lastRun}</span>
                    <Badge variant="outline">{report.frequency}</Badge>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">Due date: </span>
                    <span className="font-medium">{report.dueDate}</span>
                  </div>
                </CardContent>
                <div className="bg-muted/50 px-4 py-3 flex justify-between">
                  <Button variant="ghost" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Management Reports Tab */}
        <TabsContent value="management" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Budget vs. Actual",
                description: "Comparison of budgeted and actual financial results",
                icon: BarChart,
                lastRun: "Apr 5, 2025",
                frequency: "Monthly",
              },
              {
                title: "Cash Flow Forecast",
                description: "Projected cash inflows and outflows",
                icon: TrendingUp,
                lastRun: "Apr 5, 2025",
                frequency: "Weekly",
              },
              {
                title: "Key Performance Indicators",
                description: "Financial and operational KPIs",
                icon: BarChart3,
                lastRun: "Apr 5, 2025",
                frequency: "Weekly",
              },
              {
                title: "Department Expense Analysis",
                description: "Expense breakdown by department",
                icon: PieChart,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
              {
                title: "Sales Analysis",
                description: "Sales performance by product, customer, and region",
                icon: LineChart,
                lastRun: "Apr 5, 2025",
                frequency: "Weekly",
              },
              {
                title: "Profitability Analysis",
                description: "Profit margins by product, customer, and region",
                icon: DollarSign,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
              {
                title: "Inventory Valuation",
                description: "Inventory value and turnover metrics",
                icon: Package,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
              {
                title: "Project Profitability",
                description: "Financial performance of projects",
                icon: Briefcase,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
              {
                title: "Working Capital Analysis",
                description: "Analysis of working capital components",
                icon: RefreshCw,
                lastRun: "Apr 1, 2025",
                frequency: "Monthly",
              },
            ].map((report, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">{report.title}</CardTitle>
                    <report.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last run: {report.lastRun}</span>
                    <Badge variant="outline">{report.frequency}</Badge>
                  </div>
                </CardContent>
                <div className="bg-muted/50 px-4 py-3 flex justify-between">
                  <Button variant="ghost" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Custom Reports Tab */}
        <TabsContent value="custom" className="space-y-4">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Saved Custom Reports</h3>
            <Button variant="outline" size="sm" onClick={() => setShowCustomReportDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Custom Report
            </Button>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 font-medium">Report Name</div>
                <div className="col-span-3 font-medium">Description</div>
                <div className="col-span-2 font-medium">Created By</div>
                <div className="col-span-2 font-medium">Last Run</div>
                <div className="col-span-2 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                name: "Executive Dashboard",
                description: "Key metrics for executive team",
                createdBy: "John Doe",
                lastRun: "Apr 8, 2025",
              },
              {
                name: "Sales by Region - Q1",
                description: "Regional sales breakdown for Q1",
                createdBy: "Jane Smith",
                lastRun: "Apr 5, 2025",
              },
              {
                name: "Marketing ROI Analysis",
                description: "ROI metrics for marketing campaigns",
                createdBy: "Robert Johnson",
                lastRun: "Apr 3, 2025",
              },
              {
                name: "Cash Flow Projection - 6 Month",
                description: "Six-month cash flow forecast",
                createdBy: "John Doe",
                lastRun: "Apr 1, 2025",
              },
              {
                name: "Product Line Profitability",
                description: "Profit margins by product line",
                createdBy: "Emily Davis",
                lastRun: "Mar 28, 2025",
              },
            ].map((report, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">{report.name}</div>
                  <div className="col-span-3">{report.description}</div>
                  <div className="col-span-2">{report.createdBy}</div>
                  <div className="col-span-2">{report.lastRun}</div>
                  <div className="col-span-2 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          Run Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Edit Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Custom Report Dialog */}
      <Dialog open={showCustomReportDialog} onOpenChange={setShowCustomReportDialog}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Create Custom Report</DialogTitle>
            <DialogDescription>
              Design a custom report by selecting data sources, fields, and formatting options.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="report-name">Report Name</Label>
                <Input id="report-name" placeholder="Enter report name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger id="report-type">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Report</SelectItem>
                    <SelectItem value="operational">Operational Report</SelectItem>
                    <SelectItem value="sales">Sales Report</SelectItem>
                    <SelectItem value="inventory">Inventory Report</SelectItem>
                    <SelectItem value="custom">Custom Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-description">Description</Label>
              <Input id="report-description" placeholder="Enter report description" />
            </div>
            <div className="space-y-2">
              <Label>Data Sources</Label>
              <div className="rounded-md border p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-gl" defaultChecked />
                  <Label htmlFor="source-gl" className="text-sm">
                    General Ledger
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-ar" defaultChecked />
                  <Label htmlFor="source-ar" className="text-sm">
                    Accounts Receivable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-ap" />
                  <Label htmlFor="source-ap" className="text-sm">
                    Accounts Payable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-inventory" />
                  <Label htmlFor="source-inventory" className="text-sm">
                    Inventory
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-fixed-assets" />
                  <Label htmlFor="source-fixed-assets" className="text-sm">
                    Fixed Assets
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-payroll" />
                  <Label htmlFor="source-payroll" className="text-sm">
                    Payroll
                  </Label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date-range">Date Range</Label>
                <Select defaultValue="current-month">
                  <SelectTrigger id="date-range">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-month">Current Month</SelectItem>
                    <SelectItem value="previous-month">Previous Month</SelectItem>
                    <SelectItem value="current-quarter">Current Quarter</SelectItem>
                    <SelectItem value="previous-quarter">Previous Quarter</SelectItem>
                    <SelectItem value="ytd">Year to Date</SelectItem>
                    <SelectItem value="previous-year">Previous Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-format">Report Format</Label>
                <Select defaultValue="tabular">
                  <SelectTrigger id="report-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tabular">Tabular</SelectItem>
                    <SelectItem value="summary">Summary</SelectItem>
                    <SelectItem value="matrix">Matrix</SelectItem>
                    <SelectItem value="chart">Chart</SelectItem>
                    <SelectItem value="dashboard">Dashboard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Grouping & Sorting</Label>
              <div className="rounded-md border p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="group-by" className="text-sm">
                      Group By
                    </Label>
                    <Select>
                      <SelectTrigger id="group-by">
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                        <SelectItem value="project">Project</SelectItem>
                        <SelectItem value="customer">Customer</SelectItem>
                        <SelectItem value="vendor">Vendor</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sort-by" className="text-sm">
                      Sort By
                    </Label>
                    <Select>
                      <SelectTrigger id="sort-by">
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amount">Amount</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="id">ID</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Sort Direction</Label>
                  <RadioGroup defaultValue="descending" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ascending" id="ascending" />
                      <Label htmlFor="ascending" className="text-sm">
                        Ascending
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="descending" id="descending" />
                      <Label htmlFor="descending" className="text-sm">
                        Descending
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Display Options</Label>
              <div className="rounded-md border p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="option-subtotals" defaultChecked />
                  <Label htmlFor="option-subtotals" className="text-sm">
                    Show Subtotals
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option-totals" defaultChecked />
                  <Label htmlFor="option-totals" className="text-sm">
                    Show Grand Totals
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option-percentages" defaultChecked />
                  <Label htmlFor="option-percentages" className="text-sm">
                    Show Percentages
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option-comparison" defaultChecked />
                  <Label htmlFor="option-comparison" className="text-sm">
                    Show Comparison
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="option-charts" defaultChecked />
                  <Label htmlFor="option-charts" className="text-sm">
                    Include Charts
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCustomReportDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleGenerateReport}>Generate Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Missing imports
function MoreHorizontal(props) {
  return <span {...props} />
}

function Users(props) {
  return <span {...props} />
}

function Calculator(props) {
  return <span {...props} />
}

function LineChart(props) {
  return <span {...props} />
}

function Briefcase(props) {
  return <span {...props} />
}

function RefreshCw(props) {
  return <span {...props} />
}

function Trash(props) {
  return <span {...props} />
}

function BarChart3(props) {
  return <span {...props} />
}
