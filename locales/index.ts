import {
    zhCN,
    enUS,
    Localization,
    deDE,
    ruRU,
    itIT,
    nlNL,
    frFR,
    svSE,
} from '@material-ui/core/locale';

export enum Locale {
    ZH_CN = 'zh-CN',
    EN = 'en',
    EN_GB = 'en-GB',
    de_DE = 'de-DE',
    ru_RU = 'ru-RU',
    ar = 'ar',
    it_IT = 'it-IT',
    nl_NL = 'nl-NL',
    fr_FR = 'fr-FR',
    sv_SE = 'sv-SE',
}

export const muiLocale: Record<Locale, Localization> = {
    [Locale.ZH_CN]: zhCN,
    [Locale.EN]: enUS,
    [Locale.EN_GB]: enUS, // MUI doesn't have a separate en-GB
    [Locale.de_DE]: deDE,
    [Locale.ru_RU]: ruRU,
    // FIXME: upgrade material-ui and import arEG
    [Locale.ar]: enUS,
    [Locale.it_IT]: itIT,
    [Locale.nl_NL]: nlNL,
    [Locale.fr_FR]: frFR,
    [Locale.sv_SE]: svSE,
};

export const configLocale: Record<Locale, string> = {
    [Locale.EN]: 'English',
    [Locale.EN_GB]: 'English (UK)',
    [Locale.ZH_CN]: '简体中文',
    [Locale.de_DE]: 'Deutsch',
    [Locale.ru_RU]: 'Русский',
    [Locale.ar]: 'العربية',
    [Locale.it_IT]: 'Italiano',
    [Locale.nl_NL]: 'Nederlands',
    [Locale.fr_FR]: 'Français',
    [Locale.sv_SE]: 'Svenska',
};
