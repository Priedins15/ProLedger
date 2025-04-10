"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Plus, Search, ArrowUpDown, MoreHorizontal } from "lucide-react"
import { DateRangePicker } from "@/components/date-range-picker"
import { PageTitle } from "@/components/page-title"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreateInvoiceModal } from "@/components/modals/create-invoice-modal"
import { useToast } from "@/components/ui/use-toast"

export default function InvoicesPage() {
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const { toast } = useToast()

  const handleAction = (action: string, invoiceId: string) => {
    switch (action) {
      case "view":
        // Navigate to invoice detail page
        window.location.href = `/invoices/${invoiceId}`
        break
      case "edit":
        // Open edit modal
        toast({
          title: "Edit Invoice",
          description: `Editing invoice ${invoiceId}`,
        })
        break
      case "download":
        // Download invoice
        toast({
          title: "Download Invoice",
          description: `Downloading invoice ${invoiceId} as PDF`,
        })
        break
      case "paid":
        // Mark as paid
        toast({
          title: "Invoice Updated",
          description: `Invoice ${invoiceId} marked as paid`,
        })
        break
      case "remind":
        // Send reminder
        toast({
          title: "Reminder Sent",
          description: `Reminder sent for invoice ${invoiceId}`,
        })
        break
      case "delete":
        // Delete invoice
        toast({
          title: "Invoice Deleted",
          description: `Invoice ${invoiceId} has been deleted`,
          variant: "destructive",
        })
        break
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Invoices" subtitle="Manage and track your customer invoices" />
        <div className="flex items-center gap-2">
          <Button onClick={() => setCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-5 md:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full md:w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search invoices..." className="pl-8" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <DateRangePicker className="hidden lg:block" />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Invoices</CardTitle>
          <CardDescription>Showing all invoices from your business</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <div className="flex items-center space-x-1">
                    <span>Invoice #</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <span>Amount</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Due Date</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
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
                  <TableCell className="text-right font-medium">{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        invoice.status === "Paid"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : invoice.status === "Draft"
                              ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleAction("view", invoice.id)}>
                          View invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("edit", invoice.id)}>
                          Edit invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("download", invoice.id)}>
                          Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleAction("paid", invoice.id)}>
                          Mark as paid
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("remind", invoice.id)}>
                          Send reminder
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => handleAction("delete", invoice.id)}>
                          Delete invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <CreateInvoiceModal open={createModalOpen} onOpenChange={setCreateModalOpen} />
    </div>
  )
}
