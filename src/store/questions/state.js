export default function() {
  return {
    maxNumberOfAnswers: 4,
    questionsList: [
      {
        id: 1,
        title: "Quel est le nom de Jacques Chirac",
        category: "Cuisine",
        allowedTime: 12,
        answers: [
          { value: "Jacques", isCorrect: false },
          { value: "Chirac", isCorrect: true }
        ]
      },
      {
        id: 2,
        title: "Quel est le prenom de Bernard Henry Levy",
        category: "Cuisine",
        allowedTime: 18,
        answers: [
          { value: "Bernard", isCorrect: true },
          { value: "Henry", isCorrect: true },
          { value: "Bernard-Henry", isCorrect: false },
          { value: "Levy", isCorrect: false }
        ]
      },
      {
        id: 3,
        title: "Combien y'a t'il de lettres dans chien",
        category: "Cuisine",
        allowedTime: 7,
        answers: [
          { value: "5", isCorrect: true },
          { value: "6", isCorrect: false }
        ]
      },
      {
        id: 4,
        title: "Combien y'a t'il de lettres dans chien",
        category: "Cuisine",
        allowedTime: 7,
        answers: [
          { value: "5", isCorrect: true },
          { value: "6", isCorrect: false }
        ]
      },
      {
        id: 5,
        title: "Combien y'a t'il de lettres dans chien",
        category: "Cuisine",
        allowedTime: 7,
        answers: [
          { value: "5", isCorrect: true },
          { value: "6", isCorrect: false }
        ]
      },
      {
        id: 6,
        title: "Combien y'a t'il de lettres dans chien",
        category: "Cuisine",
        allowedTime: 7,
        answers: [
          { value: "5", isCorrect: true },
          { value: "6", isCorrect: false }
        ]
      }
    ],
    newQuestion: {
      id: "",
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
