<template>
  <q-item dark clickable @click="toggleSelection()">
    <q-item-section side class="choose-checkbox"
      ><q-checkbox :value="isSelected"
    /></q-item-section>
    <q-item-section class="title">
      <q-item-label>{{ question.title }}</q-item-label>
    </q-item-section>

    <q-item-section class="question_item_isMCQ">
      <q-chip
        dark
        square
        color="accent"
        text-color="white"
        :icon="isMCQIcon"
        size="md"
        class="q-pa-md"
      >
        {{ isMCQText }}
      </q-chip>
    </q-item-section>
    <q-item-section class="question_item_category">
      <q-chip
        dark
        square
        color="primary"
        text-color="white"
        icon="fas fa-tags"
        class="q-pa-md"
      >
        {{ question.category }}
      </q-chip>
    </q-item-section>

    <q-item-section class="question_item_allowedTime">
      <q-chip
        dark
        square
        color="positive"
        text-color="white"
        icon="fas fa-hourglass-half"
        size="md"
        class="q-pa-md"
        align="center"
      >
        {{ question.allowedTime }} s
      </q-chip>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSelection() {
      this.$emit("clicked");
    }
  },
  computed: {
    isMCQIcon() {
      return this.question.answers.filter(x => x.isCorrect === true).length > 1
        ? "fas fa-cubes"
        : "fas fa-cube";
    },
    isMCQText() {
      return this.question.answers.filter(x => x.isCorrect === true).length > 1
        ? "Choix Multiple"
        : "Choix Unique";
    }
  }
};
</script>

<style>
.question_item_isMCQ {
  max-width: 13%;
}
.question_item_category {
  max-width: 15%;
}
.question_item_allowedTime {
  max-width: 9%;
}
</style>
