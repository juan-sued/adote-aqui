'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const mockMetaData = {
  zaps: {
    playersPerMonth: [
      { name: 'Jan', total: 30 },
      { name: 'Fev', total: 45 },
      { name: 'Mar', total: 60 },
      { name: 'Abr', total: 20 },
      { name: 'Mai', total: 75 },
      { name: 'Jun', total: 50 },
    ],
  },
}

export function Overview() {
  const metaData = mockMetaData // Simulando os dados

  if (metaData) {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={metaData.zaps.playersPerMonth}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#6080ff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <div className="w-full h-full flex justify-center items-center">
          <h1>Não há dados para monstrar</h1>
        </div>
      </ResponsiveContainer>
    )
  }
}
