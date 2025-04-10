import type { ReactNode } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { OrganizationSwitcher } from "@/components/organization-switcher"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden lg:ml-64">
        <Header />
        <div className="flex h-[calc(100vh-3.5rem)]">
          <main className="flex-1 overflow-y-auto bg-muted/20 p-0">{children}</main>
        </div>
      </div>
      <OrganizationSwitcher />
    </div>
  )
}
