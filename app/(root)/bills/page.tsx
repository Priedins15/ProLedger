import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Plus, Search } from "lucide-react"

export default function BillsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Bills</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Bill
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Bills</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="awaiting">Awaiting Payment</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
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
              <CardTitle>All Bills</CardTitle>
              <CardDescription>Showing all bills for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bill #</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "BILL-001",
                      date: "Apr 1, 2025",
                      vendor: "Office Supplies Co",
                      amount: "$450.00",
                      status: "Paid",
                      dueDate: "Apr 15, 2025",
                    },
                    {
                      id: "BILL-002",
                      date: "Apr 2, 2025",
                      vendor: "Web Hosting Inc",
                      amount: "$89.99",
                      status: "Awaiting Payment",
                      dueDate: "Apr 16, 2025",
                    },
                    {
                      id: "BILL-003",
                      date: "Apr 3, 2025",
                      vendor: "Marketing Agency",
                      amount: "$1,200.00",
                      status: "Draft",
                      dueDate: "Apr 17, 2025",
                    },
                    {
                      id: "BILL-004",
                      date: "Apr 4, 2025",
                      vendor: "Utility Company",
                      amount: "$175.50",
                      status: "Overdue",
                      dueDate: "Apr 4, 2025",
                    },
                    {
                      id: "BILL-005",
                      date: "Apr 5, 2025",
                      vendor: "Software Solutions",
                      amount: "$299.00",
                      status: "Paid",
                      dueDate: "Apr 19, 2025",
                    },
                    {
                      id: "BILL-006",
                      date: "Apr 6, 2025",
                      vendor: "Office Rent",
                      amount: "$2,000.00",
                      status: "Awaiting Payment",
                      dueDate: "Apr 20, 2025",
                    },
                    {
                      id: "BILL-007",
                      date: "Apr 7, 2025",
                      vendor: "Insurance Provider",
                      amount: "$560.00",
                      status: "Draft",
                      dueDate: "Apr 21, 2025",
                    },
                    {
                      id: "BILL-008",
                      date: "Apr 8, 2025",
                      vendor: "Cleaning Service",
                      amount: "$150.00",
                      status: "Awaiting Payment",
                      dueDate: "Apr 22, 2025",
                    },
                  ].map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-medium">{bill.id}</TableCell>
                      <TableCell>{bill.date}</TableCell>
                      <TableCell>{bill.vendor}</TableCell>
                      <TableCell>{bill.amount}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            bill.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : bill.status === "Awaiting Payment"
                                ? "bg-yellow-100 text-yellow-800"
                                : bill.status === "Draft"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-red-100 text-red-800"
                          }`}
                        >
                          {bill.status}
                        </span>
                      </TableCell>
                      <TableCell>{bill.dueDate}</TableCell>
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
