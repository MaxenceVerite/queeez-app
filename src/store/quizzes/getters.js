export function quizzesByCategory(state, category) {
  return state.quizzes.filter(q => q.category === category);
}
