<template>
    <div class="nav__wrapper">
        <button class="navigationToggle" @click="visibility">
            <span>Quiz</span>
            <font-awesome-icon icon="fa-solid fa-angles-up" :class="{ 'fa-flip-vertical': !isVisible }" />
        </button>
        <Transition>
            <nav class="nav" v-if="isVisible">
                <router-link to="/">
                    <span class="nav__icon">
                        <font-awesome-icon icon="fa-solid fa-table-columns" />
                    </span>
                    <span class="nav__name">{{ $t('ui.pages.home.title') }}</span>
                </router-link>
                <router-link to="/about">
                    <span class="nav__icon">
                        <font-awesome-icon icon="fa-solid fa-question" />
                    </span>
                    <span class="nav__name">{{ $t('ui.pages.about.title') }}</span>
                </router-link>
                <div class="nav__bottom">
                    <ThemeSwitcher />
                    <select @change="updateLanguage()" v-model="$i18n.locale">
                        <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
                            {{ locale.toUpperCase() }}
                        </option>
                    </select>
                </div>
            </nav>
        </Transition>
    </div>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher.vue"

export default {
    name: "NavigationBar",
    components: {
        ThemeSwitcher,
    },
    data() {
        return {
            isVisible: true,
            locales: ['cs', 'en']
        }
    },
    mounted() {
        window.addEventListener('load', () => {
            let storage = localStorage.getItem('menu');
            if (storage == "false") {
                this.isVisible = !this.isVisible
            }
            if (sessionStorage.getItem("locale")) {
                this.$i18n.locale = sessionStorage.getItem("locale");
            } else {
                sessionStorage.setItem("locale", this.$i18n.locale);
            }
        })
    },
    methods: {
        visibility() {
            this.isVisible = !this.isVisible
            localStorage.setItem('menu', this.isVisible)
        },
        updateLanguage() {
            sessionStorage.setItem("locale", this.$i18n.locale);
        },
    },
}
</script>
<style lang="scss">
.nav__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    button {
        background: none;
    }
}

.nav__wrapper {
    display: flex;
    flex-direction: column;

}

.navigationToggle {
    background: rgba(169, 169, 169, 0.219);
    display: flex;
    justify-content: space-around;
    align-items: center;

    transition: color .3s ease-in-out;

    padding: 1rem 0;

    svg {
        max-width: 20px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: left, opacity .3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    position: absolute;
    left: -200px;
    opacity: 0;
}
</style>