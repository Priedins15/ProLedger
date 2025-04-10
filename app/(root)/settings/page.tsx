"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Building,
  CreditCard,
  Calendar,
  Globe,
  Users,
  FileText,
  Clock,
  Upload,
  LinkIcon,
  Save,
  ChevronRight,
  Info,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("group-structure")

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    })
  }

  const settingsCategories = [
    {
      id: "group-structure",
      name: "Group Structure",
      icon: Building,
      description: "Configure your organizational hierarchy and group accounting structure",
    },
    {
      id: "currency",
      name: "Currency Management",
      icon: CreditCard,
      description: "Manage currencies, exchange rates, and conversion settings",
    },
    {
      id: "fiscal-year",
      name: "Fiscal Year",
      icon: Calendar,
      description: "Define fiscal year periods, closing dates, and year-end procedures",
    },
    {
      id: "localization",
      name: "Localization",
      icon: Globe,
      description: "Configure regional settings, languages, and formats",
    },
    {
      id: "users",
      name: "Users & Permissions",
      icon: Users,
      description: "Manage user accounts, roles, and access permissions",
    },
    {
      id: "accounting",
      name: "Accounting Setup",
      icon: FileText,
      description: "Configure chart of accounts, tax rates, and accounting methods",
    },
    {
      id: "reporting",
      name: "Reporting Periods",
      icon: Clock,
      description: "Define custom reporting periods and date ranges",
    },
    {
      id: "import-export",
      name: "Import & Export",
      icon: Upload,
      description: "Configure data import/export settings and schedules",
    },
    {
      id: "integrations",
      name: "Integrations",
      icon: LinkIcon,
      description: "Connect with third-party services and APIs",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageTitle title="Settings" subtitle="Configure your accounting system" />
        <Button onClick={handleSaveSettings}>
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Settings Navigation */}
        <Card className="col-span-12 md:col-span-3 lg:col-span-2">
          <CardContent className="p-0">
            <nav className="flex flex-col">
              {settingsCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 ${
                    activeTab === category.id
                      ? "border-l-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-50 hover:text-orange-700 dark:bg-orange-950/20 dark:text-orange-400"
                      : "border-l-transparent"
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  <span className="text-sm">{category.name}</span>
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="col-span-12 space-y-6 md:col-span-9 lg:col-span-10">
          {/* Group Structure Settings */}
          {activeTab === "group-structure" && <GroupStructureSettings />}

          {/* Currency Management Settings */}
          {activeTab === "currency" && <CurrencyManagementSettings />}

          {/* Fiscal Year Settings */}
          {activeTab === "fiscal-year" && <FiscalYearSettings />}

          {/* Localization Settings */}
          {activeTab === "localization" && <LocalizationSettings />}

          {/* Users & Permissions Settings */}
          {activeTab === "users" && <UsersPermissionsSettings />}

          {/* Accounting Setup Settings */}
          {activeTab === "accounting" && <AccountingSetupSettings />}

          {/* Reporting Periods Settings */}
          {activeTab === "reporting" && <ReportingPeriodsSettings />}

          {/* Import & Export Settings */}
          {activeTab === "import-export" && <ImportExportSettings />}

          {/* Integrations Settings */}
          {activeTab === "integrations" && <IntegrationsSettings />}
        </div>
      </div>
    </div>
  )
}

// Group Structure Settings Component
function GroupStructureSettings() {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Group Accounting Structure</CardTitle>
              <CardDescription>Configure your organizational hierarchy and consolidation settings</CardDescription>
            </div>
            <Badge variant="outline">Enterprise Feature</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="entities">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="entities">Entities</TabsTrigger>
              <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
              <TabsTrigger value="consolidation">Consolidation</TabsTrigger>
            </TabsList>

            <TabsContent value="entities" className="space-y-4 pt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Legal Entities</h3>
                <Button variant="outline" size="sm">
                  Add Entity
                </Button>
              </div>

              <div className="rounded-md border">
                <div className="p-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 font-medium">Entity Name</div>
                    <div className="col-span-3 font-medium">Entity Type</div>
                    <div className="col-span-2 font-medium">Currency</div>
                    <div className="col-span-2 font-medium">Status</div>
                    <div className="col-span-1 font-medium text-right">Actions</div>
                  </div>
                </div>
                <Separator />
                {[
                  { name: "Acme Corporation", type: "Parent Company", currency: "USD", status: "Active" },
                  { name: "Acme Europe GmbH", type: "Subsidiary", currency: "EUR", status: "Active" },
                  { name: "Acme Asia Ltd", type: "Subsidiary", currency: "JPY", status: "Active" },
                  { name: "Acme Australia Pty", type: "Subsidiary", currency: "AUD", status: "Inactive" },
                  { name: "Acme Canada Inc", type: "Branch", currency: "CAD", status: "Active" },
                ].map((entity, index) => (
                  <div key={index} className="border-t p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4">{entity.name}</div>
                      <div className="col-span-3">{entity.type}</div>
                      <div className="col-span-2">{entity.currency}</div>
                      <div className="col-span-2">
                        <Badge variant={entity.status === "Active" ? "default" : "secondary"}>{entity.status}</Badge>
                      </div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hierarchy" className="space-y-4 pt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Organizational Hierarchy</h3>
                <Button variant="outline" size="sm">
                  Edit Hierarchy
                </Button>
              </div>

              <div className="rounded-md border p-6 bg-muted/20">
                <div className="flex justify-center">
                  <div className="space-y-6">
                    {/* Parent Company */}
                    <div className="flex flex-col items-center">
                      <div className="w-64 rounded-md border bg-background p-3 shadow-sm">
                        <div className="font-medium">Acme Corporation</div>
                        <div className="text-sm text-muted-foreground">Parent Company (USD)</div>
                      </div>
                      <div className="h-6 w-px bg-border"></div>
                    </div>

                    {/* Subsidiaries */}
                    <div className="flex justify-center space-x-8">
                      {[
                        { name: "Acme Europe GmbH", type: "Subsidiary", currency: "EUR" },
                        { name: "Acme Asia Ltd", type: "Subsidiary", currency: "JPY" },
                        { name: "Acme Australia Pty", type: "Subsidiary", currency: "AUD", inactive: true },
                      ].map((entity, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="h-6 w-px bg-border"></div>
                          <div
                            className={`w-48 rounded-md border p-3 shadow-sm ${entity.inactive ? "bg-muted" : "bg-background"}`}
                          >
                            <div className="font-medium">{entity.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {entity.type} ({entity.currency})
                            </div>
                          </div>
                          {index === 0 && (
                            <>
                              <div className="h-6 w-px bg-border"></div>
                              <div className="flex justify-center space-x-8">
                                <div className="flex flex-col items-center">
                                  <div className="h-6 w-px bg-border"></div>
                                  <div className="w-40 rounded-md border bg-background p-3 shadow-sm">
                                    <div className="font-medium">Acme Canada Inc</div>
                                    <div className="text-sm text-muted-foreground">Branch (CAD)</div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consolidation" className="space-y-4 pt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Consolidation Settings</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Consolidation settings determine how financial data from different entities is combined for
                        group reporting.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Consolidation Method</Label>
                    <Select defaultValue="full">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select consolidation method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Consolidation</SelectItem>
                        <SelectItem value="proportional">Proportional Consolidation</SelectItem>
                        <SelectItem value="equity">Equity Method</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Determines how subsidiary accounts are consolidated</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Consolidation Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD (United States Dollar)</SelectItem>
                        <SelectItem value="eur">EUR (Euro)</SelectItem>
                        <SelectItem value="gbp">GBP (British Pound)</SelectItem>
                        <SelectItem value="jpy">JPY (Japanese Yen)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">The primary currency used for consolidated reports</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Intercompany Transaction Handling</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select handling method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatic Elimination</SelectItem>
                      <SelectItem value="manual">Manual Elimination</SelectItem>
                      <SelectItem value="flag">Flag Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How transactions between entities in the group are handled during consolidation
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Minority Interest Calculation</Label>
                  <Select defaultValue="proportionate">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select calculation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proportionate">Proportionate to Ownership</SelectItem>
                      <SelectItem value="fair">Fair Value Method</SelectItem>
                      <SelectItem value="custom">Custom Calculation</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Method for calculating non-controlling interests in partially owned subsidiaries
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="auto-consolidate" />
                  <Label htmlFor="auto-consolidate" className="text-sm">
                    Automatically run consolidation at period end
                  </Label>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Group Settings</CardTitle>
          <CardDescription>Configure additional group-wide settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Default Ownership Threshold</Label>
              <div className="flex">
                <Input type="number" className="w-full rounded-md rounded-r-none" defaultValue={50} />
                <div className="flex items-center rounded-md rounded-l-none border border-l-0 bg-muted px-3">%</div>
              </div>
              <p className="text-xs text-muted-foreground">Minimum ownership percentage for automatic consolidation</p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Consolidation Frequency</Label>
              <Select defaultValue="monthly">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="semi">Semi-Annually</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">How often consolidated reports are generated</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Group Reporting Standards</Label>
            <Select defaultValue="ifrs">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select standards" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ifrs">IFRS (International Financial Reporting Standards)</SelectItem>
                <SelectItem value="gaap">GAAP (Generally Accepted Accounting Principles)</SelectItem>
                <SelectItem value="custom">Custom Standards</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Accounting standards used for group reporting</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Entity Access Control</Label>
              <Badge>Security Feature</Badge>
            </div>
            <Select defaultValue="role">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select access control" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="role">Role-Based Access</SelectItem>
                <SelectItem value="entity">Entity-Based Access</SelectItem>
                <SelectItem value="hybrid">Hybrid Access</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Controls how users access data across different entities</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </>
  )
}

// Currency Management Settings Component
function CurrencyManagementSettings() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Currency Management</CardTitle>
          <CardDescription>Configure currencies and exchange rate settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="currencies">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="currencies">Currencies</TabsTrigger>
              <TabsTrigger value="exchange-rates">Exchange Rates</TabsTrigger>
              <TabsTrigger value="reporting">Reporting Currencies</TabsTrigger>
            </TabsList>

            <TabsContent value="currencies" className="space-y-4 pt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Active Currencies</h3>
                <Button variant="outline" size="sm">
                  Add Currency
                </Button>
              </div>

              <div className="rounded-md border">
                <div className="p-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2 font-medium">Code</div>
                    <div className="col-span-3 font-medium">Currency</div>
                    <div className="col-span-2 font-medium">Symbol</div>
                    <div className="col-span-2 font-medium">Decimal Places</div>
                    <div className="col-span-2 font-medium">Status</div>
                    <div className="col-span-1 font-medium text-right">Actions</div>
                  </div>
                </div>
                <Separator />
                {[
                  { code: "USD", name: "US Dollar", symbol: "$", decimals: 2, status: "Base Currency" },
                  { code: "EUR", name: "Euro", symbol: "€", decimals: 2, status: "Active" },
                  { code: "GBP", name: "British Pound", symbol: "£", decimals: 2, status: "Active" },
                  { code: "JPY", name: "Japanese Yen", symbol: "¥", decimals: 0, status: "Active" },
                  { code: "CAD", name: "Canadian Dollar", symbol: "C$", decimals: 2, status: "Active" },
                  { code: "AUD", name: "Australian Dollar", symbol: "A$", decimals: 2, status: "Active" },
                ].map((currency, index) => (
                  <div key={index} className="border-t p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2 font-medium">{currency.code}</div>
                      <div className="col-span-3">{currency.name}</div>
                      <div className="col-span-2">{currency.symbol}</div>
                      <div className="col-span-2">{currency.decimals}</div>
                      <div className="col-span-2">
                        <Badge variant={currency.status === "Base Currency" ? "default" : "secondary"}>
                          {currency.status}
                        </Badge>
                      </div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Base Currency</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          The base currency is used as the primary currency for your accounting records. Changing this
                          will require a system-wide recalculation.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Select defaultValue="usd">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select base currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD (US Dollar)</SelectItem>
                    <SelectItem value="eur">EUR (Euro)</SelectItem>
                    <SelectItem value="gbp">GBP (British Pound)</SelectItem>
                    <SelectItem value="jpy">JPY (Japanese Yen)</SelectItem>
                    <SelectItem value="cad">CAD (Canadian Dollar)</SelectItem>
                    <SelectItem value="aud">AUD (Australian Dollar)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">The primary currency used for accounting records</p>
              </div>
            </TabsContent>

            <TabsContent value="exchange-rates" className="space-y-4 pt-4">
              {/* Exchange rates content with improved dropdowns */}
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Exchange Rate Configuration</h3>
                <Button variant="outline" size="sm">
                  Update Rates
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Exchange Rate Provider</Label>
                    <Select defaultValue="open">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open Exchange Rates</SelectItem>
                        <SelectItem value="ecb">European Central Bank</SelectItem>
                        <SelectItem value="xe">XE Currency Data</SelectItem>
                        <SelectItem value="manual">Manual Entry</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Source for automatic exchange rate updates</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Update Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="manual">Manual Only</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">How often exchange rates are automatically updated</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Rate Type</Label>
                  <Select defaultValue="spot">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select rate type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spot">Spot Rate</SelectItem>
                      <SelectItem value="average">Average Rate</SelectItem>
                      <SelectItem value="historical">Historical Rate</SelectItem>
                      <SelectItem value="custom">Custom Rate</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Type of exchange rate to use for currency conversions</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="historical-rates" defaultChecked />
                  <Label htmlFor="historical-rates" className="text-sm">
                    Store historical exchange rates
                  </Label>
                </div>
              </div>

              {/* Exchange rates table remains the same */}
              <div className="rounded-md border">
                <div className="p-4">
                  <h4 className="font-medium">Current Exchange Rates (as of Apr 8, 2025)</h4>
                </div>
                <Separator />
                <div className="p-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2 font-medium">From</div>
                    <div className="col-span-2 font-medium">To</div>
                    <div className="col-span-2 font-medium">Rate</div>
                    <div className="col-span-3 font-medium">Last Updated</div>
                    <div className="col-span-3 font-medium">Source</div>
                  </div>
                </div>
                <Separator />
                {[
                  {
                    from: "USD",
                    to: "EUR",
                    rate: "0.9234",
                    updated: "Apr 8, 2025 09:00",
                    source: "Open Exchange Rates",
                  },
                  {
                    from: "USD",
                    to: "GBP",
                    rate: "0.7856",
                    updated: "Apr 8, 2025 09:00",
                    source: "Open Exchange Rates",
                  },
                  {
                    from: "USD",
                    to: "JPY",
                    rate: "153.42",
                    updated: "Apr 8, 2025 09:00",
                    source: "Open Exchange Rates",
                  },
                  {
                    from: "USD",
                    to: "CAD",
                    rate: "1.3567",
                    updated: "Apr 8, 2025 09:00",
                    source: "Open Exchange Rates",
                  },
                  {
                    from: "USD",
                    to: "AUD",
                    rate: "1.4982",
                    updated: "Apr 8, 2025 09:00",
                    source: "Open Exchange Rates",
                  },
                ].map((rate, index) => (
                  <div key={index} className="border-t p-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2">{rate.from}</div>
                      <div className="col-span-2">{rate.to}</div>
                      <div className="col-span-2">{rate.rate}</div>
                      <div className="col-span-3">{rate.updated}</div>
                      <div className="col-span-3">{rate.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reporting" className="space-y-4 pt-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Reporting Currency Settings</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Reporting currencies allow you to view financial reports in currencies other than your base
                        currency.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Primary Reporting Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select reporting currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD (US Dollar)</SelectItem>
                      <SelectItem value="eur">EUR (Euro)</SelectItem>
                      <SelectItem value="gbp">GBP (British Pound)</SelectItem>
                      <SelectItem value="jpy">JPY (Japanese Yen)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">The default currency used for financial reporting</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Additional Reporting Currencies</Label>
                  <div className="rounded-md border">
                    <div className="p-4">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3 font-medium">Currency</div>
                        <div className="col-span-3 font-medium">Conversion Method</div>
                        <div className="col-span-3 font-medium">Applied To</div>
                        <div className="col-span-2 font-medium">Status</div>
                        <div className="col-span-1 font-medium text-right">Actions</div>
                      </div>
                    </div>
                    <Separator />
                    {[
                      { currency: "EUR (Euro)", method: "Current Rate", appliedTo: "All Reports", status: "Active" },
                      {
                        currency: "GBP (British Pound)",
                        method: "Historical Rate",
                        appliedTo: "Selected Reports",
                        status: "Active",
                      },
                      {
                        currency: "CAD (Canadian Dollar)",
                        method: "Average Rate",
                        appliedTo: "Consolidated Only",
                        status: "Inactive",
                      },
                    ].map((currency, index) => (
                      <div key={index} className="border-t p-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">{currency.currency}</div>
                          <div className="col-span-3">{currency.method}</div>
                          <div className="col-span-3">{currency.appliedTo}</div>
                          <div className="col-span-2">
                            <Badge variant={currency.status === "Active" ? "default" : "secondary"}>
                              {currency.status}
                            </Badge>
                          </div>
                          <div className="col-span-1 text-right">
                            <Button variant="ghost" size="sm">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Add Reporting Currency
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Currency Translation Adjustment</Label>
                  <Select defaultValue="equity">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select adjustment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equity">Record in Equity</SelectItem>
                      <SelectItem value="pl">Record in Profit & Loss</SelectItem>
                      <SelectItem value="custom">Custom Handling</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How currency translation differences are recorded</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Translation Method for Balance Sheet</Label>
                  <Select defaultValue="current">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select translation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Rate Method</SelectItem>
                      <SelectItem value="temporal">Temporal Method</SelectItem>
                      <SelectItem value="custom">Custom Method</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Method used to translate balance sheet items</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Translation Method for Income Statement</Label>
                  <Select defaultValue="average">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select translation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="average">Average Rate Method</SelectItem>
                      <SelectItem value="historical">Historical Rate Method</SelectItem>
                      <SelectItem value="custom">Custom Method</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Method used to translate income statement items</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </>
  )
}

// Fiscal Year Settings Component
function FiscalYearSettings() {
  // Implementation with improved dropdowns
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fiscal Year Configuration</CardTitle>
        <CardDescription>Define your fiscal year periods and year-end settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="fiscal-year">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fiscal-year">Fiscal Year</TabsTrigger>
            <TabsTrigger value="year-end">Year-End Closing</TabsTrigger>
            <TabsTrigger value="periods">Accounting Periods</TabsTrigger>
          </TabsList>

          <TabsContent value="fiscal-year" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Fiscal Year Start</Label>
                  <Select defaultValue="jan1">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select start date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jan1">January 1</SelectItem>
                      <SelectItem value="feb1">February 1</SelectItem>
                      <SelectItem value="mar1">March 1</SelectItem>
                      <SelectItem value="apr1">April 1</SelectItem>
                      <SelectItem value="may1">May 1</SelectItem>
                      <SelectItem value="jun1">June 1</SelectItem>
                      <SelectItem value="jul1">July 1</SelectItem>
                      <SelectItem value="aug1">August 1</SelectItem>
                      <SelectItem value="sep1">September 1</SelectItem>
                      <SelectItem value="oct1">October 1</SelectItem>
                      <SelectItem value="nov1">November 1</SelectItem>
                      <SelectItem value="dec1">December 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">First day of your fiscal year</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Fiscal Year End</Label>
                  <Select defaultValue="dec31">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select end date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dec31">December 31</SelectItem>
                      <SelectItem value="jan31">January 31</SelectItem>
                      <SelectItem value="feb28">February 28/29</SelectItem>
                      <SelectItem value="mar31">March 31</SelectItem>
                      <SelectItem value="apr30">April 30</SelectItem>
                      <SelectItem value="may31">May 31</SelectItem>
                      <SelectItem value="jun30">June 30</SelectItem>
                      <SelectItem value="jul31">July 31</SelectItem>
                      <SelectItem value="aug31">August 31</SelectItem>
                      <SelectItem value="sep30">September 30</SelectItem>
                      <SelectItem value="oct31">October 31</SelectItem>
                      <SelectItem value="nov30">November 30</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Last day of your fiscal year</p>
                </div>
              </div>

              {/* Continue with other fiscal year settings */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Current Fiscal Year</Label>
                <Input value="FY2025" readOnly className="bg-muted/50" />
                <p className="text-xs text-muted-foreground">Your current fiscal year designation</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Fiscal Year Naming Convention</Label>
                <Select defaultValue="end">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select naming convention" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="end">Year in which fiscal year ends (FY2025)</SelectItem>
                    <SelectItem value="start">Year in which fiscal year starts (FY2024)</SelectItem>
                    <SelectItem value="split">Split year format (FY2024-2025)</SelectItem>
                    <SelectItem value="custom">Custom format</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How fiscal years are named in your system</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="lock-periods" defaultChecked />
                <Label htmlFor="lock-periods" className="text-sm">
                  Automatically lock periods after closing
                </Label>
              </div>
            </div>

            {/* Fiscal Year History table */}
            <div className="rounded-md border">
              <div className="p-4">
                <h4 className="font-medium">Fiscal Year History</h4>
              </div>
              <Separator />
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-medium">Year</div>
                  <div className="col-span-3 font-medium">Start Date</div>
                  <div className="col-span-3 font-medium">End Date</div>
                  <div className="col-span-2 font-medium">Status</div>
                  <div className="col-span-2 font-medium">Actions</div>
                </div>
              </div>
              <Separator />
              {[
                { year: "FY2025", start: "Jan 1, 2025", end: "Dec 31, 2025", status: "Current" },
                { year: "FY2024", start: "Jan 1, 2024", end: "Dec 31, 2024", status: "Closed" },
                { year: "FY2023", start: "Jan 1, 2023", end: "Dec 31, 2023", status: "Closed" },
                { year: "FY2022", start: "Jan 1, 2022", end: "Dec 31, 2022", status: "Archived" },
              ].map((year, index) => (
                <div key={index} className="border-t p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2 font-medium">{year.year}</div>
                    <div className="col-span-3">{year.start}</div>
                    <div className="col-span-3">{year.end}</div>
                    <div className="col-span-2">
                      <Badge
                        variant={
                          year.status === "Current" ? "default" : year.status === "Closed" ? "secondary" : "outline"
                        }
                      >
                        {year.status}
                      </Badge>
                    </div>
                    <div className="col-span-2">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Year-End Closing tab */}
          <TabsContent value="year-end" className="space-y-4 pt-4">
            {/* Year-end closing settings with improved dropdowns */}
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Year-End Closing Procedures</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      Year-end closing procedures determine how accounts are handled when transitioning to a new fiscal
                      year.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Income Statement Account Handling</Label>
                <Select defaultValue="retained">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select handling method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retained">Close to Retained Earnings</SelectItem>
                    <SelectItem value="custom">Close to Custom Equity Account</SelectItem>
                    <SelectItem value="maintain">Maintain Balances</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How income and expense accounts are handled at year-end</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Balance Sheet Account Handling</Label>
                <Select defaultValue="carry">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select handling method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="carry">Carry Forward Balances</SelectItem>
                    <SelectItem value="zero">Zero Out and Recreate</SelectItem>
                    <SelectItem value="custom">Custom Handling</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  How asset, liability, and equity accounts are handled at year-end
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Retained Earnings Account</Label>
                <Select defaultValue="3000">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3000">3000 - Retained Earnings</SelectItem>
                    <SelectItem value="3100">3100 - Accumulated Profits</SelectItem>
                    <SelectItem value="3200">3200 - Owner's Equity</SelectItem>
                    <SelectItem value="custom">Custom Account...</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Account where net income/loss is transferred at year-end
                </p>
              </div>

              {/* Continue with other year-end settings */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Year-End Journal Entry Prefix</Label>
                <Input defaultValue="YE-" />
                <p className="text-xs text-muted-foreground">
                  Prefix for automatically generated year-end journal entries
                </p>
              </div>

              {/* Year-end checklist */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Year-End Closing Checklist</Label>
                  <Badge>Workflow Feature</Badge>
                </div>
                <div className="rounded-md border p-4 space-y-2">
                  {/* Checklist items */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="reconcile-accounts" defaultChecked />
                    <Label htmlFor="reconcile-accounts" className="text-sm">
                      Reconcile all bank accounts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="review-ar" defaultChecked />
                    <Label htmlFor="review-ar" className="text-sm">
                      Review accounts receivable aging
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="review-ap" defaultChecked />
                    <Label htmlFor="review-ap" className="text-sm">
                      Review accounts payable aging
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="inventory-count" defaultChecked />
                    <Label htmlFor="inventory-count" className="text-sm">
                      Perform inventory count
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="depreciation" defaultChecked />
                    <Label htmlFor="depreciation" className="text-sm">
                      Record depreciation and amortization
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adjusting-entries" defaultChecked />
                    <Label htmlFor="adjusting-entries" className="text-sm">
                      Post all adjusting entries
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="financial-statements" defaultChecked />
                    <Label htmlFor="financial-statements" className="text-sm">
                      Generate final financial statements
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="backup-data" defaultChecked />
                    <Label htmlFor="backup-data" className="text-sm">
                      Backup all accounting data
                    </Label>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Add Custom Step
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Accounting Periods tab */}
          <TabsContent value="periods" className="space-y-4 pt-4">
            {/* Accounting periods settings with improved dropdowns */}
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Accounting Periods</h3>
              <Button variant="outline" size="sm">
                Manage Periods
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Period Type</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select period type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="semi">Semi-Annual</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How your fiscal year is divided into periods</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Period Naming Convention</Label>
                  <Select defaultValue="month">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select naming convention" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Month Name (January 2025)</SelectItem>
                      <SelectItem value="period">Period Number (Period 1 2025)</SelectItem>
                      <SelectItem value="custom">Custom Format</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How accounting periods are named</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Period Locking Policy</Label>
                <Select defaultValue="manual">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select locking policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual Locking Only</SelectItem>
                    <SelectItem value="30days">Auto-Lock After 30 Days</SelectItem>
                    <SelectItem value="60days">Auto-Lock After 60 Days</SelectItem>
                    <SelectItem value="90days">Auto-Lock After 90 Days</SelectItem>
                    <SelectItem value="custom">Custom Policy</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">When accounting periods are locked for editing</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="allow-override" />
                <Label htmlFor="allow-override" className="text-sm">
                  Allow administrators to post to locked periods
                </Label>
              </div>
            </div>

            {/* Current Year Periods table */}
            <div className="rounded-md border">
              <div className="p-4">
                <h4 className="font-medium">Current Year Periods (FY2025)</h4>
              </div>
              <Separator />
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 font-medium">Period</div>
                  <div className="col-span-3 font-medium">Start Date</div>
                  <div className="col-span-3 font-medium">End Date</div>
                  <div className="col-span-2 font-medium">Status</div>
                  <div className="col-span-1 font-medium text-right">Actions</div>
                </div>
              </div>
              <Separator />
              {[
                { period: "January 2025", start: "Jan 1, 2025", end: "Jan 31, 2025", status: "Closed" },
                { period: "February 2025", start: "Feb 1, 2025", end: "Feb 28, 2025", status: "Closed" },
                { period: "March 2025", start: "Mar 1, 2025", end: "Mar 31, 2025", status: "Closed" },
                { period: "April 2025", start: "Apr 1, 2025", end: "Apr 30, 2025", status: "Open" },
                { period: "May 2025", start: "May 1, 2025", end: "May 31, 2025", status: "Future" },
                { period: "June 2025", start: "Jun 1, 2025", end: "Jun 30, 2025", status: "Future" },
                { period: "July 2025", start: "Jul 1, 2025", end: "Jul 31, 2025", status: "Future" },
                { period: "August 2025", start: "Aug 1, 2025", end: "Aug 31, 2025", status: "Future" },
                { period: "September 2025", start: "Sep 1, 2025", end: "Sep 30, 2025", status: "Future" },
                { period: "October 2025", start: "Oct 1, 2025", end: "Oct 31, 2025", status: "Future" },
                { period: "November 2025", start: "Nov 1, 2025", end: "Nov 30, 2025", status: "Future" },
                { period: "December 2025", start: "Dec 1, 2025", end: "Dec 31, 2025", status: "Future" },
              ].map((period, index) => (
                <div key={index} className="border-t p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">{period.period}</div>
                    <div className="col-span-3">{period.start}</div>
                    <div className="col-span-3">{period.end}</div>
                    <div className="col-span-2">
                      <Badge
                        variant={
                          period.status === "Open" ? "default" : period.status === "Closed" ? "secondary" : "outline"
                        }
                      >
                        {period.status}
                      </Badge>
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}

// Localization Settings Component
function LocalizationSettings() {
  // Implementation with improved dropdowns
  return (
    <Card>
      <CardHeader>
        <CardTitle>Localization Settings</CardTitle>
        <CardDescription>Configure regional settings and formats</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Default Language</Label>
            <Select defaultValue="en-us">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-us">English (US)</SelectItem>
                <SelectItem value="en-uk">English (UK)</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="zh">Chinese (Simplified)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Primary language for the application interface</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Default Region</Label>
            <Select defaultValue="us">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="eu">European Union</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="cn">China</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Region used for default formatting and regulations</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Date Format</Label>
            <Select defaultValue="mm-dd-yyyy">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm-dd-yyyy">MM/DD/YYYY (04/08/2025)</SelectItem>
                <SelectItem value="dd-mm-yyyy">DD/MM/YYYY (08/04/2025)</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD (2025-04-08)</SelectItem>
                <SelectItem value="dd-mmm-yyyy">DD-MMM-YYYY (08-Apr-2025)</SelectItem>
                <SelectItem value="custom">Custom Format</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">How dates are displayed throughout the application</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Number Format</Label>
            <Select defaultValue="us">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">1,234.56 (US)</SelectItem>
                <SelectItem value="eu">1.234,56 (European)</SelectItem>
                <SelectItem value="fr">1 234,56 (French)</SelectItem>
                <SelectItem value="ch">1'234.56 (Swiss)</SelectItem>
                <SelectItem value="custom">Custom Format</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">How numbers are displayed throughout the application</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Time Format</Label>
            <Select defaultValue="12h">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12h">12-hour (2:30 PM)</SelectItem>
                <SelectItem value="24h">24-hour (14:30)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">How times are displayed throughout the application</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">First Day of Week</Label>
            <Select defaultValue="sunday">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select first day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sunday">Sunday</SelectItem>
                <SelectItem value="monday">Monday</SelectItem>
                <SelectItem value="saturday">Saturday</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">First day of the week for calendars and reports</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Timezone</Label>
          <Select defaultValue="pacific">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pacific">(UTC-08:00) Pacific Time (US & Canada)</SelectItem>
              <SelectItem value="eastern">(UTC-05:00) Eastern Time (US & Canada)</SelectItem>
              <SelectItem value="utc">(UTC+00:00) UTC</SelectItem>
              <SelectItem value="cet">(UTC+01:00) Central European Time</SelectItem>
              <SelectItem value="jst">(UTC+09:00) Japan Standard Time</SelectItem>
              <SelectItem value="aest">(UTC+10:00) Australian Eastern Standard Time</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">Default timezone for date and time calculations</p>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Paper Size</Label>
          <Select defaultValue="letter">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select paper size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="letter">Letter (8.5" x 11")</SelectItem>
              <SelectItem value="a4">A4 (210mm x 297mm)</SelectItem>
              <SelectItem value="legal">Legal (8.5" x 14")</SelectItem>
              <SelectItem value="custom">Custom Size</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">Default paper size for printed reports</p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="allow-user-override" defaultChecked />
          <Label htmlFor="allow-user-override" className="text-sm">
            Allow users to override localization settings
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}

// Users & Permissions Settings Component
function UsersPermissionsSettings() {
  // Implementation with improved dropdowns
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users & Permissions</CardTitle>
        <CardDescription>Manage user accounts and access controls</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="users">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="security">Security Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4 pt-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">User Accounts</h3>
              <Button variant="outline" size="sm">
                Add User
              </Button>
            </div>

            <div className="rounded-md border">
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 font-medium">Name</div>
                  <div className="col-span-3 font-medium">Email</div>
                  <div className="col-span-2 font-medium">Role</div>
                  <div className="col-span-2 font-medium">Status</div>
                  <div className="col-span-2 font-medium text-right">Actions</div>
                </div>
              </div>
              <Separator />
              {[
                { name: "John Doe", email: "john.doe@acmecorp.com", role: "Administrator", status: "Active" },
                { name: "Jane Smith", email: "jane.smith@acmecorp.com", role: "Finance Manager", status: "Active" },
                { name: "Robert Johnson", email: "robert.johnson@acmecorp.com", role: "Accountant", status: "Active" },
                { name: "Emily Davis", email: "emily.davis@acmecorp.com", role: "Auditor", status: "Active" },
                { name: "Michael Wilson", email: "michael.wilson@acmecorp.com", role: "Viewer", status: "Inactive" },
              ].map((user, index) => (
                <div key={index} className="border-t p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">{user.name}</div>
                    <div className="col-span-3">{user.email}</div>
                    <div className="col-span-2">{user.role}</div>
                    <div className="col-span-2">
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                    </div>
                    <div className="col-span-2 text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-4 pt-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Roles & Permissions</h3>
              <Button variant="outline" size="sm">
                Add Role
              </Button>
            </div>

            <div className="rounded-md border">
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 font-medium">Role Name</div>
                  <div className="col-span-5 font-medium">Description</div>
                  <div className="col-span-2 font-medium">Users</div>
                  <div className="col-span-2 font-medium text-right">Actions</div>
                </div>
              </div>
              <Separator />
              {[
                { name: "Administrator", description: "Full system access and control", users: 1 },
                { name: "Finance Manager", description: "Access to all financial data and reports", users: 1 },
                { name: "Accountant", description: "Can create and edit financial transactions", users: 1 },
                { name: "Auditor", description: "Read-only access to financial data for auditing", users: 1 },
                { name: "Viewer", description: "Limited read-only access to reports", users: 1 },
              ].map((role, index) => (
                <div key={index} className="border-t p-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3 font-medium">{role.name}</div>
                    <div className="col-span-5">{role.description}</div>
                    <div className="col-span-2">{role.users}</div>
                    <div className="col-span-2 text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Permission Matrix</h3>
              <div className="rounded-md border overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-3 text-left font-medium">Feature / Module</th>
                      <th className="p-3 text-center font-medium">Administrator</th>
                      <th className="p-3 text-center font-medium">Finance Manager</th>
                      <th className="p-3 text-center font-medium">Accountant</th>
                      <th className="p-3 text-center font-medium">Auditor</th>
                      <th className="p-3 text-center font-medium">Viewer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        module: "Dashboard",
                        admin: "Full",
                        finance: "Full",
                        accountant: "Full",
                        auditor: "View",
                        viewer: "View",
                      },
                      {
                        module: "General Ledger",
                        admin: "Full",
                        finance: "Full",
                        accountant: "Edit",
                        auditor: "View",
                        viewer: "None",
                      },
                      {
                        module: "Accounts Receivable",
                        admin: "Full",
                        finance: "Full",
                        accountant: "Edit",
                        auditor: "View",
                        viewer: "None",
                      },
                      {
                        module: "Accounts Payable",
                        admin: "Full",
                        finance: "Full",
                        accountant: "Edit",
                        auditor: "View",
                        viewer: "None",
                      },
                      {
                        module: "Banking",
                        admin: "Full",
                        finance: "Full",
                        accountant: "Edit",
                        auditor: "View",
                        viewer: "None",
                      },
                      {
                        module: "Financial Reports",
                        admin: "Full",
                        finance: "Full",
                        accountant: "View",
                        auditor: "View",
                        viewer: "View",
                      },
                      {
                        module: "Tax Reports",
                        admin: "Full",
                        finance: "Full",
                        accountant: "View",
                        auditor: "View",
                        viewer: "None",
                      },
                      {
                        module: "System Settings",
                        admin: "Full",
                        finance: "View",
                        accountant: "None",
                        auditor: "None",
                        viewer: "None",
                      },
                      {
                        module: "User Management",
                        admin: "Full",
                        finance: "None",
                        accountant: "None",
                        auditor: "None",
                        viewer: "None",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3 font-medium">{row.module}</td>
                        <td className="p-3 text-center">{row.admin}</td>
                        <td className="p-3 text-center">{row.finance}</td>
                        <td className="p-3 text-center">{row.accountant}</td>
                        <td className="p-3 text-center">{row.auditor}</td>
                        <td className="p-3 text-center">{row.viewer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Password Policy</Label>
                  <Select defaultValue="strong">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select password policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strong">Strong (8+ chars, mixed case, numbers, symbols)</SelectItem>
                      <SelectItem value="medium">Medium (8+ chars, mixed case, numbers)</SelectItem>
                      <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                      <SelectItem value="custom">Custom Policy</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Requirements for user passwords</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Password Expiration</Label>
                  <Select defaultValue="90days">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select expiration period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="90days">90 Days</SelectItem>
                      <SelectItem value="60days">60 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How often users must change their passwords</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                  <Badge>Security Feature</Badge>
                </div>
                <Select defaultValue="optional">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select 2FA requirement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="optional">Optional for all users</SelectItem>
                    <SelectItem value="admin-required">Required for administrators</SelectItem>
                    <SelectItem value="all-required">Required for all users</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Two-factor authentication requirements</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Session Timeout</Label>
                <Select defaultValue="30min">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select timeout period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30min">30 minutes</SelectItem>
                    <SelectItem value="1hour">1 hour</SelectItem>
                    <SelectItem value="2hours">2 hours</SelectItem>
                    <SelectItem value="4hours">4 hours</SelectItem>
                    <SelectItem value="8hours">8 hours</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How long until inactive users are logged out</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Login Attempts</Label>
                <Select defaultValue="5attempts">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select login attempt policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5attempts">Lock after 5 failed attempts</SelectItem>
                    <SelectItem value="3attempts">Lock after 3 failed attempts</SelectItem>
                    <SelectItem value="10attempts">Lock after 10 failed attempts</SelectItem>
                    <SelectItem value="no-lock">No lockout</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Account lockout policy after failed login attempts</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">IP Restrictions</Label>
                <Textarea className="h-24" placeholder="Enter allowed IP addresses or ranges (one per line)" />
                <p className="text-xs text-muted-foreground">
                  Restrict access to specific IP addresses (leave blank for no restrictions)
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="audit-logging" defaultChecked />
                <Label htmlFor="audit-logging" className="text-sm">
                  Enable comprehensive audit logging
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="enforce-ssl" defaultChecked />
                <Label htmlFor="enforce-ssl" className="text-sm">
                  Enforce SSL/TLS for all connections
                </Label>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}

// AccountingSetupSettings, ReportingPeriodsSettings, ImportExportSettings, and IntegrationsSettings components
// would be implemented similarly

function AccountingSetupSettings() {
  return <div>Accounting Setup Settings Content</div>
}

function ReportingPeriodsSettings() {
  return <div>Reporting Periods Settings Content</div>
}

function ImportExportSettings() {
  return <div>Import & Export Settings Content</div>
}

function IntegrationsSettings() {
  return <div>Integrations Settings Content</div>
}
