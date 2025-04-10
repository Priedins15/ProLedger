"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  ClipboardList,
  ArrowUpDown,
  MoreHorizontal,
  Download,
  Filter,
  Search,
  Clock,
  BarChart,
  AlertCircle,
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

export default function WIPAccountingPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("wip-overview")

  const handleAction = (action: string, itemId: string) => {
    toast({
      title: `${action} for item ${itemId}`,
      description: `${action} action triggered for item ${itemId}`,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Work-in-Progress Accounting"
          subtitle="Track and manage costs for partially completed products"
        />
        <div className="flex items-center gap-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total WIP Value</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$145,780.50</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+12.5%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-amber-500">+3</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+5%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Jobs</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">+1</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="wip-overview" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="wip-overview">WIP Overview</TabsTrigger>
            <TabsTrigger value="job-costing">Job Costing</TabsTrigger>
            <TabsTrigger value="cost-allocation">Cost Allocation</TabsTrigger>
          </TabsList>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full md:w-[250px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <DateRangePicker className="hidden lg:block" />
            </div>
          </div>
        </div>

        <TabsContent value="wip-overview" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>WIP Value by Department</CardTitle>
              <CardDescription>Current work-in-progress value by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={[
                      { department: "Assembly", materials: 45000, labor: 32000, overhead: 18000, total: 95000 },
                      { department: "Fabrication", materials: 28000, labor: 15000, overhead: 7500, total: 50500 },
                      { department: "Finishing", materials: 12000, labor: 18000, overhead: 9000, total: 39000 },
                      { department: "Testing", materials: 5000, labor: 8000, overhead: 4000, total: 17000 },
                      { department: "Packaging", materials: 3000, labor: 5000, overhead: 2500, total: 10500 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="materials" name="Materials" stackId="a" fill="#8884d8" />
                    <Bar dataKey="labor" name="Labor" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="overhead" name="Overhead" stackId="a" fill="#ffc658" />
                    <Area dataKey="total" name="Total Value" fill="#ff7300" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Active WIP Jobs</CardTitle>
              <CardDescription>Currently active work-in-progress jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Job Number</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Start Date</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>% Complete</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>WIP Value</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "J001",
                      description: "Custom Furniture Set",
                      department: "Assembly",
                      startDate: "Apr 1, 2025",
                      percentComplete: 75,
                      wipValue: 28500.0,
                      status: "On Track",
                    },
                    {
                      id: "J002",
                      description: "Metal Components",
                      department: "Fabrication",
                      startDate: "Apr 3, 2025",
                      percentComplete: 60,
                      wipValue: 15200.0,
                      status: "On Track",
                    },
                    {
                      id: "J003",
                      description: "Electronic Assemblies",
                      department: "Assembly",
                      startDate: "Apr 5, 2025",
                      percentComplete: 45,
                      wipValue: 22750.0,
                      status: "At Risk",
                    },
                    {
                      id: "J004",
                      description: "Painted Panels",
                      department: "Finishing",
                      startDate: "Apr 7, 2025",
                      percentComplete: 90,
                      wipValue: 8900.0,
                      status: "On Track",
                    },
                    {
                      id: "J005",
                      description: "Circuit Boards",
                      department: "Testing",
                      startDate: "Apr 8, 2025",
                      percentComplete: 85,
                      wipValue: 12300.0,
                      status: "On Track",
                    },
                    {
                      id: "J006",
                      description: "Plastic Moldings",
                      department: "Fabrication",
                      startDate: "Apr 10, 2025",
                      percentComplete: 30,
                      wipValue: 9800.0,
                      status: "Delayed",
                    },
                    {
                      id: "J007",
                      description: "Retail Display Units",
                      department: "Assembly",
                      startDate: "Apr 12, 2025",
                      percentComplete: 50,
                      wipValue: 18500.0,
                      status: "On Track",
                    },
                    {
                      id: "J008",
                      description: "Metal Frames",
                      department: "Fabrication",
                      startDate: "Apr 15, 2025",
                      percentComplete: 25,
                      wipValue: 7800.0,
                      status: "On Track",
                    },
                  ].map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.id}</TableCell>
                      <TableCell>{job.description}</TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>{job.startDate}</TableCell>
                      <TableCell>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              job.status === "Delayed"
                                ? "bg-red-600"
                                : job.status === "At Risk"
                                  ? "bg-amber-500"
                                  : "bg-green-600"
                            }`}
                            style={{ width: `${job.percentComplete}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{job.percentComplete}%</span>
                      </TableCell>
                      <TableCell>${job.wipValue.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            job.status === "On Track"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : job.status === "At Risk"
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {job.status}
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
                            <DropdownMenuItem onClick={() => handleAction("View details", job.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Update progress", job.id)}>
                              Update progress
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleAction("Add costs", job.id)}>
                              Add costs
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAction("Complete job", job.id)}>
                              Complete job
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

        <TabsContent value="job-costing" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Job Cost Breakdown</CardTitle>
              <CardDescription>Detailed cost breakdown by job</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Material Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$93,000.00</div>
                      <p className="text-sm text-muted-foreground">63.8% of total WIP value</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Labor Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$38,000.00</div>
                      <p className="text-sm text-muted-foreground">26.1% of total WIP value</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Overhead Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$14,780.50</div>
                      <p className="text-sm text-muted-foreground">10.1% of total WIP value</p>
                    </CardContent>
                  </Card>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Job Number</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Materials</TableHead>
                      <TableHead>Labor</TableHead>
                      <TableHead>Overhead</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "J001",
                        description: "Custom Furniture Set",
                        materials: 18500.0,
                        labor: 7500.0,
                        overhead: 2500.0,
                        total: 28500.0,
                      },
                      {
                        id: "J002",
                        description: "Metal Components",
                        materials: 10000.0,
                        labor: 4000.0,
                        overhead: 1200.0,
                        total: 15200.0,
                      },
                      {
                        id: "J003",
                        description: "Electronic Assemblies",
                        materials: 15000.0,
                        labor: 5500.0,
                        overhead: 2250.0,
                        total: 22750.0,
                      },
                      {
                        id: "J004",
                        description: "Painted Panels",
                        materials: 5000.0,
                        labor: 3000.0,
                        overhead: 900.0,
                        total: 8900.0,
                      },
                      {
                        id: "J005",
                        description: "Circuit Boards",
                        materials: 8500.0,
                        labor: 2800.0,
                        overhead: 1000.0,
                        total: 12300.0,
                      },
                    ].map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium">{job.id}</TableCell>
                        <TableCell>{job.description}</TableCell>
                        <TableCell>${job.materials.toFixed(2)}</TableCell>
                        <TableCell>${job.labor.toFixed(2)}</TableCell>
                        <TableCell>${job.overhead.toFixed(2)}</TableCell>
                        <TableCell className="font-bold">${job.total.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => handleAction("View details", job.id)}>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cost-allocation" className="space-y-4 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Cost Allocation Methods</CardTitle>
              <CardDescription>Configure and manage cost allocation methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Overhead Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Current Method:</span>
                          <Badge>Activity-Based Costing</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Updated:</span>
                          <span>Apr 1, 2025</span>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Change Method
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Labor Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Current Method:</span>
                          <Badge>Direct Labor Hours</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Updated:</span>
                          <span>Mar 15, 2025</span>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Change Method
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Allocation Rates</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Department</TableHead>
                        <TableHead>Overhead Rate</TableHead>
                        <TableHead>Labor Rate</TableHead>
                        <TableHead>Machine Rate</TableHead>
                        <TableHead>Basis</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          department: "Assembly",
                          overheadRate: 25.0,
                          laborRate: 35.0,
                          machineRate: 15.0,
                          basis: "Direct Labor Hours",
                        },
                        {
                          department: "Fabrication",
                          overheadRate: 30.0,
                          laborRate: 40.0,
                          machineRate: 25.0,
                          basis: "Machine Hours",
                        },
                        {
                          department: "Finishing",
                          overheadRate: 20.0,
                          laborRate: 32.0,
                          machineRate: 18.0,
                          basis: "Direct Labor Hours",
                        },
                        {
                          department: "Testing",
                          overheadRate: 22.0,
                          laborRate: 38.0,
                          machineRate: 12.0,
                          basis: "Direct Labor Hours",
                        },
                        {
                          department: "Packaging",
                          overheadRate: 18.0,
                          laborRate: 30.0,
                          machineRate: 10.0,
                          basis: "Direct Labor Hours",
                        },
                      ].map((dept, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{dept.department}</TableCell>
                          <TableCell>${dept.overheadRate.toFixed(2)}/hr</TableCell>
                          <TableCell>${dept.laborRate.toFixed(2)}/hr</TableCell>
                          <TableCell>${dept.machineRate.toFixed(2)}/hr</TableCell>
                          <TableCell>{dept.basis}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleAction("Edit rates", dept.department)}
                            >
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
