<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-small uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuAtendimento />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuAtendimento from '~/components/atendimento-menu.vue';

export default {
  components: {
    AppLogo,
    MenuAtendimento,
  },
};
</script>
