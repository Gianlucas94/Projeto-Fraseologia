<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuHomologacao />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuHomologacao from '~/components/homologacao-menu.vue';

export default {
  layout: 'fraseologia-homologacao',
  components: {
    AppLogo,
    MenuHomologacao,
  },
};
</script>