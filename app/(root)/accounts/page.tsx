import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Plus, Search } from "lucide-react"

export default function AccountsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Chart of Accounts</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Account
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Accounts</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="liabilities">Liabilities</TabsTrigger>
            <TabsTrigger value="equity">Equity</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search accounts..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Chart of Accounts</CardTitle>
              <CardDescription>Manage your accounting structure</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account Code</TableHead>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      code: "1000",
                      name: "Business Checking",
                      type: "Bank",
                      category: "Assets",
                      balance: "$24,567.89",
                    },
                    { code: "1010", name: "Business Savings", type: "Bank", category: "Assets", balance: "$50,123.45" },
                    {
                      code: "1020",
                      name: "Accounts Receivable",
                      type: "Current Asset",
                      category: "Assets",
                      balance: "$15,678.90",
                    },
                    {
                      code: "1030",
                      name: "Inventory",
                      type: "Current Asset",
                      category: "Assets",
                      balance: "$8,765.43",
                    },
                    {
                      code: "1100",
                      name: "Cryptocurrency Assets",
                      type: "Current Asset",
                      category: "Assets",
                      balance: "$12,875.32",
                    },
                    {
                      code: "2000",
                      name: "Accounts Payable",
                      type: "Current Liability",
                      category: "Liabilities",
                      balance: "$5,432.10",
                    },
                    {
                      code: "2010",
                      name: "Credit Card",
                      type: "Current Liability",
                      category: "Liabilities",
                      balance: "$2,345.67",
                    },
                    {
                      code: "2020",
                      name: "Loans Payable",
                      type: "Long Term Liability",
                      category: "Liabilities",
                      balance: "$75,000.00",
                    },
                    { code: "3000", name: "Owner's Equity", type: "Equity", category: "Equity", balance: "$28,232.32" },
                    {
                      code: "4000",
                      name: "Sales Revenue",
                      type: "Revenue",
                      category: "Income",
                      balance: "$125,678.90",
                    },
                    {
                      code: "4010",
                      name: "Consulting Revenue",
                      type: "Revenue",
                      category: "Income",
                      balance: "$45,678.90",
                    },
                    {
                      code: "5000",
                      name: "Cost of Goods Sold",
                      type: "Cost of Sales",
                      category: "Expenses",
                      balance: "$35,678.90",
                    },
                    { code: "6000", name: "Advertising", type: "Expense", category: "Expenses", balance: "$4,567.89" },
                    { code: "6010", name: "Bank Fees", type: "Expense", category: "Expenses", balance: "$234.56" },
                    {
                      code: "6020",
                      name: "Office Supplies",
                      type: "Expense",
                      category: "Expenses",
                      balance: "$1,234.56",
                    },
                    { code: "6030", name: "Rent", type: "Expense", category: "Expenses", balance: "$12,000.00" },
                  ].map((account) => (
                    <TableRow key={account.code}>
                      <TableCell className="font-medium">{account.code}</TableCell>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.type}</TableCell>
                      <TableCell>{account.category}</TableCell>
                      <TableCell>{account.balance}</TableCell>
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
