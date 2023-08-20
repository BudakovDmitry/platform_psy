export enum Routes {
    REGISTRATION = '/registration',
    LOGIN = '/login',
    PLATFORM = '/platform',
    DASHBOARD = `${Routes.PLATFORM}/dashboard`,
    DIARY_SUCCESS = `${Routes.PLATFORM}/diary-success`,
    DIARY_OF_GOODNESS = `${Routes.PLATFORM}/diary-of-goodness`,
    PROFILE = `${Routes.PLATFORM}/profile`,
    SETTINGS = `${Routes.PLATFORM}/settings`
}