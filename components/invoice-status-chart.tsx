"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "@/components/ui/chart"

export function InvoiceStatusChart() {
  const data = [
    { name: "Paid", value: 45, color: "#22C55E" },
    { name: "Pending", value: 30, color: "#F59E0B" },
    { name: "Overdue", value: 15, color: "#EF4444" },
    { name: "Draft", value: 10, color: "#6B7280" },
  ]

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, ""]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
