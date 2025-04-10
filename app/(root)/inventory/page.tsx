"use client"

import { useState } from "react"
import {
  Package,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Truck,
  ClipboardList,
  BarChart3,
  Warehouse,
  Tag,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function InventoryPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("items")
  const [showAddItemDialog, setShowAddItemDialog] = useState(false)
  const [showAdjustmentDialog, setShowAdjustmentDialog] = useState(false)
  const [showTransferDialog, setShowTransferDialog] = useState(false)

  const handleAddItem = () => {
    setShowAddItemDialog(false)
    toast({
      title: "Inventory item added",
      description: "The new inventory item has been added successfully.",
    })
  }

  const handleAdjustment = () => {
    setShowAdjustmentDialog(false)
    toast({
      title: "Inventory adjusted",
      description: "The inventory adjustment has been recorded successfully.",
    })
  }

  const handleTransfer = () => {
    setShowTransferDialog(false)
    toast({
      title: "Inventory transferred",
      description: "The inventory transfer has been recorded successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Inventory Management" subtitle="Manage your inventory items, stock levels, and movements" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={() => setShowAddItemDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Inventory Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowAdjustmentDialog(true)}>
                <ClipboardList className="mr-2 h-4 w-4" />
                Record Adjustment
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowTransferDialog(true)}>
                <Truck className="mr-2 h-4 w-4" />
                Transfer Stock
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BarChart3 className="mr-2 h-4 w-4" />
                Valuation Report
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Warehouse className="mr-2 h-4 w-4" />
                Manage Locations
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Inventory Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 added this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$128,459.32</div>
            <p className="text-xs text-muted-foreground">+$4,320.75 since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Items below reorder point</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locations</CardTitle>
            <Warehouse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Active inventory locations</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Tabs */}
      <Tabs defaultValue="items" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="items">Inventory Items</TabsTrigger>
          <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          <TabsTrigger value="valuation">Valuation</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
        </TabsList>

        {/* Inventory Items Tab */}
        <TabsContent value="items" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-1 items-center space-x-2">
              <Input
                placeholder="Search inventory items..."
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
                  <DropdownMenuItem>Category</DropdownMenuItem>
                  <DropdownMenuItem>Location</DropdownMenuItem>
                  <DropdownMenuItem>Stock Level</DropdownMenuItem>
                  <DropdownMenuItem>Valuation Method</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 font-medium">Item Name</div>
                <div className="col-span-2 font-medium">SKU</div>
                <div className="col-span-2 font-medium">Category</div>
                <div className="col-span-1 font-medium">On Hand</div>
                <div className="col-span-1 font-medium">Available</div>
                <div className="col-span-2 font-medium">Value</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                name: "Office Chair - Ergonomic",
                sku: "FURN-1001",
                category: "Furniture",
                onHand: 24,
                available: 20,
                value: "$4,800.00",
                lowStock: false,
              },
              {
                name: "Desk Lamp - LED",
                sku: "LIGHT-2034",
                category: "Lighting",
                onHand: 56,
                available: 52,
                value: "$2,800.00",
                lowStock: false,
              },
              {
                name: "Wireless Keyboard",
                sku: "TECH-3045",
                category: "Electronics",
                onHand: 8,
                available: 5,
                value: "$720.00",
                lowStock: true,
              },
              {
                name: "Monitor Stand - Adjustable",
                sku: "FURN-1087",
                category: "Furniture",
                onHand: 32,
                available: 30,
                value: "$3,200.00",
                lowStock: false,
              },
              {
                name: "Wireless Mouse",
                sku: "TECH-3046",
                category: "Electronics",
                onHand: 12,
                available: 10,
                value: "$600.00",
                lowStock: false,
              },
              {
                name: "Desk - Standing",
                sku: "FURN-1025",
                category: "Furniture",
                onHand: 6,
                available: 4,
                value: "$4,800.00",
                lowStock: true,
              },
              {
                name: "Laptop Docking Station",
                sku: "TECH-3089",
                category: "Electronics",
                onHand: 15,
                available: 12,
                value: "$1,800.00",
                lowStock: false,
              },
              {
                name: "Office Chair - Standard",
                sku: "FURN-1002",
                category: "Furniture",
                onHand: 18,
                available: 15,
                value: "$2,700.00",
                lowStock: false,
              },
              {
                name: "Desk Organizer",
                sku: "SUPP-5023",
                category: "Supplies",
                onHand: 45,
                available: 42,
                value: "$675.00",
                lowStock: false,
              },
              {
                name: "Printer Paper - Premium",
                sku: "SUPP-5067",
                category: "Supplies",
                onHand: 5,
                available: 5,
                value: "$250.00",
                lowStock: true,
              },
            ].map((item, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">{item.name}</div>
                  <div className="col-span-2">{item.sku}</div>
                  <div className="col-span-2">{item.category}</div>
                  <div className="col-span-1">{item.onHand}</div>
                  <div className="col-span-1">
                    {item.lowStock ? (
                      <div className="flex items-center">
                        {item.available}
                        <AlertCircle className="ml-1 h-4 w-4 text-orange-500" />
                      </div>
                    ) : (
                      item.available
                    )}
                  </div>
                  <div className="col-span-2">{item.value}</div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Item</DropdownMenuItem>
                        <DropdownMenuItem>Adjust Stock</DropdownMenuItem>
                        <DropdownMenuItem>Transfer Stock</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Discontinue</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Stock Movements Tab */}
        <TabsContent value="movements" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-1 items-center space-x-2">
              <Input
                placeholder="Search movements..."
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
                  <DropdownMenuItem>Movement Type</DropdownMenuItem>
                  <DropdownMenuItem>Date Range</DropdownMenuItem>
                  <DropdownMenuItem>Location</DropdownMenuItem>
                  <DropdownMenuItem>Item</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2 font-medium">Date</div>
                <div className="col-span-2 font-medium">Reference</div>
                <div className="col-span-2 font-medium">Type</div>
                <div className="col-span-2 font-medium">Item</div>
                <div className="col-span-1 font-medium">Quantity</div>
                <div className="col-span-2 font-medium">Location</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                date: "Apr 8, 2025",
                reference: "PO-1042",
                type: "Purchase",
                item: "Office Chair - Ergonomic",
                quantity: "+10",
                location: "Main Warehouse",
              },
              {
                date: "Apr 7, 2025",
                reference: "SO-3087",
                type: "Sale",
                item: "Wireless Keyboard",
                quantity: "-3",
                location: "Main Warehouse",
              },
              {
                date: "Apr 7, 2025",
                reference: "ADJ-245",
                type: "Adjustment",
                item: "Desk Lamp - LED",
                quantity: "-2",
                location: "Main Warehouse",
              },
              {
                date: "Apr 6, 2025",
                reference: "TR-089",
                type: "Transfer",
                item: "Monitor Stand - Adjustable",
                quantity: "-5",
                location: "Main Warehouse → Retail Store",
              },
              {
                date: "Apr 5, 2025",
                reference: "PO-1041",
                type: "Purchase",
                item: "Desk - Standing",
                quantity: "+4",
                location: "Main Warehouse",
              },
              {
                date: "Apr 4, 2025",
                reference: "SO-3086",
                type: "Sale",
                item: "Laptop Docking Station",
                quantity: "-2",
                location: "Retail Store",
              },
              {
                date: "Apr 3, 2025",
                reference: "ADJ-244",
                type: "Adjustment",
                item: "Wireless Mouse",
                quantity: "+1",
                location: "Retail Store",
              },
              {
                date: "Apr 2, 2025",
                reference: "PO-1040",
                type: "Purchase",
                item: "Desk Organizer",
                quantity: "+20",
                location: "Main Warehouse",
              },
              {
                date: "Apr 1, 2025",
                reference: "SO-3085",
                type: "Sale",
                item: "Office Chair - Standard",
                quantity: "-5",
                location: "Main Warehouse",
              },
              {
                date: "Apr 1, 2025",
                reference: "TR-088",
                type: "Transfer",
                item: "Printer Paper - Premium",
                quantity: "-10",
                location: "Main Warehouse → Distribution Center",
              },
            ].map((movement, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2">{movement.date}</div>
                  <div className="col-span-2">{movement.reference}</div>
                  <div className="col-span-2">
                    <Badge
                      variant={
                        movement.type === "Purchase"
                          ? "default"
                          : movement.type === "Sale"
                            ? "destructive"
                            : movement.type === "Transfer"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {movement.type}
                    </Badge>
                  </div>
                  <div className="col-span-2">{movement.item}</div>
                  <div
                    className="col-span-1"
                    style={{
                      color: movement.quantity.startsWith("+")
                        ? "green"
                        : movement.quantity.startsWith("-")
                          ? "red"
                          : "inherit",
                    }}
                  >
                    {movement.quantity}
                  </div>
                  <div className="col-span-2">{movement.location}</div>
                  <div className="col-span-1 text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Valuation Tab */}
        <TabsContent value="valuation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Valuation</CardTitle>
              <CardDescription>Current valuation of inventory by category and location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Valuation by Category */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Valuation by Category</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3 font-medium">Category</div>
                        <div className="col-span-2 font-medium">Items</div>
                        <div className="col-span-2 font-medium">Quantity</div>
                        <div className="col-span-2 font-medium">Avg. Cost</div>
                        <div className="col-span-3 font-medium">Total Value</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      { category: "Furniture", items: 42, quantity: 80, avgCost: "$120.50", totalValue: "$9,640.00" },
                      {
                        category: "Electronics",
                        items: 68,
                        quantity: 135,
                        avgCost: "$85.75",
                        totalValue: "$11,576.25",
                      },
                      { category: "Lighting", items: 24, quantity: 56, avgCost: "$50.00", totalValue: "$2,800.00" },
                      { category: "Supplies", items: 113, quantity: 450, avgCost: "$12.25", totalValue: "$5,512.50" },
                    ].map((category, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">{category.category}</div>
                          <div className="col-span-2">{category.items}</div>
                          <div className="col-span-2">{category.quantity}</div>
                          <div className="col-span-2">{category.avgCost}</div>
                          <div className="col-span-3 font-medium">{category.totalValue}</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t p-4 bg-muted/20">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-bold">Total</div>
                        <div className="col-span-2 font-bold">247</div>
                        <div className="col-span-2 font-bold">721</div>
                        <div className="col-span-2"></div>
                        <div className="col-span-3 font-bold">$29,528.75</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Valuation by Location */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Valuation by Location</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3 font-medium">Location</div>
                        <div className="col-span-2 font-medium">Items</div>
                        <div className="col-span-2 font-medium">Quantity</div>
                        <div className="col-span-2 font-medium">% of Total</div>
                        <div className="col-span-3 font-medium">Total Value</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      {
                        location: "Main Warehouse",
                        items: 247,
                        quantity: 520,
                        percentage: "72.1%",
                        totalValue: "$21,280.75",
                      },
                      {
                        location: "Retail Store",
                        items: 86,
                        quantity: 120,
                        percentage: "16.6%",
                        totalValue: "$5,248.00",
                      },
                      {
                        location: "Distribution Center",
                        items: 42,
                        quantity: 65,
                        percentage: "9.0%",
                        totalValue: "$2,600.00",
                      },
                      {
                        location: "Office Storage",
                        items: 18,
                        quantity: 16,
                        percentage: "2.2%",
                        totalValue: "$400.00",
                      },
                    ].map((location, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">{location.location}</div>
                          <div className="col-span-2">{location.items}</div>
                          <div className="col-span-2">{location.quantity}</div>
                          <div className="col-span-2">{location.percentage}</div>
                          <div className="col-span-3 font-medium">{location.totalValue}</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t p-4 bg-muted/20">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-bold">Total</div>
                        <div className="col-span-2 font-bold">-</div>
                        <div className="col-span-2 font-bold">721</div>
                        <div className="col-span-2 font-bold">100%</div>
                        <div className="col-span-3 font-bold">$29,528.75</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Locations Tab */}
        <TabsContent value="locations" className="space-y-4">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Inventory Locations</h3>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Location
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Main Warehouse",
                address: "123 Storage Ave, Warehouse District",
                items: 247,
                value: "$21,280.75",
                status: "Active",
              },
              {
                name: "Retail Store",
                address: "456 Main St, Downtown",
                items: 86,
                value: "$5,248.00",
                status: "Active",
              },
              {
                name: "Distribution Center",
                address: "789 Logistics Blvd, Industrial Park",
                items: 42,
                value: "$2,600.00",
                status: "Active",
              },
              {
                name: "Office Storage",
                address: "101 Corporate Plaza, Suite 200",
                items: 18,
                value: "$400.00",
                status: "Active",
              },
            ].map((location, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{location.name}</CardTitle>
                    <Badge>{location.status}</Badge>
                  </div>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="text-lg font-medium">{location.items}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Value</p>
                      <p className="text-lg font-medium">{location.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Item Dialog */}
      <Dialog open={showAddItemDialog} onOpenChange={setShowAddItemDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Inventory Item</DialogTitle>
            <DialogDescription>Enter the details of the new inventory item.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="item-name">Item Name</Label>
                <Input id="item-name" placeholder="Enter item name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" placeholder="Enter SKU" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="lighting">Lighting</SelectItem>
                    <SelectItem value="supplies">Supplies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="valuation-method">Valuation Method</Label>
                <Select>
                  <SelectTrigger id="valuation-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fifo">FIFO (First In, First Out)</SelectItem>
                    <SelectItem value="lifo">LIFO (Last In, First Out)</SelectItem>
                    <SelectItem value="average">Average Cost</SelectItem>
                    <SelectItem value="specific">Specific Identification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cost">Unit Cost</Label>
                <Input id="cost" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Selling Price</Label>
                <Input id="price" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax">Tax Rate (%)</Label>
                <Input id="tax" type="number" placeholder="0.00" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="initial-qty">Initial Quantity</Label>
                <Input id="initial-qty" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reorder-point">Reorder Point</Label>
                <Input id="reorder-point" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="distribution">Distribution Center</SelectItem>
                    <SelectItem value="office">Office Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Enter item description" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddItemDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddItem}>Add Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Adjustment Dialog */}
      <Dialog open={showAdjustmentDialog} onOpenChange={setShowAdjustmentDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Record Inventory Adjustment</DialogTitle>
            <DialogDescription>Adjust inventory quantities for accuracy or write-offs.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="adjustment-item">Item</Label>
              <Select>
                <SelectTrigger id="adjustment-item">
                  <SelectValue placeholder="Select item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chair-ergo">Office Chair - Ergonomic</SelectItem>
                  <SelectItem value="desk-lamp">Desk Lamp - LED</SelectItem>
                  <SelectItem value="keyboard">Wireless Keyboard</SelectItem>
                  <SelectItem value="monitor-stand">Monitor Stand - Adjustable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adjustment-qty">Quantity Change</Label>
                <Input id="adjustment-qty" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adjustment-location">Location</Label>
                <Select>
                  <SelectTrigger id="adjustment-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="distribution">Distribution Center</SelectItem>
                    <SelectItem value="office">Office Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="adjustment-reason">Reason</Label>
              <Select>
                <SelectTrigger id="adjustment-reason">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="count">Physical Count</SelectItem>
                  <SelectItem value="damage">Damaged Goods</SelectItem>
                  <SelectItem value="theft">Theft/Loss</SelectItem>
                  <SelectItem value="return">Customer Return</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="adjustment-notes">Notes</Label>
              <Input id="adjustment-notes" placeholder="Enter notes for this adjustment" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAdjustmentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdjustment}>Record Adjustment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Transfer Dialog */}
      <Dialog open={showTransferDialog} onOpenChange={setShowTransferDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Transfer Inventory</DialogTitle>
            <DialogDescription>Move inventory items between locations.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="transfer-item">Item</Label>
              <Select>
                <SelectTrigger id="transfer-item">
                  <SelectValue placeholder="Select item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chair-ergo">Office Chair - Ergonomic</SelectItem>
                  <SelectItem value="desk-lamp">Desk Lamp - LED</SelectItem>
                  <SelectItem value="keyboard">Wireless Keyboard</SelectItem>
                  <SelectItem value="monitor-stand">Monitor Stand - Adjustable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer-qty">Quantity to Transfer</Label>
              <Input id="transfer-qty" type="number" placeholder="0" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from-location">From Location</Label>
                <Select>
                  <SelectTrigger id="from-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="distribution">Distribution Center</SelectItem>
                    <SelectItem value="office">Office Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="to-location">To Location</Label>
                <Select>
                  <SelectTrigger id="to-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="distribution">Distribution Center</SelectItem>
                    <SelectItem value="office">Office Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer-notes">Notes</Label>
              <Input id="transfer-notes" placeholder="Enter notes for this transfer" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTransferDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleTransfer}>Transfer Stock</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
