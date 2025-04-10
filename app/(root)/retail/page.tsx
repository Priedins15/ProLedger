import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function RetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Retail & eCommerce Integration" description="Manage POS and online sales channels" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="sales">Sales Channels</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Sync</TabsTrigger>
            <TabsTrigger value="orders">Order Management</TabsTrigger>
            <TabsTrigger value="reports">Sales Reports</TabsTrigger>
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
              New Channel
            </Button>
          </div>
        </div>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Sales</CardTitle>
                <CardDescription>All channels (MTD)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245,678</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>In-Store Sales</CardTitle>
                <CardDescription>Physical locations (MTD)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$745,321</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Online Sales</CardTitle>
                <CardDescription>eCommerce platforms (MTD)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$500,357</div>
                <p className="text-xs text-muted-foreground">+24.8% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average Order Value</CardTitle>
                <CardDescription>Across all channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$85.42</div>
                <p className="text-xs text-muted-foreground">+3.7% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sales Channels</CardTitle>
              <CardDescription>Manage integrated sales platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Channel</div>
                  <div>Type</div>
                  <div>Integration Status</div>
                  <div>Last Sync</div>
                  <div>MTD Sales</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Main Street Store</div>
                  <div>POS</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Connected</span>
                  </div>
                  <div>10 minutes ago</div>
                  <div>$345,678</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Downtown Location</div>
                  <div>POS</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Connected</span>
                  </div>
                  <div>15 minutes ago</div>
                  <div>$399,643</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Company Website</div>
                  <div>eCommerce</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Connected</span>
                  </div>
                  <div>5 minutes ago</div>
                  <div>$325,890</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Amazon Store</div>
                  <div>Marketplace</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Connected</span>
                  </div>
                  <div>30 minutes ago</div>
                  <div>$124,567</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Shopify Store</div>
                  <div>eCommerce</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Sync Error</span>
                  </div>
                  <div>2 hours ago</div>
                  <div>$49,900</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Synchronization</CardTitle>
              <CardDescription>Manage inventory across all sales channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Product</div>
                  <div>SKU</div>
                  <div>Available Qty</div>
                  <div>Allocated</div>
                  <div>Sync Status</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Premium T-Shirt</div>
                  <div>TS-PRE-001</div>
                  <div>245</div>
                  <div>32</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Synced</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Designer Jeans</div>
                  <div>DJ-BLU-002</div>
                  <div>124</div>
                  <div>18</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Synced</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Leather Wallet</div>
                  <div>LW-BRN-003</div>
                  <div>56</div>
                  <div>7</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Partial Sync</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Wireless Headphones</div>
                  <div>WH-BLK-004</div>
                  <div>12</div>
                  <div>5</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">Low Stock</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Smart Watch</div>
                  <div>SW-SLV-005</div>
                  <div>34</div>
                  <div>8</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Synced</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>Track and process orders from all channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 text-sm font-medium">
                  <div>Order #</div>
                  <div>Channel</div>
                  <div>Customer</div>
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>ORD-10245</div>
                  <div>Website</div>
                  <div>John Smith</div>
                  <div>Apr 10, 2025</div>
                  <div>$124.95</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">Processing</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>ORD-10244</div>
                  <div>Main Street Store</div>
                  <div>Jane Doe</div>
                  <div>Apr 10, 2025</div>
                  <div>$89.50</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Completed</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>ORD-10243</div>
                  <div>Amazon</div>
                  <div>Robert Johnson</div>
                  <div>Apr 9, 2025</div>
                  <div>$245.00</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs">Shipped</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>ORD-10242</div>
                  <div>Website</div>
                  <div>Sarah Williams</div>
                  <div>Apr 9, 2025</div>
                  <div>$67.25</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs">Shipped</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>ORD-10241</div>
                  <div>Downtown Location</div>
                  <div>Michael Brown</div>
                  <div>Apr 8, 2025</div>
                  <div>$112.75</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Completed</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Reports</CardTitle>
              <CardDescription>Generate detailed sales analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 text-sm font-medium">
                  <div>Report Name</div>
                  <div>Description</div>
                  <div>Last Generated</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Channel Performance</div>
                  <div>Sales comparison across all channels</div>
                  <div>Apr 10, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Product Performance</div>
                  <div>Best and worst selling products</div>
                  <div>Apr 8, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Sales by Location</div>
                  <div>Geographic distribution of sales</div>
                  <div>Apr 5, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Inventory Turnover</div>
                  <div>Rate of inventory sales and replenishment</div>
                  <div>Apr 1, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Customer Insights</div>
                  <div>Customer purchasing patterns and demographics</div>
                  <div>Mar 28, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
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
