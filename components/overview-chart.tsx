"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function OverviewChart() {
  const data = [
    {
      name: "Jan",
      revenue: 4000,
      expenses: 2400,
      profit: 1600,
    },
    {
      name: "Feb",
      revenue: 3000,
      expenses: 1398,
      profit: 1602,
    },
    {
      name: "Mar",
      revenue: 2000,
      expenses: 1800,
      profit: 200,
    },
    {
      name: "Apr",
      revenue: 2780,
      expenses: 1908,
      profit: 872,
    },
    {
      name: "May",
      revenue: 3890,
      expenses: 2800,
      profit: 1090,
    },
    {
      name: "Jun",
      revenue: 4390,
      expenses: 2800,
      profit: 1590,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value}`, ""]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Bar dataKey="revenue" fill="#FF6B00" name="Revenue" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="#000000" name="Expenses" radius={[4, 4, 0, 0]} />
        <Bar dataKey="profit" fill="#22C55E" name="Profit" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
