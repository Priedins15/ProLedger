"use client"

import { useState } from "react"
import { Download, FileText, Printer, Search, ArrowUpDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"
import { DateRangePicker } from "@/components/date-range-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function AuditTrailsPage() {
  const [eventType, setEventType] = useState("all")
  const [userFilter, setUserFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("desc")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleViewDetails = (event: any) => {
    setSelectedEvent(event)
    setDialogOpen(true)
  }

  // Function to get badge variant based on event type
  const getEventBadgeVariant = (type: string) => {
    switch (type) {
      case "create":
        return "success"
      case "update":
        return "warning"
      case "delete":
        return "destructive"
      case "login":
        return "secondary"
      case "export":
        return "outline"
      case "import":
        return "outline"
      case "system":
        return "default"
      default:
        return "default"
    }
  }

  // Sample audit trail data
  const auditTrailData = [
    {
      id: "evt-001",
      timestamp: "2025-04-09 08:45:23",
      user: "john.smith",
      userRole: "Finance Manager",
      eventType: "update",
      description: "Updated invoice #INV-2024 status to 'Paid'",
      ipAddress: "192.168.1.45",
      details: {
        entity: "Invoice",
        entityId: "INV-2024",
        changes: [
          { field: "status", oldValue: "Pending", newValue: "Paid" },
          { field: "paymentDate", oldValue: null, newValue: "2025-04-09" },
        ],
        browser: "Chrome 112.0.5615.121",
        os: "Windows 11",
      },
    },
    {
      id: "evt-002",
      timestamp: "2025-04-09 08:32:17",
      user: "sarah.johnson",
      userRole: "Sales Manager",
      eventType: "create",
      description: "Created new customer 'Acme Industries'",
      ipAddress: "192.168.1.78",
      details: {
        entity: "Customer",
        entityId: "CUST-458",
        changes: [
          { field: "name", oldValue: null, newValue: "Acme Industries" },
          { field: "email", oldValue: null, newValue: "contact@acmeindustries.com" },
          { field: "phone", oldValue: null, newValue: "(555) 123-4567" },
        ],
        browser: "Firefox 98.0.2",
        os: "macOS 12.3.1",
      },
    },
    {
      id: "evt-003",
      timestamp: "2025-04-09 08:15:42",
      user: "system",
      userRole: "System",
      eventType: "system",
      description: "Automated daily backup completed successfully",
      ipAddress: "127.0.0.1",
      details: {
        entity: "System",
        entityId: "BACKUP-20250409",
        backupSize: "1.2 GB",
        duration: "00:05:23",
        location: "Cloud Storage (AWS S3)",
      },
    },
    {
      id: "evt-004",
      timestamp: "2025-04-09 08:05:11",
      user: "michael.brown",
      userRole: "Accountant",
      eventType: "export",
      description: "Exported Q1 2025 financial statements",
      ipAddress: "192.168.1.102",
      details: {
        entity: "Report",
        entityId: "REP-Q1-2025-FIN",
        format: "Excel (.xlsx)",
        fileSize: "2.4 MB",
        reportType: "Financial Statements",
        period: "Q1 2025",
        browser: "Edge 112.0.1722.48",
        os: "Windows 11",
      },
    },
    {
      id: "evt-005",
      timestamp: "2025-04-09 07:58:33",
      user: "emily.davis",
      userRole: "HR Manager",
      eventType: "update",
      description: "Updated employee salary information",
      ipAddress: "192.168.1.56",
      details: {
        entity: "Employee",
        entityId: "EMP-235",
        changes: [
          { field: "salary", oldValue: "$75,000.00", newValue: "$78,000.00" },
          { field: "effectiveDate", oldValue: null, newValue: "2025-05-01" },
        ],
        browser: "Safari 16.4",
        os: "macOS 13.3",
      },
    },
    {
      id: "evt-006",
      timestamp: "2025-04-09 07:45:19",
      user: "john.smith",
      userRole: "Finance Manager",
      eventType: "login",
      description: "User logged in successfully",
      ipAddress: "192.168.1.45",
      details: {
        entity: "User",
        entityId: "john.smith",
        authMethod: "Password",
        browser: "Chrome 112.0.5615.121",
        os: "Windows 11",
        location: "New York, NY, USA",
      },
    },
    {
      id: "evt-007",
      timestamp: "2025-04-08 17:32:05",
      user: "sarah.johnson",
      userRole: "Sales Manager",
      eventType: "delete",
      description: "Deleted draft invoice #INV-DRAFT-103",
      ipAddress: "192.168.1.78",
      details: {
        entity: "Invoice",
        entityId: "INV-DRAFT-103",
        reason: "Duplicate entry",
        browser: "Firefox 98.0.2",
        os: "macOS 12.3.1",
      },
    },
    {
      id: "evt-008",
      timestamp: "2025-04-08 16:48:22",
      user: "michael.brown",
      userRole: "Accountant",
      eventType: "update",
      description: "Reconciled bank account ending in 4567",
      ipAddress: "192.168.1.102",
      details: {
        entity: "BankAccount",
        entityId: "BANK-4567",
        changes: [
          { field: "lastReconciled", oldValue: "2025-03-31", newValue: "2025-04-08" },
          { field: "reconciledBalance", oldValue: "$125,432.78", newValue: "$138,567.45" },
        ],
        browser: "Edge 112.0.1722.48",
        os: "Windows 11",
      },
    },
    {
      id: "evt-009",
      timestamp: "2025-04-08 15:23:47",
      user: "emily.davis",
      userRole: "HR Manager",
      eventType: "create",
      description: "Created new expense report #EXP-2025-042",
      ipAddress: "192.168.1.56",
      details: {
        entity: "ExpenseReport",
        entityId: "EXP-2025-042",
        amount: "$1,245.67",
        status: "Pending Approval",
        submittedBy: "David Wilson",
        browser: "Safari 16.4",
        os: "macOS 13.3",
      },
    },
    {
      id: "evt-010",
      timestamp: "2025-04-08 14:12:39",
      user: "system",
      userRole: "System",
      eventType: "import",
      description: "Imported bank transactions from Bank of America",
      ipAddress: "127.0.0.1",
      details: {
        entity: "BankTransactions",
        entityId: "IMPORT-20250408-BOA",
        count: "156 transactions",
        period: "2025-03-15 to 2025-04-07",
        account: "Bank of America - Operating Account",
        status: "Completed",
      },
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Audit Trails & Logs" subtitle="Track and review system activity and changes" />
        <div className="flex flex-col sm:flex-row gap-2">
          <DateRangePicker className="w-full sm:w-auto" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Excel (.xlsx)
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      {/* Audit Trail Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Audit Trail Filters</CardTitle>
          <CardDescription>Filter and search audit logs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-type">Event Type</Label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="login">Login/Logout</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                  <SelectItem value="export">Export</SelectItem>
                  <SelectItem value="import">Import</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-filter">User</Label>
              <Select value={userFilter} onValueChange={setUserFilter}>
                <SelectTrigger id="user-filter">
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="admin">Admin Users</SelectItem>
                  <SelectItem value="john.smith">John Smith</SelectItem>
                  <SelectItem value="sarah.johnson">Sarah Johnson</SelectItem>
                  <SelectItem value="michael.brown">Michael Brown</SelectItem>
                  <SelectItem value="emily.davis">Emily Davis</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sort-order">Sort Order</Label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-order">
                  <SelectValue placeholder="Select sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Newest First</SelectItem>
                  <SelectItem value="asc">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Search audit logs" className="pl-8" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail Logs */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Audit Trail Logs</CardTitle>
          <CardDescription>Showing 100 most recent events</CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <ScrollArea className="h-[600px]">
            <Table>
              <TableHeader className="sticky top-0 bg-background">
                <TableRow>
                  <TableHead className="w-[180px]">
                    <div className="flex items-center space-x-1">
                      <span>Timestamp</span>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead className="w-[150px]">User</TableHead>
                  <TableHead className="w-[120px]">Event Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[120px]">IP Address</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditTrailData.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-mono text-xs">{event.timestamp}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{event.user}</span>
                        <span className="text-xs text-muted-foreground">{event.userRole}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getEventBadgeVariant(event.eventType)}>
                        {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{event.description}</TableCell>
                    <TableCell className="font-mono text-xs">{event.ipAddress}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewDetails(event)}>
                        <Info className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Audit Event Details</DialogTitle>
            <DialogDescription>Detailed information about the selected audit event</DialogDescription>
          </DialogHeader>

          {selectedEvent && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Event ID</h4>
                  <p className="font-mono">{selectedEvent.id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Timestamp</h4>
                  <p className="font-mono">{selectedEvent.timestamp}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">User</h4>
                  <p>
                    {selectedEvent.user}{" "}
                    <span className="text-xs text-muted-foreground">({selectedEvent.userRole})</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">IP Address</h4>
                  <p className="font-mono">{selectedEvent.ipAddress}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Event Type</h4>
                  <Badge variant={getEventBadgeVariant(selectedEvent.eventType)}>
                    {selectedEvent.eventType.charAt(0).toUpperCase() + selectedEvent.eventType.slice(1)}
                  </Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Entity</h4>
                  <p>
                    {selectedEvent.details.entity}{" "}
                    <span className="text-xs font-mono">({selectedEvent.details.entityId})</span>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                <p>{selectedEvent.description}</p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger>Event Details</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 p-2">
                      {selectedEvent.details.changes ? (
                        <div>
                          <h4 className="text-sm font-medium mb-2">Changes</h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Field</TableHead>
                                <TableHead>Old Value</TableHead>
                                <TableHead>New Value</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {selectedEvent.details.changes.map((change: any, index: number) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">{change.field}</TableCell>
                                  <TableCell>
                                    {change.oldValue !== null ? (
                                      change.oldValue
                                    ) : (
                                      <span className="text-muted-foreground italic">null</span>
                                    )}
                                  </TableCell>
                                  <TableCell>
                                    {change.newValue !== null ? (
                                      change.newValue
                                    ) : (
                                      <span className="text-muted-foreground italic">null</span>
                                    )}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : null}

                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(selectedEvent.details)
                          .filter(([key]) => !["entity", "entityId", "changes"].includes(key))
                          .map(([key, value]) => (
                            <div key={key}>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                              </h4>
                              <p>{String(value)}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="system">
                  <AccordionTrigger>System Information</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-4 p-2">
                      {selectedEvent.details.browser && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Browser</h4>
                          <p>{selectedEvent.details.browser}</p>
                        </div>
                      )}

                      {selectedEvent.details.os && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Operating System</h4>
                          <p>{selectedEvent.details.os}</p>
                        </div>
                      )}

                      {selectedEvent.details.location && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                          <p>{selectedEvent.details.location}</p>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
