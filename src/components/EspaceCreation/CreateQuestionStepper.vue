<template>
  <div class="q-pa-md">
    <h6 class="q-ma-sm">Création d'une question</h6>

    <q-stepper dark v-model="step" ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Informations générales et description"
        icon="settings"
        :done="step > 1"
      >
        <q-form ref="questionCreationFormGeneral">
          <q-input
            dark
            label="Intitulé"
            standout="bg-dark"
            v-model="newQuestion.title"
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
          <q-select
            dark
            label="Categories"
            filled
            v-model="newQuestion.category"
            :options="availableCategories"
            class="q-mb-sm bg-secondary"
            label-color="primary"
          >
            <template v-slot:prepend>
              <q-icon color="primary" name="fas fa-tag" />
            </template>
          </q-select>
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="fas fa-hourglass-half" />
            </q-item-section>
            <q-item-section>
              <q-slider
                dark
                v-model="newQuestion.allowedTime"
                :min="5"
                :max="30"
                label
                :label-value="newQuestion.allowedTime + ' secondes'"
                label-always
                color="primary"
                class="q-mt-md"
              />
            </q-item-section>
          </q-item>
        </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Saisies des réponses"
        icon="fas fa-list-ol"
        :done="step > 2"
      >
        <div>
          <q-form ref="questionCreationFormAnswers">
            <q-item v-for="(x, index) in newQuestion.answers" :key="index">
              <q-item-section avatar>
                <q-checkbox
                  dark
                  v-model="newQuestion.answers[index].isCorrect"
                  color="positive"
                />
              </q-item-section>
              <q-item-section>
                <q-input
                  dark
                  filled
                  v-model="newQuestion.answers[index].value"
                  label="Réponse"
                  label-color="primary"
                  class="bg-secondary"
                  :rules="[
                    value =>
                      value.length > 0 ||
                      'Veuillez entrer du texte ou supprimer le champs'
                  ]"
                />
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  color="negative"
                  icon="fas fa-times"
                  @click="removeField(index)"
                  v-if="newQuestion.answers.length > 2"
                />
              </q-item-section>
            </q-item>

            <q-btn
              v-if="newQuestion.answers.length < 4"
              color="primary"
              label="+"
              @click="addField"
            />
          </q-form>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Envoyer en validation"
        icon="fas fa-check-double"
      >
        La question va maintenant être envoyer à l'équipe de validation dans
        l'état. Vérifiez une dernière fois et appuyez sur le bouton envoyer.

        <div class="bg-secondary q-pa-md q-mt-sm">
          <h6 class="q-mb-sm q-mt-sm">
            {{ newQuestion.title }}
          </h6>

          <ul>
            <li
              v-for="answer in newQuestion.answers"
              :key="answer.value"
              :class="[answer.isCorrect ? 'text-positive' : 'text-white']"
            >
              {{ answer.value }}
            </li>
          </ul>
          <hr />
          <ul>
            <li><b>Categorie </b> : {{ newQuestion.category }}</li>
            <li>
              <b>Temps alloué </b> : {{ newQuestion.allowedTime }} seconde(s)
            </li>
          </ul>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="nextStep()"
            color="primary"
            :disable="canMoveToNextStep"
            :label="step === 3 ? 'Envoyer' : 'Suivant'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            label="Back"
            class="q-ml-sm"
            @click="$refs.stepper.previous()"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      canMoveToNextStep: false
    };
  },
  methods: {
    addField() {
      if (this.newQuestion.answers.length < this.maxNumberOfAnswers) {
        this.newQuestion.answers.push({
          value: "",
          isCorrect: false
        });
      }
    },
    removeField(index) {
      this.newQuestion.answers.splice(index, 1);
    },
    nextStep() {
      if (this.step != 3) {
        let formPart = ";";
        switch (this.step) {
          case 1:
            formPart = this.$refs.questionCreationFormGeneral;
            break;
          case 2:
            formPart = this.$refs.questionCreationFormAnswers;
            break;
        }

        formPart.validate().then(success => {
          if (success) {
            this.$refs.stepper.next();
          }
        });
      } else {
        this.endStepper();
      }
    },
    endStepper() {
      this.createQuestion();
      this.clearStepper();
    },
    createQuestion() {},
    clearStepper() {
      this.newQuestion = {
        title: "",
        category: "",
        allowedTime: 5,
        answers: [
          { value: "", isCorrect: "false" },
          { value: "", isCorrect: "false" }
        ]
      };
    }
  },
  computed: {
    newQuestion: {
      get() {
        return this.$store.state.questions.newQuestion;
      },
      set(value) {
        this.$store.commit("questions/updateNewQuestion", value);
      }
    },
    availableCategories() {
      return this.$store.state.questions.categories;
    },
    maxNumberOfAnswers() {
      return this.$store.state.questions.maxNumberOfAnswers;
    }
  }
};
</script>

<style></style>
