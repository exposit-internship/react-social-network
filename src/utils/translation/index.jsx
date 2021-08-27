import i18n from '../../core/i18n'

import { EN_LOCALE, RU_LOCALE } from '../../constants/language'

export const handleLanguageChange = () => {
  const currentLanguage = i18n.language
  const isRussianLocale = currentLanguage === RU_LOCALE

  i18n.changeLanguage(isRussianLocale ? EN_LOCALE : RU_LOCALE)
}
