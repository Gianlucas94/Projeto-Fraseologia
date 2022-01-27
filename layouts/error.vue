<template>
  <div>
    <app-header />

    <div class="main uk-container uk-container-small uk-text-center">
      <div class="uk-card">
        <h2 v-if="error.statusCode === 404" class="uk-margin-medium-bottom">Página não encontrada</h2>
        <n-link to="/" class="uk-button uk-button-default">Retorne à página principal</n-link>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/app-header.vue';
import AppFooter from '~/components/app-footer.vue';

export default {
  props: ['error'],
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>