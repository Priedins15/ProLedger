import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Plus, Search, Star, StarOff, Phone, Mail, MapPin, MoreHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function VendorsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Vendor
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList className="h-auto flex-wrap">
            <TabsTrigger value="all">All Vendors</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="preferred">Preferred</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-[250px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search vendors..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Vendors</CardTitle>
              <CardDescription>Manage your vendor relationships and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="office">Office Supplies</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="shipping">Shipping</SelectItem>
                      <SelectItem value="services">Professional Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name-az">Name (A-Z)</SelectItem>
                      <SelectItem value="name-za">Name (Z-A)</SelectItem>
                      <SelectItem value="spend-high">Spend (High to Low)</SelectItem>
                      <SelectItem value="spend-low">Spend (Low to High)</SelectItem>
                      <SelectItem value="rating-high">Rating (High to Low)</SelectItem>
                      <SelectItem value="rating-low">Rating (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>YTD Spend</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        name: "Office Supplies Co",
                        logo: "O",
                        category: "Office Supplies",
                        contact: {
                          name: "Jane Smith",
                          email: "jane@officesupplies.co",
                          phone: "(555) 123-4567",
                        },
                        location: "New York, USA",
                        status: "Active",
                        rating: 4,
                        spend: "$24,500.00",
                        preferred: true,
                      },
                      {
                        id: 2,
                        name: "Tech Solutions Inc",
                        logo: "T",
                        category: "Technology",
                        contact: {
                          name: "John Doe",
                          email: "john@techsolutions.com",
                          phone: "(555) 987-6543",
                        },
                        location: "San Francisco, USA",
                        status: "Active",
                        rating: 5,
                        spend: "$58,999.99",
                        preferred: true,
                      },
                      {
                        id: 3,
                        name: "Modern Furniture Ltd",
                        logo: "M",
                        category: "Furniture",
                        contact: {
                          name: "Sarah Johnson",
                          email: "sarah@modernfurniture.com",
                          phone: "(555) 456-7890",
                        },
                        location: "Chicago, USA",
                        status: "Active",
                        rating: 3,
                        spend: "$32,000.00",
                        preferred: false,
                      },
                      {
                        id: 4,
                        name: "Fast Shipping Services",
                        logo: "F",
                        category: "Shipping",
                        contact: {
                          name: "Mike Wilson",
                          email: "mike@fastshipping.com",
                          phone: "(555) 789-0123",
                        },
                        location: "Miami, USA",
                        status: "Active",
                        rating: 4,
                        spend: "$17,550.00",
                        preferred: false,
                      },
                      {
                        id: 5,
                        name: "Global Consulting Group",
                        logo: "G",
                        category: "Professional Services",
                        contact: {
                          name: "Lisa Brown",
                          email: "lisa@globalconsulting.com",
                          phone: "(555) 234-5678",
                        },
                        location: "London, UK",
                        status: "Inactive",
                        rating: 2,
                        spend: "$8,900.00",
                        preferred: false,
                      },
                      {
                        id: 6,
                        name: "Premium Paper Products",
                        logo: "P",
                        category: "Office Supplies",
                        contact: {
                          name: "David Lee",
                          email: "david@premiumpaper.com",
                          phone: "(555) 345-6789",
                        },
                        location: "Toronto, Canada",
                        status: "Active",
                        rating: 5,
                        spend: "$12,000.00",
                        preferred: true,
                      },
                      {
                        id: 7,
                        name: "Eco Cleaning Solutions",
                        logo: "E",
                        category: "Services",
                        contact: {
                          name: "Maria Garcia",
                          email: "maria@ecocleaning.com",
                          phone: "(555) 567-8901",
                        },
                        location: "Seattle, USA",
                        status: "Active",
                        rating: 4,
                        spend: "$5,600.00",
                        preferred: false,
                      },
                      {
                        id: 8,
                        name: "Digital Marketing Experts",
                        logo: "D",
                        category: "Professional Services",
                        contact: {
                          name: "Robert Taylor",
                          email: "robert@digitalmarketing.com",
                          phone: "(555) 678-9012",
                        },
                        location: "Austin, USA",
                        status: "Active",
                        rating: 3,
                        spend: "$15,000.00",
                        preferred: false,
                      },
                    ].map((vendor) => (
                      <TableRow key={vendor.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{vendor.logo}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{vendor.name}</div>
                              <div className="text-sm text-muted-foreground">{vendor.contact.name}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{vendor.category}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="flex items-center text-sm">
                              <Mail className="mr-1 h-3 w-3" />
                              {vendor.contact.email}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Phone className="mr-1 h-3 w-3" />
                              {vendor.contact.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            {vendor.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              vendor.status === "Active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                            variant="outline"
                          >
                            {vendor.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) =>
                              i < vendor.rating ? (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ) : (
                                <StarOff key={i} className="h-4 w-4 text-muted-foreground" />
                              ),
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{vendor.spend}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>View Purchase History</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {vendor.preferred ? "Remove from Preferred" : "Add to Preferred"}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                {vendor.status === "Active" ? "Deactivate Vendor" : "Activate Vendor"}
                              </DropdownMenuItem>
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
      </Tabs>
    </div>
  )
}
