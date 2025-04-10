import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { ArrowRight, Receipt, Building } from "lucide-react"
import Link from "next/link"

export default function PurchasesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <PageTitle title="Purchases" subtitle="Manage your purchase activities" />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bills</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">$12,234.59</div>
            <div className="text-sm text-muted-foreground">Total outstanding bills</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Draft</div>
                <div className="text-muted-foreground">2 bills</div>
              </div>
              <div>
                <div className="font-medium">Awaiting Payment</div>
                <div className="text-muted-foreground">8 bills</div>
              </div>
              <div>
                <div className="font-medium">Paid</div>
                <div className="text-muted-foreground">32 bills</div>
              </div>
              <div>
                <div className="font-medium">Overdue</div>
                <div className="text-muted-foreground">3 bills</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/bills">
                Manage Bills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendors</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">87</div>
            <div className="text-sm text-muted-foreground">Total active vendors</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">New</div>
                <div className="text-muted-foreground">5 this month</div>
              </div>
              <div>
                <div className="font-medium">Top Vendor</div>
                <div className="text-muted-foreground">Office Supplies Co</div>
              </div>
              <div>
                <div className="font-medium">Average Spend</div>
                <div className="text-muted-foreground">$876.54</div>
              </div>
              <div>
                <div className="font-medium">Payment Terms</div>
                <div className="text-muted-foreground">Net 30 (avg)</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/vendors">
                Manage Vendors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analysis">Spend Analysis</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Overview</CardTitle>
              <CardDescription>Your purchase performance at a glance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
              <p className="text-muted-foreground">Purchase overview chart will be displayed here</p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,432.10</div>
                <p className="text-xs text-muted-foreground">+4.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Quarterly Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$15,678.90</div>
                <p className="text-xs text-muted-foreground">+2.7% from last quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">YTD Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,678.90</div>
                <p className="text-xs text-muted-foreground">+8.2% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Requires your attention</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
