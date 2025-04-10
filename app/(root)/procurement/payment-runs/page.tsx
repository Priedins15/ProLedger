import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Plus, Search, Clock, Eye, Play, Pause, MoreHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function PaymentRunsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Payment Runs</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Payment Run
          </Button>
        </div>
      </div>

      <Tabs defaultValue="scheduled" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search payment runs..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Scheduled Payment Runs</CardTitle>
              <CardDescription>Upcoming automated payment batches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Scheduled This Week</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">$45,780.50 total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Scheduled This Month</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">$124,350.75 total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium">Recurring Payment Runs</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Active recurring schedules</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Methods</SelectItem>
                      <SelectItem value="ach">ACH</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="wire">Wire Transfer</SelectItem>
                      <SelectItem value="card">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-asc">Date (Earliest First)</SelectItem>
                      <SelectItem value="date-desc">Date (Latest First)</SelectItem>
                      <SelectItem value="amount-high">Amount (High to Low)</SelectItem>
                      <SelectItem value="amount-low">Amount (Low to High)</SelectItem>
                      <SelectItem value="bills-high">Bills Count (High to Low)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Run ID</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Next Run Date</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead>Bills</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "RUN-001",
                        schedule: "Weekly",
                        nextRunDate: "Apr 10, 2025",
                        paymentMethod: "ACH",
                        bills: 12,
                        amount: "$24,580.50",
                        status: "Scheduled",
                      },
                      {
                        id: "RUN-002",
                        schedule: "Monthly",
                        nextRunDate: "Apr 15, 2025",
                        paymentMethod: "Wire Transfer",
                        bills: 8,
                        amount: "$15,350.00",
                        status: "Scheduled",
                      },
                      {
                        id: "RUN-003",
                        schedule: "Bi-weekly",
                        nextRunDate: "Apr 12, 2025",
                        paymentMethod: "ACH",
                        bills: 5,
                        amount: "$5,850.00",
                        status: "Scheduled",
                      },
                      {
                        id: "RUN-004",
                        schedule: "Monthly",
                        nextRunDate: "Apr 20, 2025",
                        paymentMethod: "Check",
                        bills: 15,
                        amount: "$32,450.75",
                        status: "Scheduled",
                      },
                      {
                        id: "RUN-005",
                        schedule: "Weekly",
                        nextRunDate: "Apr 17, 2025",
                        paymentMethod: "ACH",
                        bills: 7,
                        amount: "$8,750.00",
                        status: "Scheduled",
                      },
                    ].map((run) => (
                      <TableRow key={run.id}>
                        <TableCell className="font-medium">{run.id}</TableCell>
                        <TableCell>{run.schedule}</TableCell>
                        <TableCell>{run.nextRunDate}</TableCell>
                        <TableCell>{run.paymentMethod}</TableCell>
                        <TableCell>{run.bills}</TableCell>
                        <TableCell>{run.amount}</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100" variant="outline">
                            <Clock className="mr-1 h-3 w-3" />
                            {run.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Run Now
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Pause className="mr-2 h-4 w-4" />
                                Pause Schedule
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>In-Progress Payment Runs</CardTitle>
              <CardDescription>Payment runs currently being processed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Run ID</TableHead>
                      <TableHead>Started</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead>Bills</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "RUN-006",
                        started: "Apr 9, 2025 09:15 AM",
                        paymentMethod: "ACH",
                        bills: 18,
                        amount: "$35,780.25",
                        progress: 65,
                        status: "Processing",
                      },
                      {
                        id: "RUN-007",
                        started: "Apr 9, 2025 10:30 AM",
                        paymentMethod: "Wire Transfer",
                        bills: 5,
                        amount: "$42,500.00",
                        progress: 30,
                        status: "Processing",
                      },
                    ].map((run) => (
                      <TableRow key={run.id}>
                        <TableCell className="font-medium">{run.id}</TableCell>
                        <TableCell>{run.started}</TableCell>
                        <TableCell>{run.paymentMethod}</TableCell>
                        <TableCell>{run.bills}</TableCell>
                        <TableCell>{run.amount}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={run.progress} className="h-2" />
                            <span className="text-xs">{run.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100" variant="outline">
                            <Clock className="mr-1 h-3 w-3" />
                            {run.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="mr-1 h-4 w-4" />
                            View
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
      </Tabs>
    </div>
  )
}
