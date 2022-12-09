<template>
    <button @click="display = !display">{{ !display ? "Zobrazit" : "Schovat" }} historii</button>
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
                    <td :class="{ 'bad': question.percentage >= 0 && question.percentage < 70 }">{{ question.percentage
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
    data() {
        return {
            display: false,
            allQuestions: {},
            stats: []
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
.modal {
    z-index: 9999;

    &--history {
        position: absolute;
        background: var(--surface-3);

        transition: .3s ease-in-out;
    }
}
</style>