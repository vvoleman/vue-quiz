<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">How To</router-link>
        <div>
            <a href="#!">Switch theme</a>
        </div>
    </nav>
    <Footer />

    <router-view />

</template>


<script>
import Footer from "@/components/Layout/Footer";

export default {
    name: 'App',
    components: {
        Footer
    },
    watch: {
        '$route'(to) {
            to.meta.title ? document.title = "Quiz - " + to.meta.title : document.title = "Quiz"
        }
    }
}
</script>

<style scoped lang="scss">
nav {
    display: flex;
    padding: 1rem;
    text-align: left;
    position: fixed;
    right: 0;
    top: 0;
    gap: 15px;
    z-index: 999;

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