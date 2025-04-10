"use client"

import { useState } from "react"
import { Download, Filter, FileText, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ComparativeReportingPage() {
  const [comparisonType, setComparisonType] = useState("yoy")
  const [reportType, setReportType] = useState("revenue")
  const [periodCount, setPeriodCount] = useState("6")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle
          title="Comparative Reporting"
          subtitle="Compare financial performance across different time periods"
        />
        <div className="flex flex-col sm:flex-row gap-2">
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
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      {/* Report Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Comparison Settings</CardTitle>
          <CardDescription>Configure your comparative report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="comparison-type">Comparison Type</Label>
              <Select value={comparisonType} onValueChange={setComparisonType}>
                <SelectTrigger id="comparison-type">
                  <SelectValue placeholder="Select comparison type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yoy">Year over Year (YoY)</SelectItem>
                  <SelectItem value="mom">Month over Month (MoM)</SelectItem>
                  <SelectItem value="qoq">Quarter over Quarter (QoQ)</SelectItem>
                  <SelectItem value="custom">Custom Periods</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="expenses">Expenses</SelectItem>
                  <SelectItem value="profit">Profit</SelectItem>
                  <SelectItem value="cashflow">Cash Flow</SelectItem>
                  <SelectItem value="balance">Balance Sheet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="period-count">Number of Periods</Label>
              <Select value={periodCount} onValueChange={setPeriodCount}>
                <SelectTrigger id="period-count">
                  <SelectValue placeholder="Select number of periods" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 Periods</SelectItem>
                  <SelectItem value="6">6 Periods</SelectItem>
                  <SelectItem value="12">12 Periods</SelectItem>
                  <SelectItem value="24">24 Periods</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Year over Year Comparison */}
      {comparisonType === "yoy" && (
        <>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Year over Year Comparison</CardTitle>
                <CardDescription>
                  {reportType === "revenue" && "Revenue comparison for the last 6 years"}
                  {reportType === "expenses" && "Expenses comparison for the last 6 years"}
                  {reportType === "profit" && "Profit comparison for the last 6 years"}
                  {reportType === "cashflow" && "Cash flow comparison for the last 6 years"}
                  {reportType === "balance" && "Balance sheet comparison for the last 6 years"}
                </CardDescription>
              </div>
              <Badge variant="outline" className="font-normal">
                Annual Data
              </Badge>
            </CardHeader>
            <CardContent className="px-0">
              <div className="h-[400px] p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { year: "2020", value: 850000, growth: 0 },
                      { year: "2021", value: 920000, growth: 8.2 },
                      { year: "2022", value: 1050000, growth: 14.1 },
                      { year: "2023", value: 1180000, growth: 12.4 },
                      { year: "2024", value: 1320000, growth: 11.9 },
                      { year: "2025", value: 1425000, growth: 8.0 },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="value" stroke="#f97316" name="Revenue ($)" />
                    <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#22c55e" name="Growth (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Year over Year Analysis</CardTitle>
              <CardDescription>Detailed comparison of annual performance</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-background">
                    <TableRow>
                      <TableHead className="w-[100px]">Year</TableHead>
                      <TableHead className="text-right">Revenue</TableHead>
                      <TableHead className="text-right">YoY Change ($)</TableHead>
                      <TableHead className="text-right">YoY Change (%)</TableHead>
                      <TableHead className="text-right">CAGR (from 2020)</TableHead>
                      <TableHead>Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">2020</TableCell>
                      <TableCell className="text-right">$850,000.00</TableCell>
                      <TableCell className="text-right">-</TableCell>
                      <TableCell className="text-right">-</TableCell>
                      <TableCell className="text-right">-</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "59.6%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2021</TableCell>
                      <TableCell className="text-right">$920,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$70,000.00</TableCell>
                      <TableCell className="text-right text-green-600">8.2%</TableCell>
                      <TableCell className="text-right">8.2%</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "64.6%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2022</TableCell>
                      <TableCell className="text-right">$1,050,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$130,000.00</TableCell>
                      <TableCell className="text-right text-green-600">14.1%</TableCell>
                      <TableCell className="text-right">11.1%</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "73.7%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2023</TableCell>
                      <TableCell className="text-right">$1,180,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$130,000.00</TableCell>
                      <TableCell className="text-right text-green-600">12.4%</TableCell>
                      <TableCell className="text-right">11.5%</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "82.8%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2024</TableCell>
                      <TableCell className="text-right">$1,320,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$140,000.00</TableCell>
                      <TableCell className="text-right text-green-600">11.9%</TableCell>
                      <TableCell className="text-right">11.6%</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "92.6%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2025</TableCell>
                      <TableCell className="text-right">$1,425,000.00</TableCell>
                      <TableCell className="text-right text-green-600">$105,000.00</TableCell>
                      <TableCell className="text-right text-green-600">8.0%</TableCell>
                      <TableCell className="text-right">10.9%</TableCell>
                      <TableCell>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Key Insights</CardTitle>
                <CardDescription>Analysis of year over year performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Growth Trend</h3>
                    <p className="text-sm text-muted-foreground">
                      Revenue has shown consistent growth over the 6-year period, with a compound annual growth rate
                      (CAGR) of 10.9%.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Peak Growth Period</h3>
                    <p className="text-sm text-muted-foreground">
                      The highest growth rate was observed in 2022 (14.1%), coinciding with the launch of new product
                      lines and expansion into international markets.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Recent Slowdown</h3>
                    <p className="text-sm text-muted-foreground">
                      Growth has moderated in 2025 (8.0%), indicating market maturation and increased competition in
                      core segments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Strategic recommendations based on analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Product Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Invest in R&D to develop new product offerings to counter the growth slowdown observed in 2025.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Market Expansion</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore new geographic markets to maintain double-digit growth rates, similar to the successful
                      expansion in 2022.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="text-sm font-medium mb-2">Operational Efficiency</h3>
                    <p className="text-sm text-muted-foreground">
                      Implement cost optimization initiatives to improve profit margins as revenue growth moderates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
