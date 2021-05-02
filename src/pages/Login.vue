<template>
  <q-page class="flex flex-center relative-position">
    <q-scroll-area dark class="fit absolute bg-dark text-white  q-pa-md">
      <q-chip
        class="q-mb-md q-pa-md text-secondary text-uppercase"
        square
        color="primary"
      >
        <h5>Connexion</h5>
      </q-chip>
      <LoginForm />
    </q-scroll-area>
  </q-page>
</template>

<script>
import LoginForm from "src/components/Login/LoginForm";
export default {
  components: {
    LoginForm
  }
};
</script>

<style></style>
