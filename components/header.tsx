"use client"

import { useState } from "react"
import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      {/* Mobile: Left spacing for menu button */}
      <div className="w-8 lg:hidden"></div>

      {/* Search */}
      {isMobile && showSearch ? (
        <div className="flex flex-1 items-center">
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 md:w-[300px] lg:w-[400px]"
            autoFocus
            onBlur={() => setShowSearch(false)}
          />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setShowSearch(false)}>
            <span className="sr-only">Close search</span>
            <span aria-hidden="true">×</span>
          </Button>
        </div>
      ) : (
        <>
          {!isMobile && (
            <div className="flex flex-1 items-center">
              <Input type="search" placeholder="Search..." className="h-9 md:w-[300px] lg:w-[400px]" />
            </div>
          )}

          {/* Title - only on mobile when search is hidden */}
          {isMobile && (
            <div className="flex-1 text-center">
              <h1 className="text-lg font-semibold">LedgerPro</h1>
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* Mobile search button */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                  <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-orange-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New invoice received</DropdownMenuItem>
                <DropdownMenuItem>Payment confirmation</DropdownMenuItem>
                <DropdownMenuItem>System update completed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  )
}
