// LineChartComponent.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const chartData = {
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
        {
            label: 'JDH AI Algorithm',
            data: [1095.51,
                1224.72,
                1384.4,
                1565.98,
                1770.19,
                2002.806,
                2265.98,
                2562.43,
                2890.37,
                3230.37,],
            fill: false,
            borderColor: '#5c8be9',
            tension: 0.1
        },

        {
            label: 'S&P 500',
            data: [1056.91,
                1272.62,
                1326.74,
                1509.79,
                1740.83,
                2195.24,
                1961.2,
                2195.62,
                2299.22,
                2299.22,],
            fill: false,
            borderColor: '#ffffff',
            tension: 0.1
        },
        {
            label: 'Schwab Mutual Fund',
            data: [979.55,
                1125.76,
                1252.44,
                1382.78,
                1367.52,
                1960.01,
                1939.56,
                1957.88,
                2239.01,
                2239.01],
            fill: false,
            borderColor: '#ababab',
            tension: 0.1
        }
    ]
};

const options = {
    scales: {
        y: {
            ticks: {
                color: '#B0B8C4'
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)'
            }
        },
        x: {
            ticks: {
                color: '#B0B8C4'
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)'
            }
        }
    },
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
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Graph;
