<template>

    <QuestionSettings
        :questions="questions"
        v-if="!running"
        @changeFile="changeFile"
        @run="runQuiz"
    />

    <div class="questions" v-if="running">
        <QuestionBrowser :questions="runQuestions" @answer="setAnswers" />
        <div class="buttons stack">
            <button @click="solve" v-if="running" class="btn btn--solve">Vyhodnotit</button>
            <button @click="restart" v-if="running" class="btn btn--restart"><font-awesome-icon
                    icon="fa-solid fa-rotate-right" /></button>
        </div>
    </div>

    <div v-if="solved">
        <button @click="restart" class="btn btn--restart stack"><font-awesome-icon
                icon="fa-solid fa-rotate-right" /></button>
        <ResultsPage :questions="runQuestions" :answers="answers" />
        <button @click="restart" class="btn btn--restart stack"><font-awesome-icon
                icon="fa-solid fa-rotate-right" /></button>
    </div>
</template>

<script>
import QuestionBrowser from "@/components/QuestionBrowser";
import ResultsPage from "@/components/ResultsPage";
import QuestionSettings from "@/components/QuestionSettings";

export default {
    name: "QuizPage",
    components: {QuestionSettings, ResultsPage, QuestionBrowser },
    data() {
        return {
            runQuestions: [],
            running: false,
            answers: [],
            solved: false,
        }
    },
    props: {
        questions: Array
    },

    methods: {
        changeFile() {
            this.$emit('changeFile')
        },
        // it has a parameter runQuestions, because it is called from QuestionSettings
        runQuiz(runQuestions) {
            this.runQuestions = runQuestions
            this.running = true
        },
        restart() {
            this.running = false
            this.solved = false
            this.answers = []
            this.runQuestions = []
        },
        setAnswers(answers) {
            this.answers = answers;
        },
        solve() {
            let storage = localStorage.getItem('answered');
            storage = storage !== null ? JSON.parse(storage) : {}
            const results = [];
            console.log(this.answers)
            for (let i = 0; i < this.runQuestions.length; i++) {
                const question = this.runQuestions[i].question
                if (storage[question] == null) {
                    storage[question] = []
                }
                console.log(storage[question], question)

                results[i] = this.runQuestions[i].correct === this.answers[i];
                storage[question].push(results[i] === true ? 1 : 0)
            }
            this.solved = true;
            localStorage.setItem('answered', JSON.stringify(storage))
            document.querySelector(".questions").style.display = "none";
        }
    },
}
</script>

<style scoped lang="scss">
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
</style>