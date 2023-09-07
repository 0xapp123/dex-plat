import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Data } from "@/data/JSON";

// interface Props {
//   data: {}[];
//   dataKey: string;
// }

const MiniChart: React.FC = () => {
  return (
    <div className="w-full miniChart h-[150px]">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          width={200}
          data={Data.heroSectionChartData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area
            dataKey="value"
            stroke="#ff9735"
            strokeWidth={3}
            fill="#603e1b"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;
