"use client"

import { useState } from "react"
import { Download, FileText, Play, Save, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function ForecastingPage() {
  const { toast } = useToast()
  const [forecastType, setForecastType] = useState("revenue")
  const [forecastPeriod, setForecastPeriod] = useState("12")
  const [forecastMethod, setForecastMethod] = useState("trend")
  const [growthRate, setGrowthRate] = useState(5)

  const handleRunForecast = () => {
    toast({
      title: "Forecast generated",
      description: "Your forecast has been updated with the latest parameters.",
    })
  }

  const handleSaveScenario = () => {
    toast({
      title: "Scenario saved",
      description: "Your forecast scenario has been saved successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Forecasting & Projections" subtitle="Create financial forecasts and what-if scenarios" />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={handleRunForecast}>
            <Play className="mr-2 h-4 w-4" />
            Run Forecast
          </Button>
          <Button variant="outline" onClick={handleSaveScenario}>
            <Save className="mr-2 h-4 w-4" />
            Save Scenario
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Export Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                PDF
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Excel (.xlsx)
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                CSV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Forecast Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Forecast Settings</CardTitle>
          <CardDescription>Configure your forecast parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="forecast-type">Forecast Type</Label>
              <Select value={forecastType} onValueChange={setForecastType}>
                <SelectTrigger id="forecast-type">
                  <SelectValue placeholder="Select forecast type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="expenses">Expenses</SelectItem>
                  <SelectItem value="profit">Profit</SelectItem>
                  <SelectItem value="cashflow">Cash Flow</SelectItem>
                  <SelectItem value="complete">Complete Financial Statements</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="forecast-period">Forecast Period</Label>
              <Select value={forecastPeriod} onValueChange={setForecastPeriod}>
                <SelectTrigger id="forecast-period">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                  <SelectItem value="12">12 Months</SelectItem>
                  <SelectItem value="24">24 Months</SelectItem>
                  <SelectItem value="36">36 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="forecast-method">Forecast Method</Label>
              <Select value={forecastMethod} onValueChange={setForecastMethod}>
                <SelectTrigger id="forecast-method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trend">Trend Analysis</SelectItem>
                  <SelectItem value="regression">Regression Analysis</SelectItem>
                  <SelectItem value="moving">Moving Average</SelectItem>
                  <SelectItem value="seasonal">Seasonal Adjustment</SelectItem>
                  <SelectItem value="manual">Manual Projection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="scenario-name">Scenario Name</Label>
              <Input id="scenario-name" placeholder="Enter scenario name" defaultValue="Base Case Scenario" />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Growth Assumptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="revenue-growth">Revenue Growth</Label>
                  <span className="text-sm">{growthRate}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider
                    id="revenue-growth"
                    min={-10}
                    max={20}
                    step={0.5}
                    value={[growthRate]}
                    onValueChange={(value) => setGrowthRate(value[0])}
                  />
                  <Sliders className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="expense-growth">Expense Growth</Label>
                  <span className="text-sm">4.0%</span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider id="expense-growth" min={-10} max={20} step={0.5} defaultValue={[4]} />
                  <Sliders className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="inflation-rate">Inflation Rate</Label>
                  <span className="text-sm">2.5%</span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider id="inflation-rate" min={0} max={10} step={0.1} defaultValue={[2.5]} />
                  <Sliders className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="tax-rate">Tax Rate</Label>
                  <span className="text-sm">25.0%</span>
                </div>
                <div className="flex items-center gap-4">
                  <Slider id="tax-rate" min={15} max={40} step={0.5} defaultValue={[25]} />
                  <Sliders className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Forecast Results */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Revenue Forecast</CardTitle>
            <CardDescription>12-month projection based on trend analysis</CardDescription>
          </div>
          <Badge variant="outline" className="font-normal">
            Growth Rate: {growthRate}%
          </Badge>
        </CardHeader>
        <CardContent className="px-0">
          <div className="h-[400px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { month: "May 2025", actual: 0, forecast: 1300000 },
                  { month: "Jun 2025", actual: 0, forecast: 1365000 },
                  { month: "Jul 2025", actual: 0, forecast: 1433000 },
                  { month: "Aug 2025", actual: 0, forecast: 1505000 },
                  { month: "Sep 2025", actual: 0, forecast: 1580000 },
                  { month: "Oct 2025", actual: 0, forecast: 1659000 },
                  { month: "Nov 2025", actual: 0, forecast: 1742000 },
                  { month: "Dec 2025", actual: 0, forecast: 1829000 },
                  { month: "Jan 2026", actual: 0, forecast: 1920000 },
                  { month: "Feb 2026", actual: 0, forecast: 2016000 },
                  { month: "Mar 2026", actual: 0, forecast: 2117000 },
                  { month: "Apr 2026", actual: 0, forecast: 2223000 },
                ].map((item) => ({
                  ...item,
                  forecast: Math.round(item.forecast * (1 + (growthRate - 5) / 100)),
                }))}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#9ca3af" name="Historical" strokeWidth={2} />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#f97316"
                  name="Forecast"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly Forecast</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly Forecast</TabsTrigger>
          <TabsTrigger value="annual">Annual Forecast</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Monthly Revenue Forecast</CardTitle>
              <CardDescription>Detailed monthly projections for the next 12 months</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[150px]">Month</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                      <TableHead className="text-right">MoM Growth</TableHead>
                      <TableHead className="text-right">YoY Growth</TableHead>
                      <TableHead className="text-right">Confidence Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">May 2025</TableCell>
                      <TableCell className="text-right">$1,300,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jun 2025</TableCell>
                      <TableCell className="text-right">$1,365,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jul 2025</TableCell>
                      <TableCell className="text-right">$1,433,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Medium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Aug 2025</TableCell>
                      <TableCell className="text-right">$1,505,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Medium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sep 2025</TableCell>
                      <TableCell className="text-right">$1,580,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Medium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Oct 2025</TableCell>
                      <TableCell className="text-right">$1,659,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Medium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Nov 2025</TableCell>
                      <TableCell className="text-right">$1,742,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dec 2025</TableCell>
                      <TableCell className="text-right">$1,829,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jan 2026</TableCell>
                      <TableCell className="text-right">$1,920,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Feb 2026</TableCell>
                      <TableCell className="text-right">$2,016,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mar 2026</TableCell>
                      <TableCell className="text-right">$2,117,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Apr 2026</TableCell>
                      <TableCell className="text-right">$2,223,000</TableCell>
                      <TableCell className="text-right text-green-600">5.0%</TableCell>
                      <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                      <TableCell className="text-right">Low</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quarterly" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Quarterly Revenue Forecast</CardTitle>
              <CardDescription>Quarterly projections for the next 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Quarter</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">QoQ Growth</TableHead>
                    <TableHead className="text-right">YoY Growth</TableHead>
                    <TableHead className="text-right">Confidence Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Q2 2025</TableCell>
                    <TableCell className="text-right">$4,098,000</TableCell>
                    <TableCell className="text-right text-green-600">5.0%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Q3 2025</TableCell>
                    <TableCell className="text-right">$4,744,000</TableCell>
                    <TableCell className="text-right text-green-600">15.8%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Q4 2025</TableCell>
                    <TableCell className="text-right">$5,230,000</TableCell>
                    <TableCell className="text-right text-green-600">10.2%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Q1 2026</TableCell>
                    <TableCell className="text-right">$6,053,000</TableCell>
                    <TableCell className="text-right text-green-600">15.7%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">Low</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="annual" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Annual Revenue Forecast</CardTitle>
              <CardDescription>Annual projections for the next 3 years</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Year</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">YoY Growth</TableHead>
                    <TableHead className="text-right">CAGR (from 2025)</TableHead>
                    <TableHead className="text-right">Confidence Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">FY 2025</TableCell>
                    <TableCell className="text-right">$18,125,000</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">FY 2026</TableCell>
                    <TableCell className="text-right">$20,844,000</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">FY 2027</TableCell>
                    <TableCell className="text-right">$23,970,000</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right text-green-600">{growthRate}%</TableCell>
                    <TableCell className="text-right">Low</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Scenario Comparison</CardTitle>
              <CardDescription>Compare different forecast scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { month: "May 2025", pessimistic: 1235000, base: 1300000, optimistic: 1365000 },
                      { month: "Jun 2025", pessimistic: 1272000, base: 1365000, optimistic: 1460000 },
                      { month: "Jul 2025", pessimistic: 1310000, base: 1433000, optimistic: 1562000 },
                      { month: "Aug 2025", pessimistic: 1349000, base: 1505000, optimistic: 1671000 },
                      { month: "Sep 2025", pessimistic: 1390000, base: 1580000, optimistic: 1788000 },
                      { month: "Oct 2025", pessimistic: 1432000, base: 1659000, optimistic: 1913000 },
                      { month: "Nov 2025", pessimistic: 1475000, base: 1742000, optimistic: 2047000 },
                      { month: "Dec 2025", pessimistic: 1519000, base: 1829000, optimistic: 2190000 },
                      { month: "Jan 2026", pessimistic: 1565000, base: 1920000, optimistic: 2344000 },
                      { month: "Feb 2026", pessimistic: 1612000, base: 2016000, optimistic: 2508000 },
                      { month: "Mar 2026", pessimistic: 1660000, base: 2117000, optimistic: 2683000 },
                      { month: "Apr 2026", pessimistic: 1710000, base: 2223000, optimistic: 2871000 },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pessimistic" stroke="#ef4444" name="Pessimistic" strokeWidth={2} />
                    <Line type="monotone" dataKey="base" stroke="#f97316" name="Base Case" strokeWidth={2} />
                    <Line type="monotone" dataKey="optimistic" stroke="#22c55e" name="Optimistic" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Scenario</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Growth Rate</TableHead>
                    <TableHead className="text-right">12-Month Revenue</TableHead>
                    <TableHead className="text-right">Probability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pessimistic</TableCell>
                    <TableCell>Economic downturn, increased competition</TableCell>
                    <TableCell className="text-right">3.0%</TableCell>
                    <TableCell className="text-right">$17,529,000</TableCell>
                    <TableCell className="text-right">25%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Base Case</TableCell>
                    <TableCell>Current market conditions continue</TableCell>
                    <TableCell className="text-right">{growthRate}%</TableCell>
                    <TableCell className="text-right">$20,689,000</TableCell>
                    <TableCell className="text-right">60%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Optimistic</TableCell>
                    <TableCell>New product success, market expansion</TableCell>
                    <TableCell className="text-right">7.0%</TableCell>
                    <TableCell className="text-right">$24,402,000</TableCell>
                    <TableCell className="text-right">15%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
