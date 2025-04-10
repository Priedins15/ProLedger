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
  FileText,
  AlertCircle,
  Eye,
  Edit,
  MoreHorizontal,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function VendorBillsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Vendor Bills</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Enter Bill
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="all">All Bills</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search bills..." className="pl-8" />
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
              <CardTitle>All Vendor Bills</CardTitle>
              <CardDescription>Manage and process bills from your vendors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vendors</SelectItem>
                      <SelectItem value="office-supplies">Office Supplies Co</SelectItem>
                      <SelectItem value="tech-solutions">Tech Solutions Inc</SelectItem>
                      <SelectItem value="furniture">Modern Furniture Ltd</SelectItem>
                      <SelectItem value="shipping">Fast Shipping Services</SelectItem>
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
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="amount-high">Amount (High to Low)</SelectItem>
                      <SelectItem value="amount-low">Amount (Low to High)</SelectItem>
                      <SelectItem value="due-date">Due Date</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Bill #</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>PO Reference</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BILL-001",
                        vendor: "Office Supplies Co",
                        date: "Apr 1, 2025",
                        dueDate: "Apr 15, 2025",
                        amount: "$2,450.00",
                        status: "Paid",
                        poRef: "PO-2025-001",
                      },
                      {
                        id: "BILL-002",
                        vendor: "Tech Solutions Inc",
                        date: "Apr 2, 2025",
                        dueDate: "Apr 16, 2025",
                        amount: "$5,899.99",
                        status: "Pending Approval",
                        poRef: "PO-2025-002",
                      },
                      {
                        id: "BILL-003",
                        vendor: "Modern Furniture Ltd",
                        date: "Apr 3, 2025",
                        dueDate: "Apr 17, 2025",
                        amount: "$3,200.00",
                        status: "Draft",
                        poRef: "PO-2025-003",
                      },
                      {
                        id: "BILL-004",
                        vendor: "Fast Shipping Services",
                        date: "Apr 4, 2025",
                        dueDate: "Apr 4, 2025",
                        amount: "$175.50",
                        status: "Overdue",
                        poRef: "PO-2025-004",
                      },
                      {
                        id: "BILL-005",
                        vendor: "Office Supplies Co",
                        date: "Apr 5, 2025",
                        dueDate: "Apr 19, 2025",
                        amount: "$899.00",
                        status: "Approved",
                        poRef: "PO-2025-005",
                      },
                      {
                        id: "BILL-006",
                        vendor: "Tech Solutions Inc",
                        date: "Apr 6, 2025",
                        dueDate: "Apr 20, 2025",
                        amount: "$12,000.00",
                        status: "Pending Approval",
                        poRef: "PO-2025-006",
                      },
                      {
                        id: "BILL-007",
                        vendor: "Modern Furniture Ltd",
                        date: "Apr 7, 2025",
                        dueDate: "Apr 21, 2025",
                        amount: "$560.00",
                        status: "Draft",
                        poRef: "PO-2025-007",
                      },
                      {
                        id: "BILL-008",
                        vendor: "Fast Shipping Services",
                        date: "Apr 8, 2025",
                        dueDate: "Apr 22, 2025",
                        amount: "$150.00",
                        status: "Approved",
                        poRef: "PO-2025-008",
                      },
                    ].map((bill) => (
                      <TableRow key={bill.id}>
                        <TableCell className="font-medium">{bill.id}</TableCell>
                        <TableCell>{bill.vendor}</TableCell>
                        <TableCell>{bill.date}</TableCell>
                        <TableCell>{bill.dueDate}</TableCell>
                        <TableCell>{bill.amount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              bill.status === "Paid"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : bill.status === "Approved"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : bill.status === "Pending Approval"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : bill.status === "Draft"
                                      ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                      : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                            variant="outline"
                          >
                            {bill.status === "Paid" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {bill.status === "Approved" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {bill.status === "Pending Approval" && <Clock className="mr-1 h-3 w-3" />}
                            {bill.status === "Draft" && <FileText className="mr-1 h-3 w-3" />}
                            {bill.status === "Overdue" && <AlertCircle className="mr-1 h-3 w-3" />}
                            {bill.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{bill.poRef}</TableCell>
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
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Bill
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {bill.status === "Draft" && <DropdownMenuItem>Submit for Approval</DropdownMenuItem>}
                              {bill.status === "Pending Approval" && <DropdownMenuItem>Approve</DropdownMenuItem>}
                              {(bill.status === "Approved" || bill.status === "Overdue") && (
                                <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
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
