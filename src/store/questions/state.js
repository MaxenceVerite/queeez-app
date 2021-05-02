export default function() {
  return {
    maxNumberOfAnswers: 4,
    questionsList: [],
    newQuestion: {
      title: "",
      category: "",
      allowedTime: 5,
      answers: [
        {
          value: "",
          isCorrect: false
        },
        {
          value: "",
          isCorrect: false
        }
      ]
    },
    categories: ["Cuisine", "Jeux-vidéos", "Selection", "Animaux", "Musique"]
  };
}
