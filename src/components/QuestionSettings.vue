<template>
    <div class="settings grid grid--fluid grid--center ">
        <div class="grid__row">
            <div class="grid__col-24">
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
                    <button @click="run" class="btn btn--run">Spustit</button>
                    <button @click="changeFile" class="btn btn--restart">Změnit soubor</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "QuestionSettings",
    props: {
        questions: Array
    },
    data() {
        return {
            numberOfQuestions: 0,
            sortRandomQuestions: false,
            sortRandomCorrects: false,
        }
    },
    mounted() {
        this.numberOfQuestions = this.questions.length
    },
    methods: {
        changeFile() {
            this.$emit('changeFile')
        },
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
                    item.options = options;
                    item.correct = newCorrect;

                    return item
                })
            }

            data = data.slice(0, this.numberOfQuestions)

            this.$emit('run', data)
            // this.runQuestions = data
            // this.running = true
            // this.answers = [];
            // this.solved = false;
        },
        shuffle(data) {
            return data
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
        },
    }
}
</script>

<style scoped lang="scss">
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