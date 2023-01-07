<template>
  <StatsPage :questions="questions" />
</template>

<script>
import StatsPage from "@/components/StatsPage.vue";

export default {
  name: 'StatsPage',
  components: {
    StatsPage
  },
}
</script>