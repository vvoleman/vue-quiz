<template>
    <div class="container container__wrapper">
        <StatsPage :questions="questions" />
        <FileSelect @loaded="loadData" />

        <QuizPage v-if="loaded" :questions="questions" />
        <Footer />
    </div>
</template>

<script>
import FileSelect from "@/components/FileSelect";
import QuizPage from "@/components/QuizPage";
import StatsPage from "@/components/StatsPage";
import Footer from "@/components/Layout/Footer";

export default {
    name: 'App',
    components: {
        StatsPage,
        QuizPage,
        FileSelect,
        Footer
    },
    data() {
        return {
            questions: [],
            loaded: false,
        }
    },
    methods: {
        loadData(data) {
            this.loaded = true;
            this.questions = data
        }
    }
}
</script>

<style>
@import "/src/assets/styles/css/index.css";
</style>

<style>
button {
    cursor: pointer;
}

.main {
    position: relative;
    min-height: 98vh;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
}
</style>

<style lang="scss">
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    overflow: hidden;
    max-width: 100%;

    &__wrapper {
        padding-bottom: 3.5rem;
    }

    @media (min-width: 768px) {
        overflow: unset;
    }
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

@media (min-width: 1400px) {
    .container {
        width: 1320px;
    }
}
</style>
