import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Plus, Search } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Contacts</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Contact
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Contacts</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="vendors">Vendors</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-8" />
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
              <CardTitle>All Contacts</CardTitle>
              <CardDescription>Manage your customers, vendors, and employees</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Acme Corp",
                      type: "Customer",
                      email: "info@acmecorp.com",
                      phone: "(555) 123-4567",
                      balance: "$3,450.00",
                    },
                    {
                      name: "Globex Industries",
                      type: "Customer",
                      email: "sales@globex.com",
                      phone: "(555) 234-5678",
                      balance: "$1,200.00",
                    },
                    {
                      name: "Wayne Enterprises",
                      type: "Customer",
                      email: "info@wayne.com",
                      phone: "(555) 345-6789",
                      balance: "$0.00",
                    },
                    {
                      name: "Stark Industries",
                      type: "Customer",
                      email: "sales@stark.com",
                      phone: "(555) 456-7890",
                      balance: "$5,670.00",
                    },
                    {
                      name: "Office Supplies Co",
                      type: "Vendor",
                      email: "orders@officesupplies.com",
                      phone: "(555) 567-8901",
                      balance: "$0.00",
                    },
                    {
                      name: "Web Hosting Inc",
                      type: "Vendor",
                      email: "support@webhosting.com",
                      phone: "(555) 678-9012",
                      balance: "$89.99",
                    },
                    {
                      name: "Marketing Agency",
                      type: "Vendor",
                      email: "hello@marketingagency.com",
                      phone: "(555) 789-0123",
                      balance: "$1,200.00",
                    },
                    {
                      name: "John Smith",
                      type: "Employee",
                      email: "john.smith@company.com",
                      phone: "(555) 890-1234",
                      balance: "$0.00",
                    },
                    {
                      name: "Jane Doe",
                      type: "Employee",
                      email: "jane.doe@company.com",
                      phone: "(555) 901-2345",
                      balance: "$0.00",
                    },
                  ].map((contact, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            contact.type === "Customer"
                              ? "bg-green-100 text-green-800"
                              : contact.type === "Vendor"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {contact.type}
                        </span>
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>{contact.balance}</TableCell>
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
