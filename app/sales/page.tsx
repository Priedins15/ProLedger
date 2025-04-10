import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { ArrowRight, FileText, Users, Package } from "lucide-react"
import Link from "next/link"

export default function SalesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <PageTitle title="Sales" subtitle="Manage your sales activities" />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="text-sm text-muted-foreground">Total outstanding invoices</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Draft</div>
                <div className="text-muted-foreground">3 invoices</div>
              </div>
              <div>
                <div className="font-medium">Pending</div>
                <div className="text-muted-foreground">12 invoices</div>
              </div>
              <div>
                <div className="font-medium">Paid</div>
                <div className="text-muted-foreground">45 invoices</div>
              </div>
              <div>
                <div className="font-medium">Overdue</div>
                <div className="text-muted-foreground">5 invoices</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/invoices">
                Manage Invoices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">573</div>
            <div className="text-sm text-muted-foreground">Total active customers</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">New</div>
                <div className="text-muted-foreground">12 this month</div>
              </div>
              <div>
                <div className="font-medium">Repeat</div>
                <div className="text-muted-foreground">85% retention</div>
              </div>
              <div>
                <div className="font-medium">Average Sale</div>
                <div className="text-muted-foreground">$1,245.67</div>
              </div>
              <div>
                <div className="font-medium">Lifetime Value</div>
                <div className="text-muted-foreground">$12,456.78</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/customers">
                Manage Customers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products & Services</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">124</div>
            <div className="text-sm text-muted-foreground">Total active products & services</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Products</div>
                <div className="text-muted-foreground">78 items</div>
              </div>
              <div>
                <div className="font-medium">Services</div>
                <div className="text-muted-foreground">46 items</div>
              </div>
              <div>
                <div className="font-medium">Top Seller</div>
                <div className="text-muted-foreground">Premium Plan</div>
              </div>
              <div>
                <div className="font-medium">Low Stock</div>
                <div className="text-muted-foreground">5 items</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/products">
                Manage Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Your sales performance at a glance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
              <p className="text-muted-foreground">Sales overview chart will be displayed here</p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345.67</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Quarterly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,678.90</div>
                <p className="text-xs text-muted-foreground">+15.3% from last quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">YTD Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$123,456.78</div>
                <p className="text-xs text-muted-foreground">+18.7% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Deal Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234.56</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
