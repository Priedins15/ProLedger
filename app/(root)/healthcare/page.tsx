import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/date-range-picker"
import PageTitle from "@/components/page-title"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function HealthcarePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Healthcare Compliance" description="Manage healthcare regulations and compliance" />
        <DateRangePicker />
      </div>

      <Tabs defaultValue="compliance" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="compliance">Compliance Dashboard</TabsTrigger>
            <TabsTrigger value="hipaa">HIPAA Controls</TabsTrigger>
            <TabsTrigger value="billing">Medical Billing</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full md:w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Assessment
            </Button>
          </div>
        </div>

        <TabsContent value="compliance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Compliance Score</CardTitle>
                <CardDescription>Overall compliance rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">92%</div>
                <Progress value={92} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Last assessment: Apr 5, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Open Issues</CardTitle>
                <CardDescription>Requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">5</div>
                <p className="text-xs text-muted-foreground">3 medium, 2 low priority</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View Issues
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Security Incidents</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">No incidents reported</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Report Incident
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Next Audit</CardTitle>
                <CardDescription>Scheduled compliance review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Jun 15, 2025</div>
                <p className="text-xs text-muted-foreground">65 days remaining</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Prepare
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Requirements</CardTitle>
              <CardDescription>Status of regulatory compliance controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Requirement</div>
                  <div>Category</div>
                  <div>Status</div>
                  <div>Last Review</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>HIPAA Privacy Rule</div>
                  <div>Privacy</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Compliant</span>
                  </div>
                  <div>Apr 2, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>HIPAA Security Rule</div>
                  <div>Security</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Compliant</span>
                  </div>
                  <div>Mar 28, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>HITECH Act</div>
                  <div>Technology</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Partial</span>
                  </div>
                  <div>Mar 15, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>42 CFR Part 2</div>
                  <div>Substance Abuse</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Compliant</span>
                  </div>
                  <div>Mar 10, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>CMS Billing Requirements</div>
                  <div>Billing</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Partial</span>
                  </div>
                  <div>Mar 5, 2025</div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hipaa" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>HIPAA Controls</CardTitle>
              <CardDescription>Security and privacy safeguards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Control</div>
                  <div>Category</div>
                  <div>Implementation</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Access Controls</div>
                  <div>Technical Safeguards</div>
                  <div>Role-based access control system</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Implemented</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Audit Controls</div>
                  <div>Technical Safeguards</div>
                  <div>Comprehensive audit logging</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Implemented</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Integrity Controls</div>
                  <div>Technical Safeguards</div>
                  <div>Data validation and checksums</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Partial</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Transmission Security</div>
                  <div>Technical Safeguards</div>
                  <div>TLS 1.3 encryption</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Implemented</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Business Associate Agreements</div>
                  <div>Administrative Safeguards</div>
                  <div>Standard BAA templates</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Implemented</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical Billing Compliance</CardTitle>
              <CardDescription>Ensure accurate and compliant medical billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Billing Code</div>
                  <div>Description</div>
                  <div>Usage Count</div>
                  <div>Audit Status</div>
                  <div>Actions</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>99213</div>
                  <div>Office visit, established patient (15 min)</div>
                  <div>245</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Verified</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>99214</div>
                  <div>Office visit, established patient (25 min)</div>
                  <div>187</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Verified</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>99215</div>
                  <div>Office visit, established patient (40 min)</div>
                  <div>92</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Flagged</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>90791</div>
                  <div>Psychiatric diagnostic evaluation</div>
                  <div>56</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Verified</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>J0131</div>
                  <div>Injection, acetaminophen, 10 mg</div>
                  <div>124</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs">Flagged</span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
              <CardDescription>System access and data modification logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-5 text-sm font-medium">
                  <div>Timestamp</div>
                  <div>User</div>
                  <div>Action</div>
                  <div>Resource</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025 09:45:12</div>
                  <div>dr.smith@example.com</div>
                  <div>View Patient Record</div>
                  <div>Patient #12345</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Authorized</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025 09:32:05</div>
                  <div>nurse.jones@example.com</div>
                  <div>Update Medication</div>
                  <div>Patient #12345</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Authorized</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025 09:15:47</div>
                  <div>admin@example.com</div>
                  <div>Export Patient List</div>
                  <div>Department #3</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Authorized</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025 08:52:33</div>
                  <div>billing@example.com</div>
                  <div>Submit Insurance Claim</div>
                  <div>Claim #78901</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">Authorized</span>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div>Apr 10, 2025 08:30:19</div>
                  <div>external.user@partner.com</div>
                  <div>Access Patient Portal</div>
                  <div>API Gateway</div>
                  <div>
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">Denied</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
