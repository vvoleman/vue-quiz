<template>
    <div class="settings grid grid--fluid grid--center ">
        <div class="grid__row">
            <div class="grid__col-24 grid__col-md-12">
                <div class="card card--animated card--settings">
                    <h3 class="card__title">Načteno {{ questions.length }} otázek</h3>
                    <div style="display:flex; align-items: center; justify-content: center; flex-direction: column;">
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
                </div>
            </div>
        </div>
    </div>

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
    watch: {
        running() {
            if (this.running == false) {
                document.querySelector(".file-selection").style.display = "block"
                document.querySelector(".settings").style.display = "block"

            } else {
                document.querySelector(".file-selection").style.display = "none"
                document.querySelector(".settings").style.display = "none"
            }
        }
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
            document.querySelector(".questions").style.display = "none";
        }
    }
}
</script>

<style scoped lang="scss">
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.card--settings {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ccc;
    gap: 10px;

    .card__title {
        margin: 0 auto;
    }

    button {
        margin-top: 10px;
        font-weight: bold;
        padding: 10px;
    }
}
</style>