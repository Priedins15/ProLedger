"use client"

import type React from "react"

import { Bar, BarChart, Line, LineChart, Pie, PieChart, Area, AreaChart, ComposedChart } from "recharts"

export { Bar, BarChart, Line, LineChart, Pie, PieChart, Area, AreaChart, ComposedChart }

export const CartesianGrid = () => null
export const Legend = () => null
export const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
export const Tooltip = () => null
export const XAxis = () => null
export const YAxis = () => null
export const Cell = () => null
