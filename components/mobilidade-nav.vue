<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuMobilidade />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuMobilidade from '~/components/mobilidade-menu.vue';

export default {
  layout: 'fraseologia-mobilidade',
  components: {
    AppLogo,
    MenuMobilidade,
  },
};
</script>