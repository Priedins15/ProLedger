"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function CryptoOverview() {
  const data = [
    {
      name: "Jan",
      bitcoin: 4000,
      ethereum: 2400,
      other: 1200,
    },
    {
      name: "Feb",
      bitcoin: 3000,
      ethereum: 1398,
      other: 900,
    },
    {
      name: "Mar",
      bitcoin: 5000,
      ethereum: 3800,
      other: 1500,
    },
    {
      name: "Apr",
      bitcoin: 7800,
      ethereum: 4908,
      other: 2300,
    },
    {
      name: "May",
      bitcoin: 9890,
      ethereum: 6800,
      other: 3100,
    },
    {
      name: "Jun",
      bitcoin: 8390,
      ethereum: 5800,
      other: 2700,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorBitcoin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorEthereum" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#666666" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#666666" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorOther" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#999999" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#999999" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => [`$${value}`, ""]} labelFormatter={(label) => `Month: ${label}`} />
        <Legend />
        <Area
          type="monotone"
          dataKey="bitcoin"
          stackId="1"
          stroke="#FF6B00"
          fillOpacity={1}
          fill="url(#colorBitcoin)"
          name="Bitcoin"
        />
        <Area
          type="monotone"
          dataKey="ethereum"
          stackId="1"
          stroke="#666666"
          fillOpacity={1}
          fill="url(#colorEthereum)"
          name="Ethereum"
        />
        <Area
          type="monotone"
          dataKey="other"
          stackId="1"
          stroke="#999999"
          fillOpacity={1}
          fill="url(#colorOther)"
          name="Other Crypto"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
