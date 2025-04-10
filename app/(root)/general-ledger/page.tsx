"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Download,
  Plus,
  FileText,
  ArrowUpDown,
  Calendar,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GeneralLedgerPage() {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="General Ledger" subtitle="View and manage your general ledger accounts and transactions" />
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Journal Entry
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Accounts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Across 5 account types</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,456,789.45</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
            <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234,567.89</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Period</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">April 2025</div>
            <p className="text-xs text-muted-foreground">Fiscal Year 2025</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="accounts" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="journal-entries">Journal Entries</TabsTrigger>
            <TabsTrigger value="trial-balance">Trial Balance</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Accounts Tab */}
        <TabsContent value="accounts" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Account Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Account Types</SelectItem>
                  <SelectItem value="assets">Assets</SelectItem>
                  <SelectItem value="liabilities">Liabilities</SelectItem>
                  <SelectItem value="equity">Equity</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="expenses">Expenses</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="active">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Account Code</TableHead>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "1000",
                      code: "1000",
                      name: "Cash",
                      type: "Asset",
                      balance: "$125,450.78",
                      status: "Active",
                      subAccounts: [
                        { code: "1001", name: "Operating Account", balance: "$98,765.43" },
                        { code: "1002", name: "Savings Account", balance: "$25,685.35" },
                        { code: "1003", name: "Petty Cash", balance: "$1,000.00" },
                      ],
                    },
                    {
                      id: "1100",
                      code: "1100",
                      name: "Accounts Receivable",
                      type: "Asset",
                      balance: "$78,950.25",
                      status: "Active",
                      subAccounts: [
                        { code: "1101", name: "Trade Receivables", balance: "$65,432.10" },
                        { code: "1102", name: "Other Receivables", balance: "$13,518.15" },
                      ],
                    },
                    {
                      id: "1200",
                      code: "1200",
                      name: "Inventory",
                      type: "Asset",
                      balance: "$234,567.89",
                      status: "Active",
                      subAccounts: [
                        { code: "1201", name: "Raw Materials", balance: "$98,765.43" },
                        { code: "1202", name: "Work in Progress", balance: "$45,678.90" },
                        { code: "1203", name: "Finished Goods", balance: "$90,123.56" },
                      ],
                    },
                    {
                      id: "1300",
                      code: "1300",
                      name: "Prepaid Expenses",
                      type: "Asset",
                      balance: "$12,345.67",
                      status: "Active",
                      subAccounts: [],
                    },
                    {
                      id: "1400",
                      code: "1400",
                      name: "Fixed Assets",
                      type: "Asset",
                      balance: "$876,340.00",
                      status: "Active",
                      subAccounts: [
                        { code: "1401", name: "Buildings", balance: "$500,000.00" },
                        { code: "1402", name: "Equipment", balance: "$250,000.00" },
                        { code: "1403", name: "Vehicles", balance: "$150,000.00" },
                        { code: "1404", name: "Accumulated Depreciation", balance: "-$23,660.00" },
                      ],
                    },
                    {
                      id: "2000",
                      code: "2000",
                      name: "Accounts Payable",
                      type: "Liability",
                      balance: "$45,678.90",
                      status: "Active",
                      subAccounts: [],
                    },
                    {
                      id: "2100",
                      code: "2100",
                      name: "Accrued Liabilities",
                      type: "Liability",
                      balance: "$23,456.78",
                      status: "Active",
                      subAccounts: [],
                    },
                    {
                      id: "2200",
                      code: "2200",
                      name: "Short-term Loans",
                      type: "Liability",
                      balance: "$100,000.00",
                      status: "Active",
                      subAccounts: [],
                    },
                    {
                      id: "3000",
                      code: "3000",
                      name: "Equity",
                      type: "Equity",
                      balance: "$500,000.00",
                      status: "Active",
                      subAccounts: [
                        { code: "3001", name: "Common Stock", balance: "$250,000.00" },
                        { code: "3002", name: "Retained Earnings", balance: "$250,000.00" },
                      ],
                    },
                    {
                      id: "4000",
                      code: "4000",
                      name: "Revenue",
                      type: "Revenue",
                      balance: "$789,012.34",
                      status: "Active",
                      subAccounts: [
                        { code: "4001", name: "Product Sales", balance: "$650,000.00" },
                        { code: "4002", name: "Service Revenue", balance: "$139,012.34" },
                      ],
                    },
                    {
                      id: "5000",
                      code: "5000",
                      name: "Cost of Goods Sold",
                      type: "Expense",
                      balance: "$456,789.01",
                      status: "Active",
                      subAccounts: [],
                    },
                    {
                      id: "6000",
                      code: "6000",
                      name: "Operating Expenses",
                      type: "Expense",
                      balance: "$234,567.89",
                      status: "Active",
                      subAccounts: [
                        { code: "6001", name: "Salaries and Wages", balance: "$150,000.00" },
                        { code: "6002", name: "Rent", balance: "$36,000.00" },
                        { code: "6003", name: "Utilities", balance: "$12,000.00" },
                        { code: "6004", name: "Office Supplies", balance: "$5,000.00" },
                        { code: "6005", name: "Marketing", balance: "$25,000.00" },
                        { code: "6006", name: "Insurance", balance: "$6,567.89" },
                      ],
                    },
                  ].map((account) => (
                    <>
                      <TableRow key={account.code} className="cursor-pointer hover:bg-muted/50">
                        <TableCell>
                          {account.subAccounts.length > 0 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleRow(account.id)}
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${expandedRows[account.id] ? "rotate-180" : ""}`}
                              />
                            </Button>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{account.code}</TableCell>
                        <TableCell>{account.name}</TableCell>
                        <TableCell>{account.type}</TableCell>
                        <TableCell>{account.balance}</TableCell>
                        <TableCell>
                          <Badge variant={account.status === "Active" ? "default" : "secondary"}>
                            {account.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Transactions</DropdownMenuItem>
                              <DropdownMenuItem>Edit Account</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>
                              <DropdownMenuItem>Reconcile</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      {expandedRows[account.id] &&
                        account.subAccounts.map((subAccount) => (
                          <TableRow key={subAccount.code} className="bg-muted/30">
                            <TableCell></TableCell>
                            <TableCell className="font-medium">{subAccount.code}</TableCell>
                            <TableCell className="pl-8">{subAccount.name}</TableCell>
                            <TableCell>{account.type}</TableCell>
                            <TableCell>{subAccount.balance}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">Sub-Account</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="1000">1000 - Cash</SelectItem>
                  <SelectItem value="1100">1100 - Accounts Receivable</SelectItem>
                  <SelectItem value="1200">1200 - Inventory</SelectItem>
                  <SelectItem value="2000">2000 - Accounts Payable</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="apr2025">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apr2025">April 2025</SelectItem>
                  <SelectItem value="mar2025">March 2025</SelectItem>
                  <SelectItem value="feb2025">February 2025</SelectItem>
                  <SelectItem value="jan2025">January 2025</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Debit</TableHead>
                    <TableHead>Credit</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "Apr 8, 2025",
                      reference: "INV-1234",
                      description: "Customer payment - ABC Corp",
                      account: "1000 - Cash",
                      debit: "$5,000.00",
                      credit: "",
                      balance: "$125,450.78",
                    },
                    {
                      date: "Apr 8, 2025",
                      reference: "INV-1234",
                      description: "Customer payment - ABC Corp",
                      account: "1100 - Accounts Receivable",
                      debit: "",
                      credit: "$5,000.00",
                      balance: "$78,950.25",
                    },
                    {
                      date: "Apr 7, 2025",
                      reference: "BILL-567",
                      description: "Vendor payment - XYZ Supplies",
                      account: "2000 - Accounts Payable",
                      debit: "$2,500.00",
                      credit: "",
                      balance: "$45,678.90",
                    },
                    {
                      date: "Apr 7, 2025",
                      reference: "BILL-567",
                      description: "Vendor payment - XYZ Supplies",
                      account: "1000 - Cash",
                      debit: "",
                      credit: "$2,500.00",
                      balance: "$120,450.78",
                    },
                    {
                      date: "Apr 6, 2025",
                      reference: "INV-1233",
                      description: "Product sale - DEF Inc",
                      account: "1100 - Accounts Receivable",
                      debit: "$3,500.00",
                      credit: "",
                      balance: "$83,950.25",
                    },
                    {
                      date: "Apr 6, 2025",
                      reference: "INV-1233",
                      description: "Product sale - DEF Inc",
                      account: "4001 - Product Sales",
                      debit: "",
                      credit: "$3,500.00",
                      balance: "$650,000.00",
                    },
                    {
                      date: "Apr 5, 2025",
                      reference: "JE-2025-042",
                      description: "Monthly depreciation",
                      account: "6007 - Depreciation Expense",
                      debit: "$1,250.00",
                      credit: "",
                      balance: "$5,000.00",
                    },
                    {
                      date: "Apr 5, 2025",
                      reference: "JE-2025-042",
                      description: "Monthly depreciation",
                      account: "1404 - Accumulated Depreciation",
                      debit: "",
                      credit: "$1,250.00",
                      balance: "$23,660.00",
                    },
                    {
                      date: "Apr 4, 2025",
                      reference: "BILL-566",
                      description: "Inventory purchase - ABC Wholesalers",
                      account: "1201 - Raw Materials",
                      debit: "$12,500.00",
                      credit: "",
                      balance: "$98,765.43",
                    },
                    {
                      date: "Apr 4, 2025",
                      reference: "BILL-566",
                      description: "Inventory purchase - ABC Wholesalers",
                      account: "2000 - Accounts Payable",
                      debit: "",
                      credit: "$12,500.00",
                      balance: "$48,178.90",
                    },
                  ].map((transaction, i) => (
                    <TableRow key={i}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.reference}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell>{transaction.debit}</TableCell>
                      <TableCell>{transaction.credit}</TableCell>
                      <TableCell>{transaction.balance}</TableCell>
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

        {/* Journal Entries Tab */}
        <TabsContent value="journal-entries" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="apr2025">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apr2025">April 2025</SelectItem>
                  <SelectItem value="mar2025">March 2025</SelectItem>
                  <SelectItem value="feb2025">February 2025</SelectItem>
                  <SelectItem value="jan2025">January 2025</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="recurring">Recurring</SelectItem>
                  <SelectItem value="adjusting">Adjusting</SelectItem>
                  <SelectItem value="closing">Closing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Journal #</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "Apr 8, 2025",
                      number: "JE-2025-045",
                      description: "Customer payment - ABC Corp",
                      type: "Standard",
                      amount: "$5,000.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 7, 2025",
                      number: "JE-2025-044",
                      description: "Vendor payment - XYZ Supplies",
                      type: "Standard",
                      amount: "$2,500.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 6, 2025",
                      number: "JE-2025-043",
                      description: "Product sale - DEF Inc",
                      type: "Standard",
                      amount: "$3,500.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 5, 2025",
                      number: "JE-2025-042",
                      description: "Monthly depreciation",
                      type: "Recurring",
                      amount: "$1,250.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 4, 2025",
                      number: "JE-2025-041",
                      description: "Inventory purchase - ABC Wholesalers",
                      type: "Standard",
                      amount: "$12,500.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 3, 2025",
                      number: "JE-2025-040",
                      description: "Payroll entry",
                      type: "Recurring",
                      amount: "$25,000.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 2, 2025",
                      number: "JE-2025-039",
                      description: "Rent payment",
                      type: "Recurring",
                      amount: "$3,000.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 1, 2025",
                      number: "JE-2025-038",
                      description: "Utility payments",
                      type: "Standard",
                      amount: "$1,500.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 1, 2025",
                      number: "JE-2025-037",
                      description: "Insurance premium",
                      type: "Recurring",
                      amount: "$750.00",
                      status: "Posted",
                    },
                    {
                      date: "Apr 9, 2025",
                      number: "JE-2025-046",
                      description: "Marketing expense",
                      type: "Standard",
                      amount: "$2,000.00",
                      status: "Draft",
                    },
                  ].map((entry, i) => (
                    <TableRow key={i}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.number}</TableCell>
                      <TableCell>{entry.description}</TableCell>
                      <TableCell>{entry.type}</TableCell>
                      <TableCell>{entry.amount}</TableCell>
                      <TableCell>
                        <Badge variant={entry.status === "Posted" ? "default" : "secondary"}>{entry.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Reverse</DropdownMenuItem>
                            {entry.status === "Draft" && <DropdownMenuItem>Post</DropdownMenuItem>}
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

        {/* Trial Balance Tab */}
        <TabsContent value="trial-balance" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="apr2025">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apr2025">April 2025</SelectItem>
                  <SelectItem value="mar2025">March 2025</SelectItem>
                  <SelectItem value="feb2025">February 2025</SelectItem>
                  <SelectItem value="jan2025">January 2025</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="detailed">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="summary">Summary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Trial Balance</CardTitle>
              <CardDescription>As of April 8, 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account Code</TableHead>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Debit</TableHead>
                    <TableHead>Credit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { code: "1000", name: "Cash", debit: "$125,450.78", credit: "" },
                    { code: "1100", name: "Accounts Receivable", debit: "$78,950.25", credit: "" },
                    { code: "1200", name: "Inventory", debit: "$234,567.89", credit: "" },
                    { code: "1300", name: "Prepaid Expenses", debit: "$12,345.67", credit: "" },
                    { code: "1400", name: "Fixed Assets", debit: "$876,340.00", credit: "" },
                    { code: "1404", name: "Accumulated Depreciation", debit: "", credit: "$23,660.00" },
                    { code: "2000", name: "Accounts Payable", debit: "", credit: "$45,678.90" },
                    { code: "2100", name: "Accrued Liabilities", debit: "", credit: "$23,456.78" },
                    { code: "2200", name: "Short-term Loans", debit: "", credit: "$100,000.00" },
                    { code: "3001", name: "Common Stock", debit: "", credit: "$250,000.00" },
                    { code: "3002", name: "Retained Earnings", debit: "", credit: "$250,000.00" },
                    { code: "4001", name: "Product Sales", debit: "", credit: "$650,000.00" },
                    { code: "4002", name: "Service Revenue", debit: "", credit: "$139,012.34" },
                    { code: "5000", name: "Cost of Goods Sold", debit: "$456,789.01", credit: "" },
                    { code: "6001", name: "Salaries and Wages", debit: "$150,000.00", credit: "" },
                    { code: "6002", name: "Rent", debit: "$36,000.00", credit: "" },
                    { code: "6003", name: "Utilities", debit: "$12,000.00", credit: "" },
                    { code: "6004", name: "Office Supplies", debit: "$5,000.00", credit: "" },
                    { code: "6005", name: "Marketing", debit: "$25,000.00", credit: "" },
                    { code: "6006", name: "Insurance", debit: "$6,567.89", credit: "" },
                    { code: "6007", name: "Depreciation Expense", debit: "$5,000.00", credit: "" },
                  ].map((account, i) => (
                    <TableRow key={i}>
                      <TableCell>{account.code}</TableCell>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.debit}</TableCell>
                      <TableCell>{account.credit}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50 font-bold">
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell>$2,024,011.49</TableCell>
                    <TableCell>$2,024,011.49</TableCell>
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
