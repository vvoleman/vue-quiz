import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/plugins/i18n/i18n'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import router from './router'

/* add icons to the library */
library.add(faUserSecret)

createApp(App).use(router).use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')