<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuRemoto />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuRemoto from '~/components/remoto-menu.vue';

export default {
  components: {
    AppLogo,
    MenuRemoto,
  },
};
</script>