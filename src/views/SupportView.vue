<template>
  <div class="support">
    <h1 class="stack">{{ $t('ui.pages.support.title') }}</h1>
    <p class="stack">{{ $t('ui.pages.support.perex') }}</p>
    <p class="stack">{{ $t('ui.pages.support.perex2') }} <b>670100-2215506366/6210</b></p>
    <img class="stack" src="/src/assets/qr.jpg" alt="">
  </div>
</template>

<style scoped>
.support {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  text-align: center;
}

img {
  max-width: 200px;
}
</style>
