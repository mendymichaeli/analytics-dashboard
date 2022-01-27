import "./Chart.css";
import React from "react";
import { chartData } from "../../demmyData.js"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


export default function Chart() {
    console.log("chart:", chartData)
    return (
        <div className="chart">
            <h1 className="chartTitle">Customers over the past year</h1>

            <LineChart
                width={1050}
                height={350}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>

    );
}
