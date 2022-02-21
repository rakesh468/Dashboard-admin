import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

export function Linechart() {
    const data = [
        {
            name: 'Jan',

            Earnings: 0,
        },
        {
            name: 'Feb',
            Earnings: 10000
        },

        {
            name: 'Mar',

            Earnings: 5000,
        },
        {
            name: 'Apr',
            Earnings: 15000
        },
        {
            name: 'May',
            Earnings: 10000,
        },
        {
            name: 'Jun',
            Earnings: 20000,
        },
        {
            name: 'Jul',

            Earnings: 15000,
        },
        {
            name: 'Aug',
            Earnings: 25000
        },
        {
            name: 'Sep',

            Earnings: 20000,
        },
        {
            name: 'Oct',
            Earnings: 30000,
        },
        {
            name: 'Nov',
            Earnings: 25000,
        },
        {
            name: 'Dec',
            Earnings: 40000
        }
    ];
    return (
        <div >
            <h4>Earning overview</h4>
            <ResponsiveContainer width="100%" aspect={1.5} >
                <LineChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="1" horizontal="true" vertical="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" strokeWidth={3} dataKey="Earnings" stroke="#8884d8" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}