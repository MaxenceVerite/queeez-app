<template>
  <div class="full-width justify-center q-gutter-md">
    <QuizzThumbnailCarousel
      v-for="quizzByCategory in quizzesSummaries"
      :category="quizzByCategory.category"
      :quizzes="quizzByCategory.quizzes"
      :key="quizzByCategory.category"
    />
  </div>
</template>

<script>
import { getAllQuizzesSummaryByCategory } from "src/api/mock";
import QuizzThumbnailCarousel from "src/components/Home/QuizzThumbnailCarousel";
export default {
  data() {
    return {
      quizzesSummaries: null
    };
  },
  components: {
    QuizzThumbnailCarousel
  },
  created() {
    this.quizzesSummaries = getAllQuizzesSummaryByCategory();
  }
};
</script>

<style></style>
