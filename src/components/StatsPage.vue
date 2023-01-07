<template>
    <div id="history" class="history">
        <button @click="display = !display">{{ !display ? "Zobrazit" : "Schovat" }} historii</button>
        <button @click="deleteHistory" class="btn">Vymazat historii</button>
    </div>
    <div v-if="display">
        <table class="modal modal--history">
            <thead>
                <tr>
                    <th>Otázka</th>
                    <th>Celkový počet</th>
                    <th>Úspěšnost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="question in allQuestions" :key="question.question">
                    <td>{{ question.question }}</td>
                    <td>{{ question.total }}</td>
                    <td :class="{ 'bad': question.percentage >= 0 && question.percentage < 70 }">{{
                question.percentage
                    >=
                    0 ? question.percentage + "%" : 'Žádný záznam'}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "StatsPage",
    props: {
        questions: Array
    },
    methods: {
        loadData(data) {
            this.loaded = true;
            this.questions = data
        }
    },
    data() {
        return {
            display: false,
            allQuestions: {},
            stats: [],
            questions: [],
            loaded: false,
        }
    },
    mounted() {
        this.refactorData()
    },
    watch: {
        questions() {
            this.refactorData()
        },
        display() {
            this.refactorData()
        }
    },
    methods: {
        refactorData() {
            const temp = {};
            for (const question of this.questions) {
                temp[question.question] = [];
            }

            let stored = localStorage.getItem('answered')
            if (stored == null) {
                return;
            }
            stored = JSON.parse(stored)
            for (const question in stored) {
                temp[question] = stored[question]
            }
            console.log(temp, this.questions)
            let result = []
            for (const question in temp) {
                let correct = temp[question].length > 0 ? temp[question].reduce((a, b) => a + b) : 0
                result.push({
                    'question': question,
                    'total': temp[question].length,
                    'correct': correct,
                    'percentage': this.percentage(correct, temp[question].length)
                })
            }

            this.allQuestions = result
        },
        deleteHistory() {
            localStorage.removeItem("answered")
        },
        percentage(a, b) {
            if (b === 0) {
                return -1
            }
            return Math.round(a / b * 10000) / 100;
        }
    }
}
</script>

<style scoped>
td,
th {
    border: 1px solid var(--surface-4);
    padding: 8px;
}

tr:nth-child(even) {
    background-color: var(--surface-2);
}

tr:hover {
    background-color: var(--surface-2);
}

th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background: var(--green-9);
    color: white;
}

.bad {
    background: var(--red-8);
}
</style>

<style scoped lang="scss">
.history {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    gap: 15px;

    animation: var(--animation-scale-down) reverse, var(--animation-fade-out) reverse;
    animation-timing-function: var(--ease-squish-5);
    animation-duration: 1.2s;

    position: absolute;
    top: 0;
    right: 15px;
}

.modal {
    z-index: 9999;

    &--history {
        position: absolute;
        background: var(--surface-3);

        transition: .3s ease-in-out;

        max-width: 850px;

        top: 2rem;
        left: 2rem;
        right: 2rem;

    }
}

.btn {
    &--delete {
        margin: 0 auto;
    }

    &--text {
        background: none;
    }
}
</style>