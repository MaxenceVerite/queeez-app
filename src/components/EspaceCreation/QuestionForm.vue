<template> </template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      timeMin: 5,
      timeMax: 30,
      questionStepOne: {
        title: "",
        category: "",
        allowedTime: 10
      },
      availableCategories: [
        "Cuisine",
        "Histoire",
        "Sport",
        "Cinéma",
        "Culture Pop",
        "Jeux-vidéos"
      ]
    };
  }
};
</script>

<style></style>
