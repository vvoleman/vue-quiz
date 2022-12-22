<template>
    <div class="container-special">
        <FileSelect @loaded="loadData" v-if="!loaded"/>

        <QuizPage
            v-if="loaded"
            :questions="questions"
            @changeFile="changeFile"
        />
    </div>
</template>

<script>
import FileSelect from "@/components/FileSelect";
import QuizPage from "@/components/QuizPage";

export default {
    name: 'App',
    components: {
        QuizPage,
        FileSelect,
    },
    data() {
        return {
            questions: null,
            loaded: false,
        }
    },
    methods: {
        loadData(data) {
            this.loaded = true;
            this.questions = data
        },
        changeFile() {
            this.loaded = false;
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

