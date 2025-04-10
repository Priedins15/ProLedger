import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  const transactions = [
    {
      id: "TX123456",
      description: "Invoice Payment - Client A",
      amount: 1250.0,
      type: "credit",
      date: "Apr 7, 2025",
      category: "Sales",
    },
    {
      id: "TX123457",
      description: "Office Supplies",
      amount: 85.99,
      type: "debit",
      date: "Apr 6, 2025",
      category: "Office Expenses",
    },
    {
      id: "TX123458",
      description: "Software Subscription",
      amount: 49.99,
      type: "debit",
      date: "Apr 5, 2025",
      category: "Software",
    },
    {
      id: "TX123459",
      description: "Invoice Payment - Client B",
      amount: 3200.0,
      type: "credit",
      date: "Apr 4, 2025",
      category: "Sales",
    },
    {
      id: "TX123460",
      description: "Utility Bill",
      amount: 175.5,
      type: "debit",
      date: "Apr 3, 2025",
      category: "Utilities",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <div className="mr-4">
            {transaction.type === "credit" ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <ArrowDown className="h-4 w-4 text-green-600" />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100">
                <ArrowUp className="h-4 w-4 text-red-600" />
              </div>
            )}
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{transaction.date}</span>
              <span className="mx-1">•</span>
              <span>{transaction.category}</span>
            </div>
          </div>
          <div
            className={cn(
              "font-medium tabular-nums",
              transaction.type === "credit" ? "text-green-600" : "text-red-600",
            )}
          >
            {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}
