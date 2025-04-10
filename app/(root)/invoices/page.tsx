import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Plus, Search } from "lucide-react"

export default function InvoicesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Invoices</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Invoices</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-8" />
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
              <CardTitle>All Invoices</CardTitle>
              <CardDescription>Showing all invoices from your business</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-001",
                      date: "Apr 1, 2025",
                      client: "Acme Corp",
                      amount: "$1,250.00",
                      status: "Paid",
                      dueDate: "Apr 15, 2025",
                    },
                    {
                      id: "INV-002",
                      date: "Apr 2, 2025",
                      client: "Globex Industries",
                      amount: "$3,450.00",
                      status: "Pending",
                      dueDate: "Apr 16, 2025",
                    },
                    {
                      id: "INV-003",
                      date: "Apr 3, 2025",
                      client: "Wayne Enterprises",
                      amount: "$2,780.00",
                      status: "Draft",
                      dueDate: "Apr 17, 2025",
                    },
                    {
                      id: "INV-004",
                      date: "Apr 4, 2025",
                      client: "Stark Industries",
                      amount: "$5,670.00",
                      status: "Overdue",
                      dueDate: "Apr 4, 2025",
                    },
                    {
                      id: "INV-005",
                      date: "Apr 5, 2025",
                      client: "Umbrella Corporation",
                      amount: "$1,890.00",
                      status: "Paid",
                      dueDate: "Apr 19, 2025",
                    },
                    {
                      id: "INV-006",
                      date: "Apr 6, 2025",
                      client: "Acme Corp",
                      amount: "$2,340.00",
                      status: "Pending",
                      dueDate: "Apr 20, 2025",
                    },
                    {
                      id: "INV-007",
                      date: "Apr 7, 2025",
                      client: "Globex Industries",
                      amount: "$4,560.00",
                      status: "Draft",
                      dueDate: "Apr 21, 2025",
                    },
                    {
                      id: "INV-008",
                      date: "Apr 8, 2025",
                      client: "Wayne Enterprises",
                      amount: "$3,210.00",
                      status: "Pending",
                      dueDate: "Apr 22, 2025",
                    },
                  ].map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            invoice.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : invoice.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : invoice.status === "Draft"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-red-100 text-red-800"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
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
