import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, Download, Filter, Plus, Search } from "lucide-react"

export default function BankingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Banking</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Account
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Business Checking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,567.89</div>
            <p className="text-xs text-muted-foreground">Account ending in 1234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Business Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50,123.45</div>
            <p className="text-xs text-muted-foreground">Account ending in 5678</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tax Reserve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,000.00</div>
            <p className="text-xs text-muted-foreground">Account ending in 9012</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Card</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">-$2,345.67</div>
            <p className="text-xs text-muted-foreground">Account ending in 3456</p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="transactions" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
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
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Showing transactions from all accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      date: "Apr 8, 2025",
                      description: "Invoice Payment - Client A",
                      account: "Business Checking",
                      category: "Income:Sales",
                      amount: 1250.0,
                      type: "credit",
                      balance: 24567.89,
                    },
                    {
                      date: "Apr 7, 2025",
                      description: "Office Supplies",
                      account: "Credit Card",
                      category: "Expenses:Office",
                      amount: 85.99,
                      type: "debit",
                      balance: 2345.67,
                    },
                    {
                      date: "Apr 6, 2025",
                      description: "Software Subscription",
                      account: "Credit Card",
                      category: "Expenses:Software",
                      amount: 49.99,
                      type: "debit",
                      balance: 2259.68,
                    },
                    {
                      date: "Apr 5, 2025",
                      description: "Invoice Payment - Client B",
                      account: "Business Checking",
                      category: "Income:Sales",
                      amount: 3200.0,
                      type: "credit",
                      balance: 23317.89,
                    },
                    {
                      date: "Apr 4, 2025",
                      description: "Utility Bill",
                      account: "Business Checking",
                      category: "Expenses:Utilities",
                      amount: 175.5,
                      type: "debit",
                      balance: 20117.89,
                    },
                    {
                      date: "Apr 3, 2025",
                      description: "Transfer to Savings",
                      account: "Business Checking",
                      category: "Transfer",
                      amount: 1000.0,
                      type: "debit",
                      balance: 20293.39,
                    },
                    {
                      date: "Apr 3, 2025",
                      description: "Transfer from Checking",
                      account: "Business Savings",
                      category: "Transfer",
                      amount: 1000.0,
                      type: "credit",
                      balance: 50123.45,
                    },
                    {
                      date: "Apr 2, 2025",
                      description: "Web Hosting",
                      account: "Credit Card",
                      category: "Expenses:Hosting",
                      amount: 29.99,
                      type: "debit",
                      balance: 2209.69,
                    },
                  ].map((transaction, i) => (
                    <TableRow key={i}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {transaction.type === "credit" ? (
                            <ArrowDown className="mr-1 h-4 w-4 text-green-600" />
                          ) : (
                            <ArrowUp className="mr-1 h-4 w-4 text-red-600" />
                          )}
                          <span className={transaction.type === "credit" ? "text-green-600" : "text-red-600"}>
                            ${transaction.amount.toFixed(2)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>${transaction.balance.toFixed(2)}</TableCell>
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
      </Tabs>
    </div>
  )
}
