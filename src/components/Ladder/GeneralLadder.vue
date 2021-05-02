<template>
  <div class="q-pa-md">
    <q-table
      title="Classement général"
      :data="players"
      :columns="players"
      row-key="name"
      dark
      color="amber"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: []
    };
  }
};
</script>

<style></style>
