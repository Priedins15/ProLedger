import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function RealEstatePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Real Estate Lease Accounting" description="Manage lease contracts and liabilities" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="leases" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="leases">Lease Contracts</TabsTrigger>
            <TabsTrigger value="liabilities">Lease Liabilities</TabsTrigger>
            <TabsTrigger value="assets">Right-of-Use Assets</TabsTrigger>
            <TabsTrigger value="reports">Lease Reports</TabsTrigger>
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
              New Lease
            </Button>
          </div>
        </div>

        <TabsContent value="leases" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Active Leases</CardTitle>
                <CardDescription>Currently in effect</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Total value: $12.8M</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Expiring Soon</CardTitle>
                <CardDescription>Next 90 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Total value: $1.2M</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Liability</CardTitle>
                <CardDescription>Present value</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$10.5M</div>
                <p className="text-xs text-muted-foreground">As of Apr 10, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Payments</CardTitle>
                <CardDescription>Average across all leases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$425K</div>
                <p className="text-xs text-muted-foreground">Next payment: May 1, 2025</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lease Contracts</CardTitle>
              <CardDescription>Overview of all lease agreements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 text-sm font-medium">
                  <div>Property</div>
                  <div>Type</div>
                  <div>Start Date</div>
                  <div>End Date</div>
                  <div>Monthly Payment</div>
                  <div>Total Obligation</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Downtown Office Tower</div>
                  <div>Commercial</div>
                  <div>Jan 1, 2023</div>
                  <div>Dec 31, 2027</div>
                  <div>$85,000</div>
                  <div>$4,250,000</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Westside Retail Space</div>
                  <div>Retail</div>
                  <div>Mar 15, 2024</div>
                  <div>Mar 14, 2029</div>
                  <div>$45,000</div>
                  <div>$2,700,000</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>North Distribution Center</div>
                  <div>Warehouse</div>
                  <div>Jul 1, 2022</div>
                  <div>Jun 30, 2025</div>
                  <div>$65,000</div>
                  <div>$2,340,000</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Expiring Soon</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Suburban Office Park</div>
                  <div>Commercial</div>
                  <div>Oct 1, 2023</div>
                  <div>Sep 30, 2028</div>
                  <div>$55,000</div>
                  <div>$3,300,000</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liabilities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lease Liabilities</CardTitle>
              <CardDescription>Present value of lease payment obligations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Property</div>
                  <div>Initial Liability</div>
                  <div>Current Liability</div>
                  <div>Interest Rate</div>
                  <div>Remaining Term</div>
                  <div>Classification</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Downtown Office Tower</div>
                  <div>$4,250,000</div>
                  <div>$3,450,000</div>
                  <div>4.5%</div>
                  <div>2 years, 8 months</div>
                  <div>Operating</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Westside Retail Space</div>
                  <div>$2,700,000</div>
                  <div>$2,520,000</div>
                  <div>4.2%</div>
                  <div>3 years, 11 months</div>
                  <div>Operating</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>North Distribution Center</div>
                  <div>$2,340,000</div>
                  <div>$780,000</div>
                  <div>3.8%</div>
                  <div>2 months</div>
                  <div>Finance</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Suburban Office Park</div>
                  <div>$3,300,000</div>
                  <div>$2,850,000</div>
                  <div>4.0%</div>
                  <div>3 years, 5 months</div>
                  <div>Operating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Right-of-Use Assets</CardTitle>
              <CardDescription>Capitalized lease assets and amortization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Property</div>
                  <div>Initial Value</div>
                  <div>Current Value</div>
                  <div>Accumulated Depreciation</div>
                  <div>Monthly Depreciation</div>
                  <div>Useful Life</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Downtown Office Tower</div>
                  <div>$4,250,000</div>
                  <div>$3,325,000</div>
                  <div>$925,000</div>
                  <div>$70,833</div>
                  <div>5 years</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Westside Retail Space</div>
                  <div>$2,700,000</div>
                  <div>$2,430,000</div>
                  <div>$270,000</div>
                  <div>$45,000</div>
                  <div>5 years</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>North Distribution Center</div>
                  <div>$2,340,000</div>
                  <div>$780,000</div>
                  <div>$1,560,000</div>
                  <div>$65,000</div>
                  <div>3 years</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Suburban Office Park</div>
                  <div>$3,300,000</div>
                  <div>$2,750,000</div>
                  <div>$550,000</div>
                  <div>$55,000</div>
                  <div>5 years</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lease Reports</CardTitle>
              <CardDescription>Generate lease-related financial reports</CardDescription>
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
                  <div>Lease Liability Schedule</div>
                  <div>Detailed breakdown of lease liabilities</div>
                  <div>Apr 5, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>ROU Asset Register</div>
                  <div>Register of all right-of-use assets</div>
                  <div>Apr 3, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Lease Expense Analysis</div>
                  <div>Breakdown of lease-related expenses</div>
                  <div>Apr 1, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Lease Maturity Analysis</div>
                  <div>Analysis of lease contract maturities</div>
                  <div>Mar 28, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>ASC 842 Disclosure Report</div>
                  <div>Compliance report for ASC 842 disclosures</div>
                  <div>Mar 25, 2025</div>
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
