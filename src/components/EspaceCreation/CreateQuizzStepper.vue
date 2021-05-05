<template>
  <div class="q-pa-md">
    <h6 class="q-ma-sm">Création d'un quizz</h6>
    <q-stepper class="bg-dark" dark v-model="step" ref="stepper" animated>
      <q-step
        :name="1"
        title="Composer la liste des questions"
        icon="create_new_folder"
        :done="step > 1"
      >
        <q-card dark class="question-picker q-mb-sm">
          <q-tabs
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            mobile-arrows
            outside-arrows
          >
            <q-tab name="list" label="Base de données" icon="fas fa-database" />

            <q-tab name="new" label="Nouvelle question" icon="fas fa-pen" />
            <q-tab
              v-if="selectedQuestions.length > 0"
              name="selection"
              label="Votre selection"
              icon="fas fa-check-square"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels dark v-model="tab" animated>
            <q-tab-panel name="list">
              <div class="text-h6 q-mb-md">
                Choisir des questions à partir de la base de données
              </div>
              <q-list dark bordered separator>
                <QuestionPickerItem
                  v-for="question in questions"
                  :key="question.id"
                  :question="question"
                  :isSelected="isQuestionSelected(question)"
                  @clicked="toggleQuestionSelection(question)"
                />
              </q-list>
            </q-tab-panel>

            <q-tab-panel name="new">
              <CreateQuestionStepper @completed="toggleQuestionSelection" />
            </q-tab-panel>
            <q-tab-panel name="selection">
              <q-list dark bordered separator class="q-mb-md">
                <QuestionPickerItem
                  v-for="selectedQuestion in selectedQuestions"
                  :key="selectedQuestion.id"
                  :question="selectedQuestion"
                  v-bind:isSelected="isQuestionSelected(selectedQuestion)"
                  @clicked="toggleQuestionSelection(selectedQuestion)"
                />
              </q-list>

              <div class="bg-secondary q-pa-md">
                <h6 class="q-mt-none q-mb-sm">Recapitulatif</h6>
                <div>
                  <q-chip square color="primary" text-color="white">
                    Nombre de questions
                  </q-chip>
                  <span> {{ selectedQuestions.length }} </span>
                </div>

                <div>
                  <q-chip
                    square
                    color="positive"
                    text-color="white"
                    icon="fas fa-hourglass-half"
                  >
                    Durée maximum
                  </q-chip>
                  <span> {{ selectedQuestionsTimeSum }} secondes </span>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-step>

      <q-step
        :name="2"
        title="Informations générales et description"
        icon="create_new_folder"
        :done="step > 2"
      >
        <q-form ref="quizzCreationFormGeneral">
          <q-input
            dark
            label="Intitulé"
            standout="bg-dark"
            v-model="newQuizz.title"
            label-color="primary"
            class="q-mb-sm bg-secondary"
            :rules="[
              val =>
                val.length >= 5 ||
                'L\'intitulé doit avoir au moins 5 caractères'
            ]"
          >
            <template v-slot:prepend>
              <q-icon color="primary" name="fas fa-heading" />
            </template>
          </q-input>

          <q-input
            type="textarea"
            dark
            label="Description"
            standout="bg-dark"
            v-model="newQuizz.description"
            label-color="primary"
            class="q-mb-sm bg-secondary"
            :rules="[
              val =>
                val.length <= 500 ||
                'La description doit avoir 300 caractères maximum'
            ]"
          >
            <template v-slot:prepend>
              <q-icon color="primary" name="fas fa-heading" />
            </template>
          </q-input>
          <q-select
            dark
            label="Categories"
            filled
            v-model="newQuizz.category"
            :options="availableCategories"
            class="q-mb-sm bg-secondary"
            label-color="primary"
          >
            <template v-slot:prepend>
              <q-icon color="primary" name="fas fa-tag" />
            </template>
          </q-select>
        </q-form>
      </q-step>

      <q-step :name="3" title="Envoyer en validation" icon="assignment">
        La question va maintenant être envoyer à l'équipe de validation dans
        l'état. Vérifiez une dernière fois et appuyez sur le bouton envoyer.

        <div class="bg-secondary q-pa-md q-mt-sm">
          <h6 class="q-mb-sm q-mt-sm">
            {{ newQuizz.title }}
          </h6>

          <ul>
            <li v-for="question in newQuizz.questions" :key="question.id">
              {{ question.title }}
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <b>Durée maximum </b>: {{ selectedQuestionsTimeSum }} secondes
            </li>
          </ul>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="nextStep()"
            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import CreateQuestionStepper from "./CreateQuestionStepper";
import QuestionPickerItem from "./QuestionPickerItem";
export default {
  components: {
    CreateQuestionStepper,
    QuestionPickerItem
  },
  data() {
    return {
      step: 1,
      tab: 1,
      selectedQuestions: []
    };
  },
  computed: {
    newQuizz: {
      get() {
        return this.$store.state.quizzes.newQuizz;
      },
      set(value) {
        this.$store.commit("quizzes/updateNewQuizz", value);
      }
    },
    questions: {
      get() {
        return this.$store.state.questions.questionsList;
      }
    },
    availableCategories: {
      get() {
        return this.$store.state.quizzes.categories;
      }
    },

    selectedQuestionsTimeSum() {
      return this.selectedQuestions.reduce(
        (n, { allowedTime }) => n + allowedTime,
        0
      );
    }
  },
  methods: {
    nextStep() {
      // si on a au moins une question de selectionné durant l'étape 1
      if (this.step === 1 && this.selectedQuestions.length > 0) {
        $refs.stepper.next();
      }
      // pour l'étape 2, on applique juste la validation sur les champs du formulaire
      if (this.step === 2) {
        $refs.quizzCreationFormGeneral.validate().then(success => {
          if (success) {
            $refs.stepper.next();
          }
        });
      }

      if (this.step === 3) {
        endStepper();
      }
    },
    endStepper() {
      console.log(this.newQuizz);
    },

    toggleQuestionSelection(question) {
      let index = this.selectedQuestions.indexOf(question);
      if (index === -1) {
        this.selectedQuestions.push(question);
      } else {
        this.selectedQuestions.splice(index, 1);
      }
    },
    isQuestionSelected(question) {
      return this.selectedQuestions.indexOf(question) != -1;
    }
  }
};
</script>

<style>
.question-picker {
  height: 520px;
}
</style>
