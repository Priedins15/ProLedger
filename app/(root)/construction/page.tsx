import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ConstructionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Construction Project Costing" description="Track project budgets and costs" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
            <TabsTrigger value="cost-codes">Cost Codes</TabsTrigger>
            <TabsTrigger value="reports">Project Reports</TabsTrigger>
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
              New Project
            </Button>
          </div>
        </div>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Currently in progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Total value: $12.5M</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pending Projects</CardTitle>
                <CardDescription>Awaiting approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Total value: $4.2M</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Completed Projects</CardTitle>
                <CardDescription>Last 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Total value: $18.7M</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Budget Variance</CardTitle>
                <CardDescription>Average across projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">+4.2%</div>
                <p className="text-xs text-muted-foreground">Above budget</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Status of current construction projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-6 text-sm font-medium">
                  <div>Project Name</div>
                  <div>Client</div>
                  <div>Budget</div>
                  <div>Actual Cost</div>
                  <div>Completion</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Riverfront Tower</div>
                  <div>Apex Development</div>
                  <div>$4,500,000</div>
                  <div>$3,200,000</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="h-2" />
                      <span>65%</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">On Track</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Westside Office Park</div>
                  <div>Metro Commercial</div>
                  <div>$2,800,000</div>
                  <div>$2,950,000</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="h-2" />
                      <span>85%</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Over Budget</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Parkview Residences</div>
                  <div>Highland Homes</div>
                  <div>$3,200,000</div>
                  <div>$1,800,000</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Progress value={45} className="h-2" />
                      <span>45%</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">On Track</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-sm">
                  <div>Central Hospital Expansion</div>
                  <div>City Healthcare</div>
                  <div>$5,500,000</div>
                  <div>$2,200,000</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Progress value={35} className="h-2" />
                      <span>35%</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">Delayed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Budgets</CardTitle>
              <CardDescription>Budget vs. actual cost tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 text-sm font-medium">
                  <div>Project</div>
                  <div>Original Budget</div>
                  <div>Change Orders</div>
                  <div>Revised Budget</div>
                  <div>Actual Cost</div>
                  <div>Remaining</div>
                  <div>Variance</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Riverfront Tower</div>
                  <div>$4,500,000</div>
                  <div>$250,000</div>
                  <div>$4,750,000</div>
                  <div>$3,200,000</div>
                  <div>$1,550,000</div>
                  <div className="text-green-600">-2.5%</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Westside Office Park</div>
                  <div>$2,800,000</div>
                  <div>$120,000</div>
                  <div>$2,920,000</div>
                  <div>$2,950,000</div>
                  <div>-$30,000</div>
                  <div className="text-red-600">+5.4%</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Parkview Residences</div>
                  <div>$3,200,000</div>
                  <div>$0</div>
                  <div>$3,200,000</div>
                  <div>$1,800,000</div>
                  <div>$1,400,000</div>
                  <div className="text-green-600">-3.1%</div>
                </div>
                <div className="grid grid-cols-7 text-sm">
                  <div>Central Hospital Expansion</div>
                  <div>$5,500,000</div>
                  <div>$350,000</div>
                  <div>$5,850,000</div>
                  <div>$2,200,000</div>
                  <div>$3,650,000</div>
                  <div className="text-green-600">-1.8%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cost-codes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Code Structure</CardTitle>
              <CardDescription>Standardized cost codes for project tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 text-sm font-medium">
                  <div>Code</div>
                  <div>Description</div>
                  <div>Category</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>01000</div>
                  <div>General Requirements</div>
                  <div>Overhead</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>02000</div>
                  <div>Site Construction</div>
                  <div>Direct Cost</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>03000</div>
                  <div>Concrete</div>
                  <div>Direct Cost</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>04000</div>
                  <div>Masonry</div>
                  <div>Direct Cost</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>05000</div>
                  <div>Metals</div>
                  <div>Direct Cost</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Edit
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
              <CardTitle>Project Reports</CardTitle>
              <CardDescription>Generate project-specific financial statements</CardDescription>
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
                  <div>Project Cost Summary</div>
                  <div>Summary of costs by project</div>
                  <div>Apr 5, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Cost Code Analysis</div>
                  <div>Detailed breakdown by cost code</div>
                  <div>Apr 3, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Change Order Report</div>
                  <div>Summary of all change orders</div>
                  <div>Apr 1, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Subcontractor Performance</div>
                  <div>Analysis of subcontractor costs and performance</div>
                  <div>Mar 28, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-4 text-sm">
                  <div>Project Profitability</div>
                  <div>Profit analysis by project</div>
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
