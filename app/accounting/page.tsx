import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { ArrowRight, BarChart3, FileText, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function AccountingPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <PageTitle title="Accounting" subtitle="Manage your accounting activities" />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chart of Accounts</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">87</div>
            <div className="text-sm text-muted-foreground">Total active accounts</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Assets</div>
                <div className="text-muted-foreground">24 accounts</div>
              </div>
              <div>
                <div className="font-medium">Liabilities</div>
                <div className="text-muted-foreground">15 accounts</div>
              </div>
              <div>
                <div className="font-medium">Equity</div>
                <div className="text-muted-foreground">8 accounts</div>
              </div>
              <div>
                <div className="font-medium">Income/Expense</div>
                <div className="text-muted-foreground">40 accounts</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/accounts">
                Manage Accounts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Journal Entries</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">156</div>
            <div className="text-sm text-muted-foreground">Total journal entries this month</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Manual</div>
                <div className="text-muted-foreground">32 entries</div>
              </div>
              <div>
                <div className="font-medium">Automated</div>
                <div className="text-muted-foreground">124 entries</div>
              </div>
              <div>
                <div className="font-medium">Pending</div>
                <div className="text-muted-foreground">5 entries</div>
              </div>
              <div>
                <div className="font-medium">Rejected</div>
                <div className="text-muted-foreground">2 entries</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/journal-entries">
                Manage Journal Entries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reconciliation</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-bold">4/6</div>
            <div className="text-sm text-muted-foreground">Accounts reconciled this month</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <div className="font-medium">Completed</div>
                <div className="text-muted-foreground">4 accounts</div>
              </div>
              <div>
                <div className="font-medium">Pending</div>
                <div className="text-muted-foreground">2 accounts</div>
              </div>
              <div>
                <div className="font-medium">Last Reconciled</div>
                <div className="text-muted-foreground">Apr 5, 2025</div>
              </div>
              <div>
                <div className="font-medium">Discrepancies</div>
                <div className="text-muted-foreground">1 found</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/reconciliation">
                Manage Reconciliation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial Statements</TabsTrigger>
          <TabsTrigger value="tax">Tax Preparation</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Accounting Overview</CardTitle>
              <CardDescription>Your accounting status at a glance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
              <p className="text-muted-foreground">Accounting overview chart will be displayed here</p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Net Income</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,997.30</div>
                <p className="text-xs text-muted-foreground">+15.7% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$87,654.32</div>
                <p className="text-xs text-muted-foreground">+3.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,678.90</div>
                <p className="text-xs text-muted-foreground">-1.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$41,975.42</div>
                <p className="text-xs text-muted-foreground">+8.7% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
