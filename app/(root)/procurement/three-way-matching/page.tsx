import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Search, CheckCircle, AlertCircle, XCircle, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function ThreeWayMatchingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Three-Way Matching</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="matched">Matched</TabsTrigger>
            <TabsTrigger value="exceptions">Exceptions</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Document Matching Status</CardTitle>
              <CardDescription>Verify purchase orders against invoices and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">248</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Matched</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-green-600">186</div>
                    <Progress value={75} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-1">75% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Exceptions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-red-600">32</div>
                    <Progress value={13} className="h-2 mt-2 bg-red-100" indicatorClassName="bg-red-600" />
                    <p className="text-xs text-muted-foreground mt-1">13% of total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-yellow-600">30</div>
                    <Progress value={12} className="h-2 mt-2 bg-yellow-100" indicatorClassName="bg-yellow-600" />
                    <p className="text-xs text-muted-foreground mt-1">12% of total</p>
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
                      <TableHead>Vendor</TableHead>
                      <TableHead>PO Amount</TableHead>
                      <TableHead>Invoice Number</TableHead>
                      <TableHead>Invoice Amount</TableHead>
                      <TableHead>Receipt Status</TableHead>
                      <TableHead>Matching Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "PO-2025-001",
                        vendor: "Office Supplies Co",
                        poAmount: "$2,450.00",
                        invoiceNumber: "INV-5678",
                        invoiceAmount: "$2,450.00",
                        receiptStatus: "Complete",
                        matchingStatus: "Matched",
                      },
                      {
                        id: "PO-2025-002",
                        vendor: "Tech Solutions Inc",
                        poAmount: "$5,899.99",
                        invoiceNumber: "INV-9012",
                        invoiceAmount: "$5,899.99",
                        receiptStatus: "Partial",
                        matchingStatus: "Exception",
                      },
                      {
                        id: "PO-2025-003",
                        vendor: "Modern Furniture Ltd",
                        poAmount: "$3,200.00",
                        invoiceNumber: "INV-3456",
                        invoiceAmount: "$3,250.00",
                        receiptStatus: "Complete",
                        matchingStatus: "Exception",
                      },
                      {
                        id: "PO-2025-004",
                        vendor: "Fast Shipping Services",
                        poAmount: "$175.50",
                        invoiceNumber: "INV-7890",
                        invoiceAmount: "$175.50",
                        receiptStatus: "Complete",
                        matchingStatus: "Matched",
                      },
                      {
                        id: "PO-2025-005",
                        vendor: "Office Supplies Co",
                        poAmount: "$899.00",
                        invoiceNumber: "INV-1234",
                        invoiceAmount: "$899.00",
                        receiptStatus: "Complete",
                        matchingStatus: "Matched",
                      },
                      {
                        id: "PO-2025-006",
                        vendor: "Tech Solutions Inc",
                        poAmount: "$12,000.00",
                        invoiceNumber: "Pending",
                        invoiceAmount: "Pending",
                        receiptStatus: "Not Received",
                        matchingStatus: "Pending",
                      },
                      {
                        id: "PO-2025-007",
                        vendor: "Modern Furniture Ltd",
                        poAmount: "$560.00",
                        invoiceNumber: "INV-5678",
                        invoiceAmount: "$560.00",
                        receiptStatus: "Partial",
                        matchingStatus: "Exception",
                      },
                      {
                        id: "PO-2025-008",
                        vendor: "Fast Shipping Services",
                        poAmount: "$150.00",
                        invoiceNumber: "Pending",
                        invoiceAmount: "Pending",
                        receiptStatus: "Complete",
                        matchingStatus: "Pending",
                      },
                    ].map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.id}</TableCell>
                        <TableCell>{doc.vendor}</TableCell>
                        <TableCell>{doc.poAmount}</TableCell>
                        <TableCell>{doc.invoiceNumber}</TableCell>
                        <TableCell>{doc.invoiceAmount}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              doc.receiptStatus === "Complete"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : doc.receiptStatus === "Partial"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                            variant="outline"
                          >
                            {doc.receiptStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              doc.matchingStatus === "Matched"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : doc.matchingStatus === "Exception"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                            variant="outline"
                          >
                            {doc.matchingStatus === "Matched" && <CheckCircle className="mr-1 h-3 w-3" />}
                            {doc.matchingStatus === "Exception" && <AlertCircle className="mr-1 h-3 w-3" />}
                            {doc.matchingStatus === "Pending" && <XCircle className="mr-1 h-3 w-3" />}
                            {doc.matchingStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Details
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
