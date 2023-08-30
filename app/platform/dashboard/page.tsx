'use client'

import { Doughnut } from "react-chartjs-2";
import {Card, CardBody, Skeleton} from "@nextui-org/react";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'


const Dashboard = () => {
    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const dataDoughnut = {
        labels: ['Загальна', 'Активні', 'Преміум'],
        datasets: [
            {
                label: '# of Votes',
                data: [19, 14, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    const labelsBar = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const dataBar = {
        labels: labelsBar,
        datasets: [
            {
                label: 'Зареєстровані',
                data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Видалені',
                data: labelsBar.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='relative w-full'>
            <div className='px-10 py-6 min-h-screen z-1 relative'>
                <Card
                    className='border-none my-10'
                    radius="lg"
                >
                    <CardBody>
                        <h1 className='text-center font-bold'>Дошка інформації</h1>
                    </CardBody>
                </Card>
                <div className='flex gap-10'>
                    <Card className="w-2/6 space-y-5 p-6" radius="lg">
                        <h3 className='mb-2 text-center font-bold'>Кількість клієнтів</h3>
                        <Doughnut data={dataDoughnut} />
                    </Card>
                    <Card className="w-4/6 space-y-5 p-6" radius="lg">
                        <h3 className='mb-2 text-center font-bold'>Кількість клієнтів</h3>
                        <Bar options={optionsBar} data={dataBar} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;