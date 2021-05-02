<template>
  <div>
    <q-item v-for="(x, index) in answers" :key="index">
      <q-item-section avatar>
        <q-checkbox
          v-model="answers[index].isCorrect"
          color="primary"
          class="bg-secondary"
        />
      </q-item-section>
      <q-item-section>
        <q-input
          filled
          v-model="answers[index].value"
          label="Réponse"
          label-color="white"
          class="bg-secondary"
        />
      </q-item-section>
    </q-item>

    <q-btn color="primary" label="+" @click="addField" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      render: 0,
      answers: [
        {
          value: "",
          isCorrect: false
        },
        {
          value: "",
          isCorrect: false
        }
      ],
      nbAnswersFields: 2
    };
  },

  methods: {
    addField() {
      console.log("coucou");
      if (this.nbAnswersFields >= 4) {
        this.nbAnswersFields++;
        answers.push({
          value: "",
          isCorrect: false
        });
        render++;
      }
    }
  }
};
</script>

<style></style>
