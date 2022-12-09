<template>
    <h2>Váš výsledek je {{percentage}}% ({{correctAnswers}}/{{questions.length}})</h2>

    <h2>Výsledky:</h2>
    <div v-for="i in questions.length" :key="i">
        <h2>Otázka {{ i }}.: {{ questions[i-1].question }}</h2>
        <li v-for="(option, j) in questions[i-1].options" :key="option">
            <span v-if="j === answers[i-1]"><b>(Vaše odpověď) </b></span>
            <span
                :class="{'correct':j === questions[i-1].correct, 'incorrect': answers[i-1] === j && answers[i-1] !== questions[i-1].correct}">
                {{ option }}
            </span>
        </li>
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
        correctAnswers(){
            let results = 0;
            for (let i = 0; i < this.questions.length; i++) {
                results += (this.questions[i].correct === this.answers[i])*1;
            }
            return results;
        },
        percentage(){
            return Math.round((this.correctAnswers / this.questions.length)*10000)/100
        }
    }
}
</script>

<style scoped>
.correct {
    color:green;
    font-weight: bold;
}
.incorrect {
    color: #fd354c;
    font-weight: bold;
}
</style>