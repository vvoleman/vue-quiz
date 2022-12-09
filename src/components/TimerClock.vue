<template>

</template>

<script>
export default {
    name: "TimerClock",
    props:{
        run: Boolean,
        startAt: {
            type:Number,
            default: ()=>null
        }
    },
    data(){
        return {
            minutes: 0,
            seconds: 0
        }
    },
    watch:{
        run(){

        }
    },
    methods:{
        calculateTime(){
            const now = new Date()
            const startAt = new Date(this.startAt)

            let result = now.getTime() - startAt.getTime()

            this.minutes = result / 60;
            result %= 60;
            this.seconds = result
        }
    }
}
</script>

<style scoped>

</style>