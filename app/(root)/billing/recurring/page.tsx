"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { Check, Plus, Trash } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function RecurringBillingPage() {
  const { toast } = useToast()
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleCreateTemplate = () => {
    toast({
      title: "Template Created",
      description: "Your recurring billing template has been created successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <PageTitle title="Recurring Billing" subtitle="Manage recurring billing templates and schedules" />
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Template
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Templates</CardTitle>
              <CardDescription>Select a template to view or edit</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    id: "temp-001",
                    name: "Monthly Maintenance",
                    customer: "Acme Corporation",
                    frequency: "Monthly",
                    amount: "$450.00",
                    status: "Active",
                  },
                  {
                    id: "temp-002",
                    name: "Quarterly Consulting",
                    customer: "Globex Industries",
                    frequency: "Quarterly",
                    amount: "$2,500.00",
                    status: "Active",
                  },
                  {
                    id: "temp-003",
                    name: "Annual License",
                    customer: "Wayne Enterprises",
                    frequency: "Annually",
                    amount: "$12,000.00",
                    status: "Active",
                  },
                  {
                    id: "temp-004",
                    name: "Weekly Support",
                    customer: "Stark Industries",
                    frequency: "Weekly",
                    amount: "$175.00",
                    status: "Paused",
                  },
                  {
                    id: "temp-005",
                    name: "Bi-Monthly Services",
                    customer: "Umbrella Corporation",
                    frequency: "Bi-Monthly",
                    amount: "$850.00",
                    status: "Active",
                  },
                ].map((template) => (
                  <div
                    key={template.id}
                    className={`p-3 cursor-pointer hover:bg-muted/50 ${
                      selectedTemplate === template.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-muted-foreground">{template.customer}</div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-sm">
                        {template.amount} / {template.frequency}
                      </div>
                      <Badge
                        className={
                          template.status === "Active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {template.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Schedule Overview</CardTitle>
              <CardDescription>Upcoming recurring invoices</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {[
                  {
                    template: "Monthly Maintenance",
                    customer: "Acme Corporation",
                    date: "May 1, 2025",
                    amount: "$450.00",
                  },
                  {
                    template: "Weekly Support",
                    customer: "Stark Industries",
                    date: "Apr 15, 2025",
                    amount: "$175.00",
                  },
                  {
                    template: "Bi-Monthly Services",
                    customer: "Umbrella Corporation",
                    date: "Jun 1, 2025",
                    amount: "$850.00",
                  },
                  {
                    template: "Quarterly Consulting",
                    customer: "Globex Industries",
                    date: "Jul 1, 2025",
                    amount: "$2,500.00",
                  },
                  {
                    template: "Annual License",
                    customer: "Wayne Enterprises",
                    date: "Jan 1, 2026",
                    amount: "$12,000.00",
                  },
                ].map((schedule, index) => (
                  <div key={index} className="p-3">
                    <div className="font-medium">{schedule.template}</div>
                    <div className="text-sm text-muted-foreground">{schedule.customer}</div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-sm">{schedule.date}</div>
                      <div className="text-sm font-medium">{schedule.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-5">
          {selectedTemplate ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Edit Recurring Template</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                    <Button size="sm">
                      <Check className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
                <CardDescription>Modify the recurring billing template details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="items">Line Items</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="template-name">Template Name</Label>
                        <Input id="template-name" defaultValue="Monthly Maintenance" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="template-customer">Customer</Label>
                        <Select defaultValue="acme">
                          <SelectTrigger id="template-customer">
                            <SelectValue placeholder="Select customer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="acme">Acme Corporation</SelectItem>
                            <SelectItem value="globex">Globex Industries</SelectItem>
                            <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                            <SelectItem value="stark">Stark Industries</SelectItem>
                            <SelectItem value="umbrella">Umbrella Corporation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="template-status">Status</Label>
                        <Select defaultValue="active">
                          <SelectTrigger id="template-status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="paused">Paused</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="template-currency">Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger id="template-currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="jpy">JPY (¥)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="template-description">Description</Label>
                      <Textarea
                        id="template-description"
                        placeholder="Enter a description for this recurring template"
                        defaultValue="Monthly maintenance and support services as per contract #2025-045."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="template-notes">Internal Notes</Label>
                      <Textarea
                        id="template-notes"
                        placeholder="Enter internal notes (not visible to customer)"
                        defaultValue="Customer prefers invoices to be sent to accounts@acmecorp.com"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="auto-send" defaultChecked />
                      <Label htmlFor="auto-send">Automatically send invoices when generated</Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="schedule-frequency">Frequency</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger id="schedule-frequency">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="bimonthly">Bi-Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="semiannually">Semi-Annually</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="schedule-day">Day of Month</Label>
                        <Select defaultValue="1">
                          <SelectTrigger id="schedule-day">
                            <SelectValue placeholder="Select day" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 31 }, (_, i) => (
                              <SelectItem key={i} value={(i + 1).toString()}>
                                {i + 1}
                              </SelectItem>
                            ))}
                            <SelectItem value="last">Last day of month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="schedule-start">Start Date</Label>
                        <Input id="schedule-start" type="date" defaultValue="2025-01-01" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="schedule-end">End Date</Label>
                        <Input id="schedule-end" type="date" defaultValue="2025-12-31" />
                        <div className="flex items-center space-x-2 mt-1">
                          <Switch id="no-end-date" />
                          <Label htmlFor="no-end-date" className="text-sm">
                            No end date
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Generate Invoice</Label>
                      <RadioGroup defaultValue="before" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="before" id="before" />
                          <Label htmlFor="before" className="font-normal">
                            7 days before the billing date
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="on" id="on" />
                          <Label htmlFor="on" className="font-normal">
                            On the billing date
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="after" id="after" />
                          <Label htmlFor="after" className="font-normal">
                            After the billing date
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Next 5 Scheduled Invoices</Label>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Invoice Date</TableHead>
                            <TableHead>Generation Date</TableHead>
                            <TableHead>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { invoiceDate: "May 1, 2025", generationDate: "Apr 24, 2025", amount: "$450.00" },
                            { invoiceDate: "Jun 1, 2025", generationDate: "May 25, 2025", amount: "$450.00" },
                            { invoiceDate: "Jul 1, 2025", generationDate: "Jun 24, 2025", amount: "$450.00" },
                            { invoiceDate: "Aug 1, 2025", generationDate: "Jul 25, 2025", amount: "$450.00" },
                            { invoiceDate: "Sep 1, 2025", generationDate: "Aug 25, 2025", amount: "$450.00" },
                          ].map((schedule, index) => (
                            <TableRow key={index}>
                              <TableCell>{schedule.invoiceDate}</TableCell>
                              <TableCell>{schedule.generationDate}</TableCell>
                              <TableCell>{schedule.amount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>

                  <TabsContent value="items" className="space-y-4 pt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%]">Description</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Unit Price</TableHead>
                          <TableHead>Tax</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            description: "Monthly Support Package",
                            quantity: 1,
                            unitPrice: "$350.00",
                            tax: "10%",
                            amount: "$385.00",
                          },
                          {
                            description: "Additional User Licenses",
                            quantity: 5,
                            unitPrice: "$12.00",
                            tax: "10%",
                            amount: "$66.00",
                          },
                        ].map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.unitPrice}</TableCell>
                            <TableCell>{item.tax}</TableCell>
                            <TableCell className="text-right">{item.amount}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Line Item
                    </Button>

                    <Separator />

                    <div className="space-y-2 ml-auto w-[300px]">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>$410.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (10%):</span>
                        <span>$41.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>$451.00</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4 pt-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice #</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            id: "INV-2025-001",
                            date: "Jan 1, 2025",
                            amount: "$450.00",
                            status: "Paid",
                          },
                          {
                            id: "INV-2025-002",
                            date: "Feb 1, 2025",
                            amount: "$450.00",
                            status: "Paid",
                          },
                          {
                            id: "INV-2025-003",
                            date: "Mar 1, 2025",
                            amount: "$450.00",
                            status: "Paid",
                          },
                          {
                            id: "INV-2025-004",
                            date: "Apr 1, 2025",
                            amount: "$450.00",
                            status: "Pending",
                          },
                        ].map((invoice) => (
                          <TableRow key={invoice.id}>
                            <TableCell className="font-medium">{invoice.id}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  invoice.status === "Paid"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                }
                              >
                                {invoice.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Create New Recurring Template</CardTitle>
                <CardDescription>Set up a new recurring billing template for automatic invoicing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-template-name">Template Name</Label>
                    <Input id="new-template-name" placeholder="e.g., Monthly Support" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-template-customer">Customer</Label>
                    <Select>
                      <SelectTrigger id="new-template-customer">
                        <SelectValue placeholder="Select customer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acme">Acme Corporation</SelectItem>
                        <SelectItem value="globex">Globex Industries</SelectItem>
                        <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                        <SelectItem value="stark">Stark Industries</SelectItem>
                        <SelectItem value="umbrella">Umbrella Corporation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-frequency">Frequency</Label>
                    <Select>
                      <SelectTrigger id="new-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="bimonthly">Bi-Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="semiannually">Semi-Annually</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-start-date">Start Date</Label>
                    <Input id="new-start-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-description">Description</Label>
                  <Textarea id="new-description" placeholder="Enter a description for this recurring template" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="new-auto-send" />
                  <Label htmlFor="new-auto-send">Automatically send invoices when generated</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleCreateTemplate}>Create Template</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
