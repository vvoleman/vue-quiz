<template>
    <div class="list">
        <button v-for="i in questions.length" class="question-box"
             :class="{'active':currentQuestion === i-1,'answered':answers[i-1] != null}" :key="i"
             @click="currentQuestion = i-1">
            <b>{{ i }}</b>
        </button>
    </div>
    <div class="question">
        <h3>{{ question.question }}</h3>
        <div v-for="(option,i) in question.options" :key="option">
            <input :id="i" type="radio" :name="currentQuestion" :value="i"
                   v-model="answers[currentQuestion]" @change="change">
            <label :for="i">{{ option }}</label>
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
    unmounted () {
        document.removeEventListener("keyup", this.nextItem)
    },
    mounted() {
        document.addEventListener("keyup", this.nextItem);
    },
    methods:{
        change(){
            console.log('f');
            this.$emit('answer', this.answers)
        },
        nextItem (event) {
            if (event.keyCode === 37) {
                if (this.currentQuestion - 1 < 0) {
                    this.currentQuestion = this.questions.length - 1;
                } else {
                    this.currentQuestion--;
                }
            } else if (event.keyCode === 39) {
                if (this.currentQuestion + 1 >= this.questions.length) {
                    this.currentQuestion = 0;
                } else {
                    this.currentQuestion++;
                }
            }
            console.log(this.currentQuestion)
        }
    }
}
</script>

<style scoped>
.list {
    padding:15px;
    background: #fefefe;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

.question-box {
    padding: 15px;
    margin: 5px;
    background: #eee;
    border:none;

}

.active {
    background: #666;
    color: white;
}
.answered {
    background: #42b983;
}
.question{
    background: #eee;
    border: 1px solid #ccc;
    padding:15px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
.question h3{
    text-decoration: underline;
}
</style>