"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building, ChevronDown, Plus } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function OrganizationSwitcher() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Mock organizations data
  const organizations = [
    { id: 1, name: "Acme Inc", role: "Owner" },
    { id: 2, name: "Globex Corp", role: "Member" },
    { id: 3, name: "Stark Industries", role: "Admin" },
  ]

  // Current organization
  const currentOrg = organizations[0]

  if (isMobile) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="fixed bottom-4 right-4 z-50 h-10 gap-1 pl-3 shadow-md">
            <Building className="h-4 w-4" />
            <span className="max-w-[100px] truncate">{currentOrg.name}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Switch Organization</DialogTitle>
            <DialogDescription>Select an organization to switch to or create a new one.</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-2">
            {organizations.map((org) => (
              <Button
                key={org.id}
                variant={org.id === currentOrg.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setIsOpen(false)}
              >
                <Building className="mr-2 h-4 w-4" />
                {org.name}
                <span className="ml-auto text-xs text-muted-foreground">{org.role}</span>
              </Button>
            ))}
          </div>
          <DialogFooter>
            <Button className="w-full gap-1">
              <Plus className="h-4 w-4" />
              Create Organization
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="fixed bottom-4 right-4 z-50 h-10 gap-1 pl-3 shadow-md">
          <Building className="h-4 w-4" />
          <span className="max-w-[100px] truncate">{currentOrg.name}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Organizations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {organizations.map((org) => (
          <DropdownMenuItem key={org.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              {org.name}
            </div>
            <span className="text-xs text-muted-foreground">{org.role}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          Create Organization
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
