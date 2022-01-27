<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuTelecom />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuTelecom from '~/components/telecom-menu.vue';

export default {
  components: {
    AppLogo,
    MenuTelecom,
  },
};
</script>