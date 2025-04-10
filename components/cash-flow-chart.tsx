"use client"

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function CashFlowChart() {
  const data = [
    {
      name: "Jan",
      inflow: 5000,
      outflow: 3200,
      netFlow: 1800,
    },
    {
      name: "Feb",
      inflow: 4500,
      outflow: 3800,
      netFlow: 700,
    },
    {
      name: "Mar",
      inflow: 6000,
      outflow: 4100,
      netFlow: 1900,
    },
    {
      name: "Apr",
      inflow: 5200,
      outflow: 4500,
      netFlow: 700,
    },
    {
      name: "May",
      inflow: 7000,
      outflow: 5100,
      netFlow: 1900,
    },
    {
      name: "Jun",
      inflow: 6800,
      outflow: 4800,
      netFlow: 2000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value}`, ""]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Line type="monotone" dataKey="inflow" stroke="#22C55E" strokeWidth={2} activeDot={{ r: 8 }} name="Cash In" />
        <Line type="monotone" dataKey="outflow" stroke="#EF4444" strokeWidth={2} activeDot={{ r: 8 }} name="Cash Out" />
        <Line type="monotone" dataKey="netFlow" stroke="#FF6B00" strokeWidth={3} activeDot={{ r: 8 }} name="Net Flow" />
      </LineChart>
    </ResponsiveContainer>
  )
}
