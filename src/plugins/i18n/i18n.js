import { createI18n } from 'vue-i18n'

// Translations
import cs from '../../../config/translations/cs.js'
import en from '../../../config/translations/en.js'

let messages = {
	cs: cs,
	en: en,
}

// 2. Create i18n instance with options
const i18n = createI18n({
	locale: 'cs', // set locale
	fallbackLocale: 'en', // set fallback locale
	messages, // set locale messages
	// If you need to specify other options, you can set other options
	// ...

})

export default i18n