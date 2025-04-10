"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Download,
  Plus,
  Check,
  X,
  MoreHorizontal,
  Calendar,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function BankReconciliationPage() {
  const { toast } = useToast()
  const [showStartReconciliationDialog, setShowStartReconciliationDialog] = useState(false)
  const [showFinishReconciliationDialog, setShowFinishReconciliationDialog] = useState(false)
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([])

  const handleStartReconciliation = () => {
    setShowStartReconciliationDialog(false)
    toast({
      title: "Reconciliation started",
      description: "You can now match transactions with your bank statement.",
    })
  }

  const handleFinishReconciliation = () => {
    setShowFinishReconciliationDialog(false)
    toast({
      title: "Reconciliation completed",
      description: "The bank account has been successfully reconciled.",
    })
  }

  const toggleTransaction = (id: string) => {
    setSelectedTransactions((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const isTransactionSelected = (id: string) => selectedTransactions.includes(id)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Bank Reconciliation" subtitle="Reconcile your bank accounts with your accounting records" />
        <div className="flex items-center space-x-2">
          <Button onClick={() => setShowStartReconciliationDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Start Reconciliation
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accounts Reconciled</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/4</div>
            <p className="text-xs text-muted-foreground">Last reconciled: Apr 5, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unreconciled Transactions</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Total value: $15,678.45</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Reconciliation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">In Progress</div>
            <p className="text-xs text-muted-foreground">Business Checking - Apr 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reconciliation Progress</CardTitle>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>65% Complete</span>
                <span>$8,765.43 of $13,456.78</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reconcile" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="reconcile">Current Reconciliation</TabsTrigger>
            <TabsTrigger value="history">Reconciliation History</TabsTrigger>
            <TabsTrigger value="accounts">Bank Accounts</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Current Reconciliation Tab */}
        <TabsContent value="reconcile" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="checking">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Business Checking</SelectItem>
                  <SelectItem value="savings">Business Savings</SelectItem>
                  <SelectItem value="credit">Business Credit Card</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="apr2025">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apr2025">April 2025</SelectItem>
                  <SelectItem value="mar2025">March 2025</SelectItem>
                  <SelectItem value="feb2025">February 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={() => setShowFinishReconciliationDialog(true)}>
                Finish Reconciliation
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Business Checking - April 2025</CardTitle>
                  <CardDescription>Reconcile transactions with your bank statement</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Statement Balance: $125,450.78</div>
                  <div className="text-sm text-muted-foreground">Difference: $1,234.56</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Deposits</TableHead>
                    <TableHead>Withdrawals</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "tx1",
                      date: "Apr 8, 2025",
                      description: "Customer payment - ABC Corp",
                      reference: "INV-1234",
                      deposit: "$5,000.00",
                      withdrawal: "",
                      status: "Unreconciled",
                    },
                    {
                      id: "tx2",
                      date: "Apr 7, 2025",
                      description: "Vendor payment - XYZ Supplies",
                      reference: "BILL-567",
                      deposit: "",
                      withdrawal: "$2,500.00",
                      status: "Reconciled",
                    },
                    {
                      id: "tx3",
                      date: "Apr 5, 2025",
                      description: "Monthly rent payment",
                      reference: "CHK-1089",
                      deposit: "",
                      withdrawal: "$3,000.00",
                      status: "Reconciled",
                    },
                    {
                      id: "tx4",
                      date: "Apr 4, 2025",
                      description: "Customer payment - DEF Inc",
                      reference: "INV-1233",
                      deposit: "$3,500.00",
                      withdrawal: "",
                      status: "Unreconciled",
                    },
                    {
                      id: "tx5",
                      date: "Apr 3, 2025",
                      description: "Utility payment - Electric",
                      reference: "CHK-1088",
                      deposit: "",
                      withdrawal: "$450.00",
                      status: "Reconciled",
                    },
                    {
                      id: "tx6",
                      date: "Apr 3, 2025",
                      description: "Utility payment - Water",
                      reference: "CHK-1087",
                      deposit: "",
                      withdrawal: "$125.00",
                      status: "Unreconciled",
                    },
                    {
                      id: "tx7",
                      date: "Apr 2, 2025",
                      description: "Customer payment - GHI Ltd",
                      reference: "INV-1232",
                      deposit: "$2,750.00",
                      withdrawal: "",
                      status: "Reconciled",
                    },
                    {
                      id: "tx8",
                      date: "Apr 1, 2025",
                      description: "Insurance premium",
                      reference: "ACH-4567",
                      deposit: "",
                      withdrawal: "$750.00",
                      status: "Unreconciled",
                    },
                    {
                      id: "tx9",
                      date: "Apr 1, 2025",
                      description: "Bank fee",
                      reference: "FEE-123",
                      deposit: "",
                      withdrawal: "$35.00",
                      status: "Unreconciled",
                    },
                    {
                      id: "tx10",
                      date: "Apr 1, 2025",
                      description: "Interest income",
                      reference: "INT-456",
                      deposit: "$12.45",
                      withdrawal: "",
                      status: "Reconciled",
                    },
                  ].map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <Checkbox
                          checked={isTransactionSelected(transaction.id) || transaction.status === "Reconciled"}
                          onCheckedChange={() => toggleTransaction(transaction.id)}
                          disabled={transaction.status === "Reconciled"}
                        />
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.reference}</TableCell>
                      <TableCell>{transaction.deposit}</TableCell>
                      <TableCell>{transaction.withdrawal}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.status === "Reconciled" ? "default" : "secondary"}>
                          {transaction.status}
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
                            <DropdownMenuItem>View Transaction</DropdownMenuItem>
                            <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {transaction.status === "Reconciled" ? (
                              <DropdownMenuItem>Unreconcile</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>Mark as Reconciled</DropdownMenuItem>
                            )}
                            <DropdownMenuItem>Create Adjustment</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <div>
              <Button variant="outline" className="mr-2">
                <Check className="mr-2 h-4 w-4" />
                Mark Selected as Reconciled
              </Button>
              <Button variant="outline">
                <X className="mr-2 h-4 w-4" />
                Clear Selection
              </Button>
            </div>
            <div className="text-sm">
              <span className="font-medium">Selected: </span>
              <span>{selectedTransactions.length} transactions</span>
            </div>
          </div>
        </TabsContent>

        {/* Reconciliation History Tab */}
        <TabsContent value="history" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="checking">Business Checking</SelectItem>
                  <SelectItem value="savings">Business Savings</SelectItem>
                  <SelectItem value="credit">Business Credit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Reconciliation Date</TableHead>
                    <TableHead>Statement Balance</TableHead>
                    <TableHead>Reconciled Balance</TableHead>
                    <TableHead>Difference</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      account: "Business Checking",
                      period: "March 2025",
                      date: "Apr 5, 2025",
                      statementBalance: "$120,345.67",
                      reconciledBalance: "$120,345.67",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Savings",
                      period: "March 2025",
                      date: "Apr 4, 2025",
                      statementBalance: "$50,123.45",
                      reconciledBalance: "$50,123.45",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Credit Card",
                      period: "March 2025",
                      date: "Apr 3, 2025",
                      statementBalance: "$2,345.67",
                      reconciledBalance: "$2,345.67",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Checking",
                      period: "February 2025",
                      date: "Mar 5, 2025",
                      statementBalance: "$115,678.90",
                      reconciledBalance: "$115,678.90",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Savings",
                      period: "February 2025",
                      date: "Mar 4, 2025",
                      statementBalance: "$45,678.90",
                      reconciledBalance: "$45,678.90",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Credit Card",
                      period: "February 2025",
                      date: "Mar 3, 2025",
                      statementBalance: "$3,456.78",
                      reconciledBalance: "$3,456.78",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Checking",
                      period: "January 2025",
                      date: "Feb 5, 2025",
                      statementBalance: "$110,987.65",
                      reconciledBalance: "$110,987.65",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Savings",
                      period: "January 2025",
                      date: "Feb 4, 2025",
                      statementBalance: "$40,567.89",
                      reconciledBalance: "$40,567.89",
                      difference: "$0.00",
                      status: "Completed",
                    },
                    {
                      account: "Business Credit Card",
                      period: "January 2025",
                      date: "Feb 3, 2025",
                      statementBalance: "$4,567.89",
                      reconciledBalance: "$4,567.89",
                      difference: "$0.00",
                      status: "Completed",
                    },
                  ].map((reconciliation, i) => (
                    <TableRow key={i}>
                      <TableCell>{reconciliation.account}</TableCell>
                      <TableCell>{reconciliation.period}</TableCell>
                      <TableCell>{reconciliation.date}</TableCell>
                      <TableCell>{reconciliation.statementBalance}</TableCell>
                      <TableCell>{reconciliation.reconciledBalance}</TableCell>
                      <TableCell>{reconciliation.difference}</TableCell>
                      <TableCell>
                        <Badge variant="default">{reconciliation.status}</Badge>
                      </TableCell>
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

        {/* Bank Accounts Tab */}
        <TabsContent value="accounts" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Bank Account
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Account Number</TableHead>
                    <TableHead>Bank</TableHead>
                    <TableHead>Current Balance</TableHead>
                    <TableHead>Last Reconciled</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Business Checking",
                      number: "****1234",
                      bank: "First National Bank",
                      balance: "$125,450.78",
                      lastReconciled: "Apr 5, 2025",
                      status: "Active",
                    },
                    {
                      name: "Business Savings",
                      number: "****5678",
                      bank: "First National Bank",
                      balance: "$50,123.45",
                      lastReconciled: "Apr 4, 2025",
                      status: "Active",
                    },
                    {
                      name: "Business Credit Card",
                      number: "****9012",
                      bank: "Metro Credit Union",
                      balance: "$2,345.67",
                      lastReconciled: "Apr 3, 2025",
                      status: "Active",
                    },
                    {
                      name: "Tax Reserve",
                      number: "****3456",
                      bank: "First National Bank",
                      balance: "$15,000.00",
                      lastReconciled: "Never",
                      status: "Inactive",
                    },
                  ].map((account, i) => (
                    <TableRow key={i}>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.number}</TableCell>
                      <TableCell>{account.bank}</TableCell>
                      <TableCell>{account.balance}</TableCell>
                      <TableCell>{account.lastReconciled}</TableCell>
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
                            <DropdownMenuItem>View Account</DropdownMenuItem>
                            <DropdownMenuItem>Edit Account</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Start Reconciliation</DropdownMenuItem>
                            <DropdownMenuItem>View Transactions</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {account.status === "Active" ? (
                              <DropdownMenuItem>Deactivate</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>Activate</DropdownMenuItem>
                            )}
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
      </Tabs>

      {/* Start Reconciliation Dialog */}
      <Dialog open={showStartReconciliationDialog} onOpenChange={setShowStartReconciliationDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Start Bank Reconciliation</DialogTitle>
            <DialogDescription>Enter the statement details to begin reconciliation.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account">Bank Account</Label>
                <Select defaultValue="checking">
                  <SelectTrigger id="account">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Business Checking</SelectItem>
                    <SelectItem value="savings">Business Savings</SelectItem>
                    <SelectItem value="credit">Business Credit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="statement-date">Statement Date</Label>
                <Input id="statement-date" type="date" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="statement-balance">Statement Ending Balance</Label>
                <Input id="statement-balance" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="statement-period">Statement Period</Label>
                <Select defaultValue="apr2025">
                  <SelectTrigger id="statement-period">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apr2025">April 2025</SelectItem>
                    <SelectItem value="mar2025">March 2025</SelectItem>
                    <SelectItem value="feb2025">February 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowStartReconciliationDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleStartReconciliation}>Start Reconciliation</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Finish Reconciliation Dialog */}
      <Dialog open={showFinishReconciliationDialog} onOpenChange={setShowFinishReconciliationDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Finish Bank Reconciliation</DialogTitle>
            <DialogDescription>Review and complete the reconciliation process.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Reconciliation Summary</h3>
              <div className="rounded-md border p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Statement Balance:</span>
                  <span className="text-sm font-medium">$125,450.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Reconciled Balance:</span>
                  <span className="text-sm font-medium">$124,216.22</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-orange-500">
                  <span className="text-sm font-medium">Difference:</span>
                  <span className="text-sm font-medium">$1,234.56</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Reconciliation Options</h3>
              <div className="rounded-md border p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="create-adjustment" />
                  <Label htmlFor="create-adjustment" className="text-sm">
                    Create adjustment entry for the difference
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mark-reconciled" defaultChecked />
                  <Label htmlFor="mark-reconciled" className="text-sm">
                    Mark all selected transactions as reconciled
                  </Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reconciliation-notes">Notes</Label>
              <Input id="reconciliation-notes" placeholder="Enter any notes about this reconciliation" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowFinishReconciliationDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleFinishReconciliation}>Complete Reconciliation</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
