import {Routes} from "@/app/helpers/routes";
import HomeIcon from '@/public/icons/icon_home.svg';
import DiarySuccessIcon from '@/public/icons/icon_diary_success.svg';
import DiaryOfGoodnessIcon from '@/public/icons/icon_diary_of_goodness.svg';
import ProfileIcon from '@/public/icons/icon_profile.svg';
import SettingsIcon from '@/public/icons/icon_settings.svg';
import LogoutIcon from '@/public/icons/icon_logout.svg';

export const SidebarItems = [
    {
        id: 0,
        name: 'Меню',
    },
    {
        id: 1,
        name: 'Головна панель',
        link: `${Routes.DASHBOARD}`,
        icon: HomeIcon
    },
    {
        id: 2,
        name: 'Щоденники',
    },
    {
        id: 3,
        name: 'Успіху',
        link: `${Routes.DIARY_SUCCESS}`,
        icon: DiarySuccessIcon
    },
    {
        id: 4,
        name: 'Блага',
        link: `${Routes.DIARY_OF_GOODNESS}`,
        icon: DiaryOfGoodnessIcon
    },
    {
        id: 5,
        name: 'Персональні налаштування',
    },
    {
        id: 6,
        name: 'Профіль',
        link: `${Routes.PROFILE}`,
        icon: ProfileIcon
    },
    {
        id: 7,
        name: 'Налаштування',
        link: `${Routes.SETTINGS}`,
        icon: SettingsIcon
    },
    {
        id: 8,
        name: 'Вийти з аккаунту',
        link: '',
        icon: LogoutIcon
    },
]