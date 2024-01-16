import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const chartData = {
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
        {
            label: 'JDH AI Algorithm',
            data: [
                500.0,
                1270.0,
                2070.0,
                2720.0,
                3850.0,
                4520.0,
                5450.0,
                6070.0,
                7410.0,
                7430.0,
            ],
            backgroundColor: '#07498c',
        },

        {
            label: 'S&P 500',
            data: [
                100.0,
                100.0,
                230.0,
                340.0,
                410.0,
                320.0,
                750.0,
                880.0,
                790.0,
                930.0,
            ],
            backgroundColor: '#ffffff',
        },
        {
            label: 'Schwab Mutual Fund',
            data: [
                110.0,
                20.0,
                400.0,
                650.0,
                450.0,
                210.0,
                870.0,
                1130.0,
                650.0,
                860.0,
            ],
            backgroundColor: '#b5b5b5',
        },
        {
            label: 'Vanguard 500 Fund',
            data: [
                100.0,
                70.0,
                220.0,
                330.0,
                400.0,
                280.0,
                750.0,
                850.0,
                740.0,
                880.0,
            ],
            backgroundColor: '#545454',
        }
    ]
};

const options = {
    plugins: {
        legend: {
            labels: {
                color: '#B0B8C4'
            }
        }
    },
    maintainAspectRatio: false,
    responsive: true,
};

const Graph = () => {
    return (
        <div style={{ backgroundColor: '#0f1418', height: '600px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Graph;
