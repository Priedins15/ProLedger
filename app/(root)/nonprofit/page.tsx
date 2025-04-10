import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NonprofitPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Nonprofit Fund Accounting" description="Manage restricted and unrestricted funds" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="funds" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="funds">Funds</TabsTrigger>
            <TabsTrigger value="grants">Grants</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="reports">Fund Reports</TabsTrigger>
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
              New Fund
            </Button>
          </div>
        </div>

        <TabsContent value="funds" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>General Operating Fund</CardTitle>
                <CardDescription>Unrestricted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,678.90</div>
                <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">YTD Income</p>
                    <p className="font-medium">$1,245,678.90</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">YTD Expenses</p>
                    <p className="font-medium">$1,000,000.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Building Fund</CardTitle>
                <CardDescription>Temporarily Restricted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$567,890.12</div>
                <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">YTD Income</p>
                    <p className="font-medium">$600,000.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">YTD Expenses</p>
                    <p className="font-medium">$32,109.88</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Scholarship Endowment</CardTitle>
                <CardDescription>Permanently Restricted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234,567.89</div>
                <p className="text-xs text-muted-foreground">Updated 2 hours ago</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">YTD Income</p>
                    <p className="font-medium">$50,000.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">YTD Expenses</p>
                    <p className="font-medium">$25,000.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Fund Activity</CardTitle>
              <CardDescription>Recent transactions across all funds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Date</div>
                  <div>Description</div>
                  <div>Fund</div>
                  <div>Type</div>
                  <div className="text-right">Amount</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025</div>
                  <div>Grant from ABC Foundation</div>
                  <div>Building Fund</div>
                  <div>Income</div>
                  <div className="text-right text-green-600">$50,000.00</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 9, 2025</div>
                  <div>Staff Salaries</div>
                  <div>General Operating</div>
                  <div>Expense</div>
                  <div className="text-right text-red-600">$12,500.00</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 8, 2025</div>
                  <div>Scholarship Award</div>
                  <div>Scholarship Endowment</div>
                  <div>Expense</div>
                  <div className="text-right text-red-600">$5,000.00</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 7, 2025</div>
                  <div>Monthly Donation</div>
                  <div>General Operating</div>
                  <div>Income</div>
                  <div className="text-right text-green-600">$2,500.00</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 6, 2025</div>
                  <div>Utility Bills</div>
                  <div>General Operating</div>
                  <div>Expense</div>
                  <div className="text-right text-red-600">$1,200.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Grants</CardTitle>
              <CardDescription>Track and manage grant funding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Grant Name</div>
                  <div>Grantor</div>
                  <div>Start Date</div>
                  <div>End Date</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Youth Program Support</div>
                  <div>ABC Foundation</div>
                  <div>Jan 1, 2025</div>
                  <div>Dec 31, 2025</div>
                  <div>$100,000.00</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Technology Upgrade</div>
                  <div>XYZ Corporation</div>
                  <div>Mar 1, 2025</div>
                  <div>Feb 28, 2026</div>
                  <div>$75,000.00</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Active</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Community Outreach</div>
                  <div>City Government</div>
                  <div>Jul 1, 2024</div>
                  <div>Jun 30, 2025</div>
                  <div>$50,000.00</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">Reporting Due</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Capacity Building</div>
                  <div>Regional Foundation</div>
                  <div>Apr 1, 2025</div>
                  <div>Mar 31, 2026</div>
                  <div>$125,000.00</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">New</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donor Management</CardTitle>
              <CardDescription>Track donor contributions and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Donor Name</div>
                  <div>Type</div>
                  <div>YTD Contributions</div>
                  <div>Lifetime Giving</div>
                  <div>Last Donation</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>John Smith</div>
                  <div>Individual</div>
                  <div>$5,000.00</div>
                  <div>$25,000.00</div>
                  <div>Apr 7, 2025</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>ABC Foundation</div>
                  <div>Foundation</div>
                  <div>$100,000.00</div>
                  <div>$350,000.00</div>
                  <div>Apr 10, 2025</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>XYZ Corporation</div>
                  <div>Corporate</div>
                  <div>$75,000.00</div>
                  <div>$200,000.00</div>
                  <div>Mar 15, 2025</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Jane Doe</div>
                  <div>Individual</div>
                  <div>$10,000.00</div>
                  <div>$50,000.00</div>
                  <div>Feb 28, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fund-Specific Reports</CardTitle>
              <CardDescription>Generate financial reports by fund</CardDescription>
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
                  <div>Statement of Financial Position by Fund</div>
                  <div>Balance sheet broken down by fund</div>
                  <div>Apr 1, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Statement of Activities by Fund</div>
                  <div>Income statement broken down by fund</div>
                  <div>Apr 1, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Grant Expenditure Report</div>
                  <div>Detailed report of grant-related expenses</div>
                  <div>Mar 31, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Donor Contribution Summary</div>
                  <div>Summary of contributions by donor</div>
                  <div>Mar 31, 2025</div>
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
