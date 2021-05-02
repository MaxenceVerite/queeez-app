<template>
  <q-layout view="hhh lpR lFr">
    <q-header bordered class="bg-primary text-white" height-hint="50">
      <q-toolbar>
        <q-btn flat @click="left = !left" round dense icon="menu" />
        <q-toolbar-title align="center">
          <q-icon color="secondary" size="128px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 555.41 130.25">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path
                    d="M173.31,82.6c-2.43,14.11-11.84,18.47-19,18.47-6.83,0-12.6-5.71-10.63-18l6.68-42H130.51l-6.83,43.14c-3.8,23.51,3.64,37.27,22.16,37.27,7.13,0,19.12-4.53,23.67-15.11l-2.12,13.1h19.88l12.45-78.4H179.83Z"
                  />
                  <path
                    d="M364.78,103.08c-10.58,0-17.12-5.37-17.79-14.6h58.92a72.87,72.87,0,0,0,2-8.39c4.19-24-11.25-40-33.75-40a49.88,49.88,0,0,0-33.67,13.39c-6-8.47-16.3-13.39-28.78-13.39a49.89,49.89,0,0,0-33.67,13.39c-6-8.47-16.29-13.39-28.78-13.39a50,50,0,0,0-48.85,41.3c-4.19,24.17,10.41,41.13,34.58,41.13a53.87,53.87,0,0,0,33.91-12.27c6.11,7.73,16,12.27,28.54,12.27a53.87,53.87,0,0,0,33.91-12.27c6.11,7.73,16,12.27,28.54,12.27,13.77,0,28.37-5.88,37.61-15.78L386.77,93.85A33,33,0,0,1,364.78,103.08Zm6.55-44c9.9,0,16.45,5.88,15.61,15.11H349.5C353.7,63.63,362.26,59.1,371.33,59.1Zm-62.45,0c9.9,0,16.45,5.88,15.61,15.11H287.05C291.25,63.63,299.81,59.1,308.88,59.1Zm-62.45,0c9.9,0,16.45,5.88,15.61,15.11H224.61C228.8,63.63,237.36,59.1,246.43,59.1Zm15.44,34.75a33,33,0,0,1-22,9.23c-10.57,0-17.12-5.37-17.79-14.6h40.09a40.9,40.9,0,0,0,.32,6.13Zm62.45,0a33,33,0,0,1-22,9.23c-10.57,0-17.12-5.37-17.79-14.6h40.09a40.9,40.9,0,0,0,.32,6.13Z"
                  />
                  <polygon
                    points="440.96 99.06 487.13 57.93 490.15 41.14 421.99 41.14 418.46 61.62 454.39 61.62 408.73 102.92 405.88 119.54 555.41 119.7 440.96 99.06"
                  />
                  <path
                    d="M113.67,42.08C107.12,9.33,77.32-8.11,46.79,3.7A65.94,65.94,0,0,0,20,23.37L35.54,36.85A38.64,38.64,0,0,1,51.13,25.61c19.41-7.52,36.55,4.21,40.62,25a47.52,47.52,0,0,1-6.59,34.6L38.45,44.67,0,11.34,15,30.22,28.82,47.7l41,51.69A31.69,31.69,0,0,1,66.1,101c-19.42,7.52-36.34-4.11-40.41-24.86a48.29,48.29,0,0,1,1.48-24.08L12.74,33.85C4,49,.39,67.29,3.77,84.63c6.5,32.58,36,50.15,66.67,38.27a62.26,62.26,0,0,0,14.65-8.19l15.19,15.54h32.59L99.9,100C111.93,83.62,117.5,62.2,113.67,42.08Z"
                  />
                </g>
              </g>
            </svg>
          </q-icon>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      content-class="bg-secondary text-white"
      show-if-above
      v-model="left"
      side="left"
    >
      <q-list align="center" padding class="rounded-borders q-mt-md">
        <q-item clickable to="/" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="fas fa-list-alt" />
          </q-item-section>

          <q-item-section>Nos quizzs</q-item-section>
        </q-item>

        <q-item clickable to="/creation" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="fas fa-plus-circle" />
          </q-item-section>

          <q-item-section>Espace création</q-item-section>
        </q-item>

        <q-item clickable to="/ladder" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="fas fa-chalkboard-teacher" />
          </q-item-section>

          <q-item-section>Classement</q-item-section>
        </q-item>

        <q-item clickable to="/about" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="fas fa-question-circle" />
          </q-item-section>

          <q-item-section>A propos</q-item-section>
        </q-item>

        <q-item clickable to="/settings" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="fas fa-cogs" />
          </q-item-section>

          <q-item-section>Paramètres</q-item-section>
        </q-item>

        <q-item
          clickable
          to="/login"
          class="bg-primary text-white text-bold q-ma-md shadow-21"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-user" />
          </q-item-section>

          <q-item-section>Se connecter</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false
    };
  }
};
</script>
