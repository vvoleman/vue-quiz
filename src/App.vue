<template>
    <StatsPage :questions="questions" />
    <FileSelect @loaded="loadData" />

    <QuizPage v-if="loaded" :questions="questions" />
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
