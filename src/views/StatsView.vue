<template>
  <StatsPage :questions="questions" />
</template>

<script>
import StatsPage from "@/components/StatsPage";

export default {
  name: 'StatsPage',
  components: {
    StatsPage
  },
  data() {
    return {
      questions: [],
      loaded: false,
    }
  },
  methods: {
    loadData(data) {
      this.loaded = true;
      this.questions = data
    }
  }
}
</script>