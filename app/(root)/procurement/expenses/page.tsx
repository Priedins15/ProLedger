import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Filter,
  Plus,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  MoreHorizontal,
  Receipt,
  CreditCard,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ExpensesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Expense Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="all">All Expenses</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="reimbursed">Reimbursed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search expenses..." className="pl-8" />
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
              <CardTitle>All Expenses</CardTitle>
              <CardDescription>Manage employee and business expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Total Expenses (MTD)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">$24,875.50</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-yellow-600">$5,280.25</div>
                    <p className="text-xs text-muted-foreground">12 expenses</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Reimbursement</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-blue-600">$3,450.00</div>
                    <p className="text-xs text-muted-foreground">8 expenses</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Reimbursed (MTD)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-green-600">$16,145.25</div>
                    <p className="text-xs text-muted-foreground">32 expenses</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by employee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Employees</SelectItem>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Brown</SelectItem>
                      <SelectItem value="emily">Emily Davis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="meals">Meals & Entertainment</SelectItem>
                      <SelectItem value="office">Office Supplies</SelectItem>
                      <SelectItem value="software">Software & Subscriptions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Expense ID</TableHead>
                      <TableHead>Employee</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Receipt</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "EXP-001",
                        employee: {
                          name: "John Smith",
                          avatar: "JS",
                        },
                        date: "Apr 1, 2025",
                        category: "Travel",
                        amount: "$450.00",
                        status: "Reimbursed",
                        receipt: true,
                      },
                      {
                        id: "EXP-002",
                        employee: {
                          name: "Sarah Johnson",
                          avatar: "SJ",
                        },
                        date: "Apr 2, 2025",
                        category: "Meals & Entertainment",
                        amount: "$89.99",
                        status: "Pending Approval",
                        receipt: true,
                      },
                      {
                        id: "EXP-003",
                        employee: {
                          name: "Michael Brown",
                          avatar: "MB",
                        },
                        date: "Apr 3, 2025",
                        category: "Office Supplies",
                        amount: "$120.00",
                        status: "Approved",
                        receipt: true,
                      },
                      {
                        id: "EXP-004",
                        employee: {
                          name: "Emily Davis",
                          avatar: "ED",
                        },
                        date: "Apr 4, 2025",
                        category: "Software & Subscriptions",
                        amount: "$175.50",
                        status: "Rejected",
                        receipt: false,
                      },
                      {
                        id: "EXP-005",
                        employee: {
                          name: "John Smith",
                          avatar: "JS",
                        },
                        date: "Apr 5, 2025",
                        category: "Travel",
                        amount: "$899.00",
                        status: "Reimbursed",
                        receipt: true,
                      },
                      {
                        id: "EXP-006",
                        employee: {
                          name: "Sarah Johnson",
                          avatar: "SJ",
                        },
                        date: "Apr 6, 2025",
                        category: "Meals & Entertainment",
                        amount: "$120.00",
                        status: "Pending Approval",
                        receipt: true,
                      },
                      {
                        id: "EXP-007",
                        employee: {
                          name: "Michael Brown",
                          avatar: "MB",
                        },
                        date: "Apr 7, 2025",
                        category: "Office Supplies",
                        amount: "$56.00",
                        status: "Approved",
                        receipt: true,
                      },
                      {
                        id: "EXP-008",
                        employee: {
                          name: "Emily Davis",
                          avatar: "ED",
                        },
                        date: "Apr 8, 2025",
                        category: "Other",
                        amount: "$150.00",
                        status: "Pending Approval",
                        receipt: true,
                      },
                    ].map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell className="font-medium">{expense.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>{expense.employee.avatar}</AvatarFallback>
                            </Avatar>
                            {expense.employee.name}
                          </div>
                        </TableCell>
                        <TableCell>{expense.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{expense.category}</Badge>
                        </TableCell>
                        <TableCell>{expense.amount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              expense.status === "Reimbursed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : expense.status === "Approved"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : expense.status === "Pending Approval"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                            variant="outline"
                          >
                            {expense.status === "Reimbursed" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {expense.status === "Approved" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {expense.status === "Pending Approval" && <Clock className="mr-1 h-3 w-3" />}
                            {expense.status === "Rejected" && <AlertCircle className="mr-1 h-3 w-3" />}
                            {expense.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {expense.receipt ? (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Receipt className="h-4 w-4" />
                            </Button>
                          ) : (
                            <span className="text-muted-foreground text-sm">Missing</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              {expense.status === "Pending Approval" && (
                                <>
                                  <DropdownMenuItem>Approve</DropdownMenuItem>
                                  <DropdownMenuItem>Reject</DropdownMenuItem>
                                </>
                              )}
                              {expense.status === "Approved" && (
                                <DropdownMenuItem>
                                  <CreditCard className="mr-2 h-4 w-4" />
                                  Process Reimbursement
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
