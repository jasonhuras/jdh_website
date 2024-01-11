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
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    datasets: [
        {
            label: 'JDH AI Algorithm',
            data: [1000, 1235, 1789, 2547, 2789, 3111, 3156, 3567, 3789, 3975, 4142],
            fill: false,
            borderColor: '#5c8be9',
            tension: 0.1
        },
        {
            label: 'S&P 500',
            data: [1000, 993, 1087, 1299, 1218, 1569, 1824, 2315, 1865, 2317, 2310],
            fill: false,
            borderColor: '#878787',
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
