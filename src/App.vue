<template>
    <Navbar />

    <div class="content  container container__wrapper">
        <router-view />
    </div>

    <Footer />

</template>

<script>
import Footer from "@/components/Layout/Footer.vue";
import Navbar from "@/components/Layout/Navigation.vue";

export default {
    name: 'App',
    components: {
        Footer,
        Navbar
    },
    watch: {
        '$route'(to) {
            to.meta.title ? document.title = "Quiz - " + to.meta.title : document.title = "Quiz"
        },
    },
}
</script>