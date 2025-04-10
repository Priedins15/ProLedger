import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Manufacturing Costing & MRP" description="Track manufacturing costs and manage materials" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="bom" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="bom">Bill of Materials</TabsTrigger>
            <TabsTrigger value="mrp">Material Requirements</TabsTrigger>
            <TabsTrigger value="costing">Production Costing</TabsTrigger>
            <TabsTrigger value="work-orders">Work Orders</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full md:w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New BOM
            </Button>
          </div>
        </div>

        <TabsContent value="bom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bills of Materials</CardTitle>
              <CardDescription>Manage product components and assembly instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Product</div>
                  <div>Version</div>
                  <div>Components</div>
                  <div>Total Cost</div>
                  <div>Last Updated</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Standard Widget</div>
                  <div>v2.3</div>
                  <div>12</div>
                  <div>$45.67</div>
                  <div>Apr 5, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Premium Widget</div>
                  <div>v1.5</div>
                  <div>18</div>
                  <div>$78.90</div>
                  <div>Apr 2, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Deluxe Widget</div>
                  <div>v3.0</div>
                  <div>24</div>
                  <div>$125.45</div>
                  <div>Mar 28, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Economy Widget</div>
                  <div>v1.0</div>
                  <div>8</div>
                  <div>$23.50</div>
                  <div>Mar 15, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                      Revision Pending
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mrp" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Materials to Order</CardTitle>
                <CardDescription>Based on current demand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Updated 1 hour ago</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>Below reorder point</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Updated 1 hour ago</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pending Orders</CardTitle>
                <CardDescription>Purchase orders in process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Updated 1 hour ago</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Production Capacity</CardTitle>
                <CardDescription>Current utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Updated 1 hour ago</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Material Requirements</CardTitle>
              <CardDescription>Projected material needs based on production schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Material</div>
                  <div>Current Stock</div>
                  <div>Required</div>
                  <div>Shortage</div>
                  <div>Lead Time</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Aluminum Sheet (2mm)</div>
                  <div>250 units</div>
                  <div>500 units</div>
                  <div>250 units</div>
                  <div>7 days</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">Order Required</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Steel Bolts (10mm)</div>
                  <div>1,500 units</div>
                  <div>1,200 units</div>
                  <div>0 units</div>
                  <div>3 days</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Sufficient</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Plastic Housing (Type A)</div>
                  <div>100 units</div>
                  <div>350 units</div>
                  <div>250 units</div>
                  <div>14 days</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">Order Required</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Circuit Board v2</div>
                  <div>200 units</div>
                  <div>180 units</div>
                  <div>0 units</div>
                  <div>21 days</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Sufficient</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Production Costing</CardTitle>
              <CardDescription>Track and analyze manufacturing costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Product</div>
                  <div>Material Cost</div>
                  <div>Labor Cost</div>
                  <div>Overhead</div>
                  <div>Total Cost</div>
                  <div>Margin</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Standard Widget</div>
                  <div>$25.30</div>
                  <div>$12.50</div>
                  <div>$7.87</div>
                  <div>$45.67</div>
                  <div>42%</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Premium Widget</div>
                  <div>$42.15</div>
                  <div>$22.75</div>
                  <div>$14.00</div>
                  <div>$78.90</div>
                  <div>55%</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Deluxe Widget</div>
                  <div>$68.20</div>
                  <div>$35.25</div>
                  <div>$22.00</div>
                  <div>$125.45</div>
                  <div>62%</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Economy Widget</div>
                  <div>$12.75</div>
                  <div>$6.25</div>
                  <div>$4.50</div>
                  <div>$23.50</div>
                  <div>32%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="work-orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Orders</CardTitle>
              <CardDescription>Track production work orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Order #</div>
                  <div>Product</div>
                  <div>Quantity</div>
                  <div>Start Date</div>
                  <div>Due Date</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>WO-2025-0123</div>
                  <div>Standard Widget</div>
                  <div>500</div>
                  <div>Apr 5, 2025</div>
                  <div>Apr 15, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">In Progress</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>WO-2025-0124</div>
                  <div>Premium Widget</div>
                  <div>250</div>
                  <div>Apr 7, 2025</div>
                  <div>Apr 20, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">In Progress</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>WO-2025-0125</div>
                  <div>Deluxe Widget</div>
                  <div>100</div>
                  <div>Apr 10, 2025</div>
                  <div>Apr 25, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                      Pending Materials
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>WO-2025-0126</div>
                  <div>Economy Widget</div>
                  <div>1000</div>
                  <div>Apr 12, 2025</div>
                  <div>Apr 22, 2025</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs">Scheduled</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
