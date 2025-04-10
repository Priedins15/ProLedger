import { cn } from "@/lib/utils"

export function AccountBalances() {
  const accounts = [
    {
      name: "Business Checking",
      balance: 24567.89,
      accountNumber: "****1234",
      type: "Bank",
    },
    {
      name: "Business Savings",
      balance: 50123.45,
      accountNumber: "****5678",
      type: "Bank",
    },
    {
      name: "Tax Reserve",
      balance: 15000.0,
      accountNumber: "****9012",
      type: "Bank",
    },
    {
      name: "Credit Card",
      balance: -2345.67,
      accountNumber: "****3456",
      type: "Credit Card",
    },
  ]

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <div key={account.accountNumber} className="flex items-center">
          <div className="mr-4">
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full",
                account.balance >= 0 ? "bg-blue-100" : "bg-red-100",
              )}
            >
              <span className={cn("text-xs font-bold", account.balance >= 0 ? "text-blue-600" : "text-red-600")}>
                {account.type === "Bank" ? "B" : "CC"}
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{account.name}</p>
            <p className="text-xs text-muted-foreground">{account.accountNumber}</p>
          </div>
          <div className={cn("font-medium tabular-nums", account.balance >= 0 ? "" : "text-red-600")}>
            {account.balance >= 0 ? "" : "-"}$
            {Math.abs(account.balance).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
