import { cn } from "@/lib/utils"

interface PageHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

const PageHeading = ({ title, subtitle, className }: PageHeadingProps) => {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

export default PageHeading
