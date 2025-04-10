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
  CreditCard,
  BanknoteIcon,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VendorPaymentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Vendor Payments</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <CreditCard className="mr-2 h-4 w-4" />
            Schedule Payment
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Payment Batch
          </Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="batches">Payment Batches</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search payments..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Bills due for payment in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Due This Week</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">$18,549.99</div>
                    <p className="text-xs text-muted-foreground">8 bills due</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Due Next Week</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">$24,350.00</div>
                    <p className="text-xs text-muted-foreground">12 bills due</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Due in 15-30 Days</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">$32,780.50</div>
                    <p className="text-xs text-muted-foreground">15 bills due</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-red-600">$5,125.75</div>
                    <p className="text-xs text-muted-foreground">3 bills overdue</p>
                  </CardContent>
                </Card>
              </div>

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
                      <SelectValue placeholder="Payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Methods</SelectItem>
                      <SelectItem value="ach">ACH</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="wire">Wire Transfer</SelectItem>
                      <SelectItem value="card">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="due-date">Due Date (Earliest First)</SelectItem>
                      <SelectItem value="due-date-desc">Due Date (Latest First)</SelectItem>
                      <SelectItem value="amount-high">Amount (High to Low)</SelectItem>
                      <SelectItem value="amount-low">Amount (Low to High)</SelectItem>
                      <SelectItem value="vendor-az">Vendor (A-Z)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Bill #</span>
                        </div>
                      </TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BILL-001",
                        vendor: "Office Supplies Co",
                        dueDate: "Apr 10, 2025",
                        amount: "$2,450.00",
                        status: "Due Soon",
                        paymentMethod: "ACH",
                      },
                      {
                        id: "BILL-002",
                        vendor: "Tech Solutions Inc",
                        dueDate: "Apr 12, 2025",
                        amount: "$5,899.99",
                        status: "Due Soon",
                        paymentMethod: "Wire Transfer",
                      },
                      {
                        id: "BILL-003",
                        vendor: "Modern Furniture Ltd",
                        dueDate: "Apr 15, 2025",
                        amount: "$3,200.00",
                        status: "Scheduled",
                        paymentMethod: "Check",
                      },
                      {
                        id: "BILL-004",
                        vendor: "Fast Shipping Services",
                        dueDate: "Apr 5, 2025",
                        amount: "$175.50",
                        status: "Overdue",
                        paymentMethod: "ACH",
                      },
                      {
                        id: "BILL-005",
                        vendor: "Office Supplies Co",
                        dueDate: "Apr 18, 2025",
                        amount: "$899.00",
                        status: "Scheduled",
                        paymentMethod: "Credit Card",
                      },
                      {
                        id: "BILL-006",
                        vendor: "Tech Solutions Inc",
                        dueDate: "Apr 25, 2025",
                        amount: "$12,000.00",
                        status: "Due Soon",
                        paymentMethod: "Wire Transfer",
                      },
                      {
                        id: "BILL-007",
                        vendor: "Modern Furniture Ltd",
                        dueDate: "Apr 28, 2025",
                        amount: "$560.00",
                        status: "Due Soon",
                        paymentMethod: "ACH",
                      },
                      {
                        id: "BILL-008",
                        vendor: "Fast Shipping Services",
                        dueDate: "Apr 3, 2025",
                        amount: "$150.00",
                        status: "Overdue",
                        paymentMethod: "Check",
                      },
                    ].map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="font-medium">{payment.id}</span>
                          </div>
                        </TableCell>
                        <TableCell>{payment.vendor}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              payment.status === "Scheduled"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : payment.status === "Due Soon"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                            variant="outline"
                          >
                            {payment.status === "Scheduled" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {payment.status === "Due Soon" && <Clock className="mr-1 h-3 w-3" />}
                            {payment.status === "Overdue" && <AlertCircle className="mr-1 h-3 w-3" />}
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <BanknoteIcon className="mr-1 h-3 w-3" />
                            {payment.paymentMethod}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="mr-1 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Pay Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between items-center mt-4">
                <Button variant="outline">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Pay Selected
                </Button>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Batch
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="batches" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Payment Batches</CardTitle>
              <CardDescription>Manage and process payment batches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Batch #</TableHead>
                      <TableHead>Created Date</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Bills</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BATCH-001",
                        createdDate: "Apr 1, 2025",
                        paymentDate: "Apr 10, 2025",
                        bills: 5,
                        amount: "$8,725.50",
                        status: "Scheduled",
                        paymentMethod: "ACH",
                      },
                      {
                        id: "BATCH-002",
                        createdDate: "Apr 5, 2025",
                        paymentDate: "Apr 15, 2025",
                        bills: 8,
                        amount: "$15,350.00",
                        status: "Draft",
                        paymentMethod: "Wire Transfer",
                      },
                      {
                        id: "BATCH-003",
                        createdDate: "Mar 25, 2025",
                        paymentDate: "Apr 5, 2025",
                        bills: 12,
                        amount: "$24,780.25",
                        status: "Processing",
                        paymentMethod: "ACH",
                      },
                      {
                        id: "BATCH-004",
                        createdDate: "Mar 20, 2025",
                        paymentDate: "Apr 1, 2025",
                        bills: 7,
                        amount: "$12,450.00",
                        status: "Completed",
                        paymentMethod: "Check",
                      },
                    ].map((batch) => (
                      <TableRow key={batch.id}>
                        <TableCell className="font-medium">{batch.id}</TableCell>
                        <TableCell>{batch.createdDate}</TableCell>
                        <TableCell>{batch.paymentDate}</TableCell>
                        <TableCell>{batch.bills}</TableCell>
                        <TableCell>{batch.amount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              batch.status === "Completed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : batch.status === "Processing"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : batch.status === "Scheduled"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                            variant="outline"
                          >
                            {batch.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{batch.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          {batch.status !== "Completed" && batch.status !== "Processing" && (
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          )}
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
