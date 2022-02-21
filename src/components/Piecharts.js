import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export function Piecharts() {
    const data = [
        { name: 'Direct', value: 500 },
        { name: 'Social', value: 100 },
        { name: 'Referel', value: 300 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#0f2353'];
    return (
        <div className="piechart">
            <div>
                <h4>Revenue resource</h4>
                <PieChart width={300} height={400}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={83}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>



                </PieChart>
            </div>
            <div>
                <div className="dot1">
                    <p>Direct</p>
                </div>
                <div className="dot2">
                    <p>Social</p>
                </div>
                <div className="dot3">
                    <p>Referal</p>
                </div>
            </div>
        </div>
    );
}