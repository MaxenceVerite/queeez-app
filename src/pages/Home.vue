<template>
  <q-page class="flex flex-center relative-position ">
    <q-scroll-area dark class="fit absolute bg-dark text-white q-pa-md">
      <QuizzesGalery />
    </q-scroll-area>
  </q-page>
</template>

<script>
import QuizzesGalery from "src/components/Home/QuizzesGallery";
export default {
  name: "Home",
  components: {
    QuizzesGalery
  }
};
</script>
