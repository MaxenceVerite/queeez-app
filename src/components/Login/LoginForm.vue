<template>
  <div class="bg-dark justify-center row q-mt-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-md  bg-secondary"
      style="width:100% ;max-width: 800px"
      dark
    >
      <q-input
        filled
        dark
        v-model="login"
        label="Identifiant"
        hint="Mail, pseudo ou tel"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Veuillez entrer un identifiant'
        ]"
      />

      <q-input
        filled
        dark
        type="password"
        v-model="password"
        label="Mot de passe"
        lazy-rules
        :rules="[
          val =>
            (val !== null && val !== '') || 'Veuillez entrer votre mot de passe'
        ]"
      />

      <q-toggle
        v-model="rememberMe"
        label="se souvenir de moi"
        icon="fas fa-save"
      />

      <div>
        <q-btn label="Se connecter" type="submit" color="primary" />
        <q-btn
          label="Effacer    "
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      rememberMe: "false"
    };
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
};
</script>

<style></style>
