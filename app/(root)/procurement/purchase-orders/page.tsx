import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Plus, Search, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PurchaseOrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Purchase Orders</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Purchase Order
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="all">All POs</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="received">Received</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search purchase orders..." className="pl-8" />
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
              <CardTitle>All Purchase Orders</CardTitle>
              <CardDescription>Manage and track all your purchase orders</CardDescription>
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
                      <SelectItem value="vendor-az">Vendor (A-Z)</SelectItem>
                      <SelectItem value="vendor-za">Vendor (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PO Number</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Expected Delivery</TableHead>
                      <TableHead>Matching Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "PO-2025-001",
                        date: "Apr 1, 2025",
                        vendor: "Office Supplies Co",
                        amount: "$2,450.00",
                        status: "Approved",
                        delivery: "Apr 15, 2025",
                        matching: "Complete",
                      },
                      {
                        id: "PO-2025-002",
                        date: "Apr 2, 2025",
                        vendor: "Tech Solutions Inc",
                        amount: "$5,899.99",
                        status: "Pending Approval",
                        delivery: "Apr 20, 2025",
                        matching: "Pending",
                      },
                      {
                        id: "PO-2025-003",
                        date: "Apr 3, 2025",
                        vendor: "Modern Furniture Ltd",
                        amount: "$3,200.00",
                        status: "Draft",
                        delivery: "Apr 25, 2025",
                        matching: "Not Started",
                      },
                      {
                        id: "PO-2025-004",
                        date: "Apr 4, 2025",
                        vendor: "Fast Shipping Services",
                        amount: "$175.50",
                        status: "Received",
                        delivery: "Apr 10, 2025",
                        matching: "Exception",
                      },
                      {
                        id: "PO-2025-005",
                        date: "Apr 5, 2025",
                        vendor: "Office Supplies Co",
                        amount: "$899.00",
                        status: "Closed",
                        delivery: "Apr 12, 2025",
                        matching: "Complete",
                      },
                      {
                        id: "PO-2025-006",
                        date: "Apr 6, 2025",
                        vendor: "Tech Solutions Inc",
                        amount: "$12,000.00",
                        status: "Approved",
                        delivery: "Apr 30, 2025",
                        matching: "Pending",
                      },
                      {
                        id: "PO-2025-007",
                        date: "Apr 7, 2025",
                        vendor: "Modern Furniture Ltd",
                        amount: "$560.00",
                        status: "Pending Approval",
                        delivery: "Apr 21, 2025",
                        matching: "Not Started",
                      },
                      {
                        id: "PO-2025-008",
                        date: "Apr 8, 2025",
                        vendor: "Fast Shipping Services",
                        amount: "$150.00",
                        status: "Draft",
                        delivery: "Apr 22, 2025",
                        matching: "Not Started",
                      },
                    ].map((po) => (
                      <TableRow key={po.id}>
                        <TableCell className="font-medium">{po.id}</TableCell>
                        <TableCell>{po.date}</TableCell>
                        <TableCell>{po.vendor}</TableCell>
                        <TableCell>{po.amount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              po.status === "Approved"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : po.status === "Pending Approval"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : po.status === "Draft"
                                    ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                    : po.status === "Received"
                                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                      : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                            }
                            variant="outline"
                          >
                            {po.status === "Approved" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {po.status === "Pending Approval" && <Clock className="mr-1 h-3 w-3" />}
                            {po.status === "Draft" && <FileText className="mr-1 h-3 w-3" />}
                            {po.status === "Received" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {po.status === "Closed" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {po.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{po.delivery}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              po.matching === "Complete"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : po.matching === "Pending"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : po.matching === "Not Started"
                                    ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                    : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                            variant="outline"
                          >
                            {po.matching === "Complete" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {po.matching === "Pending" && <Clock className="mr-1 h-3 w-3" />}
                            {po.matching === "Not Started" && <Clock className="mr-1 h-3 w-3" />}
                            {po.matching === "Exception" && <AlertCircle className="mr-1 h-3 w-3" />}
                            {po.matching}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
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
