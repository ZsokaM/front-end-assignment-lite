<template>
  <div>
    <h2 :class="$style.subtitle">
      How many questions can you answer correctly?
    </h2>
    <p :class="$style.instructions">
      To get started, pick a difficulty level and hit Start
    </p>
  </div>
</template>

<style module lang="scss">
.subtitle {
  color: darkslateblue;
}

.instructions {
  color: darkslateblue;
}
</style>
