"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Warehouse,
  ArrowUpDown,
  MoreHorizontal,
  Filter,
  Search,
  BarChart,
  RefreshCw,
  LinkIcon,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  ComposedChart,
} from "@/components/ui/chart"

export default function WarehouseIntegrationPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for ${itemId}`,
      description: `${action} action triggered for ${itemId}`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Warehouse Management Integration"
          subtitle="Connect and manage warehouse systems integration"
        />
        <div className="flex items-center gap-2">
          <Button>
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync Now
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connected Warehouses</CardTitle>
            <Warehouse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+1</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 min ago</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Successful
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory Movements</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+12%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sync Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">2</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">-3</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="movements">Movements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full md:w-[250px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <DateRangePicker className="hidden lg:block" />
            </div>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4 mt-0">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Inventory Movement Activity</CardTitle>
                <CardDescription>Daily inventory movements across all warehouses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={[
                        { date: "04/01", inbound: 45, outbound: 32, transfers: 12 },
                        { date: "04/02", inbound: 38, outbound: 41, transfers: 15 },
                        { date: "04/03", inbound: 52, outbound: 36, transfers: 8 },
                        { date: "04/04", inbound: 40, outbound: 39, transfers: 10 },
                        { date: "04/05", inbound: 35, outbound: 42, transfers: 14 },
                        { date: "04/06", inbound: 48, outbound: 38, transfers: 11 },
                        { date: "04/07", inbound: 56, outbound: 45, transfers: 16 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="inbound" name="Inbound" fill="#8884d8" />
                      <Bar dataKey="outbound" name="Outbound" fill="#82ca9d" />
                      <Area dataKey="transfers" name="Transfers" fill="#ffc658" stroke="#ffc658" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Connected Systems</CardTitle>
                <CardDescription>Warehouse management systems integration status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Main Warehouse WMS",
                      type: "Manhattan Associates",
                      status: "Connected",
                      lastSync: "15 min ago",
                      items: "12,456 items",
                    },
                    {
                      name: "Distribution Center WMS",
                      type: "HighJump",
                      status: "Connected",
                      lastSync: "30 min ago",
                      items: "8,234 items",
                    },
                    {
                      name: "Regional Warehouse WMS",
                      type: "SAP EWM",
                      status: "Connected",
                      lastSync: "1 hour ago",
                      items: "5,678 items",
                    },
                    {
                      name: "3PL Integration",
                      type: "API Connection",
                      status: "Issue",
                      lastSync: "Failed",
                      items: "3,245 items",
                    },
                  ].map((system, i) => (
                    <div key={i} className="flex items-center">
                      <div className="mr-4">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${
                            system.status === "Connected" ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {system.status === "Connected" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{system.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{system.type}</span>
                          <span className="mx-1">•</span>
                          <span>{system.items}</span>
                        </div>
                      </div>
                      <div>
                        <Badge
                          className={
                            system.status === "Connected"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {system.status === "Connected" ? system.lastSync : system.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Connect New System
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Sync Activities</CardTitle>
              <CardDescription>Latest data synchronization activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Time</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>System</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Items Processed</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "S001",
                      time: "Today, 10:15 AM",
                      system: "Main Warehouse WMS",
                      activity: "Full Sync",
                      itemsProcessed: 12456,
                      duration: "2m 34s",
                      status: "Completed",
                    },
                    {
                      id: "S002",
                      time: "Today, 10:00 AM",
                      system: "Distribution Center WMS",
                      activity: "Incremental Sync",
                      itemsProcessed: 245,
                      duration: "45s",
                      status: "Completed",
                    },
                    {
                      id: "S003",
                      time: "Today, 9:30 AM",
                      system: "Regional Warehouse WMS",
                      activity: "Incremental Sync",
                      itemsProcessed: 128,
                      duration: "32s",
                      status: "Completed",
                    },
                    {
                      id: "S004",
                      time: "Today, 9:15 AM",
                      system: "3PL Integration",
                      activity: "Full Sync",
                      itemsProcessed: 0,
                      duration: "1m 12s",
                      status: "Failed",
                    },
                    {
                      id: "S005",
                      time: "Today, 8:45 AM",
                      system: "Main Warehouse WMS",
                      activity: "Incremental Sync",
                      itemsProcessed: 56,
                      duration: "28s",
                      status: "Completed",
                    },
                    {
                      id: "S006",
                      time: "Today, 8:30 AM",
                      system: "Distribution Center WMS",
                      activity: "Incremental Sync",
                      itemsProcessed: 78,
                      duration: "30s",
                      status: "Completed",
                    },
                    {
                      id: "S007",
                      time: "Today, 8:15 AM",
                      system: "3PL Integration",
                      activity: "Incremental Sync",
                      itemsProcessed: 0,
                      duration: "45s",
                      status: "Failed",
                    },
                  ].map((sync) => (
                    <TableRow key={sync.id}>
                      <TableCell>{sync.time}</TableCell>
                      <TableCell>{sync.system}</TableCell>
                      <TableCell>{sync.activity}</TableCell>
                      <TableCell>{sync.itemsProcessed.toLocaleString()}</TableCell>
                      <TableCell>{sync.duration}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            sync.status === "Completed"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {sync.status}
                        </Badge>
                      </TableCell>
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
                            <DropdownMenuItem onClick={() => handleAction("View details", sync.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("View log", sync.id)}>
                              View log
                            </DropdownMenuItem>
                            {sync.status === "Failed" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => handleAction("Retry sync", sync.id)}>
                                  Retry sync
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleAction("Troubleshoot", sync.id)}>
                                  Troubleshoot
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Warehouse Locations</CardTitle>
              <CardDescription>Manage warehouse locations and zones</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "L001",
                      name: "Main Warehouse",
                      type: "Distribution Center",
                      items: 12456,
                      capacity: 15000,
                      utilization: 83,
                      status: "Active",
                    },
                    {
                      id: "L002",
                      name: "East Coast DC",
                      type: "Distribution Center",
                      items: 8234,
                      capacity: 10000,
                      utilization: 82,
                      status: "Active",
                    },
                    {
                      id: "L003",
                      name: "West Coast DC",
                      type: "Distribution Center",
                      items: 5678,
                      capacity: 8000,
                      utilization: 71,
                      status: "Active",
                    },
                    {
                      id: "L004",
                      name: "3PL Partner",
                      type: "Third Party Logistics",
                      items: 3245,
                      capacity: 5000,
                      utilization: 65,
                      status: "Connection Issue",
                    },
                    {
                      id: "L005",
                      name: "International Hub",
                      type: "Cross-Dock Facility",
                      items: 1876,
                      capacity: 3000,
                      utilization: 63,
                      status: "Active",
                    },
                  ].map((location) => (
                    <TableRow key={location.id}>
                      <TableCell className="font-medium">{location.name}</TableCell>
                      <TableCell>{location.type}</TableCell>
                      <TableCell>{location.items.toLocaleString()}</TableCell>
                      <TableCell>{location.capacity.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              location.utilization > 90
                                ? "bg-red-600"
                                : location.utilization > 75
                                  ? "bg-amber-500"
                                  : "bg-green-600"
                            }`}
                            style={{ width: `${location.utilization}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{location.utilization}%</span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            location.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {location.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View details", location.id)}>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movements" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Inventory Movements</CardTitle>
              <CardDescription>Track inventory movements across warehouses</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Time</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Reference</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "M001",
                      time: "Today, 10:15 AM",
                      reference: "PO-12345",
                      type: "Inbound",
                      from: "Supplier",
                      to: "Main Warehouse",
                      items: 125,
                      status: "Completed",
                    },
                    {
                      id: "M002",
                      time: "Today, 9:45 AM",
                      reference: "SO-67890",
                      type: "Outbound",
                      from: "East Coast DC",
                      to: "Customer",
                      items: 32,
                      status: "In Transit",
                    },
                    {
                      id: "M003",
                      time: "Today, 9:30 AM",
                      reference: "TR-54321",
                      type: "Transfer",
                      from: "Main Warehouse",
                      to: "West Coast DC",
                      items: 78,
                      status: "In Transit",
                    },
                    {
                      id: "M004",
                      time: "Today, 9:15 AM",
                      reference: "PO-12346",
                      type: "Inbound",
                      from: "Supplier",
                      to: "3PL Partner",
                      items: 45,
                      status: "Pending",
                    },
                    {
                      id: "M005",
                      time: "Today, 9:00 AM",
                      reference: "SO-67891",
                      type: "Outbound",
                      from: "West Coast DC",
                      to: "Customer",
                      items: 18,
                      status: "Completed",
                    },
                    {
                      id: "M006",
                      time: "Today, 8:45 AM",
                      reference: "TR-54322",
                      type: "Transfer",
                      from: "East Coast DC",
                      to: "International Hub",
                      items: 56,
                      status: "Completed",
                    },
                    {
                      id: "M007",
                      time: "Today, 8:30 AM",
                      reference: "SO-67892",
                      type: "Outbound",
                      from: "Main Warehouse",
                      to: "Customer",
                      items: 24,
                      status: "Completed",
                    },
                  ].map((movement) => (
                    <TableRow key={movement.id}>
                      <TableCell>{movement.time}</TableCell>
                      <TableCell>{movement.reference}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            movement.type === "Inbound"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : movement.type === "Outbound"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {movement.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{movement.from}</TableCell>
                      <TableCell>{movement.to}</TableCell>
                      <TableCell>{movement.items}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            movement.status === "Completed"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : movement.status === "In Transit"
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {movement.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View details", movement.id)}>
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Integration Settings</CardTitle>
              <CardDescription>Configure warehouse management system integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Sync Settings</h3>
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Sync Frequency</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Full Sync:</span>
                            <Badge>Every 12 hours</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Incremental Sync:</span>
                            <Badge>Every 30 minutes</Badge>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              Change Schedule
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Sync Scope</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Inventory Levels:</span>
                            <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Locations:</span>
                            <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Movements:</span>
                            <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              Configure Scope
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">API Connections</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>System</TableHead>
                        <TableHead>API Version</TableHead>
                        <TableHead>Authentication</TableHead>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: "API001",
                          system: "Main Warehouse WMS",
                          apiVersion: "v2.5",
                          authentication: "OAuth 2.0",
                          endpoint: "https://api.mainwms.com/v2",
                          status: "Connected",
                        },
                        {
                          id: "API002",
                          system: "Distribution Center WMS",
                          apiVersion: "v3.1",
                          authentication: "API Key",
                          endpoint: "https://api.dcwms.com/v3",
                          status: "Connected",
                        },
                        {
                          id: "API003",
                          system: "Regional Warehouse WMS",
                          apiVersion: "v1.8",
                          authentication: "Basic Auth",
                          endpoint: "https://api.regionalwms.com/v1",
                          status: "Connected",
                        },
                        {
                          id: "API004",
                          system: "3PL Integration",
                          apiVersion: "v2.0",
                          authentication: "API Key",
                          endpoint: "https://api.3pl.com/v2",
                          status: "Error",
                        },
                      ].map((api) => (
                        <TableRow key={api.id}>
                          <TableCell className="font-medium">{api.system}</TableCell>
                          <TableCell>{api.apiVersion}</TableCell>
                          <TableCell>{api.authentication}</TableCell>
                          <TableCell className="text-xs">{api.endpoint}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                api.status === "Connected"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                              }
                            >
                              {api.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleAction("Edit connection", api.id)}>
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
