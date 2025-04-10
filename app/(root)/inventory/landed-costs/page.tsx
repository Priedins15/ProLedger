"use client"

import { useState } from "react"
import {
  Anchor,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Ship,
  TrendingUp,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageTitle } from "@/components/page-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"

export default function LandedCostsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("shipments")
  const [showAddShipmentDialog, setShowAddShipmentDialog] = useState(false)
  const [showAddCostDialog, setShowAddCostDialog] = useState(false)
  const [showAllocateDialog, setShowAllocateDialog] = useState(false)

  const handleAddShipment = () => {
    setShowAddShipmentDialog(false)
    toast({
      title: "Shipment added",
      description: "The new shipment has been added successfully.",
    })
  }

  const handleAddCost = () => {
    setShowAddCostDialog(false)
    toast({
      title: "Cost added",
      description: "The new landed cost has been added successfully.",
    })
  }

  const handleAllocate = () => {
    setShowAllocateDialog(false)
    toast({
      title: "Costs allocated",
      description: "Landed costs have been allocated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Landed Cost Management"
          subtitle="Track and allocate all costs associated with inventory acquisition"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={() => setShowAddShipmentDialog(true)}>
            <Ship className="mr-2 h-4 w-4" />
            Add Shipment
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Landed Cost Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowAddCostDialog(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Cost
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowAllocateDialog(true)}>
                <ChevronDown className="mr-2 h-4 w-4" />
                Allocate Costs
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Landed Costs Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Ship className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 pending allocation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Landed Costs</CardTitle>
            <Anchor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$87,450.25</div>
            <p className="text-xs text-muted-foreground">Across all active shipments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Cost Increase</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.4%</div>
            <p className="text-xs text-muted-foreground">Over base product cost</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unallocated Costs</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-muted-foreground">Pending allocation</p>
          </CardContent>
        </Card>
      </div>

      {/* Landed Costs Tabs */}
      <Tabs defaultValue="shipments" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="costs">Cost Types</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="analysis">Cost Analysis</TabsTrigger>
        </TabsList>

        {/* Shipments Tab */}
        <TabsContent value="shipments" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-1 items-center space-x-2">
              <Input
                placeholder="Search shipments..."
                className="max-w-md"
                prefix={<Search className="h-4 w-4 text-muted-foreground" />}
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Status</DropdownMenuItem>
                  <DropdownMenuItem>Date Range</DropdownMenuItem>
                  <DropdownMenuItem>Supplier</DropdownMenuItem>
                  <DropdownMenuItem>Destination</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2 font-medium">Shipment ID</div>
                <div className="col-span-2 font-medium">Supplier</div>
                <div className="col-span-1 font-medium">Status</div>
                <div className="col-span-1 font-medium">Items</div>
                <div className="col-span-2 font-medium">Base Cost</div>
                <div className="col-span-2 font-medium">Landed Cost</div>
                <div className="col-span-1 font-medium">% Increase</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                id: "SHP-2025-042",
                supplier: "Global Supplies Ltd",
                status: "In Transit",
                items: 24,
                baseCost: "$45,780.00",
                landedCost: "$52,647.00",
                increase: "15%",
                allocation: 100,
              },
              {
                id: "SHP-2025-041",
                supplier: "Eastern Imports Co",
                status: "Received",
                items: 18,
                baseCost: "$32,450.00",
                landedCost: "$38,291.00",
                increase: "18%",
                allocation: 100,
              },
              {
                id: "SHP-2025-040",
                supplier: "Tech Components Inc",
                status: "Customs",
                items: 42,
                baseCost: "$67,890.00",
                landedCost: "$78,980.00",
                increase: "16%",
                allocation: 85,
              },
              {
                id: "SHP-2025-039",
                supplier: "Office Supplies Direct",
                status: "Received",
                items: 56,
                baseCost: "$12,450.00",
                landedCost: "$14,320.00",
                increase: "15%",
                allocation: 100,
              },
              {
                id: "SHP-2025-038",
                supplier: "Furniture Wholesale",
                status: "Received",
                items: 8,
                baseCost: "$28,750.00",
                landedCost: "$34,500.00",
                increase: "20%",
                allocation: 100,
              },
              {
                id: "SHP-2025-037",
                supplier: "Global Supplies Ltd",
                status: "In Transit",
                items: 32,
                baseCost: "$54,320.00",
                landedCost: "$63,554.00",
                increase: "17%",
                allocation: 75,
              },
              {
                id: "SHP-2025-036",
                supplier: "Tech Components Inc",
                status: "Received",
                items: 15,
                baseCost: "$23,450.00",
                landedCost: "$27,450.00",
                increase: "17%",
                allocation: 100,
              },
              {
                id: "SHP-2025-035",
                supplier: "Eastern Imports Co",
                status: "Customs",
                items: 27,
                baseCost: "$41,780.00",
                landedCost: "$48,890.00",
                increase: "17%",
                allocation: 60,
              },
            ].map((shipment, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2">{shipment.id}</div>
                  <div className="col-span-2">{shipment.supplier}</div>
                  <div className="col-span-1">
                    <Badge
                      variant={
                        shipment.status === "Received"
                          ? "default"
                          : shipment.status === "In Transit"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {shipment.status}
                    </Badge>
                  </div>
                  <div className="col-span-1">{shipment.items}</div>
                  <div className="col-span-2">{shipment.baseCost}</div>
                  <div className="col-span-2 font-medium">{shipment.landedCost}</div>
                  <div className="col-span-1">{shipment.increase}</div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Add Costs</DropdownMenuItem>
                        <DropdownMenuItem>Allocate Costs</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Cost Allocation</span>
                    <span>{shipment.allocation}%</span>
                  </div>
                  <Progress value={shipment.allocation} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Cost Types Tab */}
        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Landed Cost Types</CardTitle>
              <CardDescription>Manage the different types of costs that contribute to landed costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Cost Types Table */}
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-3 font-medium">Cost Type</div>
                      <div className="col-span-3 font-medium">Description</div>
                      <div className="col-span-2 font-medium">Default Allocation</div>
                      <div className="col-span-2 font-medium">Avg. % of Total</div>
                      <div className="col-span-1 font-medium">Active</div>
                      <div className="col-span-1 font-medium text-right">Actions</div>
                    </div>
                  </div>
                  <Separator />
                  {[
                    {
                      type: "Freight",
                      description: "Shipping and transportation costs",
                      allocation: "By Weight",
                      percentage: "8.5%",
                      active: true,
                    },
                    {
                      type: "Customs Duties",
                      description: "Import duties and tariffs",
                      allocation: "By Value",
                      percentage: "5.2%",
                      active: true,
                    },
                    {
                      type: "Insurance",
                      description: "Cargo and transit insurance",
                      allocation: "By Value",
                      percentage: "1.8%",
                      active: true,
                    },
                    {
                      type: "Handling",
                      description: "Loading, unloading, and handling fees",
                      allocation: "By Quantity",
                      percentage: "2.1%",
                      active: true,
                    },
                    {
                      type: "Storage",
                      description: "Warehouse and storage fees",
                      allocation: "By Volume",
                      percentage: "1.5%",
                      active: true,
                    },
                    {
                      type: "Brokerage",
                      description: "Customs broker and clearance fees",
                      allocation: "Equal",
                      percentage: "0.9%",
                      active: true,
                    },
                    {
                      type: "Quality Inspection",
                      description: "Product inspection and testing",
                      allocation: "By Value",
                      percentage: "0.7%",
                      active: true,
                    },
                    {
                      type: "Currency Exchange",
                      description: "Foreign exchange fees and adjustments",
                      allocation: "By Value",
                      percentage: "0.5%",
                      active: false,
                    },
                  ].map((cost, index) => (
                    <div key={index} className="border-t p-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-medium">{cost.type}</div>
                        <div className="col-span-3">{cost.description}</div>
                        <div className="col-span-2">{cost.allocation}</div>
                        <div className="col-span-2">{cost.percentage}</div>
                        <div className="col-span-1">
                          <Badge variant={cost.active ? "default" : "secondary"}>{cost.active ? "Yes" : "No"}</Badge>
                        </div>
                        <div className="col-span-1 text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add New Cost Type Button */}
                <div className="flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Cost Type
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Allocation Tab */}
        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Allocation Methods</CardTitle>
              <CardDescription>Configure how landed costs are allocated to inventory items</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Default Allocation Methods</h3>
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-3 font-medium">Method</div>
                      <div className="col-span-5 font-medium">Description</div>
                      <div className="col-span-3 font-medium">Used For</div>
                      <div className="col-span-1 font-medium text-right">Default</div>
                    </div>
                  </div>
                  <Separator />
                  {[
                    {
                      method: "By Value",
                      description: "Allocates costs proportionally based on the value of each item",
                      usedFor: "Duties, Insurance, Taxes",
                      default: true,
                    },
                    {
                      method: "By Weight",
                      description: "Allocates costs proportionally based on the weight of each item",
                      usedFor: "Freight, Shipping",
                      default: false,
                    },
                    {
                      method: "By Volume",
                      description: "Allocates costs proportionally based on the volume of each item",
                      usedFor: "Storage, Container Space",
                      default: false,
                    },
                    {
                      method: "By Quantity",
                      description: "Allocates costs proportionally based on the quantity of each item",
                      usedFor: "Handling, Processing",
                      default: false,
                    },
                    {
                      method: "Equal",
                      description: "Allocates costs equally across all items regardless of value or quantity",
                      usedFor: "Fixed Fees, Documentation",
                      default: false,
                    },
                    {
                      method: "Custom",
                      description: "Allows manual allocation of costs to specific items",
                      usedFor: "Special Cases, Exceptions",
                      default: false,
                    },
                  ].map((method, index) => (
                    <div key={index} className="border-t p-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-medium">{method.method}</div>
                        <div className="col-span-5">{method.description}</div>
                        <div className="col-span-3">{method.usedFor}</div>
                        <div className="col-span-1 text-right">
                          {method.default ? (
                            <Badge variant="default">Default</Badge>
                          ) : (
                            <Button variant="ghost" size="sm">
                              Set
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pending Allocations</h3>
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-2 font-medium">Shipment</div>
                      <div className="col-span-2 font-medium">Cost Type</div>
                      <div className="col-span-2 font-medium">Amount</div>
                      <div className="col-span-2 font-medium">Items</div>
                      <div className="col-span-2 font-medium">Allocation Method</div>
                      <div className="col-span-2 font-medium text-right">Actions</div>
                    </div>
                  </div>
                  <Separator />
                  {[
                    {
                      shipment: "SHP-2025-040",
                      costType: "Freight",
                      amount: "$4,580.00",
                      items: 42,
                      method: "By Weight",
                      actions: "Allocate",
                    },
                    {
                      shipment: "SHP-2025-037",
                      costType: "Customs Duties",
                      amount: "$3,245.00",
                      items: 32,
                      method: "By Value",
                      actions: "Allocate",
                    },
                    {
                      shipment: "SHP-2025-037",
                      costType: "Insurance",
                      amount: "$1,250.00",
                      items: 32,
                      method: "By Value",
                      actions: "Allocate",
                    },
                    {
                      shipment: "SHP-2025-035",
                      costType: "Freight",
                      amount: "$2,890.00",
                      items: 27,
                      method: "By Weight",
                      actions: "Allocate",
                    },
                    {
                      shipment: "SHP-2025-035",
                      costType: "Handling",
                      amount: "$780.00",
                      items: 27,
                      method: "By Quantity",
                      actions: "Allocate",
                    },
                  ].map((allocation, index) => (
                    <div key={index} className="border-t p-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-2">{allocation.shipment}</div>
                        <div className="col-span-2">{allocation.costType}</div>
                        <div className="col-span-2 font-medium">{allocation.amount}</div>
                        <div className="col-span-2">{allocation.items}</div>
                        <div className="col-span-2">{allocation.method}</div>
                        <div className="col-span-2 text-right">
                          <Button variant="default" size="sm">
                            Allocate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cost Analysis Tab */}
        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Landed Cost Analysis</CardTitle>
              <CardDescription>Analyze the impact of landed costs on your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Cost Breakdown by Type */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Cost Breakdown by Type</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3 font-medium">Cost Type</div>
                        <div className="col-span-3 font-medium">Total Amount</div>
                        <div className="col-span-3 font-medium">% of Landed Cost</div>
                        <div className="col-span-3 font-medium">% of Base Cost</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      {
                        type: "Base Product Cost",
                        amount: "$306,870.00",
                        percentLanded: "77.8%",
                        percentBase: "100.0%",
                      },
                      {
                        type: "Freight",
                        amount: "$32,450.00",
                        percentLanded: "8.2%",
                        percentBase: "10.6%",
                      },
                      {
                        type: "Customs Duties",
                        amount: "$18,750.00",
                        percentLanded: "4.8%",
                        percentBase: "6.1%",
                      },
                      {
                        type: "Insurance",
                        amount: "$6,780.00",
                        percentLanded: "1.7%",
                        percentBase: "2.2%",
                      },
                      {
                        type: "Handling",
                        amount: "$8,450.00",
                        percentLanded: "2.1%",
                        percentBase: "2.8%",
                      },
                      {
                        type: "Storage",
                        amount: "$5,670.00",
                        percentLanded: "1.4%",
                        percentBase: "1.8%",
                      },
                      {
                        type: "Brokerage",
                        amount: "$3,450.00",
                        percentLanded: "0.9%",
                        percentBase: "1.1%",
                      },
                      {
                        type: "Other Costs",
                        amount: "$12,030.25",
                        percentLanded: "3.1%",
                        percentBase: "3.9%",
                      },
                    ].map((cost, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3 font-medium">{cost.type}</div>
                          <div className="col-span-3">{cost.amount}</div>
                          <div className="col-span-3">{cost.percentLanded}</div>
                          <div className="col-span-3">{cost.percentBase}</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t p-4 bg-muted/20">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-bold">Total Landed Cost</div>
                        <div className="col-span-3 font-bold">$394,450.25</div>
                        <div className="col-span-3 font-bold">100.0%</div>
                        <div className="col-span-3 font-bold">128.5%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Impact by Product Category */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Cost Impact by Product Category</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-2 font-medium">Category</div>
                        <div className="col-span-2 font-medium">Base Cost</div>
                        <div className="col-span-2 font-medium">Landed Cost</div>
                        <div className="col-span-2 font-medium">Increase</div>
                        <div className="col-span-2 font-medium">Margin Before</div>
                        <div className="col-span-2 font-medium">Margin After</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      {
                        category: "Furniture",
                        baseCost: "$124,530.00",
                        landedCost: "$148,250.45",
                        increase: "19.0%",
                        marginBefore: "42.5%",
                        marginAfter: "35.7%",
                      },
                      {
                        category: "Electronics",
                        baseCost: "$91,450.00",
                        landedCost: "$107,910.50",
                        increase: "18.0%",
                        marginBefore: "38.2%",
                        marginAfter: "31.5%",
                      },
                      {
                        category: "Lighting",
                        baseCost: "$45,780.00",
                        landedCost: "$52,647.00",
                        increase: "15.0%",
                        marginBefore: "45.0%",
                        marginAfter: "39.1%",
                      },
                      {
                        category: "Supplies",
                        baseCost: "$45,110.00",
                        landedCost: "$51,876.50",
                        increase: "15.0%",
                        marginBefore: "50.0%",
                        marginAfter: "43.5%",
                      },
                    ].map((category, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-2">{category.category}</div>
                          <div className="col-span-2">{category.baseCost}</div>
                          <div className="col-span-2">{category.landedCost}</div>
                          <div className="col-span-2">{category.increase}</div>
                          <div className="col-span-2">{category.marginBefore}</div>
                          <div className="col-span-2">{category.marginAfter}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Shipment Dialog */}
      <Dialog open={showAddShipmentDialog} onOpenChange={setShowAddShipmentDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Shipment</DialogTitle>
            <DialogDescription>Enter the details of the new shipment for landed cost tracking.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shipment-id">Shipment ID</Label>
                <Input id="shipment-id" placeholder="Enter shipment ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Select>
                  <SelectTrigger id="supplier">
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="global">Global Supplies Ltd</SelectItem>
                    <SelectItem value="eastern">Eastern Imports Co</SelectItem>
                    <SelectItem value="tech">Tech Components Inc</SelectItem>
                    <SelectItem value="office">Office Supplies Direct</SelectItem>
                    <SelectItem value="furniture">Furniture Wholesale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="order-date">Order Date</Label>
                <Input id="order-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expected-arrival">Expected Arrival</Label>
                <Input id="expected-arrival" type="date" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input id="origin" placeholder="Country/port of origin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="Destination warehouse" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shipping-method">Shipping Method</Label>
                <Select>
                  <SelectTrigger id="shipping-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sea">Sea Freight</SelectItem>
                    <SelectItem value="air">Air Freight</SelectItem>
                    <SelectItem value="road">Road Transport</SelectItem>
                    <SelectItem value="rail">Rail Transport</SelectItem>
                    <SelectItem value="multi">Multi-modal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="incoterm">Incoterm</Label>
                <Select>
                  <SelectTrigger id="incoterm">
                    <SelectValue placeholder="Select incoterm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exw">EXW (Ex Works)</SelectItem>
                    <SelectItem value="fob">FOB (Free on Board)</SelectItem>
                    <SelectItem value="cif">CIF (Cost, Insurance, Freight)</SelectItem>
                    <SelectItem value="dap">DAP (Delivered at Place)</SelectItem>
                    <SelectItem value="ddp">DDP (Delivered Duty Paid)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="base-cost">Base Product Cost</Label>
              <Input id="base-cost" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Input id="notes" placeholder="Additional information" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddShipmentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddShipment}>Add Shipment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Cost Dialog */}
      <Dialog open={showAddCostDialog} onOpenChange={setShowAddCostDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Landed Cost</DialogTitle>
            <DialogDescription>Add a new cost to a shipment for landed cost calculation.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="cost-shipment">Shipment</Label>
              <Select>
                <SelectTrigger id="cost-shipment">
                  <SelectValue placeholder="Select shipment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shp-042">SHP-2025-042</SelectItem>
                  <SelectItem value="shp-040">SHP-2025-040</SelectItem>
                  <SelectItem value="shp-037">SHP-2025-037</SelectItem>
                  <SelectItem value="shp-035">SHP-2025-035</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost-type">Cost Type</Label>
              <Select>
                <SelectTrigger id="cost-type">
                  <SelectValue placeholder="Select cost type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freight">Freight</SelectItem>
                  <SelectItem value="customs">Customs Duties</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="handling">Handling</SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                  <SelectItem value="brokerage">Brokerage</SelectItem>
                  <SelectItem value="inspection">Quality Inspection</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cost-amount">Amount</Label>
                <Input id="cost-amount" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cost-currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="cost-currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                    <SelectItem value="cad">CAD</SelectItem>
                    <SelectItem value="aud">AUD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost-allocation">Allocation Method</Label>
              <Select>
                <SelectTrigger id="cost-allocation">
                  <SelectValue placeholder="Select allocation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value">By Value</SelectItem>
                  <SelectItem value="weight">By Weight</SelectItem>
                  <SelectItem value="volume">By Volume</SelectItem>
                  <SelectItem value="quantity">By Quantity</SelectItem>
                  <SelectItem value="equal">Equal</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cost-notes">Notes</Label>
              <Input id="cost-notes" placeholder="Additional information" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddCostDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCost}>Add Cost</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Allocate Costs Dialog */}
      <Dialog open={showAllocateDialog} onOpenChange={setShowAllocateDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Allocate Landed Costs</DialogTitle>
            <DialogDescription>Allocate landed costs to inventory items.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="allocate-shipment">Shipment</Label>
              <Select>
                <SelectTrigger id="allocate-shipment">
                  <SelectValue placeholder="Select shipment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shp-040">SHP-2025-040</SelectItem>
                  <SelectItem value="shp-037">SHP-2025-037</SelectItem>
                  <SelectItem value="shp-035">SHP-2025-035</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="allocate-costs">Costs to Allocate</Label>
              <Select>
                <SelectTrigger id="allocate-costs">
                  <SelectValue placeholder="Select costs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Unallocated Costs</SelectItem>
                  <SelectItem value="freight">Freight Only</SelectItem>
                  <SelectItem value="customs">Customs Duties Only</SelectItem>
                  <SelectItem value="insurance">Insurance Only</SelectItem>
                  <SelectItem value="handling">Handling Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="allocate-method">Allocation Method</Label>
              <Select defaultValue="default">
                <SelectTrigger id="allocate-method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Use Default for Each Cost Type</SelectItem>
                  <SelectItem value="value">By Value</SelectItem>
                  <SelectItem value="weight">By Weight</SelectItem>
                  <SelectItem value="volume">By Volume</SelectItem>
                  <SelectItem value="quantity">By Quantity</SelectItem>
                  <SelectItem value="equal">Equal</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="allocate-date">Allocation Date</Label>
              <Input id="allocate-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="allocate-notes">Notes</Label>
              <Input id="allocate-notes" placeholder="Additional information" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAllocateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAllocate}>Allocate Costs</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
