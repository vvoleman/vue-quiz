<template>
    <div class="results card card--animated stack">
        <h2>Váš výsledek je {{ percentage }}% ({{ correctAnswers }}/{{ questions.length }})</h2>

        <h2>Výsledky:</h2>
        <div v-for="i in questions.length" :key="i">
            <h2>Otázka {{ i }}.: {{ questions[i - 1].question }}</h2>
            <li v-for="(option, j) in questions[i - 1].options" :key="option">
                <span v-if="j === answers[i - 1]"><b>(Vaše odpověď) </b></span>
                <span
                    :class="{ 'correct': j === questions[i - 1].correct, 'incorrect': answers[i - 1] === j && answers[i - 1] !== questions[i - 1].correct }">
                    {{ option }}
                </span>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResultsPage",
    props: {
        questions: Array,
        answers: Array,
    },
    computed: {
        correctAnswers() {
            let results = 0;
            for (let i = 0; i < this.questions.length; i++) {
                results += (this.questions[i].correct === this.answers[i]) * 1;
            }
            return results;
        },
        percentage() {
            return Math.round((this.correctAnswers / this.questions.length) * 10000) / 100
        }
    }
}
</script>

<style scoped lang="scss">
.results {
    border: 1px solid #ccc;
    max-height: 55vh;
    overflow: auto;

    * {
        max-width: 100%;

        h2 {
            font-size: var(--font-size-fluid-1);
        }
    }
}


span:is(.correct, .incorrect) {
    font-weight: bold;
}

.correct {
    color: var(--green-6);
}

.incorrect {
    color: var(--red-6);
}
</style>