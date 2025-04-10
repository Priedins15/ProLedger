"use client"

import { useState } from "react"
import { Download, Filter, FileText, ChevronRight, Printer, ArrowLeft } from "lucide-react"
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DrillDownReportingPage() {
  const [drillLevel, setDrillLevel] = useState<string>("summary")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setDrillLevel("category")
    setSelectedAccount(null)
    setSelectedTransaction(null)
  }

  const handleAccountClick = (account: string) => {
    setSelectedAccount(account)
    setDrillLevel("account")
    setSelectedTransaction(null)
  }

  const handleTransactionClick = (transaction: string) => {
    setSelectedTransaction(transaction)
    setDrillLevel("transaction")
  }

  const navigateBack = () => {
    if (drillLevel === "transaction") {
      setDrillLevel("account")
      setSelectedTransaction(null)
    } else if (drillLevel === "account") {
      setDrillLevel("category")
      setSelectedAccount(null)
    } else if (drillLevel === "category") {
      setDrillLevel("summary")
      setSelectedCategory(null)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Drill-Down Reporting"
          subtitle="Explore financial data with interactive drill-down capabilities"
        />
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
          <CardDescription>Customize your drill-down report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select defaultValue="income">
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income Statement</SelectItem>
                  <SelectItem value="balance">Balance Sheet</SelectItem>
                  <SelectItem value="cashflow">Cash Flow</SelectItem>
                  <SelectItem value="sales">Sales Analysis</SelectItem>
                  <SelectItem value="expenses">Expense Analysis</SelectItem>
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
            <div className="space-y-2">
              <Label htmlFor="detail-level">Initial Detail Level</Label>
              <Select defaultValue="summary">
                <SelectTrigger id="detail-level">
                  <SelectValue placeholder="Select detail level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="summary">Summary</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
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

      {/* Breadcrumb Navigation */}
      <Card className="p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                onClick={() => {
                  setDrillLevel("summary")
                  setSelectedCategory(null)
                  setSelectedAccount(null)
                  setSelectedTransaction(null)
                }}
              >
                Income Statement
              </BreadcrumbLink>
            </BreadcrumbItem>
            {selectedCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={() => {
                      setDrillLevel("category")
                      setSelectedAccount(null)
                      setSelectedTransaction(null)
                    }}
                  >
                    {selectedCategory}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {selectedAccount && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={() => {
                      setDrillLevel("account")
                      setSelectedTransaction(null)
                    }}
                  >
                    {selectedAccount}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {selectedTransaction && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={() => {
                      setDrillLevel("transaction")
                    }}
                  >
                    Transaction Details
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </Card>

      {/* Report Content */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>
              {drillLevel === "summary" && "Income Statement Summary"}
              {drillLevel === "category" && `${selectedCategory} Breakdown`}
              {drillLevel === "account" && `${selectedAccount} Details`}
              {drillLevel === "transaction" && "Transaction Details"}
            </CardTitle>
            <CardDescription>For the period April 1, 2025 - April 30, 2025</CardDescription>
          </div>
          {drillLevel !== "summary" && (
            <Button variant="outline" size="sm" onClick={navigateBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
        </CardHeader>
        <CardContent className="px-0">
          <ScrollArea className="h-[600px]">
            {/* Summary Level View */}
            {drillLevel === "summary" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">% of Total</TableHead>
                    <TableHead className="text-right">YoY Change</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="cursor-pointer hover:bg-muted/50" onClick={() => handleCategoryClick("Revenue")}>
                    <TableCell className="font-medium">Revenue</TableCell>
                    <TableCell className="text-right">$1,238,000.00</TableCell>
                    <TableCell className="text-right">100.0%</TableCell>
                    <TableCell className="text-right text-green-600">+9.8%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleCategoryClick("Cost of Goods Sold")}
                  >
                    <TableCell className="font-medium">Cost of Goods Sold</TableCell>
                    <TableCell className="text-right">$596,600.00</TableCell>
                    <TableCell className="text-right">48.2%</TableCell>
                    <TableCell className="text-right text-red-600">+6.5%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-medium">Gross Profit</TableCell>
                    <TableCell className="text-right font-bold">$641,400.00</TableCell>
                    <TableCell className="text-right font-bold">51.8%</TableCell>
                    <TableCell className="text-right font-bold text-green-600">+13.1%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleCategoryClick("Operating Expenses")}
                  >
                    <TableCell className="font-medium">Operating Expenses</TableCell>
                    <TableCell className="text-right">$430,700.00</TableCell>
                    <TableCell className="text-right">34.8%</TableCell>
                    <TableCell className="text-right text-red-600">+9.7%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-medium">Operating Income</TableCell>
                    <TableCell className="text-right font-bold">$210,700.00</TableCell>
                    <TableCell className="text-right font-bold">17.0%</TableCell>
                    <TableCell className="text-right font-bold text-green-600">+20.7%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleCategoryClick("Other Income/Expenses")}
                  >
                    <TableCell className="font-medium">Other Income/Expenses</TableCell>
                    <TableCell className="text-right">($4,000.00)</TableCell>
                    <TableCell className="text-right">-0.3%</TableCell>
                    <TableCell className="text-right text-green-600">-42.9%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-medium">Income Before Taxes</TableCell>
                    <TableCell className="text-right font-bold">$206,700.00</TableCell>
                    <TableCell className="text-right font-bold">16.7%</TableCell>
                    <TableCell className="text-right font-bold text-green-600">+23.3%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleCategoryClick("Income Tax Expense")}
                  >
                    <TableCell className="font-medium">Income Tax Expense</TableCell>
                    <TableCell className="text-right">$51,675.00</TableCell>
                    <TableCell className="text-right">4.2%</TableCell>
                    <TableCell className="text-right text-red-600">+23.3%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/50">
                    <TableCell className="font-medium">Net Income</TableCell>
                    <TableCell className="text-right font-bold">$155,025.00</TableCell>
                    <TableCell className="text-right font-bold">12.5%</TableCell>
                    <TableCell className="text-right font-bold text-green-600">+23.3%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {/* Category Level View */}
            {drillLevel === "category" && selectedCategory === "Revenue" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Account</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">% of Category</TableHead>
                    <TableHead className="text-right">YoY Change</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Product Sales")}
                  >
                    <TableCell className="font-medium">Product Sales</TableCell>
                    <TableCell className="text-right">$845,250.00</TableCell>
                    <TableCell className="text-right">68.3%</TableCell>
                    <TableCell className="text-right text-green-600">+8.1%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Service Revenue")}
                  >
                    <TableCell className="font-medium">Service Revenue</TableCell>
                    <TableCell className="text-right">$392,750.00</TableCell>
                    <TableCell className="text-right">31.7%</TableCell>
                    <TableCell className="text-right text-green-600">+13.8%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-medium">Total Revenue</TableCell>
                    <TableCell className="text-right font-bold">$1,238,000.00</TableCell>
                    <TableCell className="text-right font-bold">100.0%</TableCell>
                    <TableCell className="text-right font-bold text-green-600">+9.8%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {drillLevel === "category" && selectedCategory === "Operating Expenses" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Account</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">% of Category</TableHead>
                    <TableHead className="text-right">YoY Change</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Salaries & Wages")}
                  >
                    <TableCell className="font-medium">Salaries & Wages</TableCell>
                    <TableCell className="text-right">$245,750.00</TableCell>
                    <TableCell className="text-right">57.1%</TableCell>
                    <TableCell className="text-right text-red-600">+7.5%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Rent & Utilities")}
                  >
                    <TableCell className="font-medium">Rent & Utilities</TableCell>
                    <TableCell className="text-right">$42,500.00</TableCell>
                    <TableCell className="text-right">9.9%</TableCell>
                    <TableCell className="text-right text-red-600">+6.3%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Marketing & Advertising")}
                  >
                    <TableCell className="font-medium">Marketing & Advertising</TableCell>
                    <TableCell className="text-right">$78,250.00</TableCell>
                    <TableCell className="text-right">18.2%</TableCell>
                    <TableCell className="text-right text-red-600">+20.4%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Depreciation & Amortization")}
                  >
                    <TableCell className="font-medium">Depreciation & Amortization</TableCell>
                    <TableCell className="text-right">$35,750.00</TableCell>
                    <TableCell className="text-right">8.3%</TableCell>
                    <TableCell className="text-right text-red-600">+10.0%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleAccountClick("Other Operating Expenses")}
                  >
                    <TableCell className="font-medium">Other Operating Expenses</TableCell>
                    <TableCell className="text-right">$28,450.00</TableCell>
                    <TableCell className="text-right">6.6%</TableCell>
                    <TableCell className="text-right text-red-600">+6.4%</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-medium">Total Operating Expenses</TableCell>
                    <TableCell className="text-right font-bold">$430,700.00</TableCell>
                    <TableCell className="text-right font-bold">100.0%</TableCell>
                    <TableCell className="text-right font-bold text-red-600">+9.7%</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {/* Account Level View */}
            {drillLevel === "account" && selectedAccount === "Product Sales" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Date</TableHead>
                    <TableHead className="w-[180px]">Transaction ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2024")}
                  >
                    <TableCell>Apr 15, 2025</TableCell>
                    <TableCell>INV-2024</TableCell>
                    <TableCell>Acme Corp</TableCell>
                    <TableCell>Product Sale - Enterprise Package</TableCell>
                    <TableCell className="text-right">$125,450.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2025")}
                  >
                    <TableCell>Apr 18, 2025</TableCell>
                    <TableCell>INV-2025</TableCell>
                    <TableCell>Globex Industries</TableCell>
                    <TableCell>Product Sale - Premium Solution</TableCell>
                    <TableCell className="text-right">$98,750.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2026")}
                  >
                    <TableCell>Apr 20, 2025</TableCell>
                    <TableCell>INV-2026</TableCell>
                    <TableCell>Wayne Enterprises</TableCell>
                    <TableCell>Product Sale - Security Suite</TableCell>
                    <TableCell className="text-right">$156,780.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2027")}
                  >
                    <TableCell>Apr 22, 2025</TableCell>
                    <TableCell>INV-2027</TableCell>
                    <TableCell>Stark Industries</TableCell>
                    <TableCell>Product Sale - Advanced Analytics</TableCell>
                    <TableCell className="text-right">$245,670.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2028")}
                  >
                    <TableCell>Apr 25, 2025</TableCell>
                    <TableCell>INV-2028</TableCell>
                    <TableCell>Umbrella Corp</TableCell>
                    <TableCell>Product Sale - Basic Package</TableCell>
                    <TableCell className="text-right">$78,450.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("INV-2029")}
                  >
                    <TableCell>Apr 28, 2025</TableCell>
                    <TableCell>INV-2029</TableCell>
                    <TableCell>Oscorp</TableCell>
                    <TableCell>Product Sale - Custom Solution</TableCell>
                    <TableCell className="text-right">$140,150.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell colSpan={4} className="font-medium">
                      Total Product Sales
                    </TableCell>
                    <TableCell className="text-right font-bold">$845,250.00</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {drillLevel === "account" && selectedAccount === "Marketing & Advertising" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Date</TableHead>
                    <TableHead className="w-[180px]">Transaction ID</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("EXP-1024")}
                  >
                    <TableCell>Apr 5, 2025</TableCell>
                    <TableCell>EXP-1024</TableCell>
                    <TableCell>Digital Marketing Agency</TableCell>
                    <TableCell>Monthly SEM Campaign</TableCell>
                    <TableCell className="text-right">$12,500.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("EXP-1025")}
                  >
                    <TableCell>Apr 8, 2025</TableCell>
                    <TableCell>EXP-1025</TableCell>
                    <TableCell>Social Media Platform</TableCell>
                    <TableCell>Sponsored Posts</TableCell>
                    <TableCell className="text-right">$15,750.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("EXP-1026")}
                  >
                    <TableCell>Apr 12, 2025</TableCell>
                    <TableCell>EXP-1026</TableCell>
                    <TableCell>Trade Show Organizer</TableCell>
                    <TableCell>Industry Conference Booth</TableCell>
                    <TableCell className="text-right">$24,500.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("EXP-1027")}
                  >
                    <TableCell>Apr 15, 2025</TableCell>
                    <TableCell>EXP-1027</TableCell>
                    <TableCell>Creative Agency</TableCell>
                    <TableCell>Product Launch Campaign</TableCell>
                    <TableCell className="text-right">$18,750.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick("EXP-1028")}
                  >
                    <TableCell>Apr 22, 2025</TableCell>
                    <TableCell>EXP-1028</TableCell>
                    <TableCell>Content Marketing Firm</TableCell>
                    <TableCell>Blog & Newsletter Services</TableCell>
                    <TableCell className="text-right">$6,750.00</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell colSpan={4} className="font-medium">
                      Total Marketing & Advertising
                    </TableCell>
                    <TableCell className="text-right font-bold">$78,250.00</TableCell>
                    <TableCell className="text-right"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {/* Transaction Level View */}
            {drillLevel === "transaction" && selectedTransaction === "INV-2024" && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Transaction Details</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Transaction ID:</div>
                        <div>INV-2024</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Date:</div>
                        <div>April 15, 2025</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Type:</div>
                        <div>Invoice</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Status:</div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Payment Date:</div>
                        <div>April 30, 2025</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Payment Method:</div>
                        <div>Bank Transfer</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Customer:</div>
                        <div>Acme Corp</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Contact:</div>
                        <div>John Smith</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Email:</div>
                        <div>john.smith@acmecorp.com</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Phone:</div>
                        <div>(555) 123-4567</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Customer Since:</div>
                        <div>January 15, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Line Items</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Unit Price</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Enterprise Package</TableCell>
                        <TableCell>Annual subscription to Enterprise Software Package</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">$95,000.00</TableCell>
                        <TableCell className="text-right">$95,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Implementation Services</TableCell>
                        <TableCell>Professional services for software implementation</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">$25,000.00</TableCell>
                        <TableCell className="text-right">$25,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Training</TableCell>
                        <TableCell>On-site training for staff (5 days)</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">$5,450.00</TableCell>
                        <TableCell className="text-right">$5,450.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/20">
                        <TableCell colSpan={4} className="text-right font-medium">
                          Subtotal
                        </TableCell>
                        <TableCell className="text-right">$125,450.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/20">
                        <TableCell colSpan={4} className="text-right font-medium">
                          Tax (0%)
                        </TableCell>
                        <TableCell className="text-right">$0.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell colSpan={4} className="text-right font-medium">
                          Total
                        </TableCell>
                        <TableCell className="text-right font-bold">$125,450.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Journal Entries</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Account</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Debit</TableHead>
                        <TableHead className="text-right">Credit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Accounts Receivable</TableCell>
                        <TableCell>Invoice #INV-2024</TableCell>
                        <TableCell className="text-right">$125,450.00</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Product Sales Revenue</TableCell>
                        <TableCell>Invoice #INV-2024</TableCell>
                        <TableCell className="text-right"></TableCell>
                        <TableCell className="text-right">$95,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Service Revenue</TableCell>
                        <TableCell>Invoice #INV-2024</TableCell>
                        <TableCell className="text-right"></TableCell>
                        <TableCell className="text-right">$30,450.00</TableCell>
                      </TableRow>
                      <TableRow className="border-t">
                        <TableCell>Cash</TableCell>
                        <TableCell>Payment for Invoice #INV-2024</TableCell>
                        <TableCell className="text-right">$125,450.00</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Accounts Receivable</TableCell>
                        <TableCell>Payment for Invoice #INV-2024</TableCell>
                        <TableCell className="text-right"></TableCell>
                        <TableCell className="text-right">$125,450.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {drillLevel === "transaction" && selectedTransaction === "EXP-1026" && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Transaction Details</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Transaction ID:</div>
                        <div>EXP-1026</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Date:</div>
                        <div>April 12, 2025</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Type:</div>
                        <div>Expense</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Status:</div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Payment Date:</div>
                        <div>April 12, 2025</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Payment Method:</div>
                        <div>Corporate Credit Card</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Vendor Information</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Vendor:</div>
                        <div>Trade Show Organizer</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Contact:</div>
                        <div>Sarah Johnson</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Email:</div>
                        <div>sarah@tradeshow.com</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Phone:</div>
                        <div>(555) 987-6543</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm font-medium text-muted-foreground">Category:</div>
                        <div>Marketing & Advertising</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Expense Details</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Booth Rental</TableCell>
                        <TableCell>Premium 20x20 booth space at Industry Conference</TableCell>
                        <TableCell className="text-right">$15,000.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Booth Setup</TableCell>
                        <TableCell>Custom booth design and construction</TableCell>
                        <TableCell className="text-right">$7,500.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Marketing Materials</TableCell>
                        <TableCell>Brochures, promotional items, and giveaways</TableCell>
                        <TableCell className="text-right">$2,000.00</TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/30">
                        <TableCell colSpan={2} className="text-right font-medium">
                          Total
                        </TableCell>
                        <TableCell className="text-right font-bold">$24,500.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Journal Entries</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Account</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Debit</TableHead>
                        <TableHead className="text-right">Credit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Marketing & Advertising Expense</TableCell>
                        <TableCell>Trade Show Booth - Industry Conference</TableCell>
                        <TableCell className="text-right">$24,500.00</TableCell>
                        <TableCell className="text-right"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Credit Card Payable</TableCell>
                        <TableCell>Trade Show Booth - Industry Conference</TableCell>
                        <TableCell className="text-right"></TableCell>
                        <TableCell className="text-right">$24,500.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
