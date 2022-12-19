<template>
    <nav>
        <router-link to="/">Domů</router-link>
        <router-link to="/about">Návod</router-link>
        <ThemeSwitcher />
    </nav>

    <router-view />

    <Footer />

</template>

<script>
import Footer from "@/components/Layout/Footer";
import ThemeSwitcher from "@/components/ThemSwitcher"

export default {
    name: 'App',
    components: {
        Footer,
        ThemeSwitcher
    },
    watch: {
        '$route'(to) {
            to.meta.title ? document.title = "Quiz - " + to.meta.title : document.title = "Quiz"
        },
    },
}
</script>

<style scoped lang="scss">
html[data-theme=dark] {

    nav {
        a {
            color: var(--text-1);


            &:hover {
                color: var(--text-2);
            }
        }
    }
}

nav {
    display: flex;
    padding: 1rem;
    text-align: left;
    position: fixed;
    right: 0;
    top: 0;
    gap: 15px;
    z-index: 999;


    justify-content: center;
    align-items: center;

    a {
        color: var(--blue-7);
        text-decoration: none;
        transition: .3s ease-in-out;

        &:hover {
            color: var(--blue-6);
        }
    }
}
</style>