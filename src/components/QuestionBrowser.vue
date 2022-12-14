<template>
    <div class="grid grid--center gird--fluid stack">
        <div class="grid__row">
            <div class="grid__col--24">
                <div class="list">
                    <button v-for="i in questions.length" class="question-box"
                        :class="{ 'active': currentQuestion === i - 1, 'btn btn--answered': answers[i - 1] != null }"
                        :key="i" @click="currentQuestion = i - 1">
                        <b>{{ i }}</b>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid--center gird--fluid stack">
        <div class="grid__row">
            <div class="grid__col--24 row">
                <button :key="i" @click="prevQuestion">
                    Předchozí
                </button>
                <div class="question card card--animated stack">
                    <h3>{{ question.question }}</h3>
                    <div v-for="(option, i) in question.options" :key="option">
                        <input :id="i" type="radio" :name="currentQuestion" :value="i"
                            v-model="answers[currentQuestion]" @change="change">
                        <label :for="i">{{ option }}</label>
                    </div>
                </div>
                <button :key="i" @click="nextQuestion">
                    Další
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuestionBrowser",
    props: {
        questions: Array
    },
    data() {
        return {
            currentQuestion: 0,
            answers: []
        }
    },
    computed: {
        question() {
            return this.questions[this.currentQuestion]
        }
    },
    unmounted() {
        document.removeEventListener("keyup", this.nextItem)
    },
    mounted() {
        document.addEventListener("keyup", this.nextItem);
    },
    methods: {
        change() {
            console.log('f');
            this.$emit('answer', this.answers)
        },
        nextQuestion() {
            if (this.currentQuestion + 1 >= this.questions.length) {
                this.currentQuestion = 0;
            } else {
                this.currentQuestion++;
            }
        },
        prevQuestion() {
            if (this.currentQuestion - 1 < 0) {
                this.currentQuestion = this.questions.length - 1;
            } else {
                this.currentQuestion--;
            }
        },
        nextItem(event) {
            if (event.keyCode === 37) {
                this.prevQuestion();
            } else if (event.keyCode === 39) {
                this.nextQuestion();
            }
        }
    }
}
</script>

<style scoped lang="scss">
.list {
    padding: 15px 0;
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    overflow: auto;
}

.row {
    display: flex;
    gap: 10px;
}

.question-box {
    padding: 15px;
    border: none;
    white-space: nowrap;
}

.active {
    background: var(--indigo-7);
    color: white;
}

.question {
    border: 1px solid #ccc;
    padding: 15px;
}

.question h3 {
    text-decoration: underline;
}

.question {
    h3 {
        margin-bottom: var(--size-2);
    }

    label {
        margin-left: var(--size-3);
    }
}
</style>