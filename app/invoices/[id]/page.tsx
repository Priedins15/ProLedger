"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PageTitle } from "@/components/page-title"
import { ArrowLeft, Download, Edit, Mail, MoreHorizontal, Printer } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [status, setStatus] = useState<"Draft" | "Pending" | "Paid" | "Overdue">("Pending")

  const handleAction = (action: string) => {
    switch (action) {
      case "edit":
        toast({
          title: "Edit Invoice",
          description: `Editing invoice ${params.id}`,
        })
        break
      case "download":
        toast({
          title: "Download Invoice",
          description: `Downloading invoice ${params.id} as PDF`,
        })
        break
      case "print":
        toast({
          title: "Print Invoice",
          description: `Printing invoice ${params.id}`,
        })
        break
      case "email":
        toast({
          title: "Email Invoice",
          description: `Sending invoice ${params.id} via email`,
        })
        break
      case "mark-paid":
        setStatus("Paid")
        toast({
          title: "Invoice Updated",
          description: `Invoice ${params.id} marked as paid`,
        })
        break
      case "mark-pending":
        setStatus("Pending")
        toast({
          title: "Invoice Updated",
          description: `Invoice ${params.id} marked as pending`,
        })
        break
      case "delete":
        toast({
          title: "Invoice Deleted",
          description: `Invoice ${params.id} has been deleted`,
          variant: "destructive",
        })
        break
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/invoices">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <PageTitle title={`Invoice ${params.id}`} subtitle="View and manage invoice details" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => handleAction("download")}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction("print")}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction("email")}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction("edit")}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {status !== "Paid" && (
                <DropdownMenuItem onClick={() => handleAction("mark-paid")}>Mark as paid</DropdownMenuItem>
              )}
              {status === "Paid" && (
                <DropdownMenuItem onClick={() => handleAction("mark-pending")}>Mark as pending</DropdownMenuItem>
              )}
              <DropdownMenuItem>Send reminder</DropdownMenuItem>
              <DropdownMenuItem>Add payment</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={() => handleAction("delete")}>
                Delete invoice
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Invoice {params.id}</CardTitle>
                <CardDescription>Issued on Apr 1, 2025</CardDescription>
              </div>
              <Badge
                className={
                  status === "Paid"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : status === "Pending"
                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      : status === "Draft"
                        ? "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                }
              >
                {status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">From</h3>
                <div className="text-sm">
                  <p className="font-medium">Acme Corporation</p>
                  <p>123 Business St.</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                  <p className="mt-1">accounting@acmecorp.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Bill To</h3>
                <div className="text-sm">
                  <p className="font-medium">Globex Industries</p>
                  <p>456 Corporate Ave.</p>
                  <p>San Francisco, CA 94107</p>
                  <p>United States</p>
                  <p className="mt-1">billing@globex.com</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Invoice Number</h3>
                <p className="text-sm">{params.id}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Issue Date</h3>
                <p className="text-sm">Apr 1, 2025</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Due Date</h3>
                <p className="text-sm">Apr 15, 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Items</h3>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead className="bg-muted/50 text-sm">
                    <tr>
                      <th className="text-left p-2">Description</th>
                      <th className="text-right p-2">Quantity</th>
                      <th className="text-right p-2">Price</th>
                      <th className="text-right p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t">
                      <td className="p-2">Professional Consulting Services</td>
                      <td className="text-right p-2">10</td>
                      <td className="text-right p-2">$100.00</td>
                      <td className="text-right p-2">$1,000.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Software License</td>
                      <td className="text-right p-2">1</td>
                      <td className="text-right p-2">$250.00</td>
                      <td className="text-right p-2">$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-1/3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>$1,250.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (0%):</span>
                  <span>$0.00</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>$1,250.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Amount Paid:</span>
                  <span>{status === "Paid" ? "$1,250.00" : "$0.00"}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Balance Due:</span>
                  <span>{status === "Paid" ? "$0.00" : "$1,250.00"}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Terms</h3>
                <p className="text-sm">Net 15</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Method</h3>
                <p className="text-sm">Bank Transfer</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Bank Account</h3>
                <p className="text-sm">Acme Corporation</p>
                <p className="text-sm">Account #: XXXX1234</p>
                <p className="text-sm">Routing #: XXXXX5678</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">Invoice Created</p>
                    <p className="text-muted-foreground">By John Doe</p>
                  </div>
                  <p className="text-muted-foreground">Apr 1, 2025</p>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">Invoice Sent</p>
                    <p className="text-muted-foreground">To billing@globex.com</p>
                  </div>
                  <p className="text-muted-foreground">Apr 1, 2025</p>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">Reminder Sent</p>
                    <p className="text-muted-foreground">To billing@globex.com</p>
                  </div>
                  <p className="text-muted-foreground">Apr 8, 2025</p>
                </div>
                {status === "Paid" && (
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-muted-foreground">Via Bank Transfer</p>
                    </div>
                    <p className="text-muted-foreground">Apr 10, 2025</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
