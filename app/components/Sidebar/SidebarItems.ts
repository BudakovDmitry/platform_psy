import {Routes} from "@/app/helpers/routes";
import HomeIcon from '@/public/icons/icon_home.svg';
import DiarySuccessIcon from '@/public/icons/icon_diary_success.svg';
import DiaryOfGoodnessIcon from '@/public/icons/icon_diary_of_goodness.svg';
import ProfileIcon from '@/public/icons/icon_profile.svg';
import SettingsIcon from '@/public/icons/icon_settings.svg';
import LogoutIcon from '@/public/icons/icon_logout.svg';
import CalendarIcon from '@/public/icons/icon_calendar.svg';
import CustomersIcon from '@/public/icons/icon_customers.svg';
import MessengerIcon from '@/public/icons/icon_messenger_2.svg';

export const SidebarItems = [
    {
        id: 0,
        name: 'Меню',
        roles: ['ADMIN', 'USER']
    },
    {
        id: 1,
        name: 'Головна панель',
        link: `${Routes.DASHBOARD}`,
        icon: HomeIcon,
        roles: ['ADMIN', 'USER']
    },
    {
        id: 2,
        name: 'Чати',
        link: `${Routes.MESSENGER}`,
        icon: MessengerIcon,
        roles: ['ADMIN']
    },
    {
        id: 3,
        name: 'Чат',
        link: `${Routes.CHAT}/user`,
        icon: MessengerIcon,
        roles: ['USER']
    },
    {
        id: 4,
        name: 'Щоденники',
        roles: ['ADMIN', 'USER']
    },
    {
        id: 5,
        name: 'Успіху',
        link: `${Routes.DIARY_SUCCESS}`,
        icon: DiarySuccessIcon,
        roles: ['ADMIN', 'USER']
    },
    {
        id: 6,
        name: 'Блага',
        link: `${Routes.DIARY_OF_GOODNESS}`,
        icon: DiaryOfGoodnessIcon,
        roles: ['ADMIN', 'USER']
    },
    {
        id: 7,
        name: 'Адміністрування',
        roles: ['ADMIN']
    },
    {
        id: 8,
        name: 'Клієнти',
        link: `${Routes.CUSTOMERS}`,
        icon: CustomersIcon,
        roles: ['ADMIN']
    },
    // {
    //     id: 8,
    //     name: 'Календар',
    //     link: `${Routes.CALENDAR}`,
    //     icon: CalendarIcon,
    //     roles: ['ADMIN']
    // },
    {
        id: 9,
        name: 'Персональні налаштування',
        roles: ['ADMIN', 'USER']
    },
    {
        id: 10,
        name: 'Профіль',
        link: `${Routes.PROFILE}`,
        icon: ProfileIcon,
        roles: ['ADMIN', 'USER']
    },
    // {
    //     id: 11,
    //     name: 'Налаштування',
    //     link: `${Routes.SETTINGS}`,
    //     icon: SettingsIcon,
    //     roles: ['ADMIN', 'USER']
    // },
    {
        id: 12,
        name: 'Вийти з аккаунту',
        link: 'logout',
        icon: LogoutIcon,
        roles: ['ADMIN', 'USER']
    },
]