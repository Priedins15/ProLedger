"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Plus, Search, ArrowUpDown, MoreHorizontal, Wallet } from "lucide-react"
import { CryptoOverview } from "@/components/crypto-overview"
import { DateRangePicker } from "@/components/date-range-picker"
import { PageTitle } from "@/components/page-title"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AddTransactionModal } from "@/components/modals/add-transaction-modal"
import { useToast } from "@/components/ui/use-toast"

export default function CryptoPage() {
  const [addTransactionModalOpen, setAddTransactionModalOpen] = useState(false)
  const { toast } = useToast()

  const handleAction = (action: string, txId: number) => {
    switch (action) {
      case "view":
        toast({
          title: "View Transaction",
          description: `Viewing transaction #${txId}`,
        })
        break
      case "edit":
        toast({
          title: "Edit Transaction",
          description: `Editing transaction #${txId}`,
        })
        break
      case "export":
        toast({
          title: "Export Data",
          description: `Exporting transaction #${txId} data`,
        })
        break
      case "delete":
        toast({
          title: "Transaction Deleted",
          description: `Transaction #${txId} has been deleted`,
          variant: "destructive",
        })
        break
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Cryptocurrency" subtitle="Manage your crypto assets and transactions" />
        <div className="flex items-center gap-2">
          <Button onClick={() => setAddTransactionModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Crypto Value</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,875.32</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">+5.2%</span>
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
              <path d="M11.9978 0L4.63147 12.2225L11.9978 16.5746V8.87386V0Z" fill="currentColor" fillOpacity="0.8" />
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

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="wallets">Wallets</TabsTrigger>
            <TabsTrigger value="tax">Tax Reports</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full md:w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search transactions..." className="pl-8" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <DateRangePicker className="hidden lg:block" />
          </div>
        </div>
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
            <CardTitle>Connected Wallets & Exchanges</CardTitle>
            <CardDescription>Manage your cryptocurrency accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Coinbase", type: "Exchange", assets: "BTC, ETH, SOL", balance: "$5,234.56", connected: true },
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
              ].map((wallet, i) => (
                <div key={i} className="flex items-center">
                  <div className="mr-4">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        wallet.connected ? "bg-orange-100" : "bg-gray-100"
                      }`}
                    >
                      <Wallet className={`h-4 w-4 ${wallet.connected ? "text-orange-600" : "text-gray-600"}`} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{wallet.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{wallet.type}</span>
                      <span className="mx-1">•</span>
                      <span>{wallet.assets}</span>
                    </div>
                  </div>
                  <div className="font-medium">{wallet.balance}</div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Plus className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Crypto Transactions</CardTitle>
          <CardDescription>All cryptocurrency transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Price</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <span>Value</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  date: "Apr 8, 2025",
                  type: "Buy",
                  asset: "Bitcoin",
                  amount: "0.0125 BTC",
                  price: "$38,613.45",
                  value: "$482.67",
                },
                {
                  id: 2,
                  date: "Apr 7, 2025",
                  type: "Sell",
                  asset: "Ethereum",
                  amount: "0.5 ETH",
                  price: "$1,842.68",
                  value: "$921.34",
                },
                {
                  id: 3,
                  date: "Apr 6, 2025",
                  type: "Transfer",
                  asset: "Bitcoin",
                  amount: "0.0045 BTC",
                  price: "$38,613.45",
                  value: "$173.76",
                },
                {
                  id: 4,
                  date: "Apr 5, 2025",
                  type: "Buy",
                  asset: "Solana",
                  amount: "2.5 SOL",
                  price: "$75.00",
                  value: "$187.50",
                },
                {
                  id: 5,
                  date: "Apr 4, 2025",
                  type: "Receive",
                  asset: "Ethereum",
                  amount: "0.25 ETH",
                  price: "$1,842.68",
                  value: "$460.67",
                },
                {
                  id: 6,
                  date: "Apr 3, 2025",
                  type: "Buy",
                  asset: "Bitcoin",
                  amount: "0.05 BTC",
                  price: "$38,245.67",
                  value: "$1,912.28",
                },
                {
                  id: 7,
                  date: "Apr 2, 2025",
                  type: "Sell",
                  asset: "Solana",
                  amount: "5 SOL",
                  price: "$73.45",
                  value: "$367.25",
                },
                {
                  id: 8,
                  date: "Apr 1, 2025",
                  type: "Transfer",
                  asset: "Ethereum",
                  amount: "1.0 ETH",
                  price: "$1,834.56",
                  value: "$1,834.56",
                },
              ].map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>{tx.asset}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>{tx.price}</TableCell>
                  <TableCell className="text-right font-medium">{tx.value}</TableCell>
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
                        <DropdownMenuItem onClick={() => handleAction("view", tx.id)}>View details</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("edit", tx.id)}>
                          Edit transaction
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("export", tx.id)}>Export data</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600" onClick={() => handleAction("delete", tx.id)}>
                          Delete transaction
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

      <AddTransactionModal open={addTransactionModalOpen} onOpenChange={setAddTransactionModalOpen} type="crypto" />
    </div>
  )
}
