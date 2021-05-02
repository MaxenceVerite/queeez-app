<template>
  <q-page class="flex flex-center relative-position ">
    <q-scroll-area dark class="fit absolute bg-dark text-white q-pa-md">
      <q-chip
        class="q-mb-md q-pa-md text-secondary text-uppercase"
        square
        color="primary"
      >
        <h5>Ladder</h5>
      </q-chip>
      <GeneralLadder />
    </q-scroll-area>
  </q-page>
</template>

<script>
import GeneralLadder from "src/components/Ladder/GeneralLadder";
export default {
  components: {
    GeneralLadder
  }
};
</script>

<style></style>
