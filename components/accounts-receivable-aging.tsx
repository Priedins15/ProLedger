"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function AccountsReceivableAging() {
  const data = [
    {
      name: "Current",
      amount: 12500,
    },
    {
      name: "1-30 Days",
      amount: 8750,
    },
    {
      name: "31-60 Days",
      amount: 5400,
    },
    {
      name: "61-90 Days",
      amount: 3200,
    },
    {
      name: ">90 Days",
      amount: 2100,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          formatter={(value) => [`$${value.toLocaleString()}`, ""]}
          labelFormatter={(label) => `Aging: ${label}`}
        />
        <Legend />
        <Bar dataKey="amount" fill="#FF6B00" name="Amount" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
