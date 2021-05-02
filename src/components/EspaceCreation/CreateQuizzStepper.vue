<template>
  <div class="q-pa-md">
    <h6 class="q-ma-sm">Création d'un quizz</h6>
    <q-stepper
      class="bg-dark"
      dark
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Composer une liste de questions"
        icon="settings"
        :done="step > 1"
      >
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title=""
        caption="Informations générales et description"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.
      </q-step>

      <q-step :name="3" title="Envoyer en validation" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
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
export default {
  data() {
    return {};
  },
  computed: {
    step: {
      get() {
        return this.$store.quizzes.state.step;
      }
    }
  }
};
</script>

<style></style>
