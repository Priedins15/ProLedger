"use client"

import { useState } from "react"
import { Download, Filter, FileText, ChevronDown, ChevronRight, Printer } from "lucide-react"
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

export default function FinancialReportsPage() {
  const [activeTab, setActiveTab] = useState("income")
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})
  const [comparisonPeriod, setComparisonPeriod] = useState("previous-year")
  const [viewMode, setViewMode] = useState("standard")

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Financial Reports" subtitle="View and analyze your financial statements" />
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
          <CardDescription>Customize your financial report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="comparison">Comparison</Label>
              <Select value={comparisonPeriod} onValueChange={setComparisonPeriod}>
                <SelectTrigger id="comparison">
                  <SelectValue placeholder="Select comparison" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="previous-year">Previous Year</SelectItem>
                  <SelectItem value="previous-period">Previous Period</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="forecast">Forecast</SelectItem>
                  <SelectItem value="none">No Comparison</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="view-mode">View Mode</Label>
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger id="view-mode">
                  <SelectValue placeholder="Select view mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="summary">Summary</SelectItem>
                  <SelectItem value="percentage">With Percentages</SelectItem>
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

      {/* Financial Reports Tabs */}
      <Tabs defaultValue="income" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="income">Income Statement</TabsTrigger>
          <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="retained">Retained Earnings</TabsTrigger>
        </TabsList>

        {/* Income Statement Tab */}
        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Income Statement</CardTitle>
                <CardDescription>For the period ending April 30, 2025</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {comparisonPeriod === "previous-year"
                  ? "vs. Previous Year"
                  : comparisonPeriod === "previous-period"
                    ? "vs. Previous Period"
                    : comparisonPeriod === "budget"
                      ? "vs. Budget"
                      : comparisonPeriod === "forecast"
                        ? "vs. Forecast"
                        : ""}
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[300px]">Account</TableHead>
                      <TableHead className="text-right">Current Period</TableHead>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableHead className="text-right">
                            {comparisonPeriod === "previous-year"
                              ? "Previous Year"
                              : comparisonPeriod === "previous-period"
                                ? "Previous Period"
                                : comparisonPeriod === "budget"
                                  ? "Budget"
                                  : "Forecast"}
                          </TableHead>
                          <TableHead className="text-right">Variance</TableHead>
                          <TableHead className="text-right">Variance %</TableHead>
                        </>
                      )}
                      {viewMode === "percentage" && <TableHead className="text-right">% of Revenue</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Revenue Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Revenue
                      </TableCell>
                    </TableRow>

                    {/* Revenue Items */}
                    <TableRow
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleRowExpansion("revenue-sales")}
                    >
                      <TableCell className="flex items-center">
                        <span className="mr-2">
                          {expandedRows["revenue-sales"] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </span>
                        Product Sales
                      </TableCell>
                      <TableCell className="text-right">$845,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$782,150.00</TableCell>
                          <TableCell className="text-right text-green-600">$63,100.00</TableCell>
                          <TableCell className="text-right text-green-600">8.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">68.2%</TableCell>}
                    </TableRow>

                    {expandedRows["revenue-sales"] && (
                      <>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Product Category A</TableCell>
                          <TableCell className="text-right">$425,120.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$398,250.00</TableCell>
                              <TableCell className="text-right text-green-600">$26,870.00</TableCell>
                              <TableCell className="text-right text-green-600">6.7%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">34.3%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Product Category B</TableCell>
                          <TableCell className="text-right">$325,430.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$298,900.00</TableCell>
                              <TableCell className="text-right text-green-600">$26,530.00</TableCell>
                              <TableCell className="text-right text-green-600">8.9%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">26.3%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Product Category C</TableCell>
                          <TableCell className="text-right">$94,700.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$85,000.00</TableCell>
                              <TableCell className="text-right text-green-600">$9,700.00</TableCell>
                              <TableCell className="text-right text-green-600">11.4%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">7.6%</TableCell>}
                        </TableRow>
                      </>
                    )}

                    <TableRow>
                      <TableCell>Service Revenue</TableCell>
                      <TableCell className="text-right">$392,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$345,200.00</TableCell>
                          <TableCell className="text-right text-green-600">$47,550.00</TableCell>
                          <TableCell className="text-right text-green-600">13.8%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">31.7%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Total Revenue</TableCell>
                      <TableCell className="text-right font-bold">$1,238,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$1,127,350.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$110,650.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">9.8%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">100.0%</TableCell>}
                    </TableRow>

                    {/* Cost of Goods Sold Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Cost of Goods Sold
                      </TableCell>
                    </TableRow>

                    <TableRow
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleRowExpansion("cogs-materials")}
                    >
                      <TableCell className="flex items-center">
                        <span className="mr-2">
                          {expandedRows["cogs-materials"] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </span>
                        Materials & Supplies
                      </TableCell>
                      <TableCell className="text-right">$312,450.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$298,750.00</TableCell>
                          <TableCell className="text-right text-red-600">$13,700.00</TableCell>
                          <TableCell className="text-right text-red-600">4.6%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">25.2%</TableCell>}
                    </TableRow>

                    {expandedRows["cogs-materials"] && (
                      <>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Raw Materials</TableCell>
                          <TableCell className="text-right">$187,450.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$175,250.00</TableCell>
                              <TableCell className="text-right text-red-600">$12,200.00</TableCell>
                              <TableCell className="text-right text-red-600">7.0%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">15.1%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Packaging</TableCell>
                          <TableCell className="text-right">$78,500.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$75,000.00</TableCell>
                              <TableCell className="text-right text-red-600">$3,500.00</TableCell>
                              <TableCell className="text-right text-red-600">4.7%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">6.3%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Other Supplies</TableCell>
                          <TableCell className="text-right">$46,500.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$48,500.00</TableCell>
                              <TableCell className="text-right text-green-600">$2,000.00</TableCell>
                              <TableCell className="text-right text-green-600">4.1%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">3.8%</TableCell>}
                        </TableRow>
                      </>
                    )}

                    <TableRow>
                      <TableCell>Direct Labor</TableCell>
                      <TableCell className="text-right">$185,700.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$168,500.00</TableCell>
                          <TableCell className="text-right text-red-600">$17,200.00</TableCell>
                          <TableCell className="text-right text-red-600">10.2%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">15.0%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Manufacturing Overhead</TableCell>
                      <TableCell className="text-right">$98,450.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$92,750.00</TableCell>
                          <TableCell className="text-right text-red-600">$5,700.00</TableCell>
                          <TableCell className="text-right text-red-600">6.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">7.9%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Total Cost of Goods Sold</TableCell>
                      <TableCell className="text-right font-bold">$596,600.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$560,000.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$36,600.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">6.5%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">48.2%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Gross Profit</TableCell>
                      <TableCell className="text-right font-bold">$641,400.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$567,350.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$74,050.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">13.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">51.8%</TableCell>}
                    </TableRow>

                    {/* Operating Expenses Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Operating Expenses
                      </TableCell>
                    </TableRow>

                    <TableRow
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleRowExpansion("opex-salaries")}
                    >
                      <TableCell className="flex items-center">
                        <span className="mr-2">
                          {expandedRows["opex-salaries"] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </span>
                        Salaries & Wages
                      </TableCell>
                      <TableCell className="text-right">$245,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$228,500.00</TableCell>
                          <TableCell className="text-right text-red-600">$17,250.00</TableCell>
                          <TableCell className="text-right text-red-600">7.5%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">19.9%</TableCell>}
                    </TableRow>

                    {expandedRows["opex-salaries"] && (
                      <>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Administrative</TableCell>
                          <TableCell className="text-right">$87,500.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$82,500.00</TableCell>
                              <TableCell className="text-right text-red-600">$5,000.00</TableCell>
                              <TableCell className="text-right text-red-600">6.1%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">7.1%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Sales & Marketing</TableCell>
                          <TableCell className="text-right">$98,250.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$92,000.00</TableCell>
                              <TableCell className="text-right text-red-600">$6,250.00</TableCell>
                              <TableCell className="text-right text-red-600">6.8%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">7.9%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-10">Research & Development</TableCell>
                          <TableCell className="text-right">$60,000.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$54,000.00</TableCell>
                              <TableCell className="text-right text-red-600">$6,000.00</TableCell>
                              <TableCell className="text-right text-red-600">11.1%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">4.8%</TableCell>}
                        </TableRow>
                      </>
                    )}

                    <TableRow>
                      <TableCell>Rent & Utilities</TableCell>
                      <TableCell className="text-right">$42,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$40,000.00</TableCell>
                          <TableCell className="text-right text-red-600">$2,500.00</TableCell>
                          <TableCell className="text-right text-red-600">6.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">3.4%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Marketing & Advertising</TableCell>
                      <TableCell className="text-right">$78,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$65,000.00</TableCell>
                          <TableCell className="text-right text-red-600">$13,250.00</TableCell>
                          <TableCell className="text-right text-red-600">20.4%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">6.3%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Depreciation & Amortization</TableCell>
                      <TableCell className="text-right">$35,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$32,500.00</TableCell>
                          <TableCell className="text-right text-red-600">$3,250.00</TableCell>
                          <TableCell className="text-right text-red-600">10.0%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">2.9%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Other Operating Expenses</TableCell>
                      <TableCell className="text-right">$28,450.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$26,750.00</TableCell>
                          <TableCell className="text-right text-red-600">$1,700.00</TableCell>
                          <TableCell className="text-right text-red-600">6.4%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">2.3%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Total Operating Expenses</TableCell>
                      <TableCell className="text-right font-bold">$430,700.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$392,750.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$37,950.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">9.7%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">34.8%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Operating Income</TableCell>
                      <TableCell className="text-right font-bold">$210,700.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$174,600.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$36,100.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">20.7%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">17.0%</TableCell>}
                    </TableRow>

                    {/* Other Income/Expenses Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Other Income/Expenses
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Interest Income</TableCell>
                      <TableCell className="text-right">$5,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$4,750.00</TableCell>
                          <TableCell className="text-right text-green-600">$500.00</TableCell>
                          <TableCell className="text-right text-green-600">10.5%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">0.4%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Interest Expense</TableCell>
                      <TableCell className="text-right">($12,750.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($14,500.00)</TableCell>
                          <TableCell className="text-right text-green-600">$1,750.00</TableCell>
                          <TableCell className="text-right text-green-600">12.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">-1.0%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Other Income</TableCell>
                      <TableCell className="text-right">$3,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$2,750.00</TableCell>
                          <TableCell className="text-right text-green-600">$750.00</TableCell>
                          <TableCell className="text-right text-green-600">27.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">0.3%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Total Other Income/Expenses</TableCell>
                      <TableCell className="text-right font-bold">($4,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">($7,000.00)</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$3,000.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">42.9%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">-0.3%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Income Before Taxes</TableCell>
                      <TableCell className="text-right font-bold">$206,700.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$167,600.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$39,100.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">23.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">16.7%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell>Income Tax Expense</TableCell>
                      <TableCell className="text-right">$51,675.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$41,900.00</TableCell>
                          <TableCell className="text-right text-red-600">$9,775.00</TableCell>
                          <TableCell className="text-right text-red-600">23.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">4.2%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/50">
                      <TableCell>Net Income</TableCell>
                      <TableCell className="text-right font-bold">$155,025.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$125,700.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$29,325.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">23.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">12.5%</TableCell>}
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Key Metrics</CardTitle>
                <CardDescription>Financial performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Gross Profit Margin</p>
                      <p className="text-xs text-muted-foreground">Revenue less cost of goods sold</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">51.8%</p>
                      {comparisonPeriod !== "none" && <p className="text-xs text-green-600">+1.5% vs previous year</p>}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Operating Margin</p>
                      <p className="text-xs text-muted-foreground">Operating income as % of revenue</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">17.0%</p>
                      {comparisonPeriod !== "none" && <p className="text-xs text-green-600">+1.5% vs previous year</p>}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Net Profit Margin</p>
                      <p className="text-xs text-muted-foreground">Net income as % of revenue</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">12.5%</p>
                      {comparisonPeriod !== "none" && <p className="text-xs text-green-600">+1.3% vs previous year</p>}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Effective Tax Rate</p>
                      <p className="text-xs text-muted-foreground">Income tax as % of pre-tax income</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">25.0%</p>
                      {comparisonPeriod !== "none" && <p className="text-xs text-muted-foreground">No change</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Variance Analysis</CardTitle>
                <CardDescription>Significant changes from previous period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Positive</Badge>
                      <p className="text-sm font-medium">Service Revenue (+13.8%)</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Increase due to new service offerings and expanded client base in enterprise segment.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Negative</Badge>
                      <p className="text-sm font-medium">Marketing & Advertising (+20.4%)</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Increased spending on digital marketing campaigns and product launch events.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Positive</Badge>
                      <p className="text-sm font-medium">Interest Expense (-12.1%)</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Reduction due to debt refinancing at lower interest rates in Q1.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Watch</Badge>
                      <p className="text-sm font-medium">Direct Labor (+10.2%)</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Increase due to wage adjustments and additional staffing for new product lines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Balance Sheet Tab */}
        <TabsContent value="balance" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Balance Sheet</CardTitle>
                <CardDescription>As of April 30, 2025</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {comparisonPeriod === "previous-year"
                  ? "vs. Previous Year"
                  : comparisonPeriod === "previous-period"
                    ? "vs. Previous Period"
                    : comparisonPeriod === "budget"
                      ? "vs. Budget"
                      : comparisonPeriod === "forecast"
                        ? "vs. Forecast"
                        : ""}
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[300px]">Account</TableHead>
                      <TableHead className="text-right">Current Period</TableHead>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableHead className="text-right">
                            {comparisonPeriod === "previous-year"
                              ? "Previous Year"
                              : comparisonPeriod === "previous-period"
                                ? "Previous Period"
                                : comparisonPeriod === "budget"
                                  ? "Budget"
                                  : "Forecast"}
                          </TableHead>
                          <TableHead className="text-right">Variance</TableHead>
                          <TableHead className="text-right">Variance %</TableHead>
                        </>
                      )}
                      {viewMode === "percentage" && <TableHead className="text-right">% of Total</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Assets Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Assets
                      </TableCell>
                    </TableRow>

                    {/* Current Assets */}
                    <TableRow className="font-medium">
                      <TableCell>Current Assets</TableCell>
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 5
                              : 4
                            : viewMode === "percentage"
                              ? 2
                              : 1
                        }
                      ></TableCell>
                    </TableRow>

                    <TableRow
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleRowExpansion("assets-cash")}
                    >
                      <TableCell className="flex items-center pl-6">
                        <span className="mr-2">
                          {expandedRows["assets-cash"] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </span>
                        Cash & Cash Equivalents
                      </TableCell>
                      <TableCell className="text-right">$1,245,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,125,500.00</TableCell>
                          <TableCell className="text-right text-green-600">$120,250.00</TableCell>
                          <TableCell className="text-right text-green-600">10.7%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">18.5%</TableCell>}
                    </TableRow>

                    {expandedRows["assets-cash"] && (
                      <>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Operating Accounts</TableCell>
                          <TableCell className="text-right">$845,750.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$725,500.00</TableCell>
                              <TableCell className="text-right text-green-600">$120,250.00</TableCell>
                              <TableCell className="text-right text-green-600">16.6%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">12.6%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Money Market</TableCell>
                          <TableCell className="text-right">$400,000.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$400,000.00</TableCell>
                              <TableCell className="text-right">$0.00</TableCell>
                              <TableCell className="text-right">0.0%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">5.9%</TableCell>}
                        </TableRow>
                      </>
                    )}

                    <TableRow>
                      <TableCell className="pl-6">Accounts Receivable</TableCell>
                      <TableCell className="text-right">$875,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$795,750.00</TableCell>
                          <TableCell className="text-right text-red-600">$79,500.00</TableCell>
                          <TableCell className="text-right text-red-600">10.0%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">13.0%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Inventory</TableCell>
                      <TableCell className="text-right">$625,450.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$587,250.00</TableCell>
                          <TableCell className="text-right text-red-600">$38,200.00</TableCell>
                          <TableCell className="text-right text-red-600">6.5%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">9.3%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Prepaid Expenses</TableCell>
                      <TableCell className="text-right">$87,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$75,250.00</TableCell>
                          <TableCell className="text-right text-red-600">$12,250.00</TableCell>
                          <TableCell className="text-right text-red-600">16.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">1.3%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell className="pl-6">Total Current Assets</TableCell>
                      <TableCell className="text-right font-bold">$2,833,950.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$2,583,750.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$250,200.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">9.7%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">42.1%</TableCell>}
                    </TableRow>

                    {/* Non-Current Assets */}
                    <TableRow className="font-medium">
                      <TableCell>Non-Current Assets</TableCell>
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 5
                              : 4
                            : viewMode === "percentage"
                              ? 2
                              : 1
                        }
                      ></TableCell>
                    </TableRow>

                    <TableRow
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleRowExpansion("assets-ppe")}
                    >
                      <TableCell className="flex items-center pl-6">
                        <span className="mr-2">
                          {expandedRows["assets-ppe"] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </span>
                        Property, Plant & Equipment
                      </TableCell>
                      <TableCell className="text-right">$3,875,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$3,750,000.00</TableCell>
                          <TableCell className="text-right text-red-600">$125,250.00</TableCell>
                          <TableCell className="text-right text-red-600">3.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">57.5%</TableCell>}
                    </TableRow>

                    {expandedRows["assets-ppe"] && (
                      <>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Land</TableCell>
                          <TableCell className="text-right">$750,000.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$750,000.00</TableCell>
                              <TableCell className="text-right">$0.00</TableCell>
                              <TableCell className="text-right">0.0%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">11.1%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Buildings</TableCell>
                          <TableCell className="text-right">$2,250,000.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$2,250,000.00</TableCell>
                              <TableCell className="text-right">$0.00</TableCell>
                              <TableCell className="text-right">0.0%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">33.4%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Equipment</TableCell>
                          <TableCell className="text-right">$1,250,000.00</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">$1,125,000.00</TableCell>
                              <TableCell className="text-right text-red-600">$125,000.00</TableCell>
                              <TableCell className="text-right text-red-600">11.1%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">18.6%</TableCell>}
                        </TableRow>
                        <TableRow className="bg-muted/20 text-sm">
                          <TableCell className="pl-12">Accumulated Depreciation</TableCell>
                          <TableCell className="text-right">($374,750.00)</TableCell>
                          {comparisonPeriod !== "none" && (
                            <>
                              <TableCell className="text-right">($375,000.00)</TableCell>
                              <TableCell className="text-right text-green-600">$250.00</TableCell>
                              <TableCell className="text-right text-green-600">0.1%</TableCell>
                            </>
                          )}
                          {viewMode === "percentage" && <TableCell className="text-right">-5.6%</TableCell>}
                        </TableRow>
                      </>
                    )}

                    <TableRow>
                      <TableCell className="pl-6">Intangible Assets</TableCell>
                      <TableCell className="text-right">$25,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$27,500.00</TableCell>
                          <TableCell className="text-right text-green-600">$2,500.00</TableCell>
                          <TableCell className="text-right text-green-600">9.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">0.4%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell className="pl-6">Total Non-Current Assets</TableCell>
                      <TableCell className="text-right font-bold">$3,900,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$3,777,500.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$122,750.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">3.2%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">57.9%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Total Assets</TableCell>
                      <TableCell className="text-right font-bold">$6,734,200.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$6,361,250.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$372,950.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">5.9%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">100.0%</TableCell>}
                    </TableRow>

                    {/* Liabilities Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Liabilities
                      </TableCell>
                    </TableRow>

                    {/* Current Liabilities */}
                    <TableRow className="font-medium">
                      <TableCell>Current Liabilities</TableCell>
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 5
                              : 4
                            : viewMode === "percentage"
                              ? 2
                              : 1
                        }
                      ></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Accounts Payable</TableCell>
                      <TableCell className="text-right">$425,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$387,500.00</TableCell>
                          <TableCell className="text-right text-red-600">$38,250.00</TableCell>
                          <TableCell className="text-right text-red-600">9.9%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">6.3%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Short-term Debt</TableCell>
                      <TableCell className="text-right">$125,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$150,000.00</TableCell>
                          <TableCell className="text-right text-green-600">$25,000.00</TableCell>
                          <TableCell className="text-right text-green-600">16.7%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">1.9%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Accrued Expenses</TableCell>
                      <TableCell className="text-right">$87,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$75,250.00</TableCell>
                          <TableCell className="text-right text-red-600">$12,250.00</TableCell>
                          <TableCell className="text-right text-red-600">16.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">1.3%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Deferred Revenue</TableCell>
                      <TableCell className="text-right">$145,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$125,000.00</TableCell>
                          <TableCell className="text-right text-red-600">$20,250.00</TableCell>
                          <TableCell className="text-right text-red-600">16.2%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">2.2%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell className="pl-6">Total Current Liabilities</TableCell>
                      <TableCell className="text-right font-bold">$783,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$737,750.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$45,750.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">6.2%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">11.6%</TableCell>}
                    </TableRow>

                    {/* Non-Current Liabilities */}
                    <TableRow className="font-medium">
                      <TableCell>Non-Current Liabilities</TableCell>
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 5
                              : 4
                            : viewMode === "percentage"
                              ? 2
                              : 1
                        }
                      ></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Long-term Debt</TableCell>
                      <TableCell className="text-right">$1,250,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,375,000.00</TableCell>
                          <TableCell className="text-right text-green-600">$125,000.00</TableCell>
                          <TableCell className="text-right text-green-600">9.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">18.6%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Deferred Tax Liabilities</TableCell>
                      <TableCell className="text-right">$87,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$75,250.00</TableCell>
                          <TableCell className="text-right text-red-600">$12,250.00</TableCell>
                          <TableCell className="text-right text-red-600">16.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">1.3%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell className="pl-6">Total Non-Current Liabilities</TableCell>
                      <TableCell className="text-right font-bold">$1,337,500.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$1,450,250.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$112,750.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">7.8%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">19.9%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Total Liabilities</TableCell>
                      <TableCell className="text-right font-bold">$2,121,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$2,188,000.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$67,000.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">3.1%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">31.5%</TableCell>}
                    </TableRow>

                    {/* Equity Section */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell
                        colSpan={
                          comparisonPeriod !== "none"
                            ? viewMode === "percentage"
                              ? 6
                              : 5
                            : viewMode === "percentage"
                              ? 3
                              : 2
                        }
                      >
                        Equity
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Common Stock</TableCell>
                      <TableCell className="text-right">$1,000,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,000,000.00</TableCell>
                          <TableCell className="text-right">$0.00</TableCell>
                          <TableCell className="text-right">0.0%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">14.8%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Additional Paid-in Capital</TableCell>
                      <TableCell className="text-right">$1,500,000.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,500,000.00</TableCell>
                          <TableCell className="text-right">$0.00</TableCell>
                          <TableCell className="text-right">0.0%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">22.3%</TableCell>}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Retained Earnings</TableCell>
                      <TableCell className="text-right">$2,113,200.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,673,250.00</TableCell>
                          <TableCell className="text-right text-red-600">$439,950.00</TableCell>
                          <TableCell className="text-right text-red-600">26.3%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right">31.4%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Total Equity</TableCell>
                      <TableCell className="text-right font-bold">$4,613,200.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$4,173,250.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$439,950.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">10.5%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">68.5%</TableCell>}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/50">
                      <TableCell>Total Liabilities & Equity</TableCell>
                      <TableCell className="text-right font-bold">$6,734,200.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$6,361,250.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$372,950.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">5.9%</TableCell>
                        </>
                      )}
                      {viewMode === "percentage" && <TableCell className="text-right font-bold">100.0%</TableCell>}
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cash Flow Tab */}
        <TabsContent value="cashflow" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Cash Flow Statement</CardTitle>
                <CardDescription>For the period ending April 30, 2025</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {comparisonPeriod === "previous-year"
                  ? "vs. Previous Year"
                  : comparisonPeriod === "previous-period"
                    ? "vs. Previous Period"
                    : comparisonPeriod === "budget"
                      ? "vs. Budget"
                      : comparisonPeriod === "forecast"
                        ? "vs. Forecast"
                        : ""}
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[600px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[300px]">Account</TableHead>
                      <TableHead className="text-right">Current Period</TableHead>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableHead className="text-right">
                            {comparisonPeriod === "previous-year"
                              ? "Previous Year"
                              : comparisonPeriod === "previous-period"
                                ? "Previous Period"
                                : comparisonPeriod === "budget"
                                  ? "Budget"
                                  : "Forecast"}
                          </TableHead>
                          <TableHead className="text-right">Variance</TableHead>
                          <TableHead className="text-right">Variance %</TableHead>
                        </>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Operating Activities */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell colSpan={comparisonPeriod !== "none" ? 5 : 2}>
                        Cash Flows from Operating Activities
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Net Income</TableCell>
                      <TableCell className="text-right">$155,025.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$125,700.00</TableCell>
                          <TableCell className="text-right text-green-600">$29,325.00</TableCell>
                          <TableCell className="text-right text-green-600">23.3%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Adjustments to reconcile Net Income</TableCell>
                      <TableCell colSpan={comparisonPeriod !== "none" ? 4 : 1}></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Depreciation & Amortization</TableCell>
                      <TableCell className="text-right">$35,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$32,500.00</TableCell>
                          <TableCell className="text-right text-red-600">$3,250.00</TableCell>
                          <TableCell className="text-right text-red-600">10.0%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Accounts Receivable (Increase)</TableCell>
                      <TableCell className="text-right">($79,500.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($45,250.00)</TableCell>
                          <TableCell className="text-right text-red-600">$34,250.00</TableCell>
                          <TableCell className="text-right text-red-600">75.7%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Inventory (Increase)</TableCell>
                      <TableCell className="text-right">($38,200.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($25,750.00)</TableCell>
                          <TableCell className="text-right text-red-600">$12,450.00</TableCell>
                          <TableCell className="text-right text-red-600">48.3%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Accounts Payable Increase</TableCell>
                      <TableCell className="text-right">$38,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$22,500.00</TableCell>
                          <TableCell className="text-right text-green-600">$15,750.00</TableCell>
                          <TableCell className="text-right text-green-600">70.0%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell className="pl-6">Accrued Expenses Increase</TableCell>
                      <TableCell className="text-right">$12,250.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$7,500.00</TableCell>
                          <TableCell className="text-right text-green-600">$4,750.00</TableCell>
                          <TableCell className="text-right text-green-600">63.3%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Net Cash from Operating Activities</TableCell>
                      <TableCell className="text-right font-bold">$123,575.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$117,200.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$6,375.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">5.4%</TableCell>
                        </>
                      )}
                    </TableRow>

                    {/* Investing Activities */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell colSpan={comparisonPeriod !== "none" ? 5 : 2}>
                        Cash Flows from Investing Activities
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Purchase of Property & Equipment</TableCell>
                      <TableCell className="text-right">($125,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($75,000.00)</TableCell>
                          <TableCell className="text-right text-red-600">$50,000.00</TableCell>
                          <TableCell className="text-right text-red-600">66.7%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Net Cash used in Investing Activities</TableCell>
                      <TableCell className="text-right font-bold">($125,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">($75,000.00)</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$50,000.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">66.7%</TableCell>
                        </>
                      )}
                    </TableRow>

                    {/* Financing Activities */}
                    <TableRow className="font-medium bg-muted/50">
                      <TableCell colSpan={comparisonPeriod !== "none" ? 5 : 2}>
                        Cash Flows from Financing Activities
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Repayment of Long-term Debt</TableCell>
                      <TableCell className="text-right">($125,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($125,000.00)</TableCell>
                          <TableCell className="text-right">$0.00</TableCell>
                          <TableCell className="text-right">0.0%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell>Repayment of Short-term Debt</TableCell>
                      <TableCell className="text-right">($25,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($25,000.00)</TableCell>
                          <TableCell className="text-right">$0.00</TableCell>
                          <TableCell className="text-right">0.0%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell>Dividends Paid</TableCell>
                      <TableCell className="text-right">($50,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">($40,000.00)</TableCell>
                          <TableCell className="text-right text-red-600">$10,000.00</TableCell>
                          <TableCell className="text-right text-red-600">25.0%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium">
                      <TableCell>Net Cash used in Financing Activities</TableCell>
                      <TableCell className="text-right font-bold">($200,000.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">($190,000.00)</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$10,000.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">5.3%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/30">
                      <TableCell>Net Increase in Cash</TableCell>
                      <TableCell className="text-right font-bold">($201,425.00)</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">($147,800.00)</TableCell>
                          <TableCell className="text-right font-bold text-red-600">$53,625.00</TableCell>
                          <TableCell className="text-right font-bold text-red-600">36.3%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow>
                      <TableCell>Cash at Beginning of Period</TableCell>
                      <TableCell className="text-right">$1,447,175.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right">$1,273,300.00</TableCell>
                          <TableCell className="text-right text-green-600">$173,875.00</TableCell>
                          <TableCell className="text-right text-green-600">13.7%</TableCell>
                        </>
                      )}
                    </TableRow>

                    <TableRow className="font-medium bg-muted/50">
                      <TableCell>Cash at End of Period</TableCell>
                      <TableCell className="text-right font-bold">$1,245,750.00</TableCell>
                      {comparisonPeriod !== "none" && (
                        <>
                          <TableCell className="text-right font-bold">$1,125,500.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">$120,250.00</TableCell>
                          <TableCell className="text-right font-bold text-green-600">10.7%</TableCell>
                        </>
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Retained Earnings Tab */}
        <TabsContent value="retained" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Statement of Retained Earnings</CardTitle>
                <CardDescription>For the period ending April 30, 2025</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                {comparisonPeriod === "previous-year"
                  ? "vs. Previous Year"
                  : comparisonPeriod === "previous-period"
                    ? "vs. Previous Period"
                    : comparisonPeriod === "budget"
                      ? "vs. Budget"
                      : comparisonPeriod === "forecast"
                        ? "vs. Forecast"
                        : ""}
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Account</TableHead>
                    <TableHead className="text-right">Current Period</TableHead>
                    {comparisonPeriod !== "none" && (
                      <>
                        <TableHead className="text-right">
                          {comparisonPeriod === "previous-year"
                            ? "Previous Year"
                            : comparisonPeriod === "previous-period"
                              ? "Previous Period"
                              : comparisonPeriod === "budget"
                                ? "Budget"
                                : "Forecast"}
                        </TableHead>
                        <TableHead className="text-right">Variance</TableHead>
                        <TableHead className="text-right">Variance %</TableHead>
                      </>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Beginning Retained Earnings</TableCell>
                    <TableCell className="text-right">$2,008,175.00</TableCell>
                    {comparisonPeriod !== "none" && (
                      <>
                        <TableCell className="text-right">$1,587,550.00</TableCell>
                        <TableCell className="text-right text-green-600">$420,625.00</TableCell>
                        <TableCell className="text-right text-green-600">26.5%</TableCell>
                      </>
                    )}
                  </TableRow>

                  <TableRow>
                    <TableCell>Net Income</TableCell>
                    <TableCell className="text-right">$155,025.00</TableCell>
                    {comparisonPeriod !== "none" && (
                      <>
                        <TableCell className="text-right">$125,700.00</TableCell>
                        <TableCell className="text-right text-green-600">$29,325.00</TableCell>
                        <TableCell className="text-right text-green-600">23.3%</TableCell>
                      </>
                    )}
                  </TableRow>

                  <TableRow>
                    <TableCell>Dividends Declared</TableCell>
                    <TableCell className="text-right">($50,000.00)</TableCell>
                    {comparisonPeriod !== "none" && (
                      <>
                        <TableCell className="text-right">($40,000.00)</TableCell>
                        <TableCell className="text-right text-red-600">$10,000.00</TableCell>
                        <TableCell className="text-right text-red-600">25.0%</TableCell>
                      </>
                    )}
                  </TableRow>

                  <TableRow className="font-medium bg-muted/50">
                    <TableCell>Ending Retained Earnings</TableCell>
                    <TableCell className="text-right font-bold">$2,113,200.00</TableCell>
                    {comparisonPeriod !== "none" && (
                      <>
                        <TableCell className="text-right font-bold">$1,673,250.00</TableCell>
                        <TableCell className="text-right font-bold text-green-600">$439,950.00</TableCell>
                        <TableCell className="text-right font-bold text-green-600">26.3%</TableCell>
                      </>
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
