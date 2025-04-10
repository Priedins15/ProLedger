"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Layers, ArrowUpDown, MoreHorizontal, Download, Filter, Search, Plus, FileText, History } from "lucide-react"
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

export default function BOMPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("products")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for ${itemId}`,
      description: `${action} action triggered for ${itemId}`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Bill of Materials (BOM)" subtitle="Manage product structures and components" />
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New BOM
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active BOMs</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+8</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Components</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,456</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+45</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BOM Revisions</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-amber-500">+12</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">+3</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="revisions">Revisions</TabsTrigger>
          </TabsList>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full md:w-[250px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
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

        <TabsContent value="products" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Product BOMs</CardTitle>
              <CardDescription>Bill of materials for finished products</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Product</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Components</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "P001",
                      name: "Premium Wireless Headphones",
                      sku: "WH-PRO-100",
                      components: 24,
                      version: "v2.3",
                      lastUpdated: "Apr 5, 2025",
                      status: "Active",
                    },
                    {
                      id: "P002",
                      name: "Bluetooth Speaker",
                      sku: "BS-200",
                      components: 18,
                      version: "v1.5",
                      lastUpdated: "Apr 3, 2025",
                      status: "Active",
                    },
                    {
                      id: "P003",
                      name: "Smart Watch",
                      sku: "SW-300",
                      components: 32,
                      version: "v3.1",
                      lastUpdated: "Apr 1, 2025",
                      status: "Active",
                    },
                    {
                      id: "P004",
                      name: "Wireless Earbuds",
                      sku: "WE-400",
                      components: 16,
                      version: "v2.0",
                      lastUpdated: "Mar 28, 2025",
                      status: "Pending Approval",
                    },
                    {
                      id: "P005",
                      name: "Portable Power Bank",
                      sku: "PB-500",
                      components: 12,
                      version: "v1.2",
                      lastUpdated: "Mar 25, 2025",
                      status: "Active",
                    },
                    {
                      id: "P006",
                      name: "Wireless Charging Pad",
                      sku: "WC-600",
                      components: 14,
                      version: "v1.8",
                      lastUpdated: "Mar 22, 2025",
                      status: "Active",
                    },
                    {
                      id: "P007",
                      name: "Smart Home Hub",
                      sku: "SH-700",
                      components: 28,
                      version: "v2.5",
                      lastUpdated: "Mar 20, 2025",
                      status: "Pending Approval",
                    },
                    {
                      id: "P008",
                      name: "Fitness Tracker",
                      sku: "FT-800",
                      components: 22,
                      version: "v3.0",
                      lastUpdated: "Mar 18, 2025",
                      status: "Active",
                    },
                  ].map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.sku}</TableCell>
                      <TableCell>{product.components}</TableCell>
                      <TableCell>{product.version}</TableCell>
                      <TableCell>{product.lastUpdated}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            product.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          }
                        >
                          {product.status}
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
                            <DropdownMenuItem onClick={() => handleAction("View BOM", product.id)}>
                              View BOM
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Edit BOM", product.id)}>
                              Edit BOM
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Create revision", product.id)}>
                              Create revision
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Export BOM", product.id)}>
                              Export BOM
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Duplicate BOM", product.id)}>
                              Duplicate BOM
                            </DropdownMenuItem>
                            {product.status === "Pending Approval" && (
                              <DropdownMenuItem onClick={() => handleAction("Approve BOM", product.id)}>
                                Approve BOM
                              </DropdownMenuItem>
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

        <TabsContent value="components" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Component Inventory</CardTitle>
              <CardDescription>Components used in bill of materials</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Used In</TableHead>
                    <TableHead>On Hand</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "C001",
                      name: "Lithium Battery",
                      sku: "LB-001",
                      category: "Electronics",
                      usedIn: 12,
                      onHand: 450,
                      cost: 5.75,
                    },
                    {
                      id: "C002",
                      name: "Bluetooth Module",
                      sku: "BM-002",
                      category: "Electronics",
                      usedIn: 8,
                      onHand: 320,
                      cost: 8.5,
                    },
                    {
                      id: "C003",
                      name: "Speaker Driver",
                      sku: "SD-003",
                      category: "Audio",
                      usedIn: 5,
                      onHand: 280,
                      cost: 4.25,
                    },
                    {
                      id: "C004",
                      name: "Microcontroller",
                      sku: "MC-004",
                      category: "Electronics",
                      usedIn: 15,
                      onHand: 500,
                      cost: 12.8,
                    },
                    {
                      id: "C005",
                      name: "Plastic Housing",
                      sku: "PH-005",
                      category: "Enclosures",
                      usedIn: 10,
                      onHand: 650,
                      cost: 2.35,
                    },
                    {
                      id: "C006",
                      name: "Touch Screen",
                      sku: "TS-006",
                      category: "Displays",
                      usedIn: 6,
                      onHand: 180,
                      cost: 18.95,
                    },
                    {
                      id: "C007",
                      name: "USB-C Port",
                      sku: "UP-007",
                      category: "Connectors",
                      usedIn: 14,
                      onHand: 720,
                      cost: 1.5,
                    },
                    {
                      id: "C008",
                      name: "Wireless Charging Coil",
                      sku: "WC-008",
                      category: "Electronics",
                      usedIn: 7,
                      onHand: 240,
                      cost: 6.75,
                    },
                  ].map((component) => (
                    <TableRow key={component.id}>
                      <TableCell className="font-medium">{component.name}</TableCell>
                      <TableCell>{component.sku}</TableCell>
                      <TableCell>{component.category}</TableCell>
                      <TableCell>{component.usedIn} products</TableCell>
                      <TableCell>{component.onHand} units</TableCell>
                      <TableCell>${component.cost.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleAction("View details", component.id)}>
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

        <TabsContent value="revisions" className="space-y-4 mt-0">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>BOM Revisions</CardTitle>
              <CardDescription>Track changes to bill of materials</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Date</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>From Version</TableHead>
                    <TableHead>To Version</TableHead>
                    <TableHead>Changed By</TableHead>
                    <TableHead>Changes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "R001",
                      date: "Apr 5, 2025",
                      product: "Premium Wireless Headphones",
                      fromVersion: "v2.2",
                      toVersion: "v2.3",
                      changedBy: "John Smith",
                      changes: "Updated battery component",
                    },
                    {
                      id: "R002",
                      date: "Apr 3, 2025",
                      product: "Bluetooth Speaker",
                      fromVersion: "v1.4",
                      toVersion: "v1.5",
                      changedBy: "Sarah Johnson",
                      changes: "Added waterproofing components",
                    },
                    {
                      id: "R003",
                      date: "Apr 1, 2025",
                      product: "Smart Watch",
                      fromVersion: "v3.0",
                      toVersion: "v3.1",
                      changedBy: "Michael Brown",
                      changes: "Updated display assembly",
                    },
                    {
                      id: "R004",
                      date: "Mar 28, 2025",
                      product: "Wireless Earbuds",
                      fromVersion: "v1.9",
                      toVersion: "v2.0",
                      changedBy: "Emily Davis",
                      changes: "Major redesign of internal components",
                    },
                    {
                      id: "R005",
                      date: "Mar 25, 2025",
                      product: "Portable Power Bank",
                      fromVersion: "v1.1",
                      toVersion: "v1.2",
                      changedBy: "Robert Wilson",
                      changes: "Updated charging circuit",
                    },
                    {
                      id: "R006",
                      date: "Mar 22, 2025",
                      product: "Wireless Charging Pad",
                      fromVersion: "v1.7",
                      toVersion: "v1.8",
                      changedBy: "Jennifer Lee",
                      changes: "Added LED indicator components",
                    },
                    {
                      id: "R007",
                      date: "Mar 20, 2025",
                      product: "Smart Home Hub",
                      fromVersion: "v2.4",
                      toVersion: "v2.5",
                      changedBy: "David Miller",
                      changes: "Updated microphone array",
                    },
                    {
                      id: "R008",
                      date: "Mar 18, 2025",
                      product: "Fitness Tracker",
                      fromVersion: "v2.9",
                      toVersion: "v3.0",
                      changedBy: "Lisa Anderson",
                      changes: "Added heart rate sensor",
                    },
                  ].map((revision) => (
                    <TableRow key={revision.id}>
                      <TableCell>{revision.date}</TableCell>
                      <TableCell className="font-medium">{revision.product}</TableCell>
                      <TableCell>{revision.fromVersion}</TableCell>
                      <TableCell>{revision.toVersion}</TableCell>
                      <TableCell>{revision.changedBy}</TableCell>
                      <TableCell>{revision.changes}</TableCell>
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
                            <DropdownMenuItem onClick={() => handleAction("View details", revision.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Compare versions", revision.id)}>
                              Compare versions
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Revert to version", revision.id)}>
                              Revert to version
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Export revision", revision.id)}>
                              Export revision
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
