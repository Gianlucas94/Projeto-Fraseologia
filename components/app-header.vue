<template>
  <nav class="uk-navbar-container uk-margin-medium-bottom">
    <div class="uk-container uk-container-small">
      <div class="uk-navbar">
        <app-logo />
      </div>
    </div>
    <color-scheme-button />
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import ColorSchemeButton from '~/components/color-scheme-button.vue';

export default {
  components: {
    AppLogo,
    ColorSchemeButton,
  },
};
</script>
  
