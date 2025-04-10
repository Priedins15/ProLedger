"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PageTitle } from "@/components/page-title"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Plus, MoreHorizontal, ChevronDown, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ChartOfAccountsPage() {
  const { toast } = useToast()
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "1000": true, // Assets expanded by default
  })
  const [showAddAccountDialog, setShowAddAccountDialog] = useState(false)

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleAddAccount = () => {
    setShowAddAccountDialog(false)
    toast({
      title: "Account added",
      description: "The new account has been added to the chart of accounts.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Chart of Accounts" subtitle="Manage your accounting structure and account hierarchy" />
        <div className="flex items-center space-x-2">
          <Button onClick={() => setShowAddAccountDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Account
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search accounts..." className="pl-8" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Account Type</DropdownMenuItem>
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Balance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
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
                <TableHead>Description</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Assets */}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCategory("1000")}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCategories["1000"] ? "rotate-180" : ""}`}
                    />
                  </Button>
                </TableCell>
                <TableCell colSpan={2}>Assets</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Asset accounts</TableCell>
                <TableCell>$1,327,654.59</TableCell>
                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedCategories["1000"] &&
                [
                  {
                    code: "1000",
                    name: "Cash",
                    type: "Asset",
                    description: "Cash on hand and in bank accounts",
                    balance: "$125,450.78",
                    status: "Active",
                    hasChildren: true,
                  },
                  {
                    code: "1001",
                    name: "Operating Account",
                    type: "Asset",
                    description: "Main operating bank account",
                    balance: "$98,765.43",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "1002",
                    name: "Savings Account",
                    type: "Asset",
                    description: "Business savings account",
                    balance: "$25,685.35",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "1003",
                    name: "Petty Cash",
                    type: "Asset",
                    description: "Cash for small expenses",
                    balance: "$1,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "1100",
                    name: "Accounts Receivable",
                    type: "Asset",
                    description: "Amounts owed by customers",
                    balance: "$78,950.25",
                    status: "Active",
                    hasChildren: true,
                  },
                  {
                    code: "1101",
                    name: "Trade Receivables",
                    type: "Asset",
                    description: "Amounts owed from sales",
                    balance: "$65,432.10",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "1102",
                    name: "Other Receivables",
                    type: "Asset",
                    description: "Non-trade receivables",
                    balance: "$13,518.15",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "1200",
                    name: "Inventory",
                    type: "Asset",
                    description: "Goods held for sale or production",
                    balance: "$234,567.89",
                    status: "Active",
                    hasChildren: true,
                  },
                  {
                    code: "1300",
                    name: "Prepaid Expenses",
                    type: "Asset",
                    description: "Expenses paid in advance",
                    balance: "$12,345.67",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "1400",
                    name: "Fixed Assets",
                    type: "Asset",
                    description: "Long-term tangible assets",
                    balance: "$876,340.00",
                    status: "Active",
                    hasChildren: true,
                  },
                ].map((account, index) => (
                  <TableRow key={account.code} className={account.isChild ? "bg-muted/30" : ""}>
                    <TableCell>
                      {account.hasChildren && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell className={account.isChild ? "pl-8" : ""}>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.description}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "Active" ? "default" : "secondary"}>{account.status}</Badge>
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
                          {account.hasChildren && <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}

              {/* Liabilities */}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCategory("2000")}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCategories["2000"] ? "rotate-180" : ""}`}
                    />
                  </Button>
                </TableCell>
                <TableCell colSpan={2}>Liabilities</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Liability accounts</TableCell>
                <TableCell>$169,135.68</TableCell>
                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedCategories["2000"] &&
                [
                  {
                    code: "2000",
                    name: "Accounts Payable",
                    type: "Liability",
                    description: "Amounts owed to vendors",
                    balance: "$45,678.90",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "2100",
                    name: "Accrued Liabilities",
                    type: "Liability",
                    description: "Expenses incurred but not yet paid",
                    balance: "$23,456.78",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "2200",
                    name: "Short-term Loans",
                    type: "Liability",
                    description: "Loans due within one year",
                    balance: "$100,000.00",
                    status: "Active",
                    hasChildren: false,
                  },
                ].map((account, index) => (
                  <TableRow key={account.code}>
                    <TableCell>
                      {account.hasChildren && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.description}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "Active" ? "default" : "secondary"}>{account.status}</Badge>
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
                          {account.hasChildren && <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}

              {/* Equity */}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCategory("3000")}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCategories["3000"] ? "rotate-180" : ""}`}
                    />
                  </Button>
                </TableCell>
                <TableCell colSpan={2}>Equity</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Equity accounts</TableCell>
                <TableCell>$500,000.00</TableCell>
                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedCategories["3000"] &&
                [
                  {
                    code: "3001",
                    name: "Common Stock",
                    type: "Equity",
                    description: "Shareholder investment",
                    balance: "$250,000.00",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "3002",
                    name: "Retained Earnings",
                    type: "Equity",
                    description: "Accumulated earnings",
                    balance: "$250,000.00",
                    status: "Active",
                    hasChildren: false,
                  },
                ].map((account, index) => (
                  <TableRow key={account.code}>
                    <TableCell>
                      {account.hasChildren && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.description}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "Active" ? "default" : "secondary"}>{account.status}</Badge>
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
                          {account.hasChildren && <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}

              {/* Revenue */}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCategory("4000")}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCategories["4000"] ? "rotate-180" : ""}`}
                    />
                  </Button>
                </TableCell>
                <TableCell colSpan={2}>Revenue</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Revenue accounts</TableCell>
                <TableCell>$789,012.34</TableCell>
                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedCategories["4000"] &&
                [
                  {
                    code: "4001",
                    name: "Product Sales",
                    type: "Revenue",
                    description: "Revenue from product sales",
                    balance: "$650,000.00",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "4002",
                    name: "Service Revenue",
                    type: "Revenue",
                    description: "Revenue from services",
                    balance: "$139,012.34",
                    status: "Active",
                    hasChildren: false,
                  },
                ].map((account, index) => (
                  <TableRow key={account.code}>
                    <TableCell>
                      {account.hasChildren && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.description}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "Active" ? "default" : "secondary"}>{account.status}</Badge>
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
                          {account.hasChildren && <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}

              {/* Expenses */}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCategory("5000")}>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCategories["5000"] ? "rotate-180" : ""}`}
                    />
                  </Button>
                </TableCell>
                <TableCell colSpan={2}>Expenses</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Expense accounts</TableCell>
                <TableCell>$691,356.90</TableCell>
                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              {expandedCategories["5000"] &&
                [
                  {
                    code: "5000",
                    name: "Cost of Goods Sold",
                    type: "Expense",
                    description: "Direct costs of products sold",
                    balance: "$456,789.01",
                    status: "Active",
                    hasChildren: false,
                  },
                  {
                    code: "6000",
                    name: "Operating Expenses",
                    type: "Expense",
                    description: "Day-to-day business expenses",
                    balance: "$234,567.89",
                    status: "Active",
                    hasChildren: true,
                  },
                  {
                    code: "6001",
                    name: "Salaries and Wages",
                    type: "Expense",
                    description: "Employee compensation",
                    balance: "$150,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "6002",
                    name: "Rent",
                    type: "Expense",
                    description: "Office and facility rent",
                    balance: "$36,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "6003",
                    name: "Utilities",
                    type: "Expense",
                    description: "Electricity, water, etc.",
                    balance: "$12,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "6004",
                    name: "Office Supplies",
                    type: "Expense",
                    description: "Office consumables",
                    balance: "$5,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "6005",
                    name: "Marketing",
                    type: "Expense",
                    description: "Advertising and promotion",
                    balance: "$25,000.00",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                  {
                    code: "6006",
                    name: "Insurance",
                    type: "Expense",
                    description: "Business insurance premiums",
                    balance: "$6,567.89",
                    status: "Active",
                    hasChildren: false,
                    isChild: true,
                  },
                ].map((account, index) => (
                  <TableRow key={account.code} className={account.isChild ? "bg-muted/30" : ""}>
                    <TableCell>
                      {account.hasChildren && (
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{account.code}</TableCell>
                    <TableCell className={account.isChild ? "pl-8" : ""}>{account.name}</TableCell>
                    <TableCell>{account.type}</TableCell>
                    <TableCell>{account.description}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell>
                      <Badge variant={account.status === "Active" ? "default" : "secondary"}>{account.status}</Badge>
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
                          {account.hasChildren && <DropdownMenuItem>Add Sub-Account</DropdownMenuItem>}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Account Dialog */}
      <Dialog open={showAddAccountDialog} onOpenChange={setShowAddAccountDialog}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Account</DialogTitle>
            <DialogDescription>Create a new account in your chart of accounts.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-code">Account Code</Label>
                <Input id="account-code" placeholder="Enter account code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-name">Account Name</Label>
                <Input id="account-name" placeholder="Enter account name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-type">Account Type</Label>
                <Select>
                  <SelectTrigger id="account-type">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asset">Asset</SelectItem>
                    <SelectItem value="liability">Liability</SelectItem>
                    <SelectItem value="equity">Equity</SelectItem>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parent-account">Parent Account (Optional)</Label>
                <Select>
                  <SelectTrigger id="parent-account">
                    <SelectValue placeholder="Select parent account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None (Top Level)</SelectItem>
                    <SelectItem value="1000">1000 - Cash</SelectItem>
                    <SelectItem value="1100">1100 - Accounts Receivable</SelectItem>
                    <SelectItem value="1200">1200 - Inventory</SelectItem>
                    <SelectItem value="1400">1400 - Fixed Assets</SelectItem>
                    <SelectItem value="6000">6000 - Operating Expenses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter account description" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-status">Status</Label>
                <Select defaultValue="active">
                  <SelectTrigger id="account-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="opening-balance">Opening Balance</Label>
                <Input id="opening-balance" type="number" placeholder="0.00" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddAccountDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAccount}>Add Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
