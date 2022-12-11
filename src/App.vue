<template>
    <div class="container">
        <StatsPage :questions="questions" />
        <FileSelect @loaded="loadData" />

        <QuizPage v-if="loaded" :questions="questions" />
    </div>
</template>

<script>
import FileSelect from "@/components/FileSelect";
import QuizPage from "@/components/QuizPage";
import StatsPage from "@/components/StatsPage";

export default {
    name: 'App',
    components: {
        StatsPage,
        QuizPage,
        FileSelect,
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

#app {
    position: relative;
}
</style>

<style lang="scss">
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
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
