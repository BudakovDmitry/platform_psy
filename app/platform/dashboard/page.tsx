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
import {useSelector} from "react-redux";
import {Roles} from "@/app/helpers/roles";
import {redirect} from "next/navigation";
import {Routes} from "@/app/helpers/routes";
import {UserType} from "@/app/types/types";


const Dashboard = () => {
    const user = useSelector((state: any) => state.user.user)
    const customers = useSelector((state: any) => state.customers)

    const getActiveCustomers = () => {
        return customers.customers.filter((customer: UserType) => customer.isActive).length
    }
    const getNotActiveCustomers = () => {
        return customers.customers.filter((customer: UserType) => !customer.isActive).length
    }

    const getUkrainianMonthNamesUntilToday = () => {
        const ukrainianMonthNames = [
            'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
            'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
        ];

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();

        return ukrainianMonthNames.slice(0, currentMonth + 1);
    };

    const getClientCountByMonth = (customers: UserType[]) => {
        const currentDate = new Date(); // Поточна дата
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const clientCountByMonth = new Array(12).fill(0); // Масив для збереження кількостей клієнтів по місяцях

        customers.forEach((customer: UserType) => {
            const registrationDate = new Date(customer.registrationDate);
            const registrationYear = registrationDate.getFullYear();
            const registrationMonth = registrationDate.getMonth();

            if (registrationYear < currentYear || (registrationYear === currentYear && registrationMonth <= currentMonth)) {
                clientCountByMonth[registrationMonth] += 1;
            }
        });

        return clientCountByMonth;
    };


    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const dataDoughnutAdmin = {
        labels: ['Загальна', 'Активні', 'Не активні'],
        datasets: [
            {
                label: '# of Votes',
                data: [customers.customers.length, getActiveCustomers(), getNotActiveCustomers()],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const optionsBarAdmin = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    const labelsBarAdmin = getUkrainianMonthNamesUntilToday();

    const dataBarAdmin = {
        labels: labelsBarAdmin,
        datasets: [
            {
                label: 'Зареєстровані',
                data: getClientCountByMonth(customers.customers),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            // {
            //     label: 'Видалені',
            //     data: getClientCountByMonth(customers.customers),
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            //     borderColor: 'rgba(255, 99, 132, 1)',
            //     borderWidth: 1,
            // },
        ],
    };

    if (user.roles.includes(Roles.ADMIN)) {
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
                            <Doughnut data={dataDoughnutAdmin} />
                        </Card>
                        <Card className="w-4/6 space-y-5 p-6" radius="lg">
                            <h3 className='mb-2 text-center font-bold'>Кількість клієнтів</h3>
                            <Bar options={optionsBarAdmin} data={dataBarAdmin} />
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

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
                        <Doughnut data={dataDoughnutAdmin} />
                    </Card>
                    <Card className="w-4/6 space-y-5 p-6" radius="lg">
                        <h3 className='mb-2 text-center font-bold'>Кількість клієнтів</h3>
                        <Bar options={optionsBarAdmin} data={dataBarAdmin} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;