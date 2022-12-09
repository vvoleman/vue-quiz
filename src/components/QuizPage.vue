<template>
    <div class="settings card card--settings">
        <h3>Načteno {{ questions.length }} otázek</h3>
        <div>
            <label for="">Počet otázek</label>
            <input type="number" v-model="numberOfQuestions">
        </div>
        <div style="display:flex; align-items: baseline; justify-content: center">
            <label for="randomQuestions" style="margin-right: 5px">Řadit náhodně otázky?</label>
            <input id="randomQuestions" type="checkbox" v-model="sortRandomQuestions">
        </div>
        <div style="display:flex; align-items: baseline; justify-content: center">
            <label for="randomCorrects" style="margin-right: 5px">Řadit náhodně odpovědi?</label>
            <input id="randomCorrects" type="checkbox" v-model="sortRandomCorrects">
        </div>
        <button @click="run" v-if="!running" class="btn btn--run">Spustit</button>
        <button @click="solve" v-if="running" class="btn btn--solve">Vyhodnotit</button>
        <button @click="restart" v-if="running" class="btn btn--restart">Restartovat</button>
    </div>

    <QuestionBrowser v-if="running" :questions="runQuestions" @answer="setAnswers" />
    <ResultsPage v-if="solved" :questions="runQuestions" :answers="answers" />
</template>

<script>
import QuestionBrowser from "@/components/QuestionBrowser";
import ResultsPage from "@/components/ResultsPage";

export default {
    name: "QuizPage",
    components: { ResultsPage, QuestionBrowser },
    data() {
        return {
            numberOfQuestions: 0,
            sortRandomQuestions: false,
            sortRandomCorrects: false,
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
        run() {
            if (this.numberOfQuestions <= 0 || this.numberOfQuestions > this.questions.length) return;
            let data = this.questions;
            if (this.sortRandomQuestions) {
                data = this.shuffle(data)
            }
            if (this.sortRandomCorrects) {
                data.map((item) => {
                    //sort options and get new index of original answer
                    let options = this.shuffle(item.options);
                    let correct = item.correct;
                    let newCorrect = options.indexOf(item.options[correct]);
                    console.log(item);
                    item.options = options;
                    item.correct = newCorrect;

                    return item
                })
            }

            data = data.slice(0, this.numberOfQuestions)
            this.runQuestions = data
            this.running = true
            this.answers = [];
            this.solved = false;
        },
        shuffle(data) {
            return data
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        },
        restart() {
            this.running = false;
            this.solved = false;
            this.runQuestions = [];
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
        }
    }
}
</script>

<style scoped>
.settings {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    width: 40%;
    border: 1px solid #ccc;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
}

.settings button {
    margin-top: 10px;
    font-weight: bold;
    padding: 10px;
}

.settings label {
    display: block;
}

.settings input {
    margin-bottom: 15px;
}

@media only screen and (max-width: 720px) {
    .settings {
        width: 90%;
    }
}
</style>