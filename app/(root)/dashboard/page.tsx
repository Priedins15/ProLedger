import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, ArrowUp, DollarSign, Users, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import { RecentTransactions } from "@/components/recent-transactions"
import { AccountBalances } from "@/components/account-balances"
import { OverviewChart } from "@/components/overview-chart"
import { CryptoOverview } from "@/components/crypto-overview"
import { CashFlowChart } from "@/components/cash-flow-chart"
import { InvoiceStatusChart } from "@/components/invoice-status-chart"
import { AccountsReceivableAging } from "@/components/accounts-receivable-aging"
import { AccountsPayableAging } from "@/components/accounts-payable-aging"
import { Badge } from "@/components/ui/badge"
import { PageTitle } from "@/components/page-title"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Dashboard" subtitle="Financial overview of your business" />
        <DateRangePicker />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUp className="mr-1 h-3 w-3" />
                20.1%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.59</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-red-500">
                <ArrowUp className="mr-1 h-3 w-3" />
                4.3%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUp className="mr-1 h-3 w-3" />
                12
              </span>
              <span className="ml-1">new this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.4%</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUp className="mr-1 h-3 w-3" />
                2.1%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="receivables">Receivables</TabsTrigger>
          <TabsTrigger value="payables">Payables</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Financial Overview</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Monthly</Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <DollarSign className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Last 5 transactions across all accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Account Balances</CardTitle>
                <CardDescription>Current balances across all accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <AccountBalances />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Cash Flow</CardTitle>
                <Badge variant="outline">Last 6 months</Badge>
              </CardHeader>
              <CardContent className="pl-2">
                <CashFlowChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>Current invoice status breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <InvoiceStatusChart />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="pb-2">
                <CardTitle>Outstanding Invoices</CardTitle>
                <CardDescription>Invoices due in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "INV-2024", client: "Acme Corp", amount: 1250, dueDate: "Apr 15, 2025", status: "Due" },
                    {
                      id: "INV-2025",
                      client: "Globex Industries",
                      amount: 3450,
                      dueDate: "Apr 18, 2025",
                      status: "Due",
                    },
                    {
                      id: "INV-2026",
                      client: "Wayne Enterprises",
                      amount: 2780,
                      dueDate: "Apr 20, 2025",
                      status: "Due",
                    },
                    {
                      id: "INV-2027",
                      client: "Stark Industries",
                      amount: 5670,
                      dueDate: "Apr 22, 2025",
                      status: "Due",
                    },
                    { id: "INV-2028", client: "Umbrella Corp", amount: 1890, dueDate: "Apr 25, 2025", status: "Due" },
                  ].map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="font-medium">{invoice.id}</span>
                          <span className="ml-2 text-sm text-muted-foreground">({invoice.client})</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Due {invoice.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">${invoice.amount.toLocaleString()}</span>
                        <Badge variant="outline" className="ml-2">
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="crypto" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Crypto Value</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,875.32</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <span className="flex items-center text-green-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    5.2%
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bitcoin Holdings</CardTitle>
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6408 14.9193L20.1408 19.9993C20.0479 20.1264 19.9276 20.2293 19.7887 20.3004C19.6498 20.3714 19.4962 20.4087 19.3408 20.4093H4.64076C4.48446 20.4093 4.33011 20.3722 4.19071 20.301C4.05131 20.2299 3.93095 20.1267 3.83885 19.9993L0.358757 14.9193C0.283357 14.8172 0.229013 14.7009 0.199757 14.5774C0.170502 14.4538 0.166815 14.3256 0.188957 14.2003C0.211099 14.075 0.258577 13.9552 0.328502 13.8479C0.398428 13.7406 0.489363 13.6481 0.595757 13.5753L11.2158 6.9843L8.59576 5.2793C8.38576 5.1413 8.29576 4.8903 8.39076 4.6613L9.25076 2.3083C9.29429 2.20445 9.36496 2.1131 9.45555 2.04359C9.54614 1.97408 9.65352 1.92873 9.76576 1.9123L11.6558 1.6293C11.7526 1.61474 11.8519 1.62286 11.9452 1.65313C12.0385 1.68341 12.1234 1.73498 12.1938 1.8043L14.0508 3.6613L15.9078 1.8043C15.9781 1.73498 16.063 1.68341 16.1563 1.65313C16.2496 1.62286 16.3489 1.61474 16.4458 1.6293L18.3358 1.9123C18.448 1.92873 18.5554 1.97408 18.646 2.04359C18.7366 2.1131 18.8072 2.20445 18.8508 2.3083L19.7108 4.6613C19.7587 4.77389 19.7716 4.89895 19.7479 5.01923C19.7243 5.13951 19.6651 5.24914 19.5778 5.3333L16.9578 6.9843L27.5778 13.5753C27.6842 13.6481 27.7751 13.7406 27.845 13.8479C27.915 13.9552 27.9624 14.075 27.9846 14.2003C28.0067 14.3256 28.003 14.4538 27.9738 14.5774C27.9445 14.7009 27.8902 14.8172 27.8148 14.9193H23.6408ZM11.9998 18.0093L14.3998 12.6093H9.59976L11.9998 18.0093Z"
                    fill="currentColor"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.2134 BTC</div>
                <div className="text-sm text-muted-foreground">$8,245.67</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ethereum Holdings</CardTitle>
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9978 0L11.8252 0.583452V16.4021L11.9978 16.5746L19.3641 12.2225L11.9978 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.9978 0L4.63147 12.2225L11.9978 16.5746V8.87386V0Z"
                    fill="currentColor"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M11.9978 17.9574L11.9004 18.0762V23.7346L11.9978 23.9999L19.3688 13.6074L11.9978 17.9574Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.9978 23.9999V17.9574L4.63147 13.6074L11.9978 23.9999Z"
                    fill="currentColor"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M11.9978 16.5746L19.3641 12.2225L11.9978 8.87386V16.5746Z"
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M4.63147 12.2225L11.9978 16.5746V8.87386L4.63147 12.2225Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.8765 ETH</div>
                <div className="text-sm text-muted-foreground">$3,452.89</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Other Crypto</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,176.76</div>
                <div className="text-sm text-muted-foreground">5 different assets</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Crypto Portfolio Performance</CardTitle>
                <Badge variant="outline">Last 6 months</Badge>
              </CardHeader>
              <CardContent className="pl-2">
                <CryptoOverview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Recent Crypto Transactions</CardTitle>
                <CardDescription>Last 5 cryptocurrency transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Buy", asset: "Bitcoin", amount: "0.0125 BTC", value: "$482.67", date: "Apr 8, 2025" },
                    { type: "Sell", asset: "Ethereum", amount: "0.5 ETH", value: "$921.34", date: "Apr 7, 2025" },
                    { type: "Transfer", asset: "Bitcoin", amount: "0.0045 BTC", value: "$173.76", date: "Apr 6, 2025" },
                    { type: "Buy", asset: "Solana", amount: "2.5 SOL", value: "$187.50", date: "Apr 5, 2025" },
                    { type: "Receive", asset: "Ethereum", amount: "0.25 ETH", value: "$460.67", date: "Apr 4, 2025" },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Badge
                            className={
                              tx.type === "Buy"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : tx.type === "Sell"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            }
                          >
                            {tx.type}
                          </Badge>
                          <span className="ml-2 font-medium">{tx.asset}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{tx.date}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-medium">{tx.amount}</span>
                        <span className="text-sm text-muted-foreground">{tx.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Connected Wallets & Exchanges</CardTitle>
              <CardDescription>Manage your cryptocurrency accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Coinbase",
                    type: "Exchange",
                    assets: "BTC, ETH, SOL",
                    balance: "$5,234.56",
                    connected: true,
                  },
                  {
                    name: "MetaMask",
                    type: "Wallet",
                    assets: "ETH, ERC-20 Tokens",
                    balance: "$3,452.89",
                    connected: true,
                  },
                  {
                    name: "Ledger Nano",
                    type: "Hardware Wallet",
                    assets: "BTC, ETH, ADA",
                    balance: "$4,187.87",
                    connected: true,
                  },
                  { name: "Binance", type: "Exchange", assets: "Multiple", balance: "Not connected", connected: false },
                  { name: "Kraken", type: "Exchange", assets: "Multiple", balance: "Not connected", connected: false },
                  {
                    name: "Trezor",
                    type: "Hardware Wallet",
                    assets: "Multiple",
                    balance: "Not connected",
                    connected: false,
                  },
                ].map((wallet, i) => (
                  <Card key={i} className={`border ${wallet.connected ? "border-orange-500/20" : "border-muted"}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{wallet.name}</CardTitle>
                      <CardDescription>{wallet.type}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-col space-y-1.5">
                        <div className="text-sm text-muted-foreground">Assets: {wallet.assets}</div>
                        <div className="font-medium">{wallet.balance}</div>
                      </div>
                    </CardContent>
                    <div className="px-6 pb-4">
                      <Button variant={wallet.connected ? "outline" : "default"} size="sm" className="w-full">
                        {wallet.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receivables" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Accounts Receivable Aging</CardTitle>
                <Badge variant="outline">As of Apr 8, 2025</Badge>
              </CardHeader>
              <CardContent className="pl-2">
                <AccountsReceivableAging />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Top Customers by Outstanding Balance</CardTitle>
                <CardDescription>Customers with highest receivable amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Acme Corp", balance: "$12,345.67", overdue: "$5,670.00" },
                    { name: "Globex Industries", balance: "$9,876.54", overdue: "$0.00" },
                    { name: "Wayne Enterprises", balance: "$8,765.43", overdue: "$2,345.67" },
                    { name: "Stark Industries", balance: "$7,654.32", overdue: "$7,654.32" },
                    { name: "Umbrella Corporation", balance: "$6,543.21", overdue: "$0.00" },
                  ].map((customer, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">{customer.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {Number.parseFloat(customer.overdue.replace(/[^0-9.-]+/g, "")) > 0
                            ? `${customer.overdue} overdue`
                            : "No overdue amounts"}
                        </span>
                      </div>
                      <div className="font-medium">{customer.balance}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Outstanding Invoices</CardTitle>
              <CardDescription>All unpaid customer invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Invoice #</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Customer</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Issue Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Due Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Amount</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Age (Days)</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {[
                      {
                        id: "INV-2024",
                        customer: "Acme Corp",
                        issueDate: "Mar 15, 2025",
                        dueDate: "Apr 15, 2025",
                        amount: "$5,670.00",
                        status: "Outstanding",
                        age: 24,
                      },
                      {
                        id: "INV-2025",
                        customer: "Globex Industries",
                        issueDate: "Mar 18, 2025",
                        dueDate: "Apr 18, 2025",
                        amount: "$3,450.00",
                        status: "Outstanding",
                        age: 21,
                      },
                      {
                        id: "INV-2026",
                        customer: "Wayne Enterprises",
                        issueDate: "Mar 20, 2025",
                        dueDate: "Apr 20, 2025",
                        amount: "$2,345.67",
                        status: "Outstanding",
                        age: 19,
                      },
                      {
                        id: "INV-2027",
                        customer: "Stark Industries",
                        issueDate: "Feb 22, 2025",
                        dueDate: "Mar 22, 2025",
                        amount: "$7,654.32",
                        status: "Overdue",
                        age: 45,
                      },
                      {
                        id: "INV-2028",
                        customer: "Umbrella Corporation",
                        issueDate: "Mar 25, 2025",
                        dueDate: "Apr 25, 2025",
                        amount: "$1,890.00",
                        status: "Outstanding",
                        age: 14,
                      },
                    ].map((invoice) => (
                      <tr
                        key={invoice.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle font-medium">{invoice.id}</td>
                        <td className="p-4 align-middle">{invoice.customer}</td>
                        <td className="p-4 align-middle">{invoice.issueDate}</td>
                        <td className="p-4 align-middle">{invoice.dueDate}</td>
                        <td className="p-4 align-middle">{invoice.amount}</td>
                        <td className="p-4 align-middle">
                          <Badge
                            className={
                              invoice.status === "Overdue"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{invoice.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payables" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Accounts Payable Aging</CardTitle>
                <Badge variant="outline">As of Apr 8, 2025</Badge>
              </CardHeader>
              <CardContent className="pl-2">
                <AccountsPayableAging />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="pb-2">
                <CardTitle>Top Vendors by Outstanding Balance</CardTitle>
                <CardDescription>Vendors with highest payable amounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Office Supplies Co", balance: "$2,345.67", dueDate: "Apr 15, 2025" },
                    { name: "Web Hosting Inc", balance: "$1,234.56", dueDate: "Apr 20, 2025" },
                    { name: "Marketing Agency", balance: "$5,678.90", dueDate: "Apr 30, 2025" },
                    { name: "Utility Company", balance: "$876.54", dueDate: "Apr 10, 2025" },
                    { name: "Software Solutions", balance: "$3,456.78", dueDate: "May 1, 2025" },
                  ].map((vendor, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">{vendor.name}</span>
                        <span className="text-sm text-muted-foreground">Due {vendor.dueDate}</span>
                      </div>
                      <div className="font-medium">{vendor.balance}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Bills due in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Bill #</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Vendor</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Issue Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Due Date</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Amount</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Days Until Due
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {[
                      {
                        id: "BILL-1024",
                        vendor: "Office Supplies Co",
                        issueDate: "Mar 15, 2025",
                        dueDate: "Apr 15, 2025",
                        amount: "$2,345.67",
                        status: "Pending",
                        daysUntil: 7,
                      },
                      {
                        id: "BILL-1025",
                        vendor: "Web Hosting Inc",
                        issueDate: "Mar 20, 2025",
                        dueDate: "Apr 20, 2025",
                        amount: "$1,234.56",
                        status: "Pending",
                        daysUntil: 12,
                      },
                      {
                        id: "BILL-1026",
                        vendor: "Marketing Agency",
                        issueDate: "Mar 30, 2025",
                        dueDate: "Apr 30, 2025",
                        amount: "$5,678.90",
                        status: "Pending",
                        daysUntil: 22,
                      },
                      {
                        id: "BILL-1027",
                        vendor: "Utility Company",
                        issueDate: "Mar 10, 2025",
                        dueDate: "Apr 10, 2025",
                        amount: "$876.54",
                        status: "Due Soon",
                        daysUntil: 2,
                      },
                      {
                        id: "BILL-1028",
                        vendor: "Software Solutions",
                        issueDate: "Apr 1, 2025",
                        dueDate: "May 1, 2025",
                        amount: "$3,456.78",
                        status: "Pending",
                        daysUntil: 23,
                      },
                    ].map((bill) => (
                      <tr
                        key={bill.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle font-medium">{bill.id}</td>
                        <td className="p-4 align-middle">{bill.vendor}</td>
                        <td className="p-4 align-middle">{bill.issueDate}</td>
                        <td className="p-4 align-middle">{bill.dueDate}</td>
                        <td className="p-4 align-middle">{bill.amount}</td>
                        <td className="p-4 align-middle">
                          <Badge
                            className={
                              bill.status === "Due Soon"
                                ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            }
                          >
                            {bill.status}
                          </Badge>
                        </td>
                        <td className="p-4 align-middle">{bill.daysUntil}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
