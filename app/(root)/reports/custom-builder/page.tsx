"use client"

import { useState } from "react"
import {
  Download,
  BarChart,
  Printer,
  Plus,
  Save,
  Play,
  Trash,
  FileBarChart2,
  TableIcon,
  PieChart,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function CustomReportBuilderPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("design")
  const [reportType, setReportType] = useState("financial")
  const [reportFormat, setReportFormat] = useState("tabular")
  const [showPreview, setShowPreview] = useState(false)
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)

  const handleSaveReport = () => {
    setSaveDialogOpen(false)
    toast({
      title: "Report saved",
      description: "Your custom report has been saved successfully.",
    })
  }

  const handleRunReport = () => {
    setShowPreview(true)
    setActiveTab("preview")
    toast({
      title: "Report generated",
      description: "Your custom report has been generated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Custom Report Builder" subtitle="Design and create custom financial reports" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={handleRunReport}>
            <Play className="mr-2 h-4 w-4" />
            Run Report
          </Button>
          <Button variant="outline" onClick={() => setSaveDialogOpen(true)}>
            <Save className="mr-2 h-4 w-4" />
            Save Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="design" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="data">Data Selection</TabsTrigger>
          <TabsTrigger value="format">Formatting</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        {/* Design Tab */}
        <TabsContent value="design" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Report Properties</CardTitle>
              <CardDescription>Define the basic properties of your custom report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="report-name">Report Name</Label>
                  <Input id="report-name" placeholder="Enter report name" defaultValue="My Custom Financial Report" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
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
                <div className="space-y-2">
                  <Label htmlFor="report-format">Report Format</Label>
                  <Select value={reportFormat} onValueChange={setReportFormat}>
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
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="report-description">Description</Label>
                <Textarea
                  id="report-description"
                  placeholder="Enter report description"
                  defaultValue="A custom financial report showing key performance metrics and financial data for the current month."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Report Layout</CardTitle>
              <CardDescription>Define the layout and structure of your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                  className={`cursor-pointer border-2 ${reportFormat === "tabular" ? "border-orange-500" : "border-transparent"}`}
                  onClick={() => setReportFormat("tabular")}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <TableIcon className="mr-2 h-4 w-4" />
                      Tabular
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="h-20 bg-muted/40 rounded-md flex items-center justify-center">
                      <div className="w-full px-2">
                        <div className="h-3 bg-muted/80 rounded-sm mb-2 w-full"></div>
                        <div className="h-2 bg-muted/60 rounded-sm mb-1 w-full"></div>
                        <div className="h-2 bg-muted/60 rounded-sm mb-1 w-full"></div>
                        <div className="h-2 bg-muted/60 rounded-sm w-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Standard table format with rows and columns</p>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer border-2 ${reportFormat === "summary" ? "border-orange-500" : "border-transparent"}`}
                  onClick={() => setReportFormat("summary")}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <FileBarChart2 className="mr-2 h-4 w-4" />
                      Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="h-20 bg-muted/40 rounded-md flex items-center justify-center">
                      <div className="w-full px-2">
                        <div className="h-4 bg-muted/80 rounded-sm mb-2 w-3/4"></div>
                        <div className="flex justify-between mb-1">
                          <div className="h-3 bg-muted/60 rounded-sm w-1/3"></div>
                          <div className="h-3 bg-muted/60 rounded-sm w-1/4"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="h-3 bg-muted/60 rounded-sm w-1/3"></div>
                          <div className="h-3 bg-muted/60 rounded-sm w-1/4"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Condensed view with key metrics highlighted</p>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer border-2 ${reportFormat === "chart" ? "border-orange-500" : "border-transparent"}`}
                  onClick={() => setReportFormat("chart")}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <BarChart className="mr-2 h-4 w-4" />
                      Chart
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="h-20 bg-muted/40 rounded-md flex items-center justify-center">
                      <div className="w-full px-2 flex items-end justify-between">
                        <div className="h-10 w-3 bg-muted/80 rounded-sm"></div>
                        <div className="h-14 w-3 bg-muted/80 rounded-sm"></div>
                        <div className="h-8 w-3 bg-muted/80 rounded-sm"></div>
                        <div className="h-12 w-3 bg-muted/80 rounded-sm"></div>
                        <div className="h-6 w-3 bg-muted/80 rounded-sm"></div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Visual representation with charts and graphs</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Selection Tab */}
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Data Sources</CardTitle>
              <CardDescription>Select the data sources for your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-gl" defaultChecked />
                      <Label htmlFor="source-gl">General Ledger</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">
                      All general ledger accounts and transactions
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-ar" defaultChecked />
                      <Label htmlFor="source-ar">Accounts Receivable</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">
                      Customer invoices, payments, and balances
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-ap" />
                      <Label htmlFor="source-ap">Accounts Payable</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">Vendor bills, payments, and balances</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-inventory" />
                      <Label htmlFor="source-inventory">Inventory</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">
                      Inventory items, quantities, and valuations
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-fixed-assets" />
                      <Label htmlFor="source-fixed-assets">Fixed Assets</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">Fixed assets and depreciation</div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="source-payroll" />
                      <Label htmlFor="source-payroll">Payroll</Label>
                    </div>
                    <div className="mt-2 pl-6 text-sm text-muted-foreground">Payroll expenses and liabilities</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Fields & Metrics</CardTitle>
              <CardDescription>Select the fields and metrics to include in your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Available Fields</Label>
                  <Input placeholder="Search fields..." className="w-1/3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border">
                    <CardHeader className="py-2 px-4">
                      <CardTitle className="text-sm">General Ledger Fields</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[200px]">
                        <div className="p-4 pt-0 space-y-2">
                          {[
                            "Account Number",
                            "Account Name",
                            "Account Type",
                            "Account Category",
                            "Transaction Date",
                            "Transaction Description",
                            "Transaction Amount",
                            "Debit Amount",
                            "Credit Amount",
                            "Balance",
                            "Period",
                            "Fiscal Year",
                            "Department",
                            "Class",
                            "Project",
                            "Location",
                          ].map((field, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Checkbox id={`field-${index}`} defaultChecked={index < 8} />
                              <Label htmlFor={`field-${index}`} className="text-sm">
                                {field}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                  <Card className="border">
                    <CardHeader className="py-2 px-4">
                      <CardTitle className="text-sm">Calculated Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[200px]">
                        <div className="p-4 pt-0 space-y-2">
                          {[
                            "Current Ratio",
                            "Quick Ratio",
                            "Debt-to-Equity Ratio",
                            "Gross Profit Margin",
                            "Net Profit Margin",
                            "Return on Assets (ROA)",
                            "Return on Equity (ROE)",
                            "Inventory Turnover",
                            "Days Sales Outstanding",
                            "Operating Expense Ratio",
                            "EBITDA",
                            "Working Capital",
                            "Interest Coverage Ratio",
                          ].map((metric, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Checkbox id={`metric-${index}`} defaultChecked={index < 5} />
                              <Label htmlFor={`metric-${index}`} className="text-sm">
                                {metric}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Filters & Parameters</CardTitle>
              <CardDescription>Define filters and parameters for your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Active Filters</Label>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Filter
                  </Button>
                </div>
                <div className="space-y-2">
                  {[
                    { field: "Transaction Date", operator: "Between", value: "Apr 1, 2025 and Apr 30, 2025" },
                    { field: "Account Category", operator: "Equals", value: "Revenue" },
                    { field: "Department", operator: "In", value: "Sales, Marketing" },
                  ].map((filter, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{filter.field}</Badge>
                        <span className="text-sm text-muted-foreground">{filter.operator}</span>
                        <span className="text-sm font-medium">{filter.value}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Formatting Tab */}
        <TabsContent value="format" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Grouping & Sorting</CardTitle>
              <CardDescription>Define how data is grouped and sorted in your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="group-by">Group By</Label>
                  <Select defaultValue="account-category">
                    <SelectTrigger id="group-by">
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account-category">Account Category</SelectItem>
                      <SelectItem value="account-type">Account Type</SelectItem>
                      <SelectItem value="department">Department</SelectItem>
                      <SelectItem value="class">Class</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                      <SelectItem value="period">Period</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sort-by">Sort By</Label>
                  <Select defaultValue="amount-desc">
                    <SelectTrigger id="sort-by">
                      <SelectValue placeholder="Select field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amount-desc">Amount (Descending)</SelectItem>
                      <SelectItem value="amount-asc">Amount (Ascending)</SelectItem>
                      <SelectItem value="date-desc">Date (Newest First)</SelectItem>
                      <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                      <SelectItem value="name-asc">Name (A to Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z to A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label>Secondary Grouping</Label>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="secondary-group">Group By</Label>
                      <Select defaultValue="department">
                        <SelectTrigger id="secondary-group">
                          <SelectValue placeholder="Select field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account-category">Account Category</SelectItem>
                          <SelectItem value="account-type">Account Type</SelectItem>
                          <SelectItem value="department">Department</SelectItem>
                          <SelectItem value="class">Class</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                          <SelectItem value="period">Period</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subtotals">Show Subtotals</Label>
                      <Select defaultValue="yes">
                        <SelectTrigger id="subtotals">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Display Options</CardTitle>
              <CardDescription>Configure how data is displayed in your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="number-format">Number Format</Label>
                    <Select defaultValue="currency">
                      <SelectTrigger id="number-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="currency">Currency ($1,234.56)</SelectItem>
                        <SelectItem value="percentage">Percentage (12.34%)</SelectItem>
                        <SelectItem value="decimal">Decimal (1,234.56)</SelectItem>
                        <SelectItem value="integer">Integer (1,235)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mmddyyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mmddyyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="ddmmyyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="yyyymmdd">YYYY-MM-DD</SelectItem>
                        <SelectItem value="monthddyyyy">Month DD, YYYY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="negative-numbers">Negative Numbers</Label>
                    <Select defaultValue="parentheses">
                      <SelectTrigger id="negative-numbers">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parentheses">Parentheses ($1,234.56)</SelectItem>
                        <SelectItem value="minus">Minus Sign -$1,234.56</SelectItem>
                        <SelectItem value="red">Red Color</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="rounded-md border p-4 space-y-2">
                  <Label>Additional Display Options</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
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
                    <div className="flex items-center space-x-2">
                      <Checkbox id="option-highlight" defaultChecked />
                      <Label htmlFor="option-highlight" className="text-sm">
                        Highlight Variances
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Chart Options</CardTitle>
              <CardDescription>Configure chart settings for your report</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="chart-type">Chart Type</Label>
                  <Select defaultValue="bar">
                    <SelectTrigger id="chart-type">
                      <SelectValue placeholder="Select chart type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="area">Area Chart</SelectItem>
                      <SelectItem value="column">Column Chart</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chart-position">Chart Position</Label>
                  <Select defaultValue="top">
                    <SelectTrigger id="chart-position">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top of Report</SelectItem>
                      <SelectItem value="bottom">Bottom of Report</SelectItem>
                      <SelectItem value="right">Right of Data</SelectItem>
                      <SelectItem value="separate">Separate Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-orange-500 cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center">
                    <BarChart className="h-12 w-12 mb-2 text-orange-500" />
                    <span className="text-sm font-medium">Bar Chart</span>
                  </CardContent>
                </Card>
                <Card className="border cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center">
                    <LineChart className="h-12 w-12 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Line Chart</span>
                  </CardContent>
                </Card>
                <Card className="border cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center">
                    <PieChart className="h-12 w-12 mb-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Pie Chart</span>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preview Tab */}
        <TabsContent value="preview" className="space-y-4">
          {showPreview ? (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>My Custom Financial Report</CardTitle>
                    <CardDescription>For the period April 1, 2025 - April 30, 2025</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="p-4">
                    <div className="h-[300px] bg-muted/20 rounded-md flex items-center justify-center mb-4">
                      <BarChart className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <ScrollArea className="h-[400px]">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[250px]">Account Category</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-right">Current Period</TableHead>
                            <TableHead className="text-right">Previous Period</TableHead>
                            <TableHead className="text-right">Variance</TableHead>
                            <TableHead className="text-right">Variance %</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="font-medium bg-muted/50">
                            <TableCell colSpan={6}>Revenue</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Product Sales</TableCell>
                            <TableCell>Sales</TableCell>
                            <TableCell className="text-right">$845,250.00</TableCell>
                            <TableCell className="text-right">$782,150.00</TableCell>
                            <TableCell className="text-right text-green-600">$63,100.00</TableCell>
                            <TableCell className="text-right text-green-600">8.1%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Product Sales</TableCell>
                            <TableCell>Marketing</TableCell>
                            <TableCell className="text-right">$125,350.00</TableCell>
                            <TableCell className="text-right">$112,250.00</TableCell>
                            <TableCell className="text-right text-green-600">$13,100.00</TableCell>
                            <TableCell className="text-right text-green-600">11.7%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Service Revenue</TableCell>
                            <TableCell>Sales</TableCell>
                            <TableCell className="text-right">$356,780.00</TableCell>
                            <TableCell className="text-right">$325,420.00</TableCell>
                            <TableCell className="text-right text-green-600">$31,360.00</TableCell>
                            <TableCell className="text-right text-green-600">9.6%</TableCell>
                          </TableRow>
                          <TableRow className="font-medium">
                            <TableCell className="pl-6">Total Revenue</TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right">$1,327,380.00</TableCell>
                            <TableCell className="text-right">$1,219,820.00</TableCell>
                            <TableCell className="text-right text-green-600">$107,560.00</TableCell>
                            <TableCell className="text-right text-green-600">8.8%</TableCell>
                          </TableRow>
                          <TableRow className="font-medium bg-muted/50">
                            <TableCell colSpan={6}>Expenses</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Cost of Goods Sold</TableCell>
                            <TableCell>Operations</TableCell>
                            <TableCell className="text-right">$512,450.00</TableCell>
                            <TableCell className="text-right">$475,320.00</TableCell>
                            <TableCell className="text-right text-red-600">$37,130.00</TableCell>
                            <TableCell className="text-right text-red-600">7.8%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Salaries & Wages</TableCell>
                            <TableCell>HR</TableCell>
                            <TableCell className="text-right">$245,780.00</TableCell>
                            <TableCell className="text-right">$238,450.00</TableCell>
                            <TableCell className="text-right text-red-600">$7,330.00</TableCell>
                            <TableCell className="text-right text-red-600">3.1%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-6">Marketing</TableCell>
                            <TableCell>Marketing</TableCell>
                            <TableCell className="text-right">$87,650.00</TableCell>
                            <TableCell className="text-right">$92,350.00</TableCell>
                            <TableCell className="text-right text-green-600">$4,700.00</TableCell>
                            <TableCell className="text-right text-green-600">5.1%</TableCell>
                          </TableRow>
                          <TableRow className="font-medium">
                            <TableCell className="pl-6">Total Expenses</TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right">$845,880.00</TableCell>
                            <TableCell className="text-right">$806,120.00</TableCell>
                            <TableCell className="text-right text-red-600">$39,760.00</TableCell>
                            <TableCell className="text-right text-red-600">4.9%</TableCell>
                          </TableRow>
                          <TableRow className="font-medium bg-muted/50">
                            <TableCell colSpan={6}>Net Income</TableCell>
                          </TableRow>
                          <TableRow className="font-medium">
                            <TableCell className="pl-6">Net Income</TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right">$481,500.00</TableCell>
                            <TableCell className="text-right">$413,700.00</TableCell>
                            <TableCell className="text-right text-green-600">$67,800.00</TableCell>
                            <TableCell className="text-right text-green-600">16.4%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="rounded-full bg-muted/30 p-6">
                <Play className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium">Run Report to Preview</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Configure your report settings in the Design, Data Selection, and Formatting tabs, then click the Run
                Report button to generate a preview.
              </p>
              <Button onClick={handleRunReport}>
                <Play className="mr-2 h-4 w-4" />
                Run Report
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {saveDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Save Report</CardTitle>
              <CardDescription>Save your custom report for future use</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="save-name">Report Name</Label>
                  <Input id="save-name" defaultValue="My Custom Financial Report" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="save-description">Description</Label>
                  <Textarea
                    id="save-description"
                    defaultValue="A custom financial report showing key performance metrics and financial data for the current month."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="save-folder">Save to Folder</Label>
                  <Select defaultValue="financial">
                    <SelectTrigger id="save-folder">
                      <SelectValue placeholder="Select folder" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Reports</SelectItem>
                      <SelectItem value="operational">Operational Reports</SelectItem>
                      <SelectItem value="sales">Sales Reports</SelectItem>
                      <SelectItem value="custom">Custom Reports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-favorite" />
                  <Label htmlFor="save-favorite">Add to Favorites</Label>
                </div>
              </div>
            </CardContent>
            <div className="flex items-center justify-end space-x-2 p-6 pt-0">
              <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveReport}>Save Report</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
