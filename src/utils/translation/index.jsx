import i18n from '../../core/i18n'

export const handleLanguageChange = () => {
  const RU_LOCALE = 'ru'
  const EN_LOCALE = 'en'
  const currentLanguage = i18n.language
  const isRussianLocale = currentLanguage === RU_LOCALE

  i18n.changeLanguage(isRussianLocale ? EN_LOCALE : RU_LOCALE)
}
