"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  Home,
  CreditCard,
  FileText,
  Package,
  Bitcoin,
  Building,
  BookOpen,
  BarChart,
  Landmark,
  Briefcase,
  DollarSign,
  Menu,
  Settings,
  X,
  Heart,
  Factory,
  HardHat,
  ShieldCheck,
  HomeIcon,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  // Close sidebar when navigating on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  const SidebarContent = () => (
    <div className={cn("h-full flex flex-col", className)}>
      <div className="flex items-center justify-between h-14 px-4 border-b">
        <div className="flex items-center">
          <Landmark className="h-6 w-6 text-orange-500" />
          <span className="ml-2 font-bold text-lg">LedgerPro</span>
        </div>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Overview</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/reports") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/reports">
                <BarChart className="mr-2 h-4 w-4" />
                Reports
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Financial Management</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/general-ledger" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/general-ledger">
                <BookOpen className="mr-2 h-4 w-4" />
                General Ledger
              </Link>
            </Button>
            <Button
              variant={pathname === "/chart-of-accounts" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/chart-of-accounts">
                <BookOpen className="mr-2 h-4 w-4" />
                Chart of Accounts
              </Link>
            </Button>
            <Button
              variant={pathname === "/bank-reconciliation" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/bank-reconciliation">
                <CreditCard className="mr-2 h-4 w-4" />
                Bank Reconciliation
              </Link>
            </Button>
            <Button variant={pathname === "/banking" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/banking">
                <CreditCard className="mr-2 h-4 w-4" />
                Banking
              </Link>
            </Button>
            <Button variant={pathname === "/crypto" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/crypto">
                <Bitcoin className="mr-2 h-4 w-4" />
                Crypto
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Sales & Purchases</h2>
          <div className="space-y-1">
            <Button variant={pathname === "/invoices" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/invoices">
                <FileText className="mr-2 h-4 w-4" />
                Invoices
              </Link>
            </Button>
            <Button variant={pathname === "/bills" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/bills">
                <FileText className="mr-2 h-4 w-4" />
                Bills
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/billing") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/billing">
                <DollarSign className="mr-2 h-4 w-4" />
                Billing
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/procurement") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/procurement/purchase-orders">
                <Briefcase className="mr-2 h-4 w-4" />
                Procurement
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Inventory & Assets</h2>
          <div className="space-y-1">
            <Button
              variant={pathname.startsWith("/inventory") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/inventory">
                <Package className="mr-2 h-4 w-4" />
                Inventory
              </Link>
            </Button>
            <Button
              variant={pathname === "/fixed-assets" ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/fixed-assets">
                <Building className="mr-2 h-4 w-4" />
                Fixed Assets
              </Link>
            </Button>
          </div>
        </div>

        {/* New Industry Solutions Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Industry Solutions</h2>
          <div className="space-y-1">
            <Button
              variant={pathname.startsWith("/nonprofit") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/nonprofit">
                <Heart className="mr-2 h-4 w-4" />
                Nonprofit
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/manufacturing") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/manufacturing">
                <Factory className="mr-2 h-4 w-4" />
                Manufacturing
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/construction") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/construction">
                <HardHat className="mr-2 h-4 w-4" />
                Construction
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/healthcare") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/healthcare">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Healthcare
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/real-estate") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/real-estate">
                <HomeIcon className="mr-2 h-4 w-4" />
                Real Estate
              </Link>
            </Button>
            <Button
              variant={pathname.startsWith("/retail") ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href="/retail">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Retail
              </Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Settings</h2>
          <div className="space-y-1">
            <Button variant={pathname === "/settings" ? "secondary" : "ghost"} className="w-full justify-start" asChild>
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )

  // Mobile sidebar with Sheet component
  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-3 z-40 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    )
  }

  // Desktop sidebar
  return (
    <div className="hidden lg:block fixed left-0 top-0 z-30 h-screen w-64 border-r bg-background">
      <SidebarContent />
    </div>
  )
}
