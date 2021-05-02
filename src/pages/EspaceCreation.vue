<template>
  <q-page class="flex flex-center relative-position ">
    <q-scroll-area dark class="fit absolute bg-dark text-white q-pa-md">
      <q-chip
        class="q-mb-md q-pa-md text-secondary text-uppercase"
        square
        color="primary"
      >
        <h5>Espace de création</h5>
      </q-chip>
      <CreationOptions />
      <q-separator inset class="q-mb-md" />
      <div class="bg-secondary">
        <router-view />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import CreationOptions from "src/components/EspaceCreation/CreationOptions";
export default {
  components: {
    CreationOptions
  }
};
</script>

<style></style>
