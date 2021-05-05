export default function() {
  return {
    quizzes: [],
    newQuizz: {
      title: "",
      description: "",
      category: "",
      questions: []
    },
    categories: [
      "Jeux vidéos",
      "Musique",
      "Culture Générale",
      "Culture pop",
      "Maths"
    ]
  };
}
