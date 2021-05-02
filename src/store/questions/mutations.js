export function FETCH_ALL_QUESTIONS() {}

export function UPDATE_NEW_QUESTION_STEPONE({ state }, questionGeneralInfos) {
  state.newQuestion.title = questionGeneralInfos.title;
  state.newQuestion.category = questionGeneralInfos.category;
  state.newQuestion.allowedTime = questionGeneralInfos.allowedTime;
}

export function UPDATE_NEW_QUESTION_STEPTWO({ state }, answers) {
  state.newQuestion.answers = answers;
}

export function SAVE_NEW_QUESTION() {
  Object.assign(createdQuestion, newQuestion);
  questionsList.push(createdQuestion);
  newQuestion = {};
}
