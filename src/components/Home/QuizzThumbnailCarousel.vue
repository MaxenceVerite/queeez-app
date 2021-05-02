<template>
  <div class="row">
    <q-chip
      class="q-mb-md q-pa-md text-secondary text-uppercase"
      square
      color="primary"
    >
      <h5>{{ category }}</h5>
    </q-chip>

    <q-scroll-area
      horizontal
      style="height: 420px; width: 100%;"
      class="bg-dark rounded-borders col-12 justify-center"
    >
      <div class="row no-wrap q-gutter-md">
        <QuizzThumbnail
          v-for="quizz in quizzes"
          :quizzSummary="quizz"
          :key="quizz.id"
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import QuizzThumbnail from "src/components/Home/QuizzThumbnail";
export default {
  components: {
    QuizzThumbnail
  },
  props: {
    category: {
      type: String,
      required: true
    },
    quizzes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
