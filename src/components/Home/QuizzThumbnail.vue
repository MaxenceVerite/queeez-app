<template>
  <q-card class="my-card shadow-1 bg-secondary">
    <q-img :src="quizzSummary.imgURL" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ quizzSummary.title }}
        </div>
        <div class="text-grey text-caption q-pt-md row no-wrap items-center">
          oui
        </div>
      </div>

      <q-rating
        icon="fas fa-chevron-right"
        :v-bind="quizzSummary.rating"
        max="5"
        size="16px"
        readonly
      />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ quizzSummary.desc }}
      </div>
    </q-card-section>

    <q-separator />

    <div class="full-width row  justify-center q-pa-sm">
      <div class="col justify-center  q-pa-sm">
        <q-icon class="" color="primary" size="md" name="far fa-heart" />

        <q-chip color="secondary" text-color="white" icon="fas fa-layer-group">
          {{ quizzSummary.difficulty }}
        </q-chip>
      </div>
      <div class="col">
        <q-card-actions align="right">
          <q-btn flat color="white bg-primary">
            Jouer
          </q-btn>
        </q-card-actions>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  props: {
    quizzSummary: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.quizzSummary.rating);
  }
};
</script>

<style></style>
