import { cn } from "@/lib/utils"

interface PageTitleProps {
  title: string
  subtitle?: string
  className?: string
}

// Define the component first
const PageTitleComponent = ({ title, subtitle, className }: PageTitleProps) => {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

// Export as named export
export const PageTitle = PageTitleComponent

// Also export as default for compatibility
export default PageTitleComponent
