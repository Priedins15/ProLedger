"use client"

import { useState } from "react"
import {
  Building,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calculator,
  FileText,
  BarChart3,
  Truck,
  Laptop,
  Printer,
  Clock,
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
import { Progress } from "@/components/ui/progress"

export default function FixedAssetsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("assets")
  const [showAddAssetDialog, setShowAddAssetDialog] = useState(false)
  const [showDepreciationDialog, setShowDepreciationDialog] = useState(false)
  const [showDisposalDialog, setShowDisposalDialog] = useState(false)

  const handleAddAsset = () => {
    setShowAddAssetDialog(false)
    toast({
      title: "Fixed asset added",
      description: "The new fixed asset has been added successfully.",
    })
  }

  const handleDepreciation = () => {
    setShowDepreciationDialog(false)
    toast({
      title: "Depreciation recorded",
      description: "The depreciation has been recorded successfully.",
    })
  }

  const handleDisposal = () => {
    setShowDisposalDialog(false)
    toast({
      title: "Asset disposal recorded",
      description: "The asset disposal has been recorded successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Fixed Assets" subtitle="Manage your fixed assets, depreciation, and disposals" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={() => setShowAddAssetDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Asset
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Asset Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setShowDepreciationDialog(true)}>
                <Calculator className="mr-2 h-4 w-4" />
                Record Depreciation
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowDisposalDialog(true)}>
                <Truck className="mr-2 h-4 w-4" />
                Record Disposal
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Generate Asset Report
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <BarChart3 className="mr-2 h-4 w-4" />
                Depreciation Schedule
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Fixed Assets Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 added this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Asset Value</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245,780</div>
            <p className="text-xs text-muted-foreground">Original cost basis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Book Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$876,340</div>
            <p className="text-xs text-muted-foreground">After accumulated depreciation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Depreciation</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,680</div>
            <p className="text-xs text-muted-foreground">Depreciation expense this year</p>
          </CardContent>
        </Card>
      </div>

      {/* Fixed Assets Tabs */}
      <Tabs defaultValue="assets" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="assets">Asset Register</TabsTrigger>
          <TabsTrigger value="depreciation">Depreciation</TabsTrigger>
          <TabsTrigger value="disposals">Disposals</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        {/* Asset Register Tab */}
        <TabsContent value="assets" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-1 items-center space-x-2">
              <Input
                placeholder="Search assets..."
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
                  <DropdownMenuItem>Acquisition Date</DropdownMenuItem>
                  <DropdownMenuItem>Status</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 font-medium">Asset Name</div>
                <div className="col-span-2 font-medium">Asset ID</div>
                <div className="col-span-1 font-medium">Category</div>
                <div className="col-span-1 font-medium">Cost</div>
                <div className="col-span-1 font-medium">NBV</div>
                <div className="col-span-2 font-medium">Acquisition Date</div>
                <div className="col-span-1 font-medium">Status</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                name: "Office Building - Headquarters",
                id: "BLDG-001",
                category: "Real Estate",
                cost: "$850,000",
                nbv: "$722,500",
                date: "Jan 15, 2020",
                status: "Active",
                depreciation: 15,
              },
              {
                name: "Delivery Truck - Ford Transit",
                id: "VEH-023",
                category: "Vehicles",
                cost: "$45,000",
                nbv: "$27,000",
                date: "Mar 10, 2022",
                status: "Active",
                depreciation: 40,
              },
              {
                name: "Production Equipment - Line 1",
                id: "MACH-056",
                category: "Machinery",
                cost: "$120,000",
                nbv: "$72,000",
                date: "Nov 5, 2021",
                status: "Active",
                depreciation: 40,
              },
              {
                name: "Server Infrastructure",
                id: "IT-089",
                category: "IT Equipment",
                cost: "$85,000",
                nbv: "$34,000",
                date: "Jul 22, 2021",
                status: "Active",
                depreciation: 60,
              },
              {
                name: "Office Furniture - Executive",
                id: "FURN-124",
                category: "Furniture",
                cost: "$32,000",
                nbv: "$19,200",
                date: "Feb 8, 2022",
                status: "Active",
                depreciation: 40,
              },
              {
                name: "Company Car - Toyota Camry",
                id: "VEH-024",
                category: "Vehicles",
                cost: "$28,000",
                nbv: "$16,800",
                date: "Sep 15, 2022",
                status: "Active",
                depreciation: 40,
              },
              {
                name: "Warehouse Shelving System",
                id: "FURN-125",
                category: "Furniture",
                cost: "$18,500",
                nbv: "$12,950",
                date: "Apr 3, 2023",
                status: "Active",
                depreciation: 30,
              },
              {
                name: "Laptop Computers (25 units)",
                id: "IT-090",
                category: "IT Equipment",
                cost: "$37,500",
                nbv: "$15,000",
                date: "May 12, 2022",
                status: "Active",
                depreciation: 60,
              },
              {
                name: "Office Renovation - 2nd Floor",
                id: "BLDG-002",
                category: "Leasehold Improvements",
                cost: "$65,000",
                nbv: "$52,000",
                date: "Aug 20, 2023",
                status: "Active",
                depreciation: 20,
              },
              {
                name: "Photocopier - Main Office",
                id: "OFF-045",
                category: "Office Equipment",
                cost: "$12,500",
                nbv: "$5,000",
                date: "Oct 7, 2021",
                status: "Active",
                depreciation: 60,
              },
            ].map((asset, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">{asset.name}</div>
                  <div className="col-span-2">{asset.id}</div>
                  <div className="col-span-1">{asset.category}</div>
                  <div className="col-span-1">{asset.cost}</div>
                  <div className="col-span-1">{asset.nbv}</div>
                  <div className="col-span-2">{asset.date}</div>
                  <div className="col-span-1">
                    <Badge variant={asset.status === "Active" ? "default" : "secondary"}>{asset.status}</Badge>
                  </div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Asset</DropdownMenuItem>
                        <DropdownMenuItem>Record Depreciation</DropdownMenuItem>
                        <DropdownMenuItem>Record Disposal</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Transfer Asset</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Depreciation Progress</span>
                    <span>{asset.depreciation}%</span>
                  </div>
                  <Progress value={asset.depreciation} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Depreciation Tab */}
        <TabsContent value="depreciation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Depreciation Schedule</CardTitle>
              <CardDescription>Current and projected depreciation by period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Depreciation by Period */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Depreciation by Period</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-2 font-medium">Period</div>
                        <div className="col-span-2 font-medium">Buildings</div>
                        <div className="col-span-2 font-medium">Vehicles</div>
                        <div className="col-span-2 font-medium">IT Equipment</div>
                        <div className="col-span-2 font-medium">Other Assets</div>
                        <div className="col-span-2 font-medium">Total</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      {
                        period: "Q1 2025",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$7,625",
                        other: "$3,980",
                        total: "$24,680",
                      },
                      {
                        period: "Q2 2025",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$7,625",
                        other: "$3,980",
                        total: "$24,680",
                      },
                      {
                        period: "Q3 2025",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$7,625",
                        other: "$3,980",
                        total: "$24,680",
                      },
                      {
                        period: "Q4 2025",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$7,625",
                        other: "$3,980",
                        total: "$24,680",
                      },
                      {
                        period: "Q1 2026",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$6,250",
                        other: "$3,980",
                        total: "$23,305",
                      },
                      {
                        period: "Q2 2026",
                        buildings: "$8,500",
                        vehicles: "$4,575",
                        it: "$6,250",
                        other: "$3,980",
                        total: "$23,305",
                      },
                    ].map((period, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-2">{period.period}</div>
                          <div className="col-span-2">{period.buildings}</div>
                          <div className="col-span-2">{period.vehicles}</div>
                          <div className="col-span-2">{period.it}</div>
                          <div className="col-span-2">{period.other}</div>
                          <div className="col-span-2 font-medium">{period.total}</div>
                        </div>
                      </div>
                    ))}
                    <div className="border-t p-4 bg-muted/20">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-2 font-bold">FY 2025 Total</div>
                        <div className="col-span-2 font-bold">$34,000</div>
                        <div className="col-span-2 font-bold">$18,300</div>
                        <div className="col-span-2 font-bold">$30,500</div>
                        <div className="col-span-2 font-bold">$15,920</div>
                        <div className="col-span-2 font-bold">$98,720</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Depreciation Methods */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Depreciation Methods by Category</h3>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3 font-medium">Asset Category</div>
                        <div className="col-span-2 font-medium">Method</div>
                        <div className="col-span-2 font-medium">Useful Life</div>
                        <div className="col-span-2 font-medium">Salvage %</div>
                        <div className="col-span-3 font-medium">Notes</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      {
                        category: "Buildings",
                        method: "Straight-Line",
                        life: "30 years",
                        salvage: "10%",
                        notes: "Commercial buildings and structures",
                      },
                      {
                        category: "Vehicles",
                        method: "Declining Balance",
                        life: "5 years",
                        salvage: "15%",
                        notes: "Company vehicles and trucks",
                      },
                      {
                        category: "IT Equipment",
                        method: "Straight-Line",
                        life: "3 years",
                        salvage: "0%",
                        notes: "Computers, servers, and networking",
                      },
                      {
                        category: "Machinery",
                        method: "Units of Production",
                        life: "10 years",
                        salvage: "5%",
                        notes: "Manufacturing and production equipment",
                      },
                      {
                        category: "Furniture",
                        method: "Straight-Line",
                        life: "7 years",
                        salvage: "0%",
                        notes: "Office and facility furniture",
                      },
                      {
                        category: "Leasehold Improvements",
                        method: "Straight-Line",
                        life: "Lease Term",
                        salvage: "0%",
                        notes: "Improvements to leased properties",
                      },
                      {
                        category: "Office Equipment",
                        method: "Straight-Line",
                        life: "5 years",
                        salvage: "0%",
                        notes: "Copiers, printers, and other equipment",
                      },
                    ].map((category, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">{category.category}</div>
                          <div className="col-span-2">{category.method}</div>
                          <div className="col-span-2">{category.life}</div>
                          <div className="col-span-2">{category.salvage}</div>
                          <div className="col-span-3">{category.notes}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Disposals Tab */}
        <TabsContent value="disposals" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-1 items-center space-x-2">
              <Input
                placeholder="Search disposals..."
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
                  <DropdownMenuItem>Disposal Date</DropdownMenuItem>
                  <DropdownMenuItem>Disposal Type</DropdownMenuItem>
                  <DropdownMenuItem>Asset Category</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 font-medium">Asset</div>
                <div className="col-span-2 font-medium">Asset ID</div>
                <div className="col-span-2 font-medium">Disposal Date</div>
                <div className="col-span-1 font-medium">Type</div>
                <div className="col-span-1 font-medium">NBV at Disposal</div>
                <div className="col-span-1 font-medium">Proceeds</div>
                <div className="col-span-1 font-medium">Gain/Loss</div>
                <div className="col-span-1 font-medium text-right">Actions</div>
              </div>
            </div>
            <Separator />
            {[
              {
                asset: "Company Car - Honda Accord",
                id: "VEH-018",
                date: "Mar 15, 2025",
                type: "Sale",
                nbv: "$8,500",
                proceeds: "$12,000",
                gainLoss: "+$3,500",
              },
              {
                asset: "Office Furniture - Cubicles",
                id: "FURN-098",
                date: "Feb 28, 2025",
                type: "Scrapped",
                nbv: "$2,200",
                proceeds: "$0",
                gainLoss: "-$2,200",
              },
              {
                asset: "Laptop Computers (10 units)",
                id: "IT-076",
                date: "Jan 10, 2025",
                type: "Sale",
                nbv: "$3,000",
                proceeds: "$2,500",
                gainLoss: "-$500",
              },
              {
                asset: "Delivery Van - Ford",
                id: "VEH-015",
                date: "Dec 5, 2024",
                type: "Trade-in",
                nbv: "$12,500",
                proceeds: "$15,000",
                gainLoss: "+$2,500",
              },
              {
                asset: "Production Equipment - Line 2",
                id: "MACH-042",
                date: "Nov 20, 2024",
                type: "Sale",
                nbv: "$45,000",
                proceeds: "$40,000",
                gainLoss: "-$5,000",
              },
              {
                asset: "Office Printers (5 units)",
                id: "OFF-032",
                date: "Oct 15, 2024",
                type: "Donation",
                nbv: "$1,800",
                proceeds: "$0",
                gainLoss: "-$1,800",
              },
            ].map((disposal, index) => (
              <div key={index} className="border-t p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3">{disposal.asset}</div>
                  <div className="col-span-2">{disposal.id}</div>
                  <div className="col-span-2">{disposal.date}</div>
                  <div className="col-span-1">
                    <Badge
                      variant={
                        disposal.type === "Sale"
                          ? "default"
                          : disposal.type === "Scrapped"
                            ? "destructive"
                            : disposal.type === "Donation"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {disposal.type}
                    </Badge>
                  </div>
                  <div className="col-span-1">{disposal.nbv}</div>
                  <div className="col-span-1">{disposal.proceeds}</div>
                  <div
                    className="col-span-1"
                    style={{
                      color: disposal.gainLoss.startsWith("+")
                        ? "green"
                        : disposal.gainLoss.startsWith("-")
                          ? "red"
                          : "inherit",
                    }}
                  >
                    {disposal.gainLoss}
                  </div>
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

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-4">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Asset Categories</h3>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Buildings",
                icon: Building,
                count: 2,
                value: "$774,500",
                method: "Straight-Line",
                life: "30 years",
              },
              {
                name: "Vehicles",
                icon: Truck,
                count: 3,
                value: "$43,800",
                method: "Declining Balance",
                life: "5 years",
              },
              {
                name: "IT Equipment",
                icon: Laptop,
                count: 12,
                value: "$49,000",
                method: "Straight-Line",
                life: "3 years",
              },
              {
                name: "Machinery",
                icon: Building,
                count: 8,
                value: "$72,000",
                method: "Units of Production",
                life: "10 years",
              },
              {
                name: "Furniture",
                icon: Building,
                count: 15,
                value: "$32,150",
                method: "Straight-Line",
                life: "7 years",
              },
              {
                name: "Office Equipment",
                icon: Printer,
                count: 2,
                value: "$5,000",
                method: "Straight-Line",
                life: "5 years",
              },
            ].map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center">
                      <category.icon className="mr-2 h-4 w-4" />
                      {category.name}
                    </CardTitle>
                    <Badge>{category.count} assets</Badge>
                  </div>
                  <CardDescription>
                    {category.method}, {category.life}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Net Book Value</p>
                      <p className="text-lg font-medium">{category.value}</p>
                    </div>
                    <div className="text-right">
                      <Button variant="ghost" size="sm">
                        View Assets
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Asset Dialog */}
      <Dialog open={showAddAssetDialog} onOpenChange={setShowAddAssetDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Fixed Asset</DialogTitle>
            <DialogDescription>Enter the details of the new fixed asset.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="asset-name">Asset Name</Label>
                <Input id="asset-name" placeholder="Enter asset name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="asset-id">Asset ID</Label>
                <Input id="asset-id" placeholder="Enter asset ID" />
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
                    <SelectItem value="buildings">Buildings</SelectItem>
                    <SelectItem value="vehicles">Vehicles</SelectItem>
                    <SelectItem value="it">IT Equipment</SelectItem>
                    <SelectItem value="machinery">Machinery</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="office">Office Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="headquarters">Headquarters</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="branch">Branch Office</SelectItem>
                    <SelectItem value="production">Production Facility</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="acquisition-date">Acquisition Date</Label>
                <Input id="acquisition-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cost">Cost Basis</Label>
                <Input id="cost" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salvage">Salvage Value</Label>
                <Input id="salvage" type="number" placeholder="0.00" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="depreciation-method">Depreciation Method</Label>
                <Select>
                  <SelectTrigger id="depreciation-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="straight">Straight-Line</SelectItem>
                    <SelectItem value="declining">Declining Balance</SelectItem>
                    <SelectItem value="units">Units of Production</SelectItem>
                    <SelectItem value="sum">Sum of Years' Digits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="useful-life">Useful Life (Years)</Label>
                <Input id="useful-life" type="number" placeholder="0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Enter asset description" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddAssetDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAsset}>Add Asset</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Depreciation Dialog */}
      <Dialog open={showDepreciationDialog} onOpenChange={setShowDepreciationDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Record Depreciation</DialogTitle>
            <DialogDescription>Record depreciation for an asset or run depreciation for a period.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="depreciation-type">Depreciation Type</Label>
              <Select defaultValue="single">
                <SelectTrigger id="depreciation-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Asset</SelectItem>
                  <SelectItem value="category">Asset Category</SelectItem>
                  <SelectItem value="all">All Assets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="depreciation-asset">Asset</Label>
              <Select>
                <SelectTrigger id="depreciation-asset">
                  <SelectValue placeholder="Select asset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bldg-001">Office Building - Headquarters</SelectItem>
                  <SelectItem value="veh-023">Delivery Truck - Ford Transit</SelectItem>
                  <SelectItem value="mach-056">Production Equipment - Line 1</SelectItem>
                  <SelectItem value="it-089">Server Infrastructure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="depreciation-period">Period</Label>
                <Select>
                  <SelectTrigger id="depreciation-period">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apr-2025">April 2025</SelectItem>
                    <SelectItem value="q2-2025">Q2 2025</SelectItem>
                    <SelectItem value="custom">Custom Period</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="depreciation-amount">Amount</Label>
                <Input id="depreciation-amount" type="number" placeholder="0.00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="depreciation-notes">Notes</Label>
              <Input id="depreciation-notes" placeholder="Enter notes for this depreciation" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDepreciationDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleDepreciation}>Record Depreciation</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Disposal Dialog */}
      <Dialog open={showDisposalDialog} onOpenChange={setShowDisposalDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Record Asset Disposal</DialogTitle>
            <DialogDescription>Record the disposal of a fixed asset.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="disposal-asset">Asset</Label>
              <Select>
                <SelectTrigger id="disposal-asset">
                  <SelectValue placeholder="Select asset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bldg-001">Office Building - Headquarters</SelectItem>
                  <SelectItem value="veh-023">Delivery Truck - Ford Transit</SelectItem>
                  <SelectItem value="mach-056">Production Equipment - Line 1</SelectItem>
                  <SelectItem value="it-089">Server Infrastructure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="disposal-date">Disposal Date</Label>
                <Input id="disposal-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disposal-type">Disposal Type</Label>
                <Select>
                  <SelectTrigger id="disposal-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Sale</SelectItem>
                    <SelectItem value="scrapped">Scrapped</SelectItem>
                    <SelectItem value="donation">Donation</SelectItem>
                    <SelectItem value="trade">Trade-in</SelectItem>
                    <SelectItem value="theft">Theft/Loss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="disposal-proceeds">Proceeds</Label>
                <Input id="disposal-proceeds" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disposal-expenses">Disposal Expenses</Label>
                <Input id="disposal-expenses" type="number" placeholder="0.00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="disposal-notes">Notes</Label>
              <Input id="disposal-notes" placeholder="Enter notes for this disposal" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDisposalDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleDisposal}>Record Disposal</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
